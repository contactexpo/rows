import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

interface Props {
  onComplete: () => void;
}

const LoaderScreen = ({ onComplete }: Props) => {
  const [show, setShow] = useState(true);
  const [canEnter, setCanEnter] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanEnter(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    console.log("Enter clicked - starting gates and music");
    
    // First, try to call the music function directly from window
    if ((window as any).playWeddingMusic) {
      (window as any).playWeddingMusic();
    }
    
    // Also dispatch the event as a backup
    window.dispatchEvent(new CustomEvent("start-music"));
    
    // Animation
    setIsOpening(true);
    setTimeout(() => {
      setShow(false);
      onComplete();
    }, 1500);
  };

  const particles = useMemo(
    () => Array.from({ length: 30 }, (_, i) => ({
      id: i,
      delay: Math.random() * 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 3,
      duration: 4 + Math.random() * 6,
    })),
    []
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050302]"
        >
          {/* Left Gate */}
          <motion.div
            initial={{ x: 0 }}
            animate={isOpening ? { x: "-100%" } : { x: 0 }}
            transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
            className="absolute inset-y-0 left-0 w-1/2 z-[110] bg-[#1a0f0a] border-r border-gold/30 shadow-[10px_0_30px_rgba(0,0,0,0.5)] flex items-center justify-end"
          >
            <div className="mr-[-50px] opacity-20 text-[20rem] pointer-events-none">🏛️</div>
          </motion.div>

          {/* Right Gate */}
          <motion.div
            initial={{ x: 0 }}
            animate={isOpening ? { x: "100%" } : { x: 0 }}
            transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
            className="absolute inset-y-0 right-0 w-1/2 z-[110] bg-[#1a0f0a] border-l border-gold/30 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] flex items-center justify-start"
          >
            <div className="ml-[-50px] opacity-20 text-[20rem] pointer-events-none scale-x-[-1]">🏛️</div>
          </motion.div>

          {/* Background Particles */}
          <div className="absolute inset-0 z-0">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: -300,
                  x: Math.sin(p.id) * 100,
                }}
                transition={{ 
                  duration: p.duration, 
                  delay: p.delay, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
                className="absolute rounded-full bg-accent/30"
                style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
              />
            ))}
          </div>

          {/* Central Content */}
          <motion.div 
            animate={isOpening ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            className="relative z-[120] flex flex-col items-center gap-12 max-w-lg px-6"
          >
            {/* Shehnai */}
            <div className="flex items-center gap-24">
              <motion.div
                initial={{ x: -100, opacity: 0, rotate: -45 }}
                animate={{ x: 0, opacity: 1, rotate: -15 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-6xl drop-shadow-gold"
              >
                🪈
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0, rotate: 45 }}
                animate={{ x: 0, opacity: 1, rotate: 15 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-6xl drop-shadow-gold scale-x-[-1]"
              >
                🪈
              </motion.div>
            </div>

            {/* Om + Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center"
            >
              <motion.div
                className="font-heading text-accent text-3xl md:text-5xl tracking-widest mb-4 drop-shadow-gold whitespace-nowrap px-4 w-full flex justify-center items-center"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ॥ श्री गणेशाय नमः ॥
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="w-48 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full"
              />
            </motion.div>

            {/* Enter Button (Gate Trigger) */}
            <div className="h-32 flex items-center justify-center">
              <AnimatePresence>
                {canEnter && !isOpening && (
                  <motion.button
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEnter}
                    className="group relative px-12 py-6 glass-card rounded-2xl overflow-hidden border-2 border-accent/40 shadow-gold transition-all duration-300"
                  >
                    <motion.div
                      className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="relative z-10 flex flex-col items-center gap-6">
                      <span className="font-heading text-accent text-4xl md:text-6xl tracking-[0.25em] font-bold drop-shadow-gold">
                        शुभ प्रवेश
                      </span>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-4xl"
                      >
                        🏰
                      </motion.div>
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Loading Indicator */}
            {!canEnter && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-4"
              >
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-2 border-accent/20 border-t-accent rounded-full"
                />
                <p className="font-heading text-accent/60 text-sm tracking-widest animate-pulse">
                  तैयार हो रहा है...
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoaderScreen;
