import { useState, useCallback } from "react";
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      {!loaded && <LoaderScreen onComplete={handleLoaded} />}
      <MusicPlayer />
      <HeroSection />
      <WeddingCardSection />
      <VenueSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
