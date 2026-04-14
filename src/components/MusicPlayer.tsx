import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const tryPlay = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.4;
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
  }, []);

  useEffect(() => {
    const handleStartMusic = () => tryPlay();
    window.addEventListener("start-music", handleStartMusic);
    
    // Original fallback for any user interaction
    const handler = () => {
      tryPlay();
      document.removeEventListener("click", handler);
      document.removeEventListener("touchstart", handler);
      document.removeEventListener("scroll", handler);
    };
    document.addEventListener("click", handler, { passive: true });
    document.addEventListener("touchstart", handler, { passive: true });
    document.addEventListener("scroll", handler, { passive: true });
    
    return () => {
      window.removeEventListener("start-music", handleStartMusic);
      document.removeEventListener("click", handler);
      document.removeEventListener("touchstart", handler);
      document.removeEventListener("scroll", handler);
    };
  }, [tryPlay]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = 0.4;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto" src="/audio/wedding-song.mp4" />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 glass-card text-foreground rounded-full flex items-center justify-center shadow-gold hover:scale-110 active:scale-95 transition-all duration-300 border border-accent/40"
        aria-label={isPlaying ? "संगीत बंद करें" : "संगीत चालू करें"}
      >
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          <span className="text-2xl">{isPlaying ? "🎵" : "🔇"}</span>
          {isPlaying && (
            <motion.span
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-2 rounded-full border border-accent/30"
            />
          )}
        </motion.div>
      </button>
    </>
  );
};

export default MusicPlayer;
