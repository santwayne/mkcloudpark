import AnnouncementBanner from "@/components/AnnouncementBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Specialization from "@/components/Specialization";
import Industries from "@/components/Industries";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import CoverageMap from "@/components/CoverageMap";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import QuickActions from "@/components/QuickActions";
import { useEffect, useState } from "react";
import SafetyAll from "@/components/SafetyAll";

const Index = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Hide banner after scrolling 50px
      if (scrollPosition > 50) {
        setShowBanner(false);
        setIsScrolled(true);
      } else {
        setShowBanner(true);
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBanner isVisible={showBanner} />
        <Header isScrolled={isScrolled} />
      </div>

      {/* Dynamic spacer that adjusts based on banner visibility */}
      <div className={`transition-all duration-300 ${showBanner ? 'h-[136px]' : 'h-[88px]'}`} />

      <main>
        <Hero />
        <ValueProps />
        <Specialization />
        <Industries />
      
        <TrustedBy />
        <Services />
     
        <SafetyAll />
        <CoverageMap />
    
        <CTA />
      </main>
      <Footer />
      <QuickActions />
    </div>
  );
};

export default Index;