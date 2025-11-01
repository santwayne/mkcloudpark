import { useParams } from "react-router-dom";
import { ArrowRight, CheckCircle, Warehouse, Truck, Package, Wind, Thermometer, Container, Repeat, Users, Zap } from 'lucide-react';

// Import available assets - Add imports for all your videos and images
import healthcareVideo from "../assets/servicess/Shunting.mp4";
import healthImage from "../assets/servicess/health.png";
import ftlVideo from "../assets/servicess/ftl.mp4";
import ftlImage from "../assets/servicess/ftl.png";
import ltlVideo from "../assets/servicess/LTL.mp4";
import ltlImage from "../assets/servicess/LTL.png";
import dryvanVideo from "../assets/servicess/Dryvan.mp4";
import dryvanImage from "../assets/servicess/Dryvan.png";
import reeferVideo from "../assets/servicess/Reefer Transport.mp4";
import reeferImage from "../assets/servicess/reefer Transport.png";
import shuntingVideo from "../assets/servicess/Shunting.mp4";
import shuntingImage from "../assets/servicess/Shunting.png";
import crossdockVideo from "../assets/servicess/Cross Dock.mp4";
import crossdockImage from "../assets/servicess/Cross Dock.png";
import dedicatedfleetVideo from "../assets/servicess/Dedicated Fleet.mp4";
import dedicatedfleetImage from "../assets/servicess/Dedicated Fleet.png";
import expeditedVideo from "../assets/servicess/Shunting.mp4";
import expeditedImage from "../assets/servicess/Expedited.png";




const serviceDetails = {
    "health-certified-warehousing": {
        id: 1,
        title: "Health-Certified Warehousing",
        badge: "CERTIFIED STORAGE",
        icon: Warehouse,
        video: healthcareVideo,
        graphicImage: healthImage,
        color: "blue",
        description: "Cloudpark Logistics provides CFIA and Health Canada–approved warehousing with temperature-controlled and dry storage for food, pharmaceutical, and chemical products.",
        features: [
            "Food-grade, pharmaceutical, and chemical storage zones",
            "Temperature-controlled (refrigerated, frozen, and ambient) areas",
            "Real-time inventory management and barcode tracking",
            "Cross-docking, labeling, and packaging support",
            "24/7 security, surveillance, and access control"
        ],
        industries: [
            "Pharmaceutical",
            "Food & Beverage",
            "Bakery",
            "Meat & Poultry",
            "Produce",
            "Chemical",
            "Healthcare",
            "Consumer Goods"
        ]
    },
    "full-truckload-ftl": {
        id: 2,
        title: "Full Truckload (FTL)",
        badge: "FTL SERVICES",
        icon: Truck,
        video: ftlVideo,
        graphicImage: ftlImage,
        color: "cyan",
        description: "Our Full Truckload (FTL) division delivers coast-to-coast and cross-border capacity for shippers requiring dedicated transport. Every shipment moves on time with direct routing, minimal handling, and full visibility.",
        features: [
            "Canada–U.S. cross-border expertise",
            "Dedicated fleet with real-time GPS tracking",
            "Food-grade and reefer-certified trailers",
            "Drop trailer and just-in-time delivery options",
            "Custom capacity agreements for consistent shippers"
        ],
        industries: [
            "Food Distribution",
            "Produce",
            "Manufacturing",
            "Pharmaceuticals",
            "Retail",
            "Packaging",
            "Consumer Products"
        ]
    },
    "less-than-truckload-ltl": {
        id: 3,
        title: "Less-Than-Truckload (LTL)",
        badge: "LTL SERVICES",
        icon: Package,
        video: ltlVideo,
        graphicImage: ltlImage,
        color: "navy",
        description: "For smaller shipments that don't require a full trailer, Cloudpark offers efficient and cost-effective LTL transportation. We combine precision routing and real-time tracking to reduce transit time and ensure safe delivery.",
        features: [
            "Consolidated freight network across North America",
            "Scheduled routes and flexible pickup options",
            "Temperature-controlled and dry LTL availability",
            "Freight optimization for cost efficiency",
            "Real-time visibility via customer dashboard"
        ],
        industries: [
            "Pharma & Healthcare",
            "Food & Beverage",
            "Consumer Goods",
            "Industrial Supplies",
            "Electronics",
            "Retail Distribution"
        ]
    },
    "dry-van-transportation": {
        id: 4,
        title: "Dry Van Transportation",
        badge: "DRY VAN",
        icon: Wind,
        video: dryvanVideo,
        graphicImage: dryvanImage,
        color: "cyan",
        description: "Our dry van transportation services support a wide range of non-perishable, industrial, and consumer shipments. We guarantee secure, timely, and compliant delivery across Canada and the U.S.",
        features: [
            "53' air-ride equipped trailers",
            "Real-time GPS monitoring",
            "High-volume and high-frequency lanes",
            "Contract-based or spot freight options",
            "Custom load scheduling and route optimization"
        ],
        industries: [
            "Consumer Packaged Goods",
            "Electronics",
            "Automotive",
            "Industrial Manufacturing",
            "Retail Distribution",
            "Chemicals"
        ]
    },
    "reefer-transport": {
        id: 5,
        title: "Reefer Transport",
        badge: "TEMPERATURE CONTROLLED",
        icon: Thermometer,
        video: reeferVideo,
        graphicImage: reeferImage,
        color: "blue",
        description: "Cloudpark specializes in temperature-controlled freight for perishable, pharmaceutical, and chemical goods. Every reefer unit is equipped with 24/7 temperature monitoring, ensuring product safety and full compliance.",
        features: [
            "Single and multi-temp refrigerated trailers",
            "FSMA and HACCP-compliant sanitation procedures",
            "Real-time temperature tracking",
            "Team drivers for expedited loads",
            "Documentation for audit and compliance reporting"
        ],
        industries: [
            "Pharmaceuticals",
            "Frozen Foods",
            "Dairy",
            "Produce",
            "Bakery",
            "Meat & Poultry",
            "Chemicals",
            "Healthcare"
        ]
    },
    "shunting-yard-management": {
        id: 6,
        title: "Shunting & Yard Management",
        badge: "YARD SERVICES",
        icon: Container,
        video: shuntingVideo,
        graphicImage: shuntingImage,
        color: "navy",
        description: "Our shunting and yard management services improve dock efficiency and reduce congestion at distribution centers. With GPS-enabled tractors and skilled operators, we ensure smooth trailer flow and fast turnaround.",
        features: [
            "On-site trailer shunting and yard coordination",
            "Drop trailer management",
            "Yard inventory and gate control systems",
            "Scheduled dock assignments",
            "24/7 on-demand dispatch"
        ],
        industries: [
            "Food Manufacturing",
            "Distribution Centers",
            "Cold Storage",
            "Packaging",
            "Retail",
            "3PL Warehousing"
        ]
    },
    "cross-docking-transloading": {
        id: 7,
        title: "Cross-Docking & Transloading",
        badge: "CROSS-DOCK",
        icon: Repeat,
        video: crossdockVideo,
        graphicImage: crossdockImage,
        color: "navy",
        description: "We enable faster distribution and reduced storage costs through efficient cross-docking and transloading operations. Ideal for import/export and time-sensitive goods, our team ensures fast transfer and shipment integrity.",
        features: [
            "Container unloading and reloading",
            "Palletization, shrink-wrapping, and labeling",
            "Temperature-controlled transfer",
            "Freight inspection and scanning",
            "24/7 cross-dock availability"
        ],
        industries: [
            "Import/Export",
            "Manufacturing",
            "Food Distribution",
            "Retail",
            "E-commerce",
            "Pharmaceuticals"
        ]
    },
    "dedicated-fleet-contract-logistics": {
        id: 8,
        title: "Dedicated Fleet & Contract Logistics",
        badge: "DEDICATED FLEET",
        icon: Users,
        video: dedicatedfleetVideo,
        graphicImage: dedicatedfleetImage,
        color: "cyan",
        description: "For businesses with consistent freight volume, our dedicated fleet and contract logistics services provide guaranteed capacity, custom routing, and branded equipment options.",
        features: [
            "Fleet branding and driver uniforming",
            "Exclusive capacity with guaranteed SLA",
            "Real-time tracking and reporting",
            "Custom KPI dashboards and analytics",
            "Predictable pricing and service continuity"
        ],
        industries: [
            "Retail Chains",
            "Manufacturing",
            "Food & Beverage",
            "Pharmaceuticals",
            "Industrial Distribution"
        ]
    },
    "expedited-same-day-delivery": {
        id: 9,
        title: "Expedited & Same-Day Delivery",
        badge: "EXPEDITED",
        icon: Zap,
        video: expeditedVideo,
        graphicImage: expeditedImage,
        color: "blue",
        description: "When timing is everything, Cloudpark's expedited division ensures your critical shipments reach their destination fast — without compromise.",
        features: [
            "Team driver operations for long-haul expedited",
            "Same-day GTA and Ontario regional delivery",
            "Dedicated hotshot and sprinter vans",
            "Real-time visibility and tracking",
            "24/7 dispatch for urgent loads"
        ],
        industries: [
            "Pharmaceuticals",
            "Automotive",
            "Electronics",
            "Medical Supplies",
            "Time-Sensitive Freight"
        ]
    }
};

const colorConfig = {
    blue: {
        gradient: "from-[#06aaf3] to-[#0590d1]",
        text: "text-[#06aaf3]",
        bg: "bg-[#06aaf3]",
        border: "border-[#06aaf3]"
    },
    cyan: {
        gradient: "from-[#06aaf3] to-[#0590d1]",
        text: "text-[#06aaf3]",
        bg: "bg-[#06aaf3]",
        border: "border-[#06aaf3]"
    },
    navy: {
        gradient: "from-[#283c95] to-[#1e2d70]",
        text: "text-[#283c95]",
        bg: "bg-[#283c95]",
        border: "border-[#283c95]"
    }
};

const ServiceDetail = () => {
    const { slug } = useParams();

    if (!slug || !serviceDetails[slug]) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl">Service not found</p>
            </div>
        );
    }

    const service = serviceDetails[slug];
    const Icon = service.icon;
    const colors = colorConfig[service.color];

    return (
        <div className="min-h-screen bg-white">
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
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
                
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                
                .animate-fade-in {
                    animation: fadeIn 1s ease-out forwards;
                }
                
                .animate-scale-in {
                    animation: scaleIn 0.6s ease-out forwards;
                }
                
                .animate-slide-in-left {
                    animation: slideInLeft 0.7s ease-out forwards;
                }
                
                .stagger-1 { animation-delay: 0.1s; opacity: 0; }
                .stagger-2 { animation-delay: 0.2s; opacity: 0; }
                .stagger-3 { animation-delay: 0.3s; opacity: 0; }
                .stagger-4 { animation-delay: 0.4s; opacity: 0; }
                .stagger-5 { animation-delay: 0.5s; opacity: 0; }
                .stagger-6 { animation-delay: 0.6s; opacity: 0; }
            `}</style>

            {/* Hero Section with Video */}
            <section className="relative h-auto min-h-[500px] md:min-h-[600px] overflow-hidden bg-slate-900">
                {/* Background Video */}
                {service.video ? (
                    <video
                        src={service.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover absolute inset-0"
                        style={{ minHeight: '500px', height: '100%' }}
                        onError={(e) => {
                            console.error('Video failed to load:', service.video);
                            e.currentTarget.style.display = 'none';
                        }}
                    >
                        <source src={service.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 absolute inset-0" style={{ minHeight: '500px' }} />
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="flex flex-col items-center gap-3 animate-fade-in-up stagger-2">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                                    {service.title}
                                </h1>
                            </div>

                            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal animate-fade-in-up stagger-3 mt-4">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Heading */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 animate-fade-in-up">
                                What We <span className={colors.text}>Offer</span>
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up stagger-1">
                                Comprehensive solutions designed to meet your specific logistics needs
                            </p>
                        </div>

                        {/* Content and Media */}
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                            {/* Left: Features List */}
                            <div className="space-y-4 sm:space-y-5 order-2 lg:order-1 lg:pr-4">
                                <div className="max-h-[600px] lg:max-h-[700px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100 hover:scrollbar-thumb-slate-400">
                                    {service.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className={`bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 ${service.color === 'blue' || service.color === 'cyan'
                                                    ? 'hover:border-sky-400'
                                                    : 'hover:border-indigo-500'
                                                } group mb-4 last:mb-0`}
                                            style={{
                                                animation: `slideInLeft 0.6s ease-out ${index * 0.1}s both`
                                            }}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className={`w-10 h-10 sm:w-12 sm:h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}
                                                >
                                                    <CheckCircle
                                                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                                                        strokeWidth={2.5}
                                                    />
                                                </div>
                                                <p className="text-slate-700 font-semibold text-base sm:text-lg leading-relaxed pt-1 sm:pt-2">
                                                    {feature}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Sticky Image */}
                            <div className="order-1 lg:order-2">
                                <div className="lg:sticky lg:top-24 relative overflow-hidden group rounded-xl">
                                    {service.graphicImage ? (
                                        <img
                                            src={service.graphicImage}
                                            alt={`${service.title} Preview`}
                                            className="relative w-full h-48 md:h-64 lg:h-80 object-contain duration-700 group-hover:scale-105 transition-transform bg-white/50 p-4 rounded-xl"
                                            loading="lazy"
                                            decoding="async"
                                            onError={(e) => {
                                                console.error('Graphic image failed to load:', service.graphicImage);
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-48 md:h-64 lg:h-80 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center">
                                            <Icon className="w-24 h-24 text-slate-400" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 animate-fade-in-up">
                                Industries We <span className={colors.text}>Serve</span>
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up stagger-1">
                                Specialized expertise across diverse sectors with state-of-the-art facilities
                            </p>
                        </div>

                        {/* Industries Tags */}
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
                            {service.industries.map((industry, index) => (
                                <div
                                    key={index}
                                    className={`px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r ${colors.gradient} text-white font-semibold text-xs sm:text-sm md:text-base rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-default whitespace-nowrap`}
                                    style={{
                                        animation: `scaleIn 0.6s ease-out ${index * 0.1}s both`
                                    }}
                                >
                                    {industry}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className={`bg-gradient-to-r ${colors.gradient} rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl text-center animate-scale-in overflow-hidden relative`}>
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

                            <div className="relative z-10">
                                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in-up stagger-1">
                                    <span className="text-white font-bold text-sm uppercase tracking-wider">
                                        Ready to Get Started?
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white !mb-8 leading-tight animate-fade-in-up stagger-2">
                                    Let's Discuss Your {service.title} Needs
                                </h2>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-4">
                                    <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#283c95] font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-slate-50">
                                        Request a Quote
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                                    </button>

                                    <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
                                        Call Us Now
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;