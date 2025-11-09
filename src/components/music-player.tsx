"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Play, Pause, Volume2, VolumeX, X, Loader2 } from "lucide-react";
import {
  useMusicPlayer,
  ambientTracks,
  type AmbientTrack,
} from "@/hooks/use-music-player";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function MusicPlayer() {
  const {
    isOpen,
    isPlaying,
    currentTrack,
    volume,
    toggleOpen,
    setIsPlaying,
    setCurrentTrack,
    setVolume,
  } = useMusicPlayer();

  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle audio playback
  useEffect(() => {
    if (!audioRef.current || !mounted) return;

    if (isPlaying && currentTrack) {
      setIsLoading(true);
      audioRef.current.src = currentTrack.url;
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
      audioRef.current
        .play()
        .then(() => setIsLoading(false))
        .catch((error) => {
          console.error("Audio playback failed:", error);
          setIsPlaying(false);
          setIsLoading(false);
        });
    } else {
      audioRef.current.pause();
      setIsLoading(false);
    }
  }, [isPlaying, currentTrack, mounted, setIsPlaying]);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleTrackSelect = (track: AmbientTrack) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Hidden audio element */}
      <audio ref={audioRef} />

      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={toggleOpen}
          size="icon"
          className="h-14 w-14 rounded-full shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-110"
          variant={isPlaying ? "default" : "outline"}
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Music className="h-5 w-5" />
          )}
        </Button>
      </motion.div>

      {/* Player Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleOpen}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-24 right-6 z-50 w-80 sm:w-96"
            >
              <Card className="border-muted shadow-2xl">
                <div className="p-6 space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Music className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Ambient Sounds</h3>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleOpen}
                      className="h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Current Track Info */}
                  {currentTrack && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{currentTrack.icon}</span>
                        <div>
                          <p className="text-sm font-medium">Now Playing</p>
                          <p className="text-xs text-muted-foreground">
                            {currentTrack.name}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="h-8 w-8"
                      >
                        {isLoading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : isPlaying ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                    </motion.div>
                  )}

                  {/* Track Selection */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      Choose a sound
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {ambientTracks.map((track) => (
                        <motion.button
                          key={track.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleTrackSelect(track)}
                          className={`p-3 rounded-lg border transition-all duration-200 ${
                            currentTrack?.id === track.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50 hover:bg-muted/50"
                          }`}
                        >
                          <div className="flex flex-col items-center gap-1">
                            <span className="text-2xl">{track.icon}</span>
                            <span className="text-xs font-medium text-center">
                              {track.name}
                            </span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Volume Control */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-muted-foreground">
                        Volume
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {Math.round(volume * 100)}%
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      {volume === 0 ? (
                        <VolumeX className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Volume2 className="h-4 w-4 text-muted-foreground" />
                      )}
                      <Slider
                        value={[volume]}
                        onValueChange={handleVolumeChange}
                        min={0}
                        max={1}
                        step={0.01}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <p className="text-xs text-center text-muted-foreground">
                    Background ambient sounds to enhance your browsing
                    experience
                  </p>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
