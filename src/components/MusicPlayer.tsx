import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const tryPlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    console.log("Attempting to play audio...");
    audio.volume = 0.6;
    
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("SUCCESS: Audio is playing");
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("ERROR: Audio play failed", error);
          // If it fails, we try one more time on the next user interaction
          setIsPlaying(false);
        });
    }
  }, []);

  useEffect(() => {
    // Expose tryPlay to window so other components can call it directly
    (window as any).playWeddingMusic = () => {
      console.log("playWeddingMusic called from window");
      tryPlay();
    };

    const handleStartMusic = () => {
      console.log("start-music event caught");
      tryPlay();
    };
    
    window.addEventListener("start-music", handleStartMusic);
    
    // Last resort fallback: any click anywhere on the document
    const globalClickHandler = () => {
      console.log("Global click caught - attempting audio");
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
            className="fixed bottom-6 right-6 z-[60] w-12 h-12 md:w-16 md:h-16 glass-card text-foreground rounded-full flex items-center justify-center shadow-gold border border-accent/40 active:scale-90 transition-transform"
            aria-label={isPlaying ? "Stop Music" : "Play Music"}
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
