"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CursorStore {
  isEnabled: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
}

export const useCursorToggle = create<CursorStore>()(
  persist(
    (set) => ({
      isEnabled: true, // Default enabled
      toggle: () => set((state) => ({ isEnabled: !state.isEnabled })),
      enable: () => set({ isEnabled: true }),
      disable: () => set({ isEnabled: false }),
    }),
    {
      name: "cursor-preference",
    }
  )
);

