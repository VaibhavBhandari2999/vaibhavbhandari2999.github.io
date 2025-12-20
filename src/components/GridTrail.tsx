"use client";

import React, { useEffect, useRef } from "react";

type GridTrailProps = {
  cellSize?: number;        // px per grid cell
  fadeMs?: number;          // how long a cell stays lit
  maxAlpha?: number;        // 0..1
  radius?: number;          // how many cells around cursor to affect
  background?: string;      // canvas background (set to transparent to avoid blocking scroll)
  color?: string;           // glow color
  className?: string;
};

export default function GridTrail({
  cellSize = 26,
  fadeMs = 700,
  maxAlpha = 0.35,
  radius = 2,
  background = "transparent",
  color = "#7c3aed",
  className = "",
}: GridTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;

    // Per-cell "last activated" timestamp
    let lastHit: Float32Array;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / cellSize);
      rows = Math.ceil(height / cellSize);

      lastHit = new Float32Array(cols * rows);
    };

    const index = (c: number, r: number) => r * cols + c;

    const activate = (x: number, y: number) => {
      const c0 = Math.floor(x / cellSize);
      const r0 = Math.floor(y / cellSize);
      const now = performance.now();

      for (let dr = -radius; dr <= radius; dr++) {
        for (let dc = -radius; dc <= radius; dc++) {
          const c = c0 + dc;
          const r = r0 + dr;
          if (c < 0 || r < 0 || c >= cols || r >= rows) continue;

          // Weight by distance (closer = stronger)
          const dist = Math.sqrt(dc * dc + dr * dr);
          if (dist > radius) continue;

          // Store a "more recent" hit
          lastHit[index(c, r)] = now - dist * 25;
        }
      }
    };

    const draw = () => {
      const now = performance.now();

      //background
      ctx.clearRect(0, 0, width, height);
      if (background !== "transparent") {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, width, height);
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const t = lastHit[index(c, r)];
          const age = now - t;

          //Base grid cell outline
          const x = c * cellSize;
          const y = r * cellSize;

          if (t > 0 && age >= 0 && age <= fadeMs) {
            const p = 1 - age / fadeMs; // 1 -> 0
            const a = Math.max(0, Math.min(maxAlpha, maxAlpha * p));

            ctx.fillStyle = hexToRgba(color, a);
            ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);

            ctx.strokeStyle = hexToRgba(color, Math.min(0.4, a + 0.1));
            ctx.lineWidth = 1;
            ctx.strokeRect(x + 0.5, y + 0.5, cellSize - 1, cellSize - 1);
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      activate(e.clientX - rect.left, e.clientY - rect.top);
    };

    const onLeave = () => {
      //trail fades naturally
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [cellSize, fadeMs, maxAlpha, radius, background, color]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "").trim();
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}
