import React, { useEffect, useRef, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, CheckCircle2, FastForward, Cpu } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const FLOATING_KEYWORDS = [
  "AI Engineer", "Machine Learning", "Generative AI", "Neural Networks",
  "Software Engineer", "Java", "Python", "React", "TypeScript",
  "Tailwind CSS", "Git", "LeetCode", "Algorithms", "Data Structures",
  "Sanket Tiwari", "B.Tech CSE", "Class of 2029", "{}", "</>", "=>"
];

const BOOT_COMMANDS = [
  "Initializing Portfolio Engine...",
  "Loading Developer Profile...",
  "Connecting Neural Interface...",
  "Loading Projects...",
  "Loading Skills...",
  "Loading Certifications...",
  "Preparing Interactive Experience...",
  "Portfolio Ready."
];

const QUOTES = [
  "\"Turning ideas into intelligent solutions.\"",
  "\"Learning never stops.\"",
  "\"Code. Create. Innovate.\"",
  "\"Artificial Intelligence begins with curiosity.\"",
  "\"Every expert was once a beginner.\""
];

export const LoadingScreen: React.FC<LoadingScreenProps> = memo(({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [bootIndex, setBootIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isWarping, setIsWarping] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const triggerTransition = () => {
    setIsWarping(true);
    setTimeout(() => {
      onComplete();
    }, 400);
  };

  // Fast, responsive loading counter
  useEffect(() => {
    const totalDuration = 1000; // 1 second fast load
    const intervalTime = 20;
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          triggerTransition();
          return 100;
        }
        return next;
      });
    }, intervalTime);

    const bootTimer = setInterval(() => {
      setBootIndex((prev) => Math.min(prev + 1, BOOT_COMMANDS.length - 1));
    }, 120);

    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    }, 1200);

    return () => {
      clearInterval(timer);
      clearInterval(bootTimer);
      clearInterval(quoteTimer);
    };
  }, []);

  // Optimized background canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2 };
    let scannerY = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const items = FLOATING_KEYWORDS.map((text) => ({
      text,
      x: (Math.random() - 0.5) * width * 1.2 + width / 2,
      y: (Math.random() - 0.5) * height * 1.2 + height / 2,
      z: Math.random() * 800 + 100,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 4 + 12,
      isCode: text.length <= 4 || text.includes('()') || text.includes('=>')
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      scannerY += 4;
      if (scannerY > height) scannerY = 0;

      ctx.strokeStyle = 'rgba(0, 229, 255, 0.25)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, scannerY);
      ctx.lineTo(width, scannerY);
      ctx.stroke();

      const fov = 400;

      items.forEach((item, index) => {
        item.x += item.vx;
        item.y += item.vy;

        if (item.x < -100) item.x = width + 100;
        if (item.x > width + 100) item.x = -100;
        if (item.y < -100) item.y = height + 100;
        if (item.y > height + 100) item.y = -100;

        const dx = mouse.x - item.x;
        const dy = mouse.y - item.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          item.x -= (dx / dist) * force * 3;
          item.y -= (dy / dist) * force * 3;
        }

        const scale = fov / (fov + item.z);
        const alpha = Math.max(0.1, (1 - item.z / 900) * 0.6);
        const scannerDist = Math.abs(item.y - scannerY);
        const isScanned = scannerDist < 40;

        for (let j = index + 1; j < items.length; j++) {
          const item2 = items[j];
          const dist2 = Math.hypot(item.x - item2.x, item.y - item2.y);
          if (dist2 < 120) {
            const lineAlpha = (1 - dist2 / 120) * 0.12;
            ctx.strokeStyle = `rgba(0, 229, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(item.x, item.y);
            ctx.lineTo(item2.x, item2.y);
            ctx.stroke();
          }
        }

        ctx.font = `${item.isCode ? '500' : '600'} ${item.size * scale}px ${
          item.isCode ? "'Fira Code', monospace" : "'Space Grotesk', sans-serif"
        }`;

        ctx.fillStyle = isScanned
          ? '#00E5FF'
          : item.isCode
          ? `rgba(0, 229, 255, ${alpha * 0.85})`
          : `rgba(255, 255, 255, ${alpha})`;

        ctx.fillText(item.text, item.x, item.y);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isWarping ? 0 : 1, scale: isWarping ? 1.05 : 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[10000] flex flex-col justify-between bg-[#050505] text-white p-6 overflow-hidden select-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-6xl mx-auto pt-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#0F0F0F] border border-[#00E5FF]/40 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
            <Cpu className="w-4 h-4 text-[#00E5FF] animate-pulse" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-white tracking-wider uppercase">SANKET AI OS v4.0</h2>
            <p className="text-[10px] font-mono text-[#00E5FF]">INITIALIZING DIGITAL ENVIRONMENT</p>
          </div>
        </div>

        <button
          onClick={triggerTransition}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 text-xs font-mono text-[#A5A5A5] hover:text-[#00E5FF] transition-all shadow-md active:scale-95"
        >
          <span>Skip Into Universe</span>
          <FastForward className="w-3.5 h-3.5 text-[#00E5FF]" />
        </button>
      </div>

      {/* Center Layout */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto space-y-6">
        <div className="relative flex items-center justify-center w-36 h-36">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00E5FF]/40 animate-spin-slow" />
          <div className="absolute inset-2 rounded-full border border-cyan-400/30 animate-[spin_8s_linear_infinite_reverse]" />
          <div className="absolute inset-6 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/60 shadow-[0_0_35px_rgba(0,229,255,0.6)] animate-pulse" />

          <div className="relative flex flex-col items-center justify-center">
            <span className="text-3xl font-extrabold font-mono text-white text-glow-cyan">
              {Math.round(progress)}%
            </span>
            <span className="text-[9px] font-mono text-[#00E5FF] tracking-widest uppercase">
              CORE BOOT
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,229,255,0.6)]"
          >
            Sanket Tiwari
          </motion.h1>
          <p className="text-xs sm:text-sm font-mono text-[#00E5FF] tracking-wider">
            AI Engineer • Software Developer • Generative AI Explorer
          </p>
        </div>

        <div className="h-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-xs font-mono text-zinc-400 italic"
            >
              {QUOTES[quoteIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Terminal Panel */}
      <div className="relative z-10 w-full max-w-2xl mx-auto bg-[#0F0F0F]/80 border border-white/10 rounded-2xl p-4 backdrop-blur-xl shadow-2xl space-y-2">
        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>TERMINAL BOOT SEQUENCE</span>
          </div>
          <span className="text-emerald-400 font-semibold">STATUS: ONLINE</span>
        </div>

        <div className="flex items-center justify-between font-mono text-xs text-[#00E5FF] pt-1">
          <span className="truncate">{BOOT_COMMANDS[bootIndex]}</span>
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
        </div>
      </div>
    </motion.div>
  );
});

LoadingScreen.displayName = 'LoadingScreen';
