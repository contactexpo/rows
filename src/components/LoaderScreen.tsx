import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

interface Props {
  onComplete: () => void;
}

const LoaderScreen = ({ onComplete }: Props) => {
  const [show, setShow] = useState(true);
  const [canEnter, setCanEnter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanEnter(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    // Attempt multiple ways to trigger music
    window.dispatchEvent(new CustomEvent("start-music"));
    if ((window as any).forcePlayMusic) {
      (window as any).forcePlayMusic();
    }
    
    setShow(false);
    setTimeout(onComplete, 800);
  };

  const particles = useMemo(
    () => Array.from({ length: 25 }, (_, i) => ({
      id: i,
      delay: Math.random() * 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 3,
      duration: 3 + Math.random() * 4,
    })),
    []
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "radial-gradient(circle at 50% 50%, #1a0f0a 0%, #050302 100%)" }}
        >
          {/* Animated gold particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: [0, 1, 0],
                y: -200,
                x: Math.sin(p.id) * 50,
              }}
              transition={{ 
                duration: p.duration, 
                delay: p.delay, 
                repeat: Infinity,
                ease: "linear" 
              }}
              className="absolute rounded-full bg-accent/40"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            />
          ))}

          {/* Central golden glow */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, hsl(38 75% 55% / 0.15) 0%, transparent 70%)" }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-12 max-w-lg px-6">
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

            {/* Enter Button */}
            <div className="h-24 flex items-center justify-center">
              <AnimatePresence>
                {canEnter && (
                  <motion.button
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEnter}
                    className="group relative px-10 py-4 glass-card rounded-full overflow-hidden border border-accent/40 shadow-gold transition-all duration-300"
                  >
                    <motion.div
                      className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10 font-heading text-accent text-xl md:text-2xl tracking-widest flex items-center gap-3">
                      निमंत्रण पत्र खोलें
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ✨
                      </motion.span>
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Diya */}
            {!canEnter && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex gap-4"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl"
                >
                  🪔
                </motion.span>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoaderScreen;
