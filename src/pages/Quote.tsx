import { useEffect, useState } from "react";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

const Quote = () => {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Fixed Header + Announcement Banner */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBanner isVisible={showBanner} />
        <Header isScrolled={isScrolled} />
      </div>

      {/* Spacer based on banner visibility */}
      <div
        className={`transition-all duration-300 ${
          showBanner ? "h-[136px]" : "h-[88px]"
        }`}
      />

      <main>
        <QuoteForm />
      </main>

      <Footer />
    </div>
  );
};

export default Quote;
