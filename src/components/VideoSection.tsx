import { Play, Award, Shield, Truck, Headphones } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import img from "../assets/result/Modern Trucks.jpg"
import { Link } from "react-router-dom";

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { 
      icon: Award, 
      value: "98%", 
      label: "On-Time Guarantee",
      color: "primary",
      delay: 0
    },
    { 
      icon: Headphones, 
      value: "24/7", 
      label: "Live Support",
      color: "success",
      delay: 100
    },
    { 
      icon: Truck, 
      value: "200+", 
      label: "Modern Fleet",
      color: "accent",
      delay: 200
    },
    { 
      icon: Shield, 
      value: "$5M", 
      label: "Insurance Coverage",
      color: "primary",
      delay: 300
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">

      
      <div className="container mx-auto px-6 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Video/Image */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video border-4 border-primary/10 group">
              <img 
                src={img}
                alt="Cloud Park modern reefer fleet and logistics operations"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
            

              {/* Floating badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold text-primary">Industry Leading</span>
              </div>
            </div>
            
            {/* Stats badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-accent to-accent/80 text-white p-6 md:p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-black mb-1">5,000+</div>
              <div className="text-xs md:text-sm font-bold opacity-95">Monthly Shipments</div>
            </div>

          
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
                Excellence in Motion
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              World-class{" "}
              <span className="text-primary relative">
                operations
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 1 150 1 200 4" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
                </svg>
              </span>
              {" "}at your service
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              <span className="text-foreground font-bold">State-of-the-art facilities.</span> From our modern reefer fleet 
              to our experienced team, every detail is engineered for perfect delivery.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              GPS tracking, 24/7 dispatch, and real-time monitoring give you{" "}
              <span className="text-foreground font-bold">complete control</span> over every shipment.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const colorClasses = {
                  primary: "border-primary/30 hover:border-primary/60 hover:bg-primary/5",
                  success: "border-success/30 hover:border-success/60 hover:bg-success/5",
                  accent: "border-accent/30 hover:border-accent/60 hover:bg-accent/5"
                };
                
                const textColorClasses = {
                  primary: "text-primary",
                  success: "text-success",
                  accent: "text-accent"
                };

                return (
                  <div
                    key={index}
                    className={`bg-background rounded-2xl p-5 md:p-6 border-2 border-border transition-all duration-500 transform ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    } ${colorClasses[stat.color]} group cursor-pointer`}
                    style={{ transitionDelay: `${stat.delay + 400}ms` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg ${textColorClasses[stat.color]} bg-current/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-5 h-5 ${textColorClasses[stat.color]}`} />
                      </div>
                      <div className={`text-3xl md:text-4xl font-black ${textColorClasses[stat.color]} transform group-hover:scale-110 transition-transform duration-300`}>
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Link to="/contact">
              <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                <span>Experience the Difference</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;