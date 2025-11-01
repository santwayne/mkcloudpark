import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, MapPin, X } from "lucide-react";

const QuickActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end animate-fade-in">
        {isOpen && (
          <div className="flex flex-col gap-3 mb-2 animate-scale-in">
            <a href="tel:+14169008673" className="group">
              <div className="flex items-center gap-3 bg-accent text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-accent transition-all hover:scale-105">
                <Phone className="w-5 h-5" />
                <span className="font-bold text-sm hidden sm:inline">Call Now</span>
              </div>
            </a>
            
            <a href="/quote" className="group">
              <div className="flex items-center gap-3 bg-primary text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-primary transition-all hover:scale-105">
                <MessageSquare className="w-5 h-5" />
                <span className="font-bold text-sm hidden sm:inline">Get Quote</span>
              </div>
            </a>
            

          </div>
        )}
        
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="w-16 h-16 rounded-full shadow-2xl bg-gradient-to-r from-primary to-accent hover:scale-110 transition-all"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
        </Button>
      </div>
    </>
  );
};

export default QuickActions;
