import { ChevronDown } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function Hero() {
  const [ref, isVisible] = useIntersectionObserver();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div ref={ref} className={`text-center z-10 px-4 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
        <h1 className="font-orbitron font-black text-6xl md:text-8xl lg:text-9xl mb-6 glitch-text" data-testid="hero-title">
          StormShift Labs
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-300 max-w-4xl mx-auto font-light" data-testid="hero-subtitle">
          Innovating at the intersection of <span className="text-neon-cyan">code</span> and <span className="text-neon-purple">creativity</span>
        </p>
        <button 
          onClick={scrollToAbout}
          className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-neon-cyan/50 transition-all duration-300 transform hover:-translate-y-1 glow-hover"
          data-testid="hero-cta-button"
        >
          Explore My Work
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          size={32} 
          className="text-neon-cyan opacity-70 cursor-pointer" 
          onClick={scrollToAbout}
          data-testid="scroll-indicator"
        />
      </div>
    </section>
  );
}
