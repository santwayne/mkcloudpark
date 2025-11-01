import { Thermometer, Shield, Clock, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Thermometer,
    title: "Advanced Temperature Control",
    description: "Multi-zone reefer units maintaining precise temperatures from -20°F to +70°F with real-time monitoring"
  },
  {
    icon: Shield,
    title: "FDA & FSMA Compliant",
    description: "Full compliance with food safety regulations, complete documentation, and certified handling procedures"
  },
  {
    icon: Clock,
    title: "24/7 Temperature Monitoring",
    description: "Continuous tracking with instant alerts if temperatures deviate, ensuring product integrity throughout transit"
  },
  {
    icon: Truck,
    title: "Modern Reefer Fleet",
    description: "200+ refrigerated trucks under 3 years old, fully maintained and inspected to the highest standards"
  }
];

const ReeferFocus = () => {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
            ❄️ THE COLD CHAIN EXPERTS
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            We keep your products <span className="inline-block bg-white text-primary px-4 rounded-lg">perfect</span>
          </h2>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed font-medium">
            <span className="font-bold">Zero compromises on temperature.</span> From pharmaceuticals to fresh produce, 
            we've perfected the science of cold chain logistics. Your products arrive exactly as they left—guaranteed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="opacity-90 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6">
            <p className="text-lg md:text-xl font-bold mb-2">
              🚛 Complete Logistics Solutions
            </p>
            <p className="text-base opacity-90">
              Plus full dry van services for all your freight needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReeferFocus;
