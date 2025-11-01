
import VideoSection from "@/components/VideoSection";
import React, { useEffect, useRef, useState } from 'react';
import { Truck, Shield, Award, Clock, Users, TrendingUp } from 'lucide-react';


const ValueCard = ({ icon: Icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl" />
    </div>
  );
};

const StatCounter = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const AboutContent = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We keep our promises. Your freight arrives when we say it will, backed by our 98% on-time delivery rate and 24/7 monitoring systems.',
      delay: 0
    },
    {
      icon: Clock,
      title: 'Transparency',
      description: 'Real-time tracking and honest communication at every step. Know exactly where your shipment is, from pickup to delivery.',
      delay: 100
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'From our state-of-the-art fleet to our experienced team, we maintain the highest standards in temperature-controlled logistics.',
      delay: 200
    }
  ];


  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-6 relative">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
         
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              About Cloud Park Logistics
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
             Cloud Park has grown from a single reefer truck to
              North America's trusted temperature-controlled logistics partner,
              moving over 5,000 shipments monthly with a 98% on-time delivery rate.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is simple: deliver your freight safely, on time, and with
              complete transparency. Whether it's life-saving pharmaceuticals or
              farm-fresh produce, we treat every shipment with the care it deserves.
            </p>
          </div>
        </div>
      </section>

  

      <VideoSection />

        

  
    </>
  );
};

export default AboutContent;
