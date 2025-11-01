import { Linkedin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const team = [
  {
    name: "Michael Park",
    role: "Founder & CEO",
    bio: "20+ years in logistics, building Cloud Park from the ground up with a vision for excellence",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Jennifer Lee",
    role: "VP of Operations",
    bio: "Expert in reefer logistics and temperature-controlled transport with 15 years experience",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  },
  {
    name: "David Chen",
    role: "Director of Safety",
    bio: "Former DOT inspector ensuring compliance and driver safety across our entire fleet",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
  },
  {
    name: "Amanda Foster",
    role: "Customer Success Lead",
    bio: "24/7 support champion dedicated to client satisfaction and seamless communication",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
  }
];

const TeamMemberCard = ({ member, index }) => {
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
      className={`text-center group transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300 group-hover:scale-105 shadow-xl">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
      <p className="text-primary font-semibold mb-3">{member.role}</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 px-2">
        {member.bio}
      </p>
      <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto hover:bg-primary hover:text-white transition-all duration-300 group-hover:scale-110">
        <Linkedin className="h-5 w-5" />
      </button>
    </div>
  );
};

const Team = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    setHeaderVisible(true);
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet the Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The experienced professionals behind your successful shipments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;