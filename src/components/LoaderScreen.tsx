import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

interface Props {
  onComplete: () => void;
}

const LoaderScreen = ({ onComplete }: Props) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 500);
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const particles = useMemo(
    () => Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 1.5,
      x: 10 + Math.random() * 80,
      y: 20 + Math.random() * 60,
      size: 1 + Math.random() * 2,
    })),
    []
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "radial-gradient(ellipse at 50% 40%, hsl(25 30% 12%), hsl(20 15% 6%))" }}
        >
          {/* Animated gold particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0.4, 0],
                scale: [0, 1, 0.5, 0],
                y: [0, -30 - Math.random() * 50],
              }}
              transition={{ duration: 2.5, delay: p.delay, ease: "easeOut" }}
              className="absolute rounded-full bg-accent"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            />
          ))}

          {/* Central golden glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 0.5, scale: 1.8 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute w-80 h-80 rounded-full"
            style={{ background: "radial-gradient(circle, hsl(38 75% 55% / 0.2) 0%, transparent 70%)" }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Shehnai */}
            <div className="flex items-center gap-20">
              <motion.div
                initial={{ x: "-50vw", opacity: 0, rotate: -30 }}
                animate={{ x: 0, opacity: 1, rotate: -15 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-5xl"
              >
                🪈
              </motion.div>
              <motion.div
                initial={{ x: "50vw", opacity: 0, rotate: 30 }}
                animate={{ x: 0, opacity: 1, rotate: 15 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-5xl scale-x-[-1]"
              >
                🪈
              </motion.div>
            </div>

            {/* Om + Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="font-heading text-accent text-4xl md:text-5xl tracking-wide glow-gold"
              >
                ॥ श्री गणेशाय नमः ॥
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="w-32 h-0.5 gold-shimmer mx-auto mt-6 rounded-full"
              />

              {/* Diya */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="mt-6"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-4xl inline-block"
                >
                  🪔
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoaderScreen;
