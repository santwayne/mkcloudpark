import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Phone, Shield, ChevronDown, Sparkles, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-reefer-truck.jpg";

const Hero = () => {
  const [shipmentCount, setShipmentCount] = useState(48000);
  const [onTimeRate, setOnTimeRate] = useState(95);

  // Animated counters
  useEffect(() => {
    const shipmentInterval = setInterval(() => {
      setShipmentCount(prev => (prev >= 50000 ? 48000 : prev + 200));
    }, 100);

    const rateInterval = setInterval(() => {
      setOnTimeRate(prev => (prev >= 98 ? 95 : prev + 0.3));
    }, 100);

    return () => {
      clearInterval(shipmentInterval);
      clearInterval(rateInterval);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      {/* Enhanced Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cloud Park reefer truck delivering temperature-controlled freight" 
          className="w-full h-full object-cover scale-105 animate-[scale-in_1.5s_ease-out]"
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/90 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        
        {/* Animated gradient orbs for visual interest */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-slow" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-8 z-10 relative py-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating Stats Cards with Glassmorphism */}
          <div className="hidden md:flex justify-center gap-4 mb-8 animate-fade-in">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-success" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">{onTimeRate.toFixed(1)}%</div>
                  <div className="text-xs text-muted-foreground font-medium">On-Time Delivery</div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-2xl animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">{shipmentCount.toLocaleString()}+</div>
                  <div className="text-xs text-muted-foreground font-medium">Shipments Completed</div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">10+</div>
                  <div className="text-xs text-muted-foreground font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 animate-fade-in">
            {/* Premium Marketing Badge with Animation */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-success/20 to-success/10 text-success border border-success/30 rounded-full text-sm font-bold shadow-lg animate-bounce-subtle backdrop-blur-sm">
              <Zap className="w-4 h-4 animate-pulse" />
              50,000+ Shipments Completed • 10+ Years Excellence
            </div>
            
            {/* Hero Headline with Gradient Text */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.05] tracking-tight">
              Temperature-Controlled<br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                Freight Specialists
              </span>
            </h1>
            
            {/* Results-Focused Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              <span className="text-foreground font-bold">Reefer freight, warehousing & repair services.</span> Coast-to-coast coverage with 30+ trucks, 60+ trailers serving Canada & USA.
            </p>
            
            {/* Premium CTAs with Enhanced Design */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a href="tel:+14169008673" className="w-full sm:w-auto group order-1 sm:order-2">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-lg font-bold px-10 md:px-14 h-16 md:h-18 shadow-2xl shadow-accent/50 hover:shadow-accent transition-all hover:scale-105 bg-gradient-to-r from-accent to-accent/90"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call: (416) 900-8673
                </Button>
              </a>
              
              <Link to="/quote" className="w-full sm:w-auto group order-2 sm:order-1">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto text-lg font-bold px-10 md:px-14 h-16 md:h-18 border-2 backdrop-blur-sm bg-white/50 hover:bg-white/80 transition-all"
                >
                  Get Instant Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators with Icons */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm md:text-base text-muted-foreground mt-8">
              <div className="flex items-center gap-2 font-semibold">
                <Shield className="w-4 h-4 text-success" />
                24/7 Customer Support
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Zap className="w-4 h-4 text-accent" />
                Express Delivery Available
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Award className="w-4 h-4 text-primary" />
                10+ Years Trusted
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;