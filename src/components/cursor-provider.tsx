"use client";

import { useState, useEffect } from "react";

import { AnimatedCursor } from "@/components/ui/cursor";
import { CursorTrail } from "@/components/ui/cursor-trail";
import { useCursorToggle } from "@/hooks/use-cursor-toggle";

export function CursorProvider() {
  const { isEnabled } = useCursorToggle();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (isEnabled) {
      document.body.style.cursor = "none";
      const style = document.createElement("style");
      style.innerHTML = `
        *, *::before, *::after {
          cursor: none !important;
        }
      `;
      style.id = "custom-cursor-style";
      document.head.appendChild(style);
    } else {
      document.body.style.cursor = "auto";
      const style = document.getElementById("custom-cursor-style");
      if (style) {
        style.remove();
      }
    }

    return () => {
      document.body.style.cursor = "auto";
      const style = document.getElementById("custom-cursor-style");
      if (style) {
        style.remove();
      }
    };
  }, [isEnabled, mounted]);

  if (!mounted || !isEnabled) return null;

  return (
    <>
      <CursorTrail />
      <AnimatedCursor />
    </>
  );
}
