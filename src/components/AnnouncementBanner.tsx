interface AnnouncementBannerProps {
  isVisible: boolean;
}

const AnnouncementBanner = ({ isVisible }: AnnouncementBannerProps) => {
  return (
    <div 
      className={`bg-gradient-to-r from-accent via-primary to-accent text-white text-center text-sm font-bold border-b border-white/20 relative overflow-hidden transition-all duration-300 ${
        isVisible ? 'py-3 h-auto opacity-100' : 'py-0 h-0 opacity-0'
      }`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[slide-in-right_3s_ease-in-out_infinite]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <span className="uppercase tracking-wider">Professional Fleet • 24/7 Service • Temperature-Controlled Specialists • Call: (416) 900-8673</span>
      </div>
    </div>
  );
};

export default AnnouncementBanner;