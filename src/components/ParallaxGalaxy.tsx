"use client";

import { useEffect, useRef } from "react";

const OVERSCAN = 1.6; // >1 makes layers taller than the viewport to avoid bottom cut-off

function drawStars(
  canvas: HTMLCanvasElement,
  count: number,
  min = 0.5,
  max = 1.8,
  opacity = 0.9
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const w = Math.ceil(window.innerWidth * dpr);
  const h = Math.ceil(window.innerHeight * OVERSCAN * dpr); // taller than viewport

  canvas.width = w;
  canvas.height = h;
  canvas.style.width = "100%";
  canvas.style.height = `${OVERSCAN * 100}vh`; // reflect overscan in CSS

  ctx.clearRect(0, 0, w, h);
  for (let i = 0; i < count; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    const r = (Math.random() * (max - min) + min) * dpr * 0.5;
    const twinkle = 0.8 + Math.random() * 0.2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${opacity * twinkle})`;
    ctx.fill();
  }
}

export default function ParallaxGalaxy() {
  const smallRef = useRef<HTMLCanvasElement | null>(null);
  const bigRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const small = smallRef.current!;
    const big = bigRef.current!;

    // initial draw
    drawStars(small, 2000, 0.4, 1.2, 0.85);
    drawStars(big, 1000, 1.0, 2.6, 0.9);

    // redraw on resize (debounced)
    let resizeTimer: number | undefined;
    const onResize = () => {
      if (resizeTimer) window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        drawStars(small, 350, 0.4, 1.2, 0.85);
        drawStars(big, 120, 1.0, 2.6, 0.9);
      }, 150);
    };

    // parallax via CSS variable updated with rAF
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        document.documentElement.style.setProperty("--scrollY", `${y}px`);
        ticking = false;
      });
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep space base: subtle vertical gradient; make it overscanned too via background-size */}
      <div
        className="absolute inset-0"
        style={{
          height: `${OVERSCAN * 100}vh`,
          background:
            "radial-gradient(120% 80% at 50% -10%, #0b1022 0%, #050814 50%, #020410 100%)",
          transform: "translate3d(0, calc(var(--scrollY, 0px) * -0.10), 0)",
        }}
      />

      {/* Tiny stars layer (moves a bit) */}
      <canvas
        ref={smallRef}
        className="absolute left-0 right-0 top-0 opacity-90"
        style={{
          height: `${OVERSCAN * 100}vh`,
          transform: "translate3d(0, calc(var(--scrollY, 0px) * -0.20), 0)",
        }}
      />

      {/* Bigger/near stars layer (moves more) */}
      <canvas
        ref={bigRef}
        className="absolute left-0 right-0 top-0 opacity-95"
        style={{
          height: `${OVERSCAN * 100}vh`,
          transform: "translate3d(0, calc(var(--scrollY, 0px) * -0.35), 0)",
        }}
      />

      {/* Nebula glow layer (slowest) */}
      <div
        className="absolute left-0 right-0 top-0 opacity-60 mix-blend-screen pointer-events-none"
        style={{
          height: `${OVERSCAN * 100}vh`,
          transform: "translate3d(0, calc(var(--scrollY, 0px) * -0.12), 0)",
          background:
            "radial-gradient(60vmax 40vmax at 20% 25%, rgba(88,101,242,0.25), transparent 60%)," +
            "radial-gradient(50vmax 35vmax at 80% 10%, rgba(255,99,132,0.22), transparent 60%)," +
            "radial-gradient(45vmax 30vmax at 70% 75%, rgba(0,255,200,0.18), transparent 60%)," +
            "radial-gradient(55vmax 35vmax at 15% 80%, rgba(255,200,0,0.12), transparent 60%)",
        }}
      />

      {/* Soft glow overlay */}
      <div
        className="absolute left-0 right-0 top-0 pointer-events-none"
        style={{
          height: `${OVERSCAN * 100}vh`,
          background:
            "radial-gradient(120vmax 90vmax at 50% 120%, rgba(255,255,255,0.06), transparent 70%)",
        }}
      />
    </div>
  );
}
