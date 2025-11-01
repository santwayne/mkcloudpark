import { Star, Quote } from "lucide-react";
import certified1 from "../assets/certified1.png"
import certified2 from "../assets/certified2.png"
import certified3 from "../assets/certified3.png"
import certified4 from "../assets/certified4.png"
import certified5 from "../assets/certified5.png"
import certified6 from "../assets/certified6.png"

const TrustedBy = () => {


  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Supply Chain Director",
      company: "Fresh Foods Inc",
      industry: "Bakery",
      text: "We've been working with CloudPark for two years and haven't had a single temperature control issue. Their consistency is exceptional and has eliminated our compliance concerns.",
      rating: 5,
      logo: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=80&h=80&fit=crop"
    },
    {
      name: "Mike Chen",
      role: "Operations Manager",
      company: "Pharma Distributors",
      industry: "Pharma",
      text: "Their 24/7 support is genuinely reliable. We had an urgent delivery at 2 AM and they handled it within minutes. That kind of response time is rare.",
      rating: 5,
      logo: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=80&h=80&fit=crop"
    },
    {
      name: "Lisa Martinez",
      role: "Procurement Lead",
      company: "Restaurant Supply Co",
      industry: "Chemicals",
      text: "CloudPark stands out from other providers. Professional drivers, consistently on-time deliveries, and competitive rates. Exactly what we needed.",
      rating: 5,
      logo: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=80&h=80&fit=crop"
    }
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-success/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container relative mx-auto px-6 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 animate-scaleIn">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-success/20 via-success/10 to-success/20 border border-success/30 text-success rounded-full text-xs md:text-sm font-bold mb-4 shadow-lg shadow-success/10 animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer" />
            <span className="w-2.5 h-2.5 bg-success rounded-full animate-ping absolute" />
            <span className="w-2.5 h-2.5 bg-success rounded-full relative" />
            <span className="relative">300+ COMPANIES TRUST US</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Join hundreds of companies who rely on Cloud Park for mission-critical deliveries
          </p>
        </div>



        {/* Testimonials Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              {/* Company Logo & Industry Badge */}
              <div className="flex items-center justify-between mb-4">
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="w-12 h-12 rounded-lg object-cover shadow-md"
                />
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  {testimonial.industry}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 font-semibold text-sm">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-7xl mx-auto">
          <div className="p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src={certified6} alt="Certification 6" className="w-full h-auto max-h-24 object-contain" />
          </div>
          <div className="p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src={certified1} alt="Certification 1" className="w-full h-auto max-h-24 object-contain" />
          </div>
          <div className="p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src={certified2} alt="Certification 2" className="w-full h-auto max-h-24 object-contain" />
          </div>
          <div className="p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src={certified3} alt="Certification 3" className="w-full h-auto max-h-24 object-contain" />
          </div>
          <div className="p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src={certified4} alt="Certification 4" className="w-full h-auto max-h-24 object-contain" />
          </div>
          <div className="p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src={certified5} alt="Certification 5" className="w-full h-auto max-h-24 object-contain" />
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
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
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }
        .animate-countUp {
          animation: countUp 0.6s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .animate-scroll-left {
          animation: scrollLeft 30s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
        .animate-scroll-right {
          animation: scrollRight 25s linear infinite;
        }
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;