import { Shield, Zap, MapPin, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Shield,
      title: "Insured & Certified",
      desc: "Full cargo insurance and DOT certified fleet",
      stat: "100%",
      statLabel: "Coverage"
    },
    {
      icon: Zap,
      title: "Express Delivery",
      desc: "Guaranteed delivery times when you need it most",
      stat: "24/7",
      statLabel: "Available"
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      desc: "Coast-to-coast service across Canada & USA",
      stat: "2",
      statLabel: "Countries"
    },
    {
      icon: Award,
      title: "Expert Team",
      desc: "Dedicated logistics specialists for your success",
      stat: "10+",
      statLabel: "Years"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left Section */}
          <div className="order-2 lg:order-1">
            {/* Header badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-bold mb-6">
              <Award className="w-4 h-4" />
              WHY CLOUDPARK
            </div>

            {/* Main heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Trusted</span> Partner
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Industry-leading logistics solutions with proven results. We combine cutting-edge technology with dedicated expertise to keep your business moving forward.
            </p>

            {/* Key points */}
            <div className="space-y-4 mb-10">
              {["Real-time tracking", "24/7 customer support", "Nationwide coverage"].map((point, idx) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-foreground">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link to="/services">
              <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Explore Our Services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>

          {/* Right Section - Truck Image & Stats Grid */}
          <div className="order-1 lg:order-2">
            {/* Cloud Park Truck Image with gradient background */}
            <div className="mb-8  relative">
              {/* Subtle grid pattern overlay */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}></div>

              {/* Truck Image */}
              <div className="relative p-8 flex items-center justify-center">
                <img
                  src="/IMG_0431-DN3VUgzX.png"
                  alt="Cloud Park Logistics Fleet - Professional trucking services"
                  className="w-full h-auto object-contain max-h-[400px] drop-shadow-2xl"
                />
              </div>

              {/* Badge overlay */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg">
                <span className="text-xs font-black text-primary uppercase tracking-wider">Our Fleet</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                const isHovered = hoveredIndex === index;

                return (
                  <div
                    key={feature.title}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group"
                  >
                    <div className={`relative h-full rounded-2xl border-2 border-border/50 p-6 backdrop-blur-sm transition-all duration-500 cursor-pointer ${isHovered
                        ? 'bg-white/80 dark:bg-black/30 shadow-xl border-primary/40 scale-105'
                        : 'bg-white/60 dark:bg-black/20 hover:shadow-lg'
                      }`}>

                      {/* Icon */}
                      <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg transition-all duration-500 ${isHovered ? 'scale-110 shadow-2xl' : 'scale-100'
                        }`}>
                        <IconComponent className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>

                      {/* Stats section */}
                      <div className={`mb-3 transition-all duration-500 ${isHovered ? 'opacity-60 scale-90' : 'opacity-100'
                        }`}>
                        <div className="text-3xl font-black text-primary">{feature.stat}</div>
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{feature.statLabel}</div>
                      </div>

                      {/* Title */}
                      <h3 className="text-sm font-bold text-foreground mb-1 line-clamp-2">{feature.title}</h3>

                      {/* Description - appears on hover */}
                      <p className={`text-xs text-muted-foreground transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 h-0'
                        }`}>
                        {feature.desc}
                      </p>

                      {/* Hover indicator line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transition-all duration-500 rounded-b-2xl ${isHovered ? 'opacity-100' : 'opacity-0'
                        }`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;