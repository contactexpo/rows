import { useState, useRef, useEffect, useCallback } from "react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const tryPlay = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.3;
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
  }, []);

  useEffect(() => {
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
      audioRef.current.volume = 0.3;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto" src="/audio/wedding.mp3" />
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 w-10 h-10 glass-card text-foreground rounded-full flex items-center justify-center shadow-gold hover:scale-110 transition-transform duration-200 border border-accent/30"
        aria-label={isPlaying ? "संगीत बंद करें" : "संगीत चालू करें"}
      >
        <span className="text-sm">{isPlaying ? "🔊" : "🔇"}</span>
      </button>
    </>
  );
};

export default MusicPlayer;
