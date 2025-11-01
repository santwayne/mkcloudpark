import { Warehouse, Truck, Package, Wind, Thermometer, Container, Repeat, Users, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    slug: "health-certified-warehousing",
    title: "Warehousing",
    shortDescription: "Secure and efficient warehousing solutions to meet your storage needs",
    icon: Warehouse,
    gradient: "from-primary via-primary to-primary/70"
  },
  {
    id: 2,
    slug: "full-truckload-ftl",
    title: "Full Truckload",
    shortDescription: "Dedicated FTL transport with real-time tracking across North America",
    icon: Truck,
    gradient: "from-accent via-accent to-accent/70"
  },
  {
    id: 3,
    slug: "less-than-truckload-ltl",
    title: "LTL Services",
    shortDescription: "Cost-effective consolidated freight for smaller shipments",
    icon: Package,
    gradient: "from-primary via-primary to-primary/70"
  },
  {
    id: 4,
    slug: "dry-van-transportation",
    title: "Dry Van",
    shortDescription: "Safe and timely transportation for non-perishable goods",
    icon: Wind,
    gradient: "from-accent via-accent to-accent/70"
  },
  {
    id: 5,
    slug: "reefer-transport",
    title: "Reefer",
    shortDescription: "Temperature-controlled transport with 24/7 monitoring",
    icon: Thermometer,
    gradient: "from-primary via-primary to-primary/70"
  },
  {
    id: 6,
    slug: "shunting-yard-management",
    title: "Yard Management",
    shortDescription: "On-site trailer shunting and efficient yard coordination",
    icon: Container,
    gradient: "from-accent via-accent to-accent/70"
  },
  {
    id: 7,
    slug: "cross-docking-transloading",
    title: "Cross-Docking",
    shortDescription: "Fast distribution with container unloading and transfer",
    icon: Repeat,
    gradient: "from-primary via-primary to-primary/70"
  },
  {
    id: 8,
    slug: "dedicated-fleet-contract-logistics",
    title: "Dedicated Fleet",
    shortDescription: "Guaranteed capacity with custom routing and branded equipment",
    icon: Users,
    gradient: "from-accent via-accent to-accent/70"
  },
  {
    id: 9,
    slug: "expedited-same-day-delivery",
    title: "Expedited Delivery",
    shortDescription: "Same-day and urgent delivery for time-sensitive freight",
    icon: Zap,
    gradient: "from-primary via-primary to-primary/70"
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (slug: string) => {
    navigate(`/services/${slug}`);
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-16 px-6" style={{ 
      background: 'linear-gradient(to bottom right, #0d2634, #0f3a4a, #134e5e)'
    }}>
      {/* Background decoration with concentric circles effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />

      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/50 rounded-full text-xs font-bold mb-6 shadow-lg shadow-primary/20">
            <span className="text-primary">
              OUR SERVICES
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-white">CloudPark</span> <span className="text-primary">Solutions</span>
          </h1>

          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Comprehensive logistics and warehousing services designed to streamline your supply chain across North America.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  onClick={() => handleServiceClick(service.slug)}
                  className="group relative cursor-pointer"
                >
                  {/* Card - Transparent with backdrop blur */}
                  <div className="relative h-full bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/70 text-sm leading-relaxed mb-5">
                        {service.shortDescription}
                      </p>

                      {/* Button */}
                      <button className="px-5 py-2 bg-transparent border-2 border-white/30 hover:border-primary/50 text-white font-semibold text-sm rounded-full transition-all duration-300 hover:bg-primary/10">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-6xl mx-auto flex justify-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold text-base rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;