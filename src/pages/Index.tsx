import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoaderScreen from "@/components/LoaderScreen";
import HeroSection from "@/components/HeroSection";
import WeddingCardSection from "@/components/WeddingCardSection";
import VenueSection from "@/components/VenueSection";
import ClosingSection from "@/components/ClosingSection";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [autoScroll, setAutoScroll] = useState(false);
  const scrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleLoaded = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    if (!autoScroll || !loaded) return;

    const scrollStep = () => {
      const currentScroll = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (currentScroll >= documentHeight - 10) {
        if (scrollIntervalRef.current) {
          clearInterval(scrollIntervalRef.current);
          scrollIntervalRef.current = null;
        }
        setAutoScroll(false);
        return;
      }

      window.scrollBy({ top: window.innerHeight * 0.4, behavior: "smooth" });
    };

    const interval = setInterval(scrollStep, 3500);
    scrollIntervalRef.current = interval;

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    };
  }, [autoScroll, loaded]);

  const toggleAutoScroll = () => {
    if (autoScroll) {
      setAutoScroll(false);
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    } else {
      setAutoScroll(true);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-accent/30">
      <AnimatePresence mode="wait">
        {!loaded && <LoaderScreen key="loader" onComplete={handleLoaded} />}
      </AnimatePresence>

      <MusicPlayer />

      {loaded && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleAutoScroll}
          className="fixed bottom-5 left-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 glass-card text-foreground shadow-gold transition-transform active:scale-90 md:bottom-6 md:left-6 md:h-16 md:w-16"
          aria-label={autoScroll ? "Auto Scroll बंद करें" : "Auto Scroll चालू करें"}
        >
          <motion.div
            animate={autoScroll ? { y: [0, -4, 0] } : { y: 0 }}
            transition={{ duration: autoScroll ? 1.5 : 0, repeat: autoScroll ? Infinity : 0 }}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-2xl md:text-3xl">{autoScroll ? "⏸️" : "▶️"}</span>
          </motion.div>
        </motion.button>
      )}

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <HeroSection />
        <WeddingCardSection />
        <VenueSection />
        <ClosingSection />
      </motion.main>
    </div>
  );
};

export default Index;
