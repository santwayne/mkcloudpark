
import { useEffect, useState } from "react";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickActions from "@/components/QuickActions";
import IndustryDetail from "@/components/industrydetail/index";

const IndustryDetailPage = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

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
        <IndustryDetail />
      </main>
      
      <Footer />
      <QuickActions />
    </div>
  );
};

export default IndustryDetailPage;