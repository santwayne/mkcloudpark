import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logowhite.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-navy via-navy to-[hsl(220,50%,8%)] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <img src={logo} alt="Cloud Park Logistics - Temperature-Controlled Freight" className="h-18  w-auto  !py-2" />
            <p className="text-base opacity-95 leading-relaxed mb-6 font-medium">
              <span className="font-bold text-white">Modern freight solutions</span> with cutting-edge tracking and 24/7 support across North America.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black mb-6 text-xl">Quick Links</h3>
            <ul className="space-y-3 text-base">
              <li><a href="/services" className="opacity-90 hover:opacity-100 hover:text-primary transition-all font-medium">Services</a></li>
              <li><Link to="/about" className="opacity-90 hover:opacity-100 hover:text-primary transition-all font-medium">About Us</Link></li>
              <li><a href="/joinourteam" className="opacity-90 hover:opacity-100 hover:text-primary transition-all font-medium">Join Our Team</a></li>
              <li><Link to="/contact" className="opacity-90 hover:opacity-100 hover:text-primary transition-all font-medium">Contact</Link></li>
              <li><Link to="/quote" className="opacity-90 hover:opacity-100 hover:text-accent transition-all font-bold">Get Quote →</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-black mb-6 text-xl">Our Services</h3>
            <ul className="space-y-3 text-base">
              <li className="opacity-90 font-medium">✓ Full Truckload (FTL)</li>
              <li className="opacity-90 font-medium">✓ Less Than Truckload (LTL)</li>
              <li className="opacity-90 font-medium">✓ Temperature-Controlled</li>
              <li className="opacity-90 font-medium">✓ Cross-Border Logistics</li>
              <li className="opacity-90 font-medium">✓ 3PL Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-black mb-6 text-xl">Get In Touch</h3>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="opacity-95 font-medium">
                  <strong>Calgary Yard:</strong> 9050 Innovation Ave SE, Calgary, AB T3S 0A2<br />
                  <strong>GTA Yard:</strong> 7499 Auburn Road, Milton, ON, L9T 7V9
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <a href="tel:+14169008673" className="opacity-95 hover:text-accent transition-colors font-bold">+1 (416) 900-8673</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <a href="mailto:info@cloudpark.ca" className="opacity-95 hover:text-primary transition-colors font-medium">info@cloudpark.ca</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-90">
            <p className="font-semibold">&copy; 2025 Cloud Park Logistics. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇨🇦</span>
              <span className="font-semibold">Proudly serving Canada & USA</span>
              <span className="text-2xl">🇺🇸</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
