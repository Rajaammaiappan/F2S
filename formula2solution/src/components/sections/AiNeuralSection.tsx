"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles, BrainCircuit, Activity, Cpu, Zap, ArrowRight } from "lucide-react";

export default function AiNeuralSection({ onOpenConsultation }: { onOpenConsultation?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const tpRef = useRef<HTMLDivElement | null>(null);
  const cfRef = useRef<HTMLDivElement | null>(null);
  const ltRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W: number, H: number, dpr: number;
    let t = 0;
    let raf: number;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      W = rect.width;
      H = rect.height || 340;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const layers = 4;
    const nodesPerLayer = [5, 7, 7, 5];
    let nodes: Array<{ x: number; y: number; layer: number; idx: number; pulse: number }> = [];

    const initNodes = () => {
      nodes = [];
      for (let l = 0; l < layers; l++) {
        const count = nodesPerLayer[l];
        const x = 55 + (l / (layers - 1)) * (W - 110);
        for (let n = 0; n < count; n++) {
          const y = H / 2 + (n - (count - 1) / 2) * 34;
          nodes.push({ x, y, layer: l, idx: n, pulse: 0 });
        }
      }
    };
    initNodes();

    interface Particle {
      sx: number;
      sy: number;
      dx: number;
      dy: number;
      progress: number;
      speed: number;
      alive: boolean;
      stage: number;
    }

    let particles: Particle[] = [];

    const spawnParticle = () => {
      const layer = Math.floor(Math.random() * (layers - 1));
      const srcs = nodes.filter((n) => n.layer === layer);
      const dsts = nodes.filter((n) => n.layer === layer + 1);
      if (!srcs.length || !dsts.length) return;
      const src = srcs[Math.floor(Math.random() * srcs.length)];
      const dst = dsts[Math.floor(Math.random() * dsts.length)];
      particles.push({
        sx: src.x,
        sy: src.y,
        dx: dst.x,
        dy: dst.y,
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
        alive: true,
        stage: layer,
      });
    };

    const colors = ["#7fb8ff", "#3ddc97", "#ffb547", "#ff2b4e"];

    let throughput = 1200;
    let confidence = 95;
    let latency = 8;

    const loop = () => {
      t++;
      ctx.clearRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = "#232a3b";
      ctx.globalAlpha = 0.2;
      ctx.lineWidth = 0.5;
      for (let x = 0; x < W; x += 28) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += 28) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // Base connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j];
          if (b.layer !== a.layer + 1) continue;
          const dx = b.x - a.x,
            dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 85) continue;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = "#232a3b";
          ctx.globalAlpha = 0.2;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Active pulse connections
      const activeStage = Math.floor((t / 180) % 4);
      const c = colors[activeStage];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j];
          if (b.layer !== a.layer + 1) continue;
          if (a.layer !== activeStage && a.layer !== activeStage - 1) continue;
          const dx = b.x - a.x,
            dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 85) continue;
          const pulse = (Math.sin(t * 0.003 + a.layer * 1.5) + 1) / 2;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = c;
          ctx.globalAlpha = 0.15 + pulse * 0.35;
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }
      }

      // Particles
      particles.forEach((p) => {
        if (!p.alive) return;
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.alive = false;
          return;
        }
        const x = p.sx + (p.dx - p.sx) * p.progress;
        const y = p.sy + (p.dy - p.sy) * p.progress;
        const partCol = colors[p.stage];

        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = partCol;
        ctx.globalAlpha = 1 - p.progress;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(x, y);
        const tx = x - (p.dx - p.sx) * 0.15;
        const ty = y - (p.dy - p.sy) * 0.15;
        ctx.lineTo(tx, ty);
        ctx.strokeStyle = partCol;
        ctx.globalAlpha = (1 - p.progress) * 0.4;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      particles = particles.filter((p) => p.alive);

      // Nodes
      nodes.forEach((n) => {
        const isActiveLayer = n.layer === activeStage;
        const r = isActiveLayer ? 5.5 : 3.5;
        const nodeCol = colors[n.layer];

        if (isActiveLayer) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, r + 6, 0, Math.PI * 2);
          ctx.fillStyle = nodeCol;
          ctx.globalAlpha = 0.1 + Math.sin(t * 0.005 + n.idx) * 0.05;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isActiveLayer ? nodeCol : "#828aa0";
        ctx.globalAlpha = isActiveLayer ? 1 : 0.35;
        ctx.fill();

        if (isActiveLayer) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, r + 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = nodeCol;
          ctx.globalAlpha = 0.5 + Math.sin(t * 0.008 + n.idx * 0.7) * 0.25;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Labels
      const labels = ["Ingest", "Analyze", "Decide", "Optimize"];
      for (let l = 0; l < layers; l++) {
        const x = 55 + (l / (layers - 1)) * (W - 110);
        const isActive = l === activeStage;
        ctx.font = isActive
          ? '600 12px "IBM Plex Sans", sans-serif'
          : '400 11px "IBM Plex Sans", sans-serif';
        ctx.fillStyle = isActive ? colors[l] : "#828aa0";
        ctx.textAlign = "center";
        ctx.globalAlpha = isActive ? 1 : 0.6;
        ctx.fillText(labels[l], x, H - 14);
      }

      // Telemetry update
      const targets = [
        { tp: 1247, cf: 94, lt: 12 },
        { tp: 2156, cf: 97, lt: 8 },
        { tp: 1893, cf: 99, lt: 5 },
        { tp: 2341, cf: 99, lt: 3 },
      ];
      const tgt = targets[activeStage];
      throughput += (tgt.tp - throughput) * 0.05;
      confidence += (tgt.cf - confidence) * 0.05;
      latency += (tgt.lt - latency) * 0.05;

      if (tpRef.current) tpRef.current.textContent = Math.round(throughput).toLocaleString();
      if (cfRef.current) cfRef.current.textContent = Math.round(confidence) + "%";
      if (ltRef.current) ltRef.current.textContent = Math.round(latency) + "ms";

      if (t % 6 === 0) spawnParticle();
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="ai-visuals" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#090D1A]/95 border-t border-white/10 overflow-hidden">
      {/* AI Image Split-Merge Animated Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30 mix-blend-screen" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => {
          const N = 14;
          const w = 100 / N;
          const left = i * w;
          const dist = Math.abs(i - (N - 1) / 2) / ((N - 1) / 2);
          const shift = (14 + dist * 46) * (i % 2 === 0 ? -1 : 1);
          const duration = 6.2 + dist * 1.6;
          const delay = i * 0.12;
          return (
            <div
              key={i}
              className="absolute top-[-8%] bottom-[-8%]"
              style={{
                left: `${left}%`,
                width: `${w + 0.2}%`,
                backgroundImage: "url('/ai-head.jpg')",
                backgroundSize: `${N * 100}% 116%`,
                backgroundPosition: `${(i / (N - 1)) * 100}% 50%`,
                backgroundRepeat: "no-repeat",
                animation: `stripFloat ${duration}s ease-in-out ${delay}s infinite alternate`,
                filter: "contrast(1.2) brightness(0.9)",
              }}
            />
          );
        })}
        {/* Subtle Horizontal Cyber Scanline */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-[12px] animate-pulse" />
      </div>

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[350px] bg-gradient-to-r from-blue-600/15 via-cyan-500/15 to-purple-600/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>AI-POWERED NEURAL ORCHESTRATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Neural Engines Running Your Processes. <br />
            <span className="gradient-text-glow text-glow-cyan">See the Intelligence at Work.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our automation systems don't just follow static scripts — they learn, adapt, and optimize. Watch how AI transforms raw enterprise data into intelligent action.
          </p>
        </div>

        {/* Dual Cards Grid: Live Neural Canvas + Intelligent Data Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Interactive Neural Network */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1220] border border-cyan-500/30 flex flex-col justify-between shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-mono text-cyan-300 uppercase font-semibold">
                    Neural Process Engine — Live Stream
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">4-Layer Deep Pipeline</span>
              </div>

              {/* Canvas Container */}
              <div className="relative h-[280px] sm:h-[320px] rounded-2xl bg-[#050816] border border-white/10 overflow-hidden mb-6">
                <canvas ref={canvasRef} className="w-full h-full block" />

                {/* Overlaid Telemetry Badges */}
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <div className="px-2.5 py-1 rounded-xl bg-surface/90 border border-white/10 text-right">
                    <span className="text-[9px] font-mono text-slate-400 uppercase block">Throughput</span>
                    <span ref={tpRef} className="text-xs font-bold font-mono text-cyan-400">1,247</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-xl bg-surface/90 border border-white/10 text-right">
                    <span className="text-[9px] font-mono text-slate-400 uppercase block">Confidence</span>
                    <span ref={cfRef} className="text-xs font-bold font-mono text-emerald-400">99%</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-xl bg-surface/90 border border-white/10 text-right">
                    <span className="text-[9px] font-mono text-slate-400 uppercase block">Latency</span>
                    <span ref={ltRef} className="text-xs font-bold font-mono text-red-400">3ms</span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white font-heading mb-1.5">
                Real-Time Neural Cognitive Inference
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Data pulses through a multi-layer neural network. Each node represents an autonomous decision point — anomaly detection, OCR classification, and predictive validation.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
              {["Pattern Recognition", "Anomaly Detection", "Predictive Routing", "Zero-Latency Buffer"].map((t, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Intelligent SVG Data Pipeline */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1220] border border-cyan-500/30 flex flex-col justify-between shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                  <span className="text-xs font-mono text-amber-300 uppercase font-semibold">
                    Automated Event-Driven Pipeline
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Deterministic SLAs</span>
              </div>

              {/* Pipeline Visual Container */}
              <div className="relative h-[280px] sm:h-[320px] rounded-2xl bg-[#050816] border border-white/10 overflow-hidden mb-6 p-4 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="pFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7fb8ff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3ddc97" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="pFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ffb547" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#ff2b4e" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>

                  {/* Stage Rectangles */}
                  <rect x="20" y="35" width="85" height="55" rx="8" fill="#141824" stroke="#32405c" strokeWidth="1" />
                  <text x="62" y="68" textAnchor="middle" fill="#c3c9d8" fontFamily="monospace" fontSize="10" fontWeight="bold">INGEST</text>

                  <rect x="160" y="35" width="85" height="55" rx="8" fill="#141824" stroke="#32405c" strokeWidth="1" />
                  <text x="202" y="68" textAnchor="middle" fill="#c3c9d8" fontFamily="monospace" fontSize="10" fontWeight="bold">ANALYZE</text>

                  <rect x="295" y="35" width="85" height="55" rx="8" fill="#141824" stroke="#32405c" strokeWidth="1" />
                  <text x="337" y="68" textAnchor="middle" fill="#c3c9d8" fontFamily="monospace" fontSize="10" fontWeight="bold">DECIDE</text>

                  {/* Connecting Animated Dashed Lines */}
                  <line x1="105" y1="62" x2="160" y2="62" stroke="url(#pFlow1)" strokeWidth="2.5" strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
                  </line>
                  <line x1="245" y1="62" x2="295" y2="62" stroke="url(#pFlow2)" strokeWidth="2.5" strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
                  </line>

                  {/* Middle Node: Optimize */}
                  <rect x="160" y="130" width="85" height="55" rx="8" fill="#141824" stroke="#22D3EE" strokeWidth="1.5" />
                  <text x="202" y="163" textAnchor="middle" fill="#22D3EE" fontFamily="monospace" fontSize="10" fontWeight="bold">OPTIMIZE</text>

                  <line x1="202" y1="90" x2="202" y2="130" stroke="#7fb8ff" strokeWidth="2" strokeDasharray="4 4" opacity="0.7">
                    <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="0.8s" repeatCount="indefinite" />
                  </line>

                  {/* Downstream Actions */}
                  <rect x="40" y="225" width="80" height="50" rx="8" fill="#141824" stroke="#3ddc97" strokeWidth="1" />
                  <text x="80" y="255" textAnchor="middle" fill="#3ddc97" fontFamily="monospace" fontSize="9" fontWeight="bold">AUTO REPORT</text>

                  <rect x="160" y="225" width="85" height="50" rx="8" fill="#141824" stroke="#ffb547" strokeWidth="1" />
                  <text x="202" y="255" textAnchor="middle" fill="#ffb547" fontFamily="monospace" fontSize="9" fontWeight="bold">SMART ALERT</text>

                  <rect x="280" y="225" width="85" height="50" rx="8" fill="#141824" stroke="#ff2b4e" strokeWidth="1" />
                  <text x="322" y="255" textAnchor="middle" fill="#ff2b4e" fontFamily="monospace" fontSize="9" fontWeight="bold">ESCALATE</text>

                  <line x1="202" y1="185" x2="80" y2="225" stroke="#3ddc97" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.2s" repeatCount="indefinite" />
                  </line>
                  <line x1="202" y1="185" x2="202" y2="225" stroke="#ffb547" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1s" repeatCount="indefinite" />
                  </line>
                  <line x1="202" y1="185" x2="322" y2="225" stroke="#ff2b4e" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.4s" repeatCount="indefinite" />
                  </line>
                </svg>
              </div>

              <h3 className="text-lg font-bold text-white font-heading mb-1.5">
                Intelligent Decision Routing & Auto-Action
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                After continuous validation, the system routes items to their optimal action — auto-compiling executive reports, dispatching bot workers, or alerting managers.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
              {["Rule Engine", "Auto-Escalation", "Audit Ledger", "Human-in-the-Loop"].map((t, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
