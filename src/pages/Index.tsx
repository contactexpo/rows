import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoaderScreen from "@/components/LoaderScreen";
import HeroSection from "@/components/HeroSection";
import WeddingCardSection from "@/components/WeddingCardSection";
import VenueSection from "@/components/VenueSection";
import ClosingSection from "@/components/ClosingSection";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-accent/30">
      <AnimatePresence mode="wait">
        {!loaded && <LoaderScreen key="loader" onComplete={handleLoaded} />}
      </AnimatePresence>
      
      <MusicPlayer />
      
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
