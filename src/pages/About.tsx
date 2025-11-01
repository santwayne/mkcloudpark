import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import Certifications from "@/components/Certifications";
import CoverageMap from "@/components/CoverageMap";
import { useEffect, useState } from "react";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import AboutContent from "@/components/AboutContent";
import SafetyCompliance from "@/components/SafetyAll";

const About = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        setShowBanner(false);
        setIsScrolled(true);
      } else {
        setShowBanner(true);
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Fixed header with banner */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBanner isVisible={showBanner} />
        <Header isScrolled={isScrolled} />
      </div>

      {/* Spacer for fixed header */}
      <div className={`transition-all duration-300 ${showBanner ? "h-32 md:h-36" : "h-20"}`} />

      {/* About Page Content */}
      <main>
        <AboutContent />
      </main>
     
 
       <Team />
      <Footer />
    </div>
  );
};

export default About;

