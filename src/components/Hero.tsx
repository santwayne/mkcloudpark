const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32"
    >
      <video
        src="/herovideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-105 animate-[scale-in_1.5s_ease-out]"
      ></video>

 
    </section>
  );
};

export default Hero;
