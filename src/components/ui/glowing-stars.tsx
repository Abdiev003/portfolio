"use client";

import React, { useEffect, useRef, useState } from "react";

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className={`relative bg-card p-4 h-full rounded-xl border border-border ${className}`}
    >
      <div className="relative z-10">{children}</div>
      <Illustration mouseEnter={mouseEnter} />
    </div>
  );
};

export const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
  const stars = 108;
  const columns = 18;

  const [glowingStars, setGlowingStars] = useState<number[]>([]);

  const highlightedStars = useRef<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-48 p-1 w-full"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `1px`,
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;
        const staticDelay = starIdx * 0.01;
        return (
          <div
            key={`matrix-col-${starIdx}}`}
            className="relative flex items-center justify-center"
          >
            <Star
              isGlowing={mouseEnter ? true : isGlowing}
              delay={mouseEnter ? staticDelay : delay}
            />
            {mouseEnter && <Glow delay={staticDelay} />}
            <svg
              width="20"
              height="20"
              className="absolute inset-0 m-auto"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="1"
                stroke="none"
                strokeWidth="0"
                fill="currentColor"
                className="text-muted-foreground/20"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <svg
      width="20"
      height="20"
      className="absolute inset-0 m-auto"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10"
        cy="10"
        r={isGlowing ? "2" : "1"}
        stroke="none"
        strokeWidth="0"
        fill="currentColor"
        className={`${
          isGlowing ? "text-primary" : "text-muted-foreground/20"
        } transition-all duration-500`}
        style={{
          animationDelay: `${delay}s`,
        }}
      />
    </svg>
  );
};

const Glow = ({ delay }: { delay: number }) => {
  return (
    <div
      className="absolute inset-0 m-auto h-4 w-4 rounded-full bg-primary/30 blur-md animate-pulse"
      style={{
        animationDelay: `${delay}s`,
      }}
    />
  );
};
