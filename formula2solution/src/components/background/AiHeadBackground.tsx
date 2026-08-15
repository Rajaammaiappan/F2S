"use client";

import React, { useEffect, useState } from "react";

export default function AiHeadBackground() {
  const [mounted, setMounted] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 15;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  const N = 16; // Number of vertical strips

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Container with subtle mouse parallax */}
      <div
        className="absolute inset-[-5%] transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
        }}
      >
        {/* Animated Split-Strip AI Head Canvas Layer */}
        <div className="absolute inset-0 opacity-25 sm:opacity-30 mix-blend-screen">
          {Array.from({ length: N }).map((_, i) => {
            const w = 100 / N;
            const left = i * w;
            const dist = Math.abs(i - (N - 1) / 2) / ((N - 1) / 2); // 0 at center, 1 at edges
            const shift = (12 + dist * 38) * (i % 2 === 0 ? -1 : 1);
            const duration = 6 + dist * 2;
            const delay = i * 0.12;

            return (
              <div
                key={i}
                className="absolute top-[-10%] bottom-[-10%]"
                style={{
                  left: `${left}%`,
                  width: `${w + 0.2}%`, // Slight overlap to prevent seams
                  backgroundImage: "url('/ai-head.jpg')",
                  backgroundSize: `${N * 100}% 120%`,
                  backgroundPosition: `${(i / (N - 1)) * 100}% 50%`,
                  backgroundRepeat: "no-repeat",
                  animation: `stripFloat ${duration}s ease-in-out ${delay}s infinite alternate`,
                  filter: "contrast(1.15) brightness(0.95)",
                }}
              />
            );
          })}
        </div>

        {/* Cyber scanlines and glowing digital grids */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050816_85%)]" />
        
        {/* Top & bottom fading vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-transparent to-[#050816] opacity-60" />

        {/* Ambient Pulsing Tech Lights */}
        <div className="absolute top-[20%] right-[15%] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[45%] right-[25%] w-[300px] h-[300px] bg-blue-600/15 rounded-full blur-[100px]" />
      </div>

      {/* Embedded CSS for smooth stripFloat animation */}
      <style jsx global>{`
        @keyframes stripFloat {
          0% {
            transform: translateY(0px) scaleY(1);
          }
          50% {
            transform: translateY(calc(var(--shift, 18px) * 0.6)) scaleY(1.02);
          }
          100% {
            transform: translateY(calc(var(--shift, 18px) * -1)) scaleY(0.98);
          }
        }
      `}</style>
    </div>
  );
}
