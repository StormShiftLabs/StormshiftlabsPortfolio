import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Code, Globe, Smartphone, Database, Palette, Cloud } from "lucide-react";

const services = [
  {
    id: "ios-development",
    title: "App Development",
    description: "Native iOS applications built with Swift and SwiftUI using MVVM architecture patterns for scalable, maintainable code.",
    icon: Smartphone,
    tech: ["Swift", "SwiftUI", "MVVM"],
    color: "from-blue-500 to-purple-500"
  },
  {
    id: "web-development", 
    title: "Web Development",
    description: "Modern web applications and responsive websites built with React, React Native, and WordPress for diverse client needs.",
    icon: Globe,
    tech: ["React", "React Native", "WordPress"],
    color: "from-green-500 to-blue-500"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centered design focusing on intuitive interfaces, smooth animations, and engaging user experiences across platforms.",
    icon: Palette,
    tech: ["Figma", "Responsive Design", "Accessibility"],
    color: "from-pink-500 to-purple-500"
  },
  {
    id: "firebase-integration",
    title: "Firebase Integration",
    description: "Cloud-powered features including real-time databases, authentication, push notifications, and seamless data synchronization.",
    icon: Database,
    tech: ["Firebase", "Authentication", "Real-time DB"],
    color: "from-yellow-500 to-orange-500"
  }
];

export default function Services() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-center mb-4" data-testid="services-title">
          What I <span className="text-neon-cyan">Do</span>
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto" data-testid="services-subtitle">
          Transforming ideas into powerful digital solutions with cutting-edge technology and user-focused design
        </p>
        
        <div ref={ref} className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div 
                key={service.id}
                className="group cursor-pointer"
                data-testid={`service-card-${service.id}`}
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:border-neon-cyan/50 h-full flex flex-col">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${service.color} p-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center" data-testid={`service-title-${service.id}`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 text-center leading-relaxed flex-grow" data-testid={`service-description-${service.id}`}>
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mt-auto" data-testid={`service-tech-${service.id}`}>
                    {service.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300 border border-gray-600"
                        data-testid={`service-tech-tag-${service.id}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}