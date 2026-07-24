import React, { useEffect, useRef, useState, Suspense, memo } from 'react';
import Spline from '@splinetool/react-spline';

interface Background3DProps {
  splineSceneUrl?: string;
}

export const Background3D: React.FC<Background3DProps> = memo(({ splineSceneUrl }) => {
  const [splineFailed, setSplineFailed] = useState(false);
  const [, setIsSplineLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = 0;
    let mouseY = 0;
    let scrollY = window.scrollY;
    let isTabVisible = document.visibilityState === 'visible';

    const isLowEnd = 
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 40;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleVisibilityChange = () => {
      isTabVisible = document.visibilityState === 'visible';
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Dynamic node count based on device capabilities
    const nodesCount = isLowEnd ? 30 : 65;
    const connectionDist = isLowEnd ? 160 : 200;

    const nodes = Array.from({ length: nodesCount }, () => ({
      x: (Math.random() - 0.5) * width * 1.5,
      y: (Math.random() - 0.5) * height * 1.5,
      z: Math.random() * 1000 + 100,
      size: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      vz: (Math.random() - 0.5) * 0.4,
      pulse: Math.random() * Math.PI,
    }));

    const render = () => {
      if (!isTabVisible) {
        animationId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const fov = 400;
      const cx = width / 2 + mouseX * 0.6;
      const cy = height / 2 + mouseY * 0.6 - (scrollY * 0.1) % 100;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;
        node.pulse += 0.03;

        if (node.z <= 10) node.z = 1000;
        if (node.z > 1000) node.z = 10;

        const scale = fov / (fov + node.z);
        const px = node.x * scale + cx;
        const py = node.y * scale + cy;

        if (px > 0 && px < width && py > 0 && py < height) {
          const glow = Math.sin(node.pulse) * 0.3 + 0.7;
          const alpha = (1 - node.z / 1000) * glow * 0.8;

          for (let j = i + 1; j < nodes.length; j++) {
            const node2 = nodes[j];
            const dx = node.x - node2.x;
            const dy = node.y - node2.y;
            const dz = node.z - node2.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < connectionDist) {
              const scale2 = fov / (fov + node2.z);
              const px2 = node2.x * scale2 + cx;
              const py2 = node2.y * scale2 + cy;

              const lineAlpha = (1 - dist / connectionDist) * alpha * 0.35;
              ctx.strokeStyle = `rgba(0, 229, 255, ${lineAlpha})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(px2, py2);
              ctx.stroke();
            }
          }

          // Node Circle Point (Zero shadowBlur for extreme speed)
          ctx.fillStyle = `rgba(0, 229, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(px, py, node.size * scale * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen z-0 overflow-hidden pointer-events-none select-none">
      {/* High-Performance 3D Cyber Particle & Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Lazy-Loaded Spline 3D Scene Layer */}
      {splineSceneUrl && !splineFailed && (
        <div className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-out pointer-events-none">
          <Suspense fallback={null}>
            <Spline
              scene={splineSceneUrl}
              onLoad={() => setIsSplineLoaded(true)}
              onError={() => setSplineFailed(true)}
              className="w-full h-full pointer-events-none"
            />
          </Suspense>
        </div>
      )}

      {/* Futuristic Ambient Cyan Glow Gradient Overlay */}
      <div className="absolute inset-0 bg-radial-vignette bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]/90 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00E5FF]/5 rounded-full blur-[140px] pointer-events-none" />
    </div>
  );
});

Background3D.displayName = 'Background3D';
