import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in space-y-8 md:space-y-10">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent text-white rounded-full text-sm font-bold shadow-accent">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            50,000+ Shipments Completed • 24/7 Support Available
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            Ready to ship <span className="inline-block bg-white text-primary px-4 rounded-xl">smarter?</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-3xl mx-auto font-medium leading-relaxed">
            Join industry leaders who trust our <span className="font-bold">10+ years of excellence</span> with 
            150+ trucks and 200+ trailers serving Canada & USA.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6">
            <Link to="/quote" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg md:text-xl font-bold px-10 md:px-16 h-16 md:h-20 bg-accent text-white hover:bg-accent-hover shadow-accent hover:shadow-2xl transition-all hover:scale-105 rounded-full"
              >
                Get Instant Quote
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <a href="tel:+14169008673" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto text-lg md:text-xl font-bold px-10 md:px-16 h-16 md:h-20 border-3 border-white/40 text-black hover:bg-white/15 backdrop-blur-sm rounded-full"
              >
                <Phone className="mr-3 h-6 w-6" />
                Call: +1 (416) 900-8673
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm md:text-base font-semibold pt-6">
            <div className="flex items-center gap-2">
            
              <span>150+ Modern Trucks</span>
            </div>
            <div className="flex items-center gap-2">
         
              <span>Express Delivery Available</span>
            </div>
            <div className="flex items-center gap-2">
            
              <span>10+ Years Trusted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
