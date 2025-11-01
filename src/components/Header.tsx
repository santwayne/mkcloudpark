import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`lg:bg-background/98 bg-background backdrop-blur-lg z-50 border-b border-border/50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : 'shadow-sm'
    }`}>
      <div className="container mx-auto px-6 md:px-8 py-2">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logo} alt="Cloud Park Logistics - Temperature-Controlled Freight Experts" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/" className="text-foreground font-semibold hover:text-primary transition-colors">Home</Link>
            <a href="/services" className="text-foreground font-semibold hover:text-primary transition-colors">Services</a>
            <Link to="/about" className="text-foreground font-semibold hover:text-primary transition-colors">About</Link>
            <a href="/joinourteam" className="text-foreground font-semibold hover:text-primary transition-colors">Join Our Team</a>
            <Link to="/contact" className="text-foreground font-semibold hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+14169008673" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
              📞 +1 (416) 900-8673
            </a>
            <Link to="/quote">
              <Button className="bg-accent text-white hover:bg-accent-hover px-8 h-12 rounded-full font-bold shadow-accent hover:shadow-xl transition-all hover:scale-105">
                Get Instant Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-5">
              <Link to="/" className="text-foreground font-bold text-lg hover:text-primary transition-colors">Home</Link>
              <a href="/services" className="text-foreground font-bold text-lg hover:text-primary transition-colors">Services</a>
              <Link to="/about" className="text-foreground font-bold text-lg hover:text-primary transition-colors">About</Link>
              <a href="/joinourteam" className="text-foreground font-bold text-lg hover:text-primary transition-colors">Join our team</a>
              <Link to="/contact" className="text-foreground font-bold text-lg hover:text-primary transition-colors">Contact</Link>
              <a href="tel:+14169008673" className="text-primary font-bold text-lg">
                📞 +1 (416) 900-8673
              </a>
              <Link to="/quote" className="w-full mt-2">
                <Button className="w-full bg-accent text-white hover:bg-accent-hover h-14 rounded-full font-bold text-lg">
                  Get Instant Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;