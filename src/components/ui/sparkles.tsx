"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Sparkles = ({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) => {
  const [particles, setParticles] = React.useState<any[]>([]);

  React.useEffect(() => {
    const createParticles = () => {
      const particleArray = [];
      const density = particleDensity || 100;
      for (let i = 0; i < density; i++) {
        particleArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * ((maxSize || 3) - (minSize || 1)) + (minSize || 1),
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        });
      }
      setParticles(particleArray);
    };

    createParticles();
  }, [particleDensity, minSize, maxSize]);

  return (
    <div
      className={cn("absolute inset-0", className)}
      style={{ background: background || "transparent" }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particleColor || "#FFF",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;

