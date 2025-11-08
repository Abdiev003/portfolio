"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beams = [
    {
      initialX: 10,
      translateX: 10,
      duration: 7,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 3,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: "h-6",
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 14,
      delay: 4,
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 2,
      className: "h-20",
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 4,
      repeatDelay: 2,
      className: "h-12",
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-6",
    },
  ];

  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
        className
      )}
    >
      <svg
        className="z-0 h-full w-full pointer-events-none absolute"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {beams.map((beam, idx) => (
            <motion.rect
              key={`beam-${idx}`}
              width="2"
              height="316"
              x={beam.initialX}
              y="0.5"
              rx="1"
              fill={`url(#gradient-${idx})`}
              fillOpacity="0.4"
              animate={{
                x: [beam.initialX, beam.translateX],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: beam.duration || 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: beam.delay || 0,
                repeatDelay: beam.repeatDelay || 0,
              }}
            />
          ))}
        </g>
        <defs>
          {beams.map((_, idx) => (
            <linearGradient
              key={`gradient-${idx}`}
              id={`gradient-${idx}`}
              x1="4.5"
              y1="-45"
              x2="4.5"
              y2="244"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" stopOpacity="0" />
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
};

// Framer Motion component
import { motion } from "framer-motion";

