import { Shield, Award, CheckCircle, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const certifications = [
  {
    icon: Shield,
    title: "DOT Certified",
    number: "MC-123456",
    description: "Full FMCSA compliance and safety rating"
  },
  {
    icon: Award,
    title: "FDA Compliant",
    number: "FSMA Certified",
    description: "Food Safety Modernization Act standards"
  },
  {
    icon: CheckCircle,
    title: "Hazmat Certified",
    number: "Class 1-9",
    description: "Authorized for all hazardous material classes"
  },
  {
    icon: FileCheck,
    title: "Fully Insured",
    number: "$2M Coverage",
    description: "Comprehensive cargo and liability insurance"
  }
];

const Certifications = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-success/10 text-success rounded-full text-sm font-bold mb-4">
            ✓ CERTIFIED & TRUSTED
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-primary">Fully compliant</span> and certified to the highest standards
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Every shipment protected by <span className="text-foreground font-bold">industry-leading certifications</span> and comprehensive insurance coverage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="p-8 text-center hover-lift animate-scale-in bg-background border-2 border-border hover:border-success/30 transition-all hover:shadow-xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-success/20 to-success/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <cert.icon className="h-12 w-12 text-success" />
              </div>
              <h3 className="font-black text-xl mb-2 group-hover:text-success transition-colors">{cert.title}</h3>
              <div className="text-success font-bold text-base mb-3 bg-success/10 rounded-lg py-2 px-3">{cert.number}</div>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">{cert.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
