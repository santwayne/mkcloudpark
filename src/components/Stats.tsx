import { useRef } from "react";
import pic from "../assets/service-map.png";

const Stats = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-background via-cyan-50/30 to-background dark:from-background dark:via-cyan-950/10 dark:to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d420_1px,transparent_1px),linear-gradient(to_bottom,#06b6d420_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800 rounded-full">
              <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 tracking-wide uppercase">
                Company Highlights
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-slate-900 dark:text-white">Our Accomplishments From </span>
              <span className="text-cyan-500">Ground Zero</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400">
              50,000+ Shipments Delivered Across America and Canada
            </p>

            <div className="pt-4">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                With an extensive network spanning across North America, we've successfully delivered over 50,000 shipments, connecting businesses and communities throughout the United States and Canada. Our reliable logistics solutions ensure your cargo reaches its destination safely and on time.
              </p>
            </div>
          </div>

          {/* Right Side - Service Map */}
          <div className="group overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                src={pic}
                alt="America and Canada Service Coverage Map"
                className="w-full h-auto object-cover "
              />
   
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;