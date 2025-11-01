import { Pill, Leaf, Cake, FlaskConical, Cpu, Package, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/Service/Healthcare & Pharmaceuticals.jpg"
import img2 from "../assets/Service/Fresh Produce.jpg"
import img3 from "../assets/Service/Bakery & Prepared Foods.jpg"
import img4 from "../assets/Service/Chemicals & Hazmat.jpg"
import img5 from "../assets/Service/Electronics & Technology.jpg"
import img6 from "../assets/Service/Industrial & Dry Van.jpg"

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const industries = [
    {
      title: "Healthcare & Pharmaceuticals",
      description: "FDA-compliant reefer logistics for pharmaceuticals, vaccines, and medical supplies with full chain-of-custody, 24/7 monitoring, and health-grade compliance",
      features: ["FDA & FSMA compliant", "24/7 monitoring", "Pharma-trained drivers"],
      color: "cyan",
      image: img1,
      badge: "REEFER SPECIALIST",
      slug: "healthcare-pharmaceuticals"
    },
    {
      title: "Fresh Produce",
      description: "Refrigerated farm-to-market logistics keeping produce fresh from growers to distribution centers across North America",
      features: ["33°F to 45°F control", "FSMA certified", "Farm-to-distribution"],
      color: "emerald",
      image: img2,
      badge: "REEFER SPECIALIST",
      slug: "fresh-produce"
    },
    {
      title: "Bakery & Prepared Foods",
      description: "Temperature-controlled logistics for bakeries, frozen meals, and perishable foods with multi-temp trailers and FSMA compliance",
      features: ["Multi-temp zones", "HACCP compliant", "Food-grade sanitized"],
      color: "orange",
      image: img3,
      badge: "REEFER SPECIALIST",
      slug: "bakery-prepared-foods"
    },
    {
      title: "Chemicals & Hazmat",
      description: "Safe, compliant, and certified hazmat logistics for chemicals and industrial materials with DOT, TDG, and OSHA certifications",
      features: ["DOT & TDG certified", "Safety protocols", "$5M insurance coverage"],
      color: "rose",
      image: img4,
      badge: "SPECIALIZED",
      slug: "chemicals-hazmat"
    },
    {
      title: "Electronics & Technology",
      description: "Secure, climate-controlled logistics for high-value electronics, servers, and tech equipment with vibration protection and GPS tracking",
      features: ["Climate-controlled", "Anti-vibration systems", "White-glove delivery"],
      color: "purple",
      image: img5,
      badge: "CLIMATE CONTROLLED",
      slug: "electronics-technology"
    },
    {
      title: "Industrial & Dry Van",
      description: "Reliable dry van logistics for industrial goods, packaging materials, automotive parts, and consumer products across North America",
      features: ["FTL & LTL options", "Cross-border expertise", "EDI-integrated tracking"],
      color: "slate",
      image: img6,
      badge: "DRY VAN",
      slug: "industrial-dry-van"
    },
  ];

  const colorClasses = {
    cyan: "from-cyan-500 to-blue-600",
    slate: "from-slate-400 to-slate-600",
    orange: "from-orange-500 to-red-600",
    purple: "from-purple-500 to-violet-600",
    emerald: "from-emerald-500 to-green-600",
    amber: "from-amber-500 to-orange-600",
    rose: "from-rose-500 to-pink-600"
  };

  const colorBorder = {
    cyan: "group-hover:border-cyan-500/50",
    slate: "group-hover:border-slate-500/50",
    orange: "group-hover:border-orange-500/50",
    purple: "group-hover:border-purple-500/50",
    emerald: "group-hover:border-emerald-500/50",
    amber: "group-hover:border-amber-500/50",
    rose: "group-hover:border-rose-500/50"
  };

  const colorShadow = {
    cyan: "group-hover:shadow-cyan-500/20",
    slate: "group-hover:shadow-slate-500/20",
    orange: "group-hover:shadow-orange-500/20",
    purple: "group-hover:shadow-purple-500/20",
    emerald: "group-hover:shadow-emerald-500/20",
    amber: "group-hover:shadow-amber-500/20",
    rose: "group-hover:shadow-rose-500/20"
  };

  const IndustryCard = ({ industry, index }) => {
    const IconComponent = industry.icon;
    const isHovered = hoveredIndex === index;

    const handleNavigate = () => {
      window.location.href = `/industries/${industry.slug}`;
    };

    return (
      <Link
        to={`/industries/${industry.slug}`}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        className="group h-full block"
      >
        <div
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={handleNavigate}
          className="group h-full cursor-pointer"
        >
          <div className={`relative h-full rounded-[2rem] overflow-hidden border-2 border-border/60 transition-all duration-500 ${colorBorder[industry.color]} ${colorShadow[industry.color]} hover:shadow-2xl`}>

            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <img
                src={industry.image}
                alt={`Cloud Park logistics solutions for ${industry.title}`}
                className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 blur-sm' : 'scale-100'}`}
              />
              {/* Dark gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-60'}`} />

              {/* Colored overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[industry.color]} transition-opacity duration-500 ${isHovered ? 'opacity-30' : 'opacity-0'}`} />
            </div>

            {/* Badge - Top Right */}
            <div className="absolute top-6 right-6 z-10">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-xs font-black rounded-full uppercase tracking-wider shadow-lg">
                {industry.badge}
              </span>
            </div>

            {/* Content container */}
            <div className="relative h-full p-8 md:p-10 flex flex-col">

              {/* Top accent line - animated */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses[industry.color]} transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'} rounded-t-2xl`} />

          

              {/* Content - pushes down on hover */}
              <div className={`flex-1 flex flex-col justify-between transition-all duration-500 ${isHovered ? 'translate-y-0' : ''}`}>

                {/* Top section - always visible */}
                <div>
                  <h3 className="text-3xl md:text-2xl font-black mb-3 text-white leading-tight">
                    {industry.title}
                  </h3>
                  <p className={`text-sm text-white/80 mb-4 leading-relaxed line-clamp-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-1'
                    }`}>
                    {industry.description}
                  </p>
                </div>

                {/* Features section - appears on hover */}
                <div>
                  {/* Divider line */}
                  <div className={`h-px bg-gradient-to-r ${colorClasses[industry.color]} mb-6 transition-all duration-500 ${isHovered ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 origin-left'
                    }`} />

                  {/* Features list */}
                  <div className={`space-y-3 mb-6 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}>
                    {industry.features.map((feature, idx) => (
                      <div key={feature} className="flex items-center gap-3" style={{ transitionDelay: isHovered ? `${idx * 50}ms` : '0ms' }}>
                        {/* Line segment */}
                        <div className="flex items-center gap-2">
                          <div className={`h-px transition-all duration-500 ${isHovered ? `w-3` : `w-0`
                            } bg-gradient-to-r ${colorClasses[industry.color]}`} />
                          <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isHovered ? `bg-white` : `bg-transparent`
                            }`} />
                        </div>
                        <span className="text-xs font-medium text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA - appears on hover */}
                  <div className={`flex items-center gap-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
                    }`}>
                    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Explore</span>
                    <ArrowRight className="w-4 h-4 text-white/80 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom accent bar */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses[industry.color]} transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
              } rounded-b-2xl`} />
          </div>
        </div>
      </Link>
    );
  };

  return (
    <section id="industries" className="py-24 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest">Industry Expertise</span>
            <div className="h-1 flex-1 max-w-xs bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            Specialized Logistics Solutions Tailored <span className="text-primary">for Every Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            From <span className="text-foreground font-bold">temperature-controlled pharmaceuticals and produce</span> to hazmat and dry van loads — built for reliability, compliance, and performance across North America.
          </p>
        </div>

        {/* Industries Grid - 2-2-2 layout */}
        <div className="space-y-8">
          {/* Row 1: 2 cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <IndustryCard industry={industries[0]} index={0} />
            <IndustryCard industry={industries[1]} index={1} />
          </div>

          {/* Row 2: 2 cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <IndustryCard industry={industries[2]} index={2} />
            <IndustryCard industry={industries[3]} index={3} />
          </div>

          {/* Row 3: 2 cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <IndustryCard industry={industries[4]} index={4} />
            <IndustryCard industry={industries[5]} index={5} />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-black mb-8 text-center">Why North America's Shippers Choose Cloud Park Logistics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "99.2%", label: "On-Time Delivery Rate" },
              { stat: "$5M", label: "Cargo & Spoilage Insurance" },
              { stat: "24/7", label: "EDI Integration & Visibility" },
              { stat: "CA–US", label: "Cross-Border Expertise" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">{item.stat}</div>
                <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link to="/quote">
            <button className="group inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Get a Quote Today
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Industries;