"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  id: number;
}

export const CursorTrail = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newParticle: Particle = {
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        opacity: 1,
        id: particleIdRef.current++,
      };

      setParticles((prev) => [...prev.slice(-10), newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Fade out particles
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, opacity: p.opacity - 0.05 }))
          .filter((p) => p.opacity > 0)
      );
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-9998">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/30 blur-sm"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            transition: "opacity 0.1s ease-out",
          }}
        />
      ))}
    </div>
  );
};
