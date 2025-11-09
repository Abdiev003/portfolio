import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AmbientTrack {
  id: string;
  name: string;
  url: string;
  icon: string;
}

interface MusicPlayerState {
  isOpen: boolean;
  isPlaying: boolean;
  currentTrack: AmbientTrack | null;
  volume: number;
  setIsOpen: (isOpen: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setCurrentTrack: (track: AmbientTrack | null) => void;
  setVolume: (volume: number) => void;
  toggleOpen: () => void;
  togglePlaying: () => void;
}

export const ambientTracks: AmbientTrack[] = [
  {
    id: "rain",
    name: "Rain Sounds",
    url: "https://assets.mixkit.co/active_storage/sfx/2393/2393-preview.mp3",
    icon: "🌧️",
  },
  {
    id: "ocean",
    name: "Ocean Waves",
    url: "https://assets.mixkit.co/active_storage/sfx/2390/2390-preview.mp3",
    icon: "🌊",
  },
  {
    id: "forest",
    name: "Forest Ambience",
    url: "https://assets.mixkit.co/active_storage/sfx/2459/2459-preview.mp3",
    icon: "🌲",
  },
  {
    id: "cafe",
    name: "Coffee Shop",
    url: "https://assets.mixkit.co/active_storage/sfx/2458/2458-preview.mp3",
    icon: "☕",
  },
  {
    id: "fire",
    name: "Fireplace",
    url: "https://assets.mixkit.co/active_storage/sfx/2392/2392-preview.mp3",
    icon: "🔥",
  },
  {
    id: "night",
    name: "Night Ambience",
    url: "https://assets.mixkit.co/active_storage/sfx/2460/2460-preview.mp3",
    icon: "🌙",
  },
];

export const useMusicPlayer = create<MusicPlayerState>()(
  persist(
    (set) => ({
      isOpen: false,
      isPlaying: false,
      currentTrack: null,
      volume: 0.5,
      setIsOpen: (isOpen) => set({ isOpen }),
      setIsPlaying: (isPlaying) => set({ isPlaying }),
      setCurrentTrack: (track) => set({ currentTrack: track }),
      setVolume: (volume) => set({ volume }),
      toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
      togglePlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
    }),
    {
      name: "music-player-storage",
      partialize: (state) => ({
        volume: state.volume,
        currentTrack: state.currentTrack,
      }),
    }
  )
);
