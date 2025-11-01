import heroTemp from "../assets/herostat/Tempreature  Controll  icons.png";
import heroClock from "../assets/herostat/24x7  support  icons.png";
import heroShield from "../assets/herostat/insured  cargo.png";
import heroZap from "../assets/herostat/express service.png";

const ValueProps = () => {
  const props = [
    {
      img: heroTemp,
      title: "Perishable and Ambient Transportation",
      desc: "Reefer & Dry Van",
      color: "from-blue-500 to-cyan-400",
      glowColor: "group-hover:shadow-blue-500/50"
    },
    {
      img: heroClock,
      title: "24/7 Customer Support",
      desc: "Always Available",
      color: "from-orange-500 to-amber-400",
      glowColor: "group-hover:shadow-orange-500/50"
    },
    {
      img: heroShield,
      title: "Comprehensive Cargo Insurance",
      desc: "Full Coverage",
      color: "from-green-500 to-emerald-400",
      glowColor: "group-hover:shadow-green-500/50"
    },
    {
      img: heroZap,
      title: "LTL , FTL and Expedited Services",
      desc: "On time delivery Guaranteed",
      color: "from-purple-500 to-pink-400",
      glowColor: "group-hover:shadow-purple-500/50"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {props.map((prop, index) => (
            <div 
              key={prop.title}
              className="group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/90 dark:bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image container */}
                <div className="relative">
                  <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${prop.color} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${prop.glowColor}`}>
                    <img src={prop.img} alt={prop.title} className="w-10 h-10 object-contain " />
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                </div>
                
                <h3 className="text-lg font-black mb-1 group-hover:text-primary transition-colors duration-300">{prop.title}</h3>
                <p className="text-sm text-muted-foreground font-medium">{prop.desc}</p>
                
                {/* Bottom accent line that expands on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
