import { Truck } from "lucide-react";
import SnowFlake from "../assets/make us/Temperature-Controlled Freight.png"
import Warehouse from "../assets/make us/delivery-service_9279526.png"
import Wrench from "../assets/make us/Truck & Trailer Repair.png"


const Specialization = () => {
  const specialties = [
    {
      img: SnowFlake,
      title: "Temperature-Controlled Freight",
      subtitle: "Our Core Expertise",
      features: [
        "Reefer trucks and trailers with latest technology",
        "Cooler & frozen cargo transport",
        "Real-time temperature monitoring",
        "Pharmaceutical & food-grade certified"
      ],
      gradient: "from-primary via-primary to-primary/70",
      badge: "PRIMARY SERVICE"
    },
    {
      img: Warehouse,
      title: "Warehousing Solutions",
      subtitle: "Flexible Storage Options",
      features: [
        "Temperature-controlled and dry storage",
        "Dry storage facilities",
        "Short & long-term leasing",
        "Strategic locations in Calgary & the GTA"
      ],
      gradient: "from-accent via-accent to-accent/70",
      badge: "STORAGE EXPERTS"
    },
    {
      img: Wrench,
      title: "Truck & Trailer Repair",
      subtitle: "Complete Maintenance Services",
      features: [
        "Tire changes & replacements",
        "Brake system repairs",
        "Refrigeration unit service",
        "Annual safety inspections"
      ],
      gradient: "from-primary via-primary to-primary/70",
      badge: "UNIQUE SERVICE"
    },
    {
      img: Wrench,
      title: "Last Mile Deliveries",
      subtitle: "Fast & Reliable Final Drop",
      features: [
        "Efficient urban and suburban delivery network",
        "GPS-tracked vehicles for real-time updates",
        "Flexible scheduling and route optimization",
        "Special handling for fragile and time-sensitive goods"
      ],
      gradient: "from-accent via-accent to-accent/70",
      badge: "EXPRESS SERVICE"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full text-xs font-bold mb-4">
            <Truck className="w-3 h-3 text-primary" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              OUR SPECIALIZATIONS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
            What Makes Us <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Different</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Three core services that set us apart in the logistics industry
          </p>
        </div>

        {/* Specialization Cards - 4 in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.title}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white/90 dark:bg-black/40 backdrop-blur-xl rounded-2xl border-2 border-border/50 hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${specialty.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`px-2 py-1 bg-gradient-to-r ${specialty.gradient} text-white text-[10px] font-black rounded-full shadow-md`}>
                    {specialty.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-5">
                  {/* Icon */}
                  <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${specialty.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <img src={specialty.img} alt={specialty.title} className="w-7 h-7 object-contain" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-black mb-1 text-foreground leading-tight">
                    {specialty.title}
                  </h3>
                  <p className="text-xs font-bold text-primary mb-4">{specialty.subtitle}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {specialty.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs font-medium text-muted-foreground">
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${specialty.gradient} mt-1.5 flex-shrink-0`} />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm md:text-base text-muted-foreground font-semibold mb-4">
            Need specialized logistics? We've got you covered.
          </p>
          <a href="tel:+14169008673">
            <button className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full shadow-xl hover:shadow-primary/50 transition-all hover:scale-105 text-sm">
              Talk to a Specialist →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Specialization;