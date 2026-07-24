import React, { useEffect, useRef, memo } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  symbol: string;
  size: number;
  alpha: number;
  rotation: number;
  vRot: number;
  maxLife: number;
  life: number;
}

const CODE_SYMBOLS = [
  '{}', '<>', '()', '[]', ';', '.',
  'const', 'let', 'if', 'for', 'AI', '0101',
  '</>', '==', '=>', 'import', 'async'
];

export const CustomCursor: React.FC = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorGlowRef = useRef<HTMLDivElement | null>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const smoothPos = useRef({ x: -100, y: -100 });
  const isHoveredRef = useRef(false);
  const isMouseDownRef = useRef(false);

  useEffect(() => {
    // Touch / mobile detection - skip custom cursor entirely on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const MAX_PARTICLES = 15;
    let lastSpawnTime = 0;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      const now = performance.now();
      // Throttle particle creation (spawns at most every 40ms)
      if (now - lastSpawnTime > 40 && particles.length < MAX_PARTICLES) {
        lastSpawnTime = now;
        const symbol = CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.2 + 0.4;
        
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.3,
          symbol,
          size: Math.random() * 4 + 10,
          alpha: 1,
          rotation: (Math.random() - 0.5) * 0.4,
          vRot: (Math.random() - 0.5) * 0.04,
          maxLife: Math.random() * 20 + 20,
          life: 0,
        });
      }
    };

    const handleMouseDown = () => { isMouseDownRef.current = true; };
    const handleMouseUp = () => { isMouseDownRef.current = false; };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      isHoveredRef.current = !!(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive')
      );
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    // Animation Loop
    const render = () => {
      smoothPos.current.x += (mousePos.current.x - smoothPos.current.x) * 0.25;
      smoothPos.current.y += (mousePos.current.y - smoothPos.current.y) * 0.25;

      const isDown = isMouseDownRef.current;
      const isHovered = isHoveredRef.current;

      if (cursorRef.current && cursorGlowRef.current) {
        const scaleCore = isDown ? 0.7 : isHovered ? 1.8 : 1;
        const scaleGlow = isHovered ? 2.2 : 1;
        cursorRef.current.style.transform = `translate3d(${smoothPos.current.x}px, ${smoothPos.current.y}px, 0px) translate(-50%, -50%) scale(${scaleCore})`;
        cursorGlowRef.current.style.transform = `translate3d(${smoothPos.current.x}px, ${smoothPos.current.y}px, 0px) translate(-50%, -50%) scale(${scaleGlow})`;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;
        p.alpha = 1 - p.life / p.maxLife;

        if (p.life >= p.maxLife || p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `600 ${p.size}px 'Fira Code', monospace`;
        ctx.fillStyle = `rgba(0, 229, 255, ${p.alpha * 0.9})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
      />
      <div
        ref={cursorGlowRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#00E5FF]/40 bg-[#00E5FF]/10 pointer-events-none z-[9999] transition-transform duration-100 ease-out shadow-[0_0_15px_rgba(0,229,255,0.3)] backdrop-blur-[1px]"
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#00E5FF] pointer-events-none z-[9999] transition-transform duration-75 ease-out shadow-[0_0_10px_#00E5FF]"
      />
    </>
  );
});

CustomCursor.displayName = 'CustomCursor';
