import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const tryPlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.6;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Audio play failed", error);
          setIsPlaying(false);
        });
    }
  }, []);

  useEffect(() => {
    (window as any).playWeddingMusic = () => {
      tryPlay();
    };

    const handleStartMusic = () => {
      tryPlay();
    };

    window.addEventListener("start-music", handleStartMusic);

    const globalClickHandler = () => {
      tryPlay();
    };
    document.addEventListener("click", globalClickHandler, { once: true });

    return () => {
      window.removeEventListener("start-music", handleStartMusic);
      document.removeEventListener("click", globalClickHandler);
      delete (window as any).playWeddingMusic;
    };
  }, [tryPlay]);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering any parent click handlers
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      tryPlay();
    }
  };

  return (
    <>
      {/* Audio element with crossOrigin and explicit source */}
      <audio 
        ref={audioRef} 
        loop 
        preload="auto" 
        id="main-wedding-audio"
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/audio/wedding-song.mp3" type="audio/mpeg" />
        <source src="/audio/wedding.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <AnimatePresence>
        {isPlaying !== undefined && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={toggleMusic}
            className="fixed bottom-5 right-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 glass-card text-foreground shadow-gold transition-transform active:scale-90 md:bottom-6 md:right-6 md:h-16 md:w-16"
            aria-label={isPlaying ? "संगीत बंद करें" : "संगीत चालू करें"}
          >
            <motion.div
              animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="relative flex items-center justify-center"
            >
              <span className="text-2xl md:text-3xl">{isPlaying ? "🎵" : "🔇"}</span>
              {isPlaying && (
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full border-2 border-accent/30"
                />
              )}
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;
