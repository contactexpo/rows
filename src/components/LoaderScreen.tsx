import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

interface Props {
  onComplete: () => void;
}

const LoaderScreen = ({ onComplete }: Props) => {
  const [show, setShow] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    // Immediate audio trigger
    if ((window as any).playWeddingMusic) {
      (window as any).playWeddingMusic();
    }
    window.dispatchEvent(new CustomEvent("start-music"));
    
    setIsExiting(true);
    setTimeout(() => {
      setShow(false);
      onComplete();
    }, 1200);
  };

  const particles = useMemo(
    () => Array.from({ length: 40 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      duration: 10 + Math.random() * 20,
    })),
    []
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0a0604]"
          exit={{ opacity: 0 }}
        >
          {/* Elegant Background Particles */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.4, 0],
                  y: [-20, -100],
                }}
                transition={{ 
                  duration: p.duration, 
                  delay: p.delay, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
                className="absolute rounded-full bg-accent/20"
                style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
              />
            ))}
          </div>

          {/* Curtain Effect */}
          <motion.div
            initial={{ y: 0 }}
            animate={isExiting ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 1, ease: [0.645, 0.045, 0.355, 1] }}
            className="absolute inset-0 z-[110] bg-[#140a08] flex items-center justify-center border-b border-gold/20"
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--gold)/0.05)_0%,transparent_70%)]" />
            
            <motion.div 
              animate={isExiting ? { opacity: 0, scale: 0.9, y: -20 } : { opacity: 1, scale: 1, y: 0 }}
              className="relative z-[120] flex flex-col items-center gap-12 max-w-lg px-6"
            >
              {/* Ganesh Ji Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative"
              >
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -inset-8 bg-accent/10 rounded-full blur-2xl"
                />
                <span className="text-7xl drop-shadow-gold relative z-10">🕉️</span>
              </motion.div>

              {/* Main Text */}
              <div className="text-center space-y-5">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="font-heading text-sm text-accent/70 tracking-[0.18em] whitespace-nowrap"
                >
                  ॥ श्री गणेशाय नमः ॥
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="font-heading text-accent text-3xl sm:text-4xl md:text-6xl tracking-[0.16em] sm:tracking-[0.24em] font-bold whitespace-nowrap drop-shadow-gold"
                >
                  शुभ विवाह
                </motion.h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="w-32 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto"
                />
              </div>

              {/* Shubh Pravesh Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEnter}
                className="group relative overflow-hidden rounded-full border border-accent/30 px-12 py-5 shadow-gold transition-all duration-500 hover:border-accent/60 sm:px-16 sm:py-6"
              >
                <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
                <div className="relative z-10 flex items-center gap-3">
                  <motion.span
                    animate={{ opacity: [0.35, 0.8, 0.35], scale: [1, 1.15, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    className="h-2.5 w-2.5 rounded-full bg-accent/80 shadow-[0_0_12px_rgba(212,160,23,0.7)]"
                  />
                  <span className="font-heading text-accent text-xl font-semibold tracking-[0.18em] sm:text-2xl md:text-3xl">
                    शुभ प्रवेश
                  </span>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Bottom Curtain (Slightly delayed or mirrored) */}
          <motion.div
            initial={{ y: 0 }}
            animate={isExiting ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 1, ease: [0.645, 0.045, 0.355, 1] }}
            className="absolute inset-0 z-[105] bg-[#0a0604]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoaderScreen;
