"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
  pulseOffset: number;
}

interface DataPulse {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
}

export default function CinematicCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 180,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Color choices: cyan (#22D3EE), electric blue (#2563EB), subtle purple (#7C3AED)
    const colors = [
      "rgba(34, 211, 238, ", // cyan
      "rgba(37, 99, 235, ",  // blue
      "rgba(124, 58, 237, ", // purple
      "rgba(56, 189, 248, ", // sky blue
    ];

    let particles: Particle[] = [];
    let pulses: DataPulse[] = [];

    const initParticles = () => {
      particles = [];
      pulses = [];
      // Dynamic count based on screen width for maximum performance
      const particleCount = Math.min(Math.floor((width * height) / 16000), 75);

      for (let i = 0; i < particleCount; i++) {
        const baseRadius = Math.random() * 2 + 1;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: baseRadius,
          baseRadius,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    // Pulse generator
    let lastPulseTime = 0;

    let time = 0;

    const render = (currentTime: number) => {
      time += 0.015;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Create dynamic pulses between connected nodes
      if (currentTime - lastPulseTime > 1200 && particles.length > 2) {
        lastPulseTime = currentTime;
        const fromIndex = Math.floor(Math.random() * particles.length);
        // Find a nearby node
        let closestIndex = -1;
        let minDist = 160;
        for (let j = 0; j < particles.length; j++) {
          if (j === fromIndex) continue;
          const dx = particles[fromIndex].x - particles[j].x;
          const dy = particles[fromIndex].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < minDist) {
            minDist = dist;
            closestIndex = j;
          }
        }
        if (closestIndex !== -1) {
          pulses.push({
            fromIndex,
            toIndex: closestIndex,
            progress: 0,
            speed: 0.025,
          });
        }
      }

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on edges
        if (p.x < 0) {
          p.x = 0;
          p.vx *= -1;
        } else if (p.x > width) {
          p.x = width;
          p.vx *= -1;
        }
        if (p.y < 0) {
          p.y = 0;
          p.vy *= -1;
        } else if (p.y > height) {
          p.y = height;
          p.vy *= -1;
        }

        // Mouse interaction
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < mouse.radius) {
          const force = (1 - mDist / mouse.radius) * 1.5;
          p.x -= (mdx / mDist) * force;
          p.y -= (mdy / mDist) * force;
        }

        // Breathing glow
        const currentAlpha = p.alpha + Math.sin(time + p.pulseOffset) * 0.15;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.1, Math.min(1, currentAlpha))})`;
        ctx.shadowColor = "#22D3EE";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const lineAlpha = (1 - dist / 140) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw and advance data pulses
      for (let k = pulses.length - 1; k >= 0; k--) {
        const pulse = pulses[k];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(k, 1);
          continue;
        }

        const p1 = particles[pulse.fromIndex];
        const p2 = particles[pulse.toIndex];
        if (!p1 || !p2) continue;

        const pulseX = p1.x + (p2.x - p1.x) * pulse.progress;
        const pulseY = p1.y + (p2.y - p1.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#22D3EE";
        ctx.shadowColor = "#22D3EE";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background radial gradient glow spots */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none animate-pulse-slow delay-1000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none animate-pulse-slow delay-2000" />

      {/* Cyber Grid Layer */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60" />

      {/* Interactive Particle Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
