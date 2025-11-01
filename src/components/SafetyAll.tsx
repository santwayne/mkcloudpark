import { Shield, Lock, FileCheck, Zap } from "lucide-react";

const SafetyCompliance = () => {
  const safetyFeatures = [
    {
      icon: Lock,
      title: "Data Security",
      gradient: "from-emerald-500 to-emerald-600",
      features: [
        "256-bit SSL Encryption",
        "SOC 2 Type II Certified",
        "HIPAA Compliant",
        "Regular Security Audits"
      ]
    },
    {
      icon: Shield,
      title: "Safety Record",
      gradient: "from-purple-500 to-purple-600",
      features: [
        "Accident-Free Miles",
        "Continuous Driver Training",
        "FMCSA Compliant",
        "Zero Safety Violations"
      ]
    },
    {
      icon: FileCheck,
      title: "Insurance Coverage",
      gradient: "from-red-500 to-red-600",
      features: [
        "Comprehensive Liability",
        "Cargo Insurance Included",
        "Worker's Compensation",
        "General Liability Coverage"
      ]
    },
    {
      icon: Zap,
      title: "Real-Time Tracking",
      gradient: "from-amber-500 to-amber-600",
      features: [
        "GPS-Enabled Fleet",
        "Instant Status Updates",
        "Temperature Monitoring",
        "Route Optimization"
      ]
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
       
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
            SAFETY & <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">COMPLIANCE</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
            We maintain the highest standards with comprehensive certifications ensuring your cargo is protected by industry-leading safety protocols
          </p>
        </div>

        {/* Safety Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {safetyFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white/90 dark:bg-black/40 backdrop-blur-xl rounded-2xl border-2 border-border/50 hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden p-6"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-black mb-4 text-foreground">
                  {feature.title}
                </h3>

                {/* Features */}
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-medium text-muted-foreground">
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${feature.gradient} mt-1.5 flex-shrink-0`} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-white/90 dark:bg-black/40 backdrop-blur-xl rounded-2xl border-2 border-border/50 shadow-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-black mb-3">
              Trust Built on <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Standards</span>
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              Every certification represents our commitment to excellence. We don't just meet standards—we exceed them.
            </p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full shadow-xl hover:shadow-primary/50 transition-all hover:scale-105 text-sm whitespace-nowrap">
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SafetyCompliance;