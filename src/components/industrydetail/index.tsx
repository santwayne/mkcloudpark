import { useParams, Link } from "react-router-dom";
import { Pill, Leaf, Cake, FlaskConical, Cpu, Package, CheckCircle, ArrowRight, Phone, Shield, Thermometer, Clock, FileCheck, Truck, Globe, Award, Users, TrendingUp } from "lucide-react";
import React from "react";
import img1 from "../../assets/Service/Healthcare & Pharmaceuticals.jpg"
import img2 from "../../assets/Service/Fresh Produce.jpg"
import img3 from "../../assets/Service/Bakery & Prepared Foods.jpg"
import img4 from "../../assets/Service/Chemicals & Hazmat.jpg"
import img5 from "../../assets/Service/Electronics & Technology.jpg"
import img6 from "../../assets/Service/Industrial & Dry Van.jpg"
import img1graphic from "../../assets/Service/subindustry/Healthcare & Pharmaceuticals.png"
import img2graphic from "../../assets/Service/subindustry/Fresh Produce.png"
import img3graphic from "../../assets/Service/subindustry/Bakery & Prepared Foods.png"
import img4graphic from "../../assets/Service/subindustry/Chemicals & Hazmat.png"
import img5graphic from "../../assets/Service/subindustry/Electronics & Technology.png"
import img6graphic from "../../assets/Service/subindustry/Industrial & Dry Van.png"

const IndustryDetail = () => {
  const { slug } = useParams();

  // Add animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-40px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
      }
      
      .animate-slide-in-left {
        animation: slideInLeft 0.8s ease-out forwards;
        opacity: 0;
      }
      
      .animate-scale-in {
        animation: scaleIn 0.6s ease-out forwards;
        opacity: 0;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const industriesData = {
    "healthcare-pharmaceuticals": {
      title: "Healthcare & Pharmaceuticals",
      subtitle: "Where Precision Meets Compliance",
      description: "FDA-compliant reefer logistics for pharmaceuticals, vaccines, and medical supplies with full chain-of-custody documentation.",
      badge: "REEFER SPECIALIST",
      color: "cyan",
      gradient: "from-cyan-500 to-blue-600",
      image: img1,
      imagegraphic: img1graphic,
      mission: "In healthcare logistics, precision isn't optional — it's life-saving. Cloud Park's pharma-certified reefer fleet ensures that medical products, vaccines, and laboratory materials are transported under strict temperature control with complete traceability. Every shipment receives clinical-grade handling because when it comes to healthcare, reliability is medicine too.",
      stats: [
        { label: "Temperature Accuracy", value: "±0.5°C" },
        { label: "Compliance Rate", value: "100%" },
        { label: "Delivery Success", value: "99.8%" }
      ],
      capabilities: [
        {
          icon: Shield,
          title: "FDA & Health Canada Compliance",
          description: "Full regulatory compliance across North American health authorities including FDA, FSMA, GDP requirements with complete documentation"
        },
        {
          icon: Clock,
          title: "24/7 Live Monitoring",
          description: "Real-time temperature, humidity, and geolocation tracking with instant alerts and automated reporting systems"
        },
        {
          icon: Thermometer,
          title: "Multi-Temperature Zones",
          description: "Flexible reefer configurations supporting multiple temperature ranges for mixed pharmaceutical loads"
        },
        {
          icon: FileCheck,
          title: "Chain-of-Custody Documentation",
          description: "Tamper-proof seals, electronic documentation, and complete audit trails for every shipment"
        },
        {
          icon: Truck,
          title: "Certified Pharma Drivers",
          description: "Background-checked, specially trained drivers with pharmaceutical handling certifications"
        },
        {
          icon: CheckCircle,
          title: "Expedited Critical Shipping",
          description: "Priority routing and dedicated lanes for clinical trials and time-sensitive medical supplies"
        }
      ],
      features: [
        "White-glove delivery for healthcare facilities",
        "Temperature data logging with automated alerts",
        "Backup power systems for continuous monitoring",
        "Dedicated pharmaceutical account managers",
        "Same-day and emergency delivery available",
        "Secure loading and unloading protocols",
        "Cold chain validation and qualification",
        "Disaster recovery and contingency planning"
      ],
      whyChoose: [
        "99.8% on-time delivery for critical healthcare shipments",
        "Complete temperature control from -20°C to +25°C",
        "FDA-inspected and approved transportation procedures",
        "Validated cold chain processes with full documentation"
      ]
    },
    "fresh-produce": {
      title: "Fresh Produce",
      subtitle: "From Field to Fork, Freshness Preserved",
      description: "Refrigerated farm-to-market logistics keeping produce fresh from harvest to distribution across North America.",
      badge: "REEFER SPECIALIST",
      color: "emerald",
      gradient: "from-emerald-500 to-green-600",
      image: img2,
      imagegraphic: img2graphic,
      mission: "Cloud Park's produce division is built on one promise: fresh in, fresh out. Whether it's leafy greens from California, berries from British Columbia, or citrus from Mexico, our temperature-controlled reefer fleet maintains the optimal climate from harvest to retail shelf. We protect your produce quality and your reputation with every mile.",
      stats: [
        { label: "Freshness Retention", value: "98%" },
        { label: "Temperature Variance", value: "±1°F" },
        { label: "Farm to Market", value: "24-48hrs" }
      ],
      capabilities: [
        {
          icon: Thermometer,
          title: "Precision Temperature Control",
          description: "Maintain optimal freshness from 33°F to 45°F throughout transit with continuous monitoring and adjustment"
        },
        {
          icon: Thermometer,
          title: "Humidity-Controlled Units",
          description: "Advanced reefer units with integrated humidity management to prevent moisture loss and wilting"
        },
        {
          icon: FileCheck,
          title: "FSMA & AIB Certified",
          description: "Full compliance with Food Safety Modernization Act and American Institute of Baking standards"
        },
        {
          icon: Clock,
          title: "24/7 Shipment Visibility",
          description: "Live GPS tracking, real-time ETA updates, and proactive communication throughout delivery"
        },
        {
          icon: Truck,
          title: "Rapid Farm-to-Distribution",
          description: "Expedited pickup and delivery schedules designed to maximize product freshness and shelf life"
        },
        {
          icon: Globe,
          title: "Cross-Border Expertise",
          description: "Seamless US-Canada-Mexico shipping with customs brokerage and agricultural documentation"
        }
      ],
      features: [
        "Pre-cooled trailers ready for immediate loading",
        "Dedicated produce lanes for consistent routing",
        "Real-time temperature alerts and monitoring",
        "FSMA-compliant sanitation between loads",
        "Ethylene-sensitive product handling",
        "Weekend and holiday delivery options",
        "Direct grower pickup services",
        "Retail distribution center expertise"
      ],
      whyChoose: [
        "Extended shelf life through optimal temperature control",
        "Reduced spoilage rates with humidity management",
        "Fast transit times maintaining peak freshness",
        "FSMA compliance protecting your supply chain"
      ]
    },
    "bakery-prepared-foods": {
      title: "Bakery & Prepared Foods",
      subtitle: "Consistency Baked Into Every Mile",
      description: "Temperature-controlled logistics for bakeries, frozen meals, and prepared foods with multi-zone trailers.",
      badge: "REEFER SPECIALIST",
      color: "orange",
      gradient: "from-orange-500 to-red-600",
      image: img3,
      imagegraphic: img3graphic,
      mission: "Every bite of your product represents hours of craftsmanship and care. Cloud Park ensures that quality never melts away. From artisan frozen pastries to fresh-baked goods and prepared meals, our multi-temperature reefer systems preserve product integrity, texture, and flavor from bakery to retailer. We deliver perfection, one temperature-controlled route at a time.",
      stats: [
        { label: "Product Integrity", value: "99.5%" },
        { label: "Multi-Temp Loads", value: "3 Zones" },
        { label: "Delivery Windows", value: "2-Hour" }
      ],
      capabilities: [
        {
          icon: Thermometer,
          title: "Pre-Cooled Fleet",
          description: "Trailers pre-cooled to exact specifications before loading, ready for both frozen and refrigerated baked goods"
        },
        {
          icon: Shield,
          title: "FSMA, HACCP & GFSI Compliant",
          description: "Complete food safety handling protocols meeting all industry certifications and standards"
        },
        {
          icon: Thermometer,
          title: "Multi-Temperature Zones",
          description: "Flexible temperature zones in single trailer for frozen (-10°F), refrigerated (35°F), and ambient products"
        },
        {
          icon: CheckCircle,
          title: "Food-Grade Sanitized",
          description: "Every trailer thoroughly sanitized to food-grade standards with documented cleaning procedures"
        },
        {
          icon: Truck,
          title: "Fast Retail Delivery",
          description: "Rapid delivery networks to grocery chains, restaurants, and food service distributors"
        },
        {
          icon: FileCheck,
          title: "Digital Temperature Reports",
          description: "Automated load integrity verification with comprehensive temperature logs for every shipment"
        }
      ],
      features: [
        "Flexible recurring schedules for daily deliveries",
        "Blast freezer compatibility for flash-frozen items",
        "Multi-stop delivery route optimization",
        "Real-time inventory coordination with retailers",
        "Specialized food-grade equipment fleet",
        "24/7 emergency dispatch for urgent orders",
        "Allergen segregation protocols",
        "Direct store delivery (DSD) services"
      ],
      whyChoose: [
        "Preserve taste, texture, and quality in transit",
        "Multi-temp capability for mixed product loads",
        "Flexible scheduling for high-frequency shipping",
        "Food safety certified fleet and drivers"
      ]
    },
    "chemicals-hazmat": {
      title: "Chemicals & Hazmat",
      subtitle: "Safety Engineered Into Every Mile",
      description: "Certified hazmat logistics for chemicals and industrial materials with DOT, TDG compliance and safety protocols.",
      badge: "SPECIALIZED",
      color: "rose",
      gradient: "from-rose-500 to-pink-600",
      image: img4,
      imagegraphic: img4graphic,
      mission: "When transporting chemicals and hazardous materials, one mistake is too many. Cloud Park's Hazmat-certified operations are driven by a safety-first culture, precision routing, and verified regulatory compliance. Our specialized team handles every shipment with the expertise and care it demands, because safety isn't just our priority — it's our foundation.",
      stats: [
        { label: "Safety Record", value: "100%" },
        { label: "Driver Certification", value: "DOT/TDG" },
        { label: "Insurance Coverage", value: "$5M" }
      ],
      capabilities: [
        {
          icon: Shield,
          title: "DOT, TDG, OSHA & WHMIS Compliant",
          description: "Full regulatory compliance for hazardous material transport across US and Canada with current certifications"
        },
        {
          icon: Truck,
          title: "Certified Hazmat Drivers",
          description: "Specially trained drivers with hazmat endorsements, ongoing safety education, and emergency response training"
        },
        {
          icon: Shield,
          title: "Specialized Containment",
          description: "Purpose-built trailers with spill prevention systems, secondary containment, and leak detection"
        },
        {
          icon: FileCheck,
          title: "Electronic Documentation",
          description: "Digital manifests, safety data sheets, emergency response guides, and complete chain-of-custody"
        },
        {
          icon: CheckCircle,
          title: "Risk Management Protocols",
          description: "Comprehensive incident prevention, emergency response plans, and 24/7 safety monitoring"
        },
        {
          icon: Shield,
          title: "$5M Liability Coverage",
          description: "Extensive cargo and environmental liability insurance protecting your shipments and operations"
        }
      ],
      features: [
        "Segregated storage for incompatible materials",
        "24/7 emergency response team on standby",
        "Proper placarding and labeling compliance",
        "Route optimization for hazmat restrictions",
        "Pre-trip safety inspections documented",
        "Real-time hazmat tracking and geofencing",
        "Spill response kits on every vehicle",
        "Environmental compliance documentation"
      ],
      whyChoose: [
        "Zero safety incidents in hazmat operations",
        "Comprehensive compliance across all jurisdictions",
        "Specialized equipment for chemical transport",
        "Expert handling of Class 1-9 hazardous materials"
      ]
    },
    "electronics-technology": {
      title: "Electronics & Technology",
      subtitle: "Smart Logistics for Smart Devices",
      description: "Climate-controlled logistics for electronics and technology equipment with vibration protection and security.",
      badge: "CLIMATE CONTROLLED",
      color: "purple",
      gradient: "from-purple-500 to-violet-600",
      image: img5,
      imagegraphic: img5graphic,
      mission: "For technology products, even minor environmental variations can mean thousands in losses. Cloud Park provides secure, climate-stable transport for sensitive electronics, backed by real-time visibility and precision handling. From consumer devices to enterprise servers, we protect your high-value technology with the care and expertise it demands — because your innovation deserves nothing less.",
      stats: [
        { label: "Damage Rate", value: "<0.1%" },
        { label: "Climate Control", value: "±2°F" },
        { label: "Security Level", value: "24/7" }
      ],
      capabilities: [
        {
          icon: Thermometer,
          title: "Climate-Controlled Transport",
          description: "Precise temperature (65-75°F) and humidity (40-60%) management protecting sensitive electronic components"
        },
        {
          icon: Shield,
          title: "Anti-Vibration Systems",
          description: "Air-ride suspension and shock-dampened loading systems preventing damage to delicate electronics"
        },
        {
          icon: Globe,
          title: "GPS & Geofencing Security",
          description: "Real-time location monitoring with security alerts, geofencing, and route deviation notifications"
        },
        {
          icon: FileCheck,
          title: "Digital POD & Reporting",
          description: "Electronic proof-of-delivery with photo documentation and automated compliance reporting"
        },
        {
          icon: CheckCircle,
          title: "Packaging Consultation",
          description: "Expert guidance on protective packaging, static protection, and optimal shipping configurations"
        },
        {
          icon: Truck,
          title: "White-Glove Delivery",
          description: "Premium handling service for corporate campuses, data centers, and high-security facilities"
        }
      ],
      features: [
        "Time-critical expedited for product launches",
        "High-value cargo insurance options available",
        "Secure warehouse staging and cross-docking",
        "Tech-certified handling and loading teams",
        "Inside delivery and installation coordination",
        "Electronic waste disposal compliance",
        "Static-free handling environments",
        "Customs brokerage for tech imports"
      ],
      whyChoose: [
        "Near-zero damage rates on electronic shipments",
        "Climate-controlled protection 24/7",
        "Real-time visibility and security tracking",
        "Specialized handling for high-value tech"
      ]
    },
    "industrial-dry-van": {
      title: "Industrial & Dry Van",
      subtitle: "Powering the Industrial Supply Chain",
      description: "Reliable dry van logistics for industrial goods, automotive parts, and consumer products across North America.",
      badge: "DRY VAN",
      color: "slate",
      gradient: "from-slate-500 to-slate-700",
      image: img6,
      imagegraphic: img6graphic,
      mission: "From manufacturing plants to retail distribution centers, Cloud Park's industrial division keeps North America's economy moving. We handle high-volume, non-perishable freight with speed, reliability, and precision — built for industries that demand consistency above all. Whether it's automotive parts, consumer goods, or industrial materials, we connect supply chains with power and precision.",
      stats: [
        { label: "On-Time Rate", value: "99.2%" },
        { label: "Fleet Size", value: "500+" },
        { label: "Cross-Border", value: "Daily" }
      ],
      capabilities: [
        {
          icon: Truck,
          title: "FTL & LTL Flexibility",
          description: "Full truckload and less-than-truckload options with flexible capacity for any shipping volume"
        },
        {
          icon: CheckCircle,
          title: "Dedicated Contract Lanes",
          description: "Consistent routing and guaranteed capacity for regular shippers with contract agreements"
        },
        {
          icon: Globe,
          title: "Cross-Border Expertise",
          description: "Seamless US-Canada-Mexico shipping with customs brokerage and trade compliance services"
        },
        {
          icon: FileCheck,
          title: "EDI-Integrated Tracking",
          description: "Real-time shipment visibility with EDI integration for automated status updates and reporting"
        },
        {
          icon: Package,
          title: "Flexible Load Handling",
          description: "Palletized, crated, floor-loaded, or bulk cargo management with specialized equipment"
        },
        {
          icon: Clock,
          title: "JIT Delivery Programs",
          description: "Just-in-time delivery services with drop trailer programs supporting lean manufacturing"
        }
      ],
      features: [
        "GPS-tracked, clean, and sealed trailers",
        "Automotive and manufacturing expertise",
        "Consumer goods and retail distribution",
        "Packaging materials and supplies transport",
        "Dock-to-dock expedited services",
        "Scalable capacity for seasonal peaks",
        "Pool distribution and consolidation",
        "Warehouse and transloading services"
      ],
      whyChoose: [
        "99.2% on-time delivery for industrial freight",
        "Extensive network across North America",
        "Dedicated account management and support",
        "Flexible capacity for any volume requirement"
      ]
    }
  };

  const industry = industriesData[slug] || industriesData["healthcare-pharmaceuticals"];
  const IconComponent = industry.icon;

  return (
    <div className="bg-white">
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, rgb(14, 165, 233), rgb(37, 99, 235));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-[70vh] sm:min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={industry.image}
            alt={industry.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl">
            {/* Badge */}
            <div className="animate-fade-in-up mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-xs sm:text-sm font-bold border border-white/20 shadow-lg">
                {industry.badge}
              </div>
            </div>

            {/* Title */}
            <h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              {industry.title}
            </h1>

            {/* Subtitle + Description */}
            <div
              className="animate-fade-in-up mb-6 sm:mb-8"
              style={{ animationDelay: "200ms" }}
            >
              <p className="text-lg sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-3 sm:mb-4">
                {industry.subtitle}
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
                {industry.description}
              </p>
            </div>

            {/* Stats Pills */}
            <div
              className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              {industry.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-2xl font-black text-white">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-300 font-medium">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <Link
                to="/quote"
                className={`group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r ${industry.gradient} text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-1`}
              >
                Get Custom Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/10 backdrop-blur-md text-white font-bold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Call: +1 (416) 900-8673
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden z-10">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full block h-12 sm:h-16 md:h-20 lg:h-24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fill="#ffffff"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>

      </section>


      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50" />

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Mission Content */}
              <div className="animate-slide-in-left">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                    Our Mission
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                    {industry.subtitle}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {industry.mission}
                </p>

                {/* Why Choose Pills */}
                <div className="space-y-3">
                  <p className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Why Choose Cloud Park</p>
                  {industry.whyChoose.map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div className="animate-scale-in" style={{ animationDelay: '200ms' }}>
                <div className="relative">
                

                  {/* Responsive Image */}
                  <img
                    src={industry.imagegraphic}
                    alt={industry.title}
                    className="
        relative 
        w-full 
        h-48 
        sm:h-64 
        md:h-80 
        lg:h-[400px] 
        xl:h-[400px] 
        object-cover 
        transition-all 
        duration-500 
        hover:scale-[1.02]
      "
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                Core Capabilities
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
                Comprehensive Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-leading capabilities designed for your specific logistics needs
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industry.capabilities.map((capability, index) => {
                const CapIcon = capability.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <CapIcon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                Additional Features
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Complete Service Package
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need for successful logistics operations
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-5">
              {industry.features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${industry.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <CheckCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium group-hover:text-blue-600 transition-colors">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-10 px-4 sm:px-8 md:px-16 lg:px-20 my-10 sm:my-14 md:my-16">
        <div className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-40 sm:w-64 md:w-80 lg:w-96 h-40 sm:h-64 md:h-80 lg:h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-40 sm:w-64 md:w-80 lg:w-96 h-40 sm:h-64 md:h-80 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-4 sm:mb-6">
                  Ready to Get Started?
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                  Partner with Cloud Park for {industry.title.toLowerCase()} logistics that delivers results.
                  Get your custom quote today.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
                  <Link
                    to="/quote"
                    className={`group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r ${industry.gradient} text-white font-bold shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105`}
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-md text-white font-bold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;