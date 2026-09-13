import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroVisualProps {
  mouseParallax?: { x: number; y: number };
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ mouseParallax = { x: 0, y: 0 } }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasCustomPortrait, setHasCustomPortrait] = useState(false);

  // Check if user has provided a custom portrait in public folder
  useEffect(() => {
    const img = new Image();
    img.src = '/portrait.jpg';
    img.onload = () => setHasCustomPortrait(true);
    img.onerror = () => {
      const pngImg = new Image();
      pngImg.src = '/portrait.png';
      pngImg.onload = () => setHasCustomPortrait(true);
      pngImg.onerror = () => setHasCustomPortrait(false);
    };
  }, []);

  // Generative 3D Neural Geometry & Abstract Monolith Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio || 800);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio || 800);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio || 800;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio || 800;
    };

    window.addEventListener('resize', handleResize);

    // Node particles representing distributed AI neural weights
    interface Node3D {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      radius: number;
      speed: number;
      phase: number;
    }

    const nodes: Node3D[] = [];
    const count = 75;
    const sphereRadius = Math.min(width, height) * 0.32;

    for (let i = 0; i < count; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = Math.sqrt(count * Math.PI) * theta;
      const x = sphereRadius * Math.sin(theta) * Math.cos(phi);
      const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
      const z = sphereRadius * Math.cos(theta);

      nodes.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        radius: Math.random() * 2 + 1.2,
        speed: 0.003 + Math.random() * 0.003,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth rotation with mouse influence
      angleY += 0.004 + mouseParallax.x * 0.002;
      angleX += 0.002 + mouseParallax.y * 0.002;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 420;

      const projectedPoints: { x: number; y: number; z: number; radius: number; alpha: number }[] = [];

      // Calculate 3D to 2D projections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // 3D rotation Y
        let x1 = node.baseX * cosY - node.baseZ * sinY;
        let z1 = node.baseZ * cosY + node.baseX * sinY;

        // 3D rotation X
        let y2 = node.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + node.baseY * sinX;

        // Perspective scale
        const scale = fov / (fov + z2 + 350);
        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;
        const alpha = Math.max(0.1, Math.min(0.9, (z2 + sphereRadius) / (2 * sphereRadius)));

        projectedPoints.push({
          x: projX,
          y: projY,
          z: z2,
          radius: node.radius * scale,
          alpha,
        });
      }

      // Draw connection lines between nearest nodes
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            const lineAlpha = (1 - dist / 85) * 0.18 * ((p1.alpha + p2.alpha) / 2);
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const p of projectedPoints) {
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.85})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseParallax]);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute inset-0 bg-radial-gradient from-white/[0.04] via-transparent to-transparent pointer-events-none" 
      />

      {/* If user provides their portrait, render it with high-end editorial treatment */}
      {hasCustomPortrait ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full h-full max-h-[85vh] flex items-center justify-center"
        >
          <img
            src="/portrait.jpg"
            alt="Abhinav Dewangan"
            className="w-full h-full object-cover grayscale contrast-125 brightness-90 filter"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/portrait.png';
            }}
          />
          {/* Depth vignette & gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-void" />
        </motion.div>
      ) : (
        /* Otherwise, render the cinematic Neural Monolith / 3D Lattice */
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full h-full flex items-center justify-center"
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full max-w-[650px] max-h-[650px] opacity-90"
          />

          {/* Central geometric focal halo */}
          <div className="absolute w-72 h-72 rounded-full border border-white/[0.06] animate-pulse-subtle pointer-events-none" />
          <div className="absolute w-96 h-96 rounded-full border border-white/[0.03] pointer-events-none" />

          {/* Editorial coordinates badge */}
          <div className="absolute bottom-6 right-6 font-mono text-[10px] tracking-widest text-silver-500 uppercase bg-charcoal/80 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
            <span>SYS.AI_LATTICE // 3D_NODE_MATRIX</span>
          </div>
        </motion.div>
      )}

      {/* Layer gradient blending */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-void/60 via-transparent to-void" />
    </div>
  );
};
