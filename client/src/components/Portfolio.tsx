import { ExternalLink } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface ProjectCard {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: "live" | "completed" | "development" | "upcoming";
  link?: string;
}

const projects: ProjectCard[] = [
  {
    id: "top-speed-cincy",
    title: "Top Speed Cincy",
    description: "Designed and built a professional website for a performance auto shop to showcase services, recent projects, and contact information. Used WordPress for rapid development with custom styling and structured content layout.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    tags: ["WordPress", "Client Project"],
    status: "live",
    link: "#"
  },
  {
    id: "sean-allen-training",
    title: "Sean Allen Swift Training",
    description: "Completed a structured iOS development curriculum via Sean Allen's tutorials. Learned fundamentals of Swift, SwiftUI, MVVM architecture, API calls, and state management.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    tags: ["Swift", "Learning"],
    status: "completed"
  },
  {
    id: "appetizer-app",
    title: "Appetizer Ordering App",
    description: "Built an iOS app to browse, customize, and order appetizers, with a complete cart and checkout flow. Implemented SwiftUI with MVVM architecture, handling state management and data flow between views.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop",
    tags: ["SwiftUI", "Learning Project"],
    status: "completed"
  },
  {
    id: "habitn-app",
    title: "Habitn",
    description: "Developed an ADHD-friendly habit tracker with streaks, daily resets, and customizable notifications. Integrated Firebase for authentication, real-time habit storage, and cloud sync.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    tags: ["Swift", "Firebase"],
    status: "development"
  },
  {
    id: "mind-match",
    title: "Mind Match",
    description: "Built an interactive matching game using React for web browsers. Practiced component-based architecture, state management, and game logic.",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=400&fit=crop",
    tags: ["React", "Game"],
    status: "upcoming"
  },
  {
    id: "picky-chef",
    title: "Picky Chef",
    description: "Designed a mobile-first AI-powered meal planning app for busy families and picky eaters. Built with React Native for cross-platform compatibility and integrated AI-driven recipe suggestions.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
    tags: ["React Native", "AI"],
    status: "upcoming"
  }
];

const getStatusConfig = (status: ProjectCard["status"]) => {
  switch (status) {
    case "live":
      return { label: "LIVE PROJECT", color: "text-green-400", bgColor: "bg-green-500/20" };
    case "completed":
      return { label: "COMPLETED", color: "text-blue-400", bgColor: "bg-blue-500/20" };
    case "development":
      return { label: "IN DEVELOPMENT", color: "text-yellow-400", bgColor: "bg-yellow-500/20" };
    case "upcoming":
      return { label: "COMING SOON", color: "text-purple-400", bgColor: "bg-purple-500/20" };
    default:
      return { label: "UNKNOWN", color: "text-gray-400", bgColor: "bg-gray-500/20" };
  }
};

const getHoverColor = (index: number) => {
  return index % 2 === 0 ? "hover:border-neon-cyan/50 hover:shadow-neon-cyan/20" : "hover:border-neon-purple/50 hover:shadow-neon-purple/20";
};

interface PortfolioProps {
  onProjectClick: (projectId: string) => void;
}

export default function Portfolio({ onProjectClick }: PortfolioProps) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-center mb-16" data-testid="portfolio-title">
          Featured <span className="text-neon-cyan">Projects</span>
        </h2>
        
        <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          {projects.map((project, index) => {
            const statusConfig = getStatusConfig(project.status);
            
            return (
              <div 
                key={project.id}
                className={`group cursor-pointer ${getHoverColor(index)}`}
                onClick={() => onProjectClick(project.id)}
                data-testid={`project-card-${project.id}`}
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                    data-testid={`project-image-${project.id}`}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white" data-testid={`project-title-${project.id}`}>
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={`px-2 py-1 text-xs rounded-full ${
                              tagIndex === 0 ? "bg-blue-500/20 text-blue-300" : "bg-purple-500/20 text-purple-300"
                            }`}
                            data-testid={`project-tag-${project.id}-${tagIndex}`}
                          >
                            {tag}
                          </span>
                        ))}
                        {project.link && (
                          <ExternalLink className="text-neon-cyan hover:scale-110 transition-transform" size={16} />
                        )}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4" data-testid={`project-description-${project.id}`}>
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold ${statusConfig.color}`} data-testid={`project-status-${project.id}`}>
                        {statusConfig.label}
                      </span>
                      <div className="flex space-x-2">
                        <i className="fab fa-react text-gray-500"></i>
                        <i className="fab fa-js-square text-gray-500"></i>
                      </div>
                    </div>
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
