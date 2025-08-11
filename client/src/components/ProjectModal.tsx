import { X, ExternalLink, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectData {
  title: string;
  description: string;
  tech: string[];
  status: string;
  link?: string;
  features: string[];
}

const projectData: Record<string, ProjectData> = {
  "top-speed-cincy": {
    title: "Top Speed Cincy",
    description: "A professional WordPress website for an automotive services company featuring custom themes, responsive design, and SEO optimization.",
    tech: ["WordPress", "PHP", "CSS3", "JavaScript"],
    status: "Live Project",
    link: "https://topspeedcincy.com",
    features: ["Custom WordPress Theme", "SEO Optimization", "Mobile Responsive", "Contact Forms"]
  },
  "sean-allen-training": {
    title: "Sean Allen Swift Training",
    description: "Completed comprehensive iOS development course covering Swift fundamentals, SwiftUI, networking, and app architecture patterns.",
    tech: ["Swift", "SwiftUI", "iOS"],
    status: "Completed",
    features: ["Swift Fundamentals", "SwiftUI Framework", "MVVM Architecture", "API Integration"]
  },
  "appetizer-app": {
    title: "Appetizer Ordering App",
    description: "A full-featured food ordering application built with SwiftUI implementing modern iOS development patterns and user experience design.",
    tech: ["Swift", "SwiftUI", "MVVM"],
    status: "Completed",
    features: ["Shopping Cart", "User Accounts", "Order Management", "Modern UI/UX"]
  },
  "habitn-app": {
    title: "Habitn - ADHD Habit Tracker",
    description: "An innovative habit tracking application specifically designed for individuals with ADHD, featuring intelligent reminders and progress visualization.",
    tech: ["Swift", "Firebase", "SwiftUI"],
    status: "In Development",
    features: ["ADHD-Focused Design", "Smart Notifications", "Progress Analytics", "Cloud Sync"]
  },
  "mind-match": {
    title: "Mind Match",
    description: "An interactive memory matching game built with React, featuring beautiful animations, difficulty levels, and score tracking.",
    tech: ["React", "JavaScript", "CSS3"],
    status: "Coming Soon",
    features: ["Multiple Difficulty Levels", "Score Tracking", "Smooth Animations", "Responsive Design"]
  },
  "picky-chef": {
    title: "Picky Chef",
    description: "A React Native mobile application designed to help picky eaters discover new recipes based on their preferences and dietary restrictions.",
    tech: ["React Native", "JavaScript", "API Integration"],
    status: "Coming Soon",
    features: ["Recipe Discovery", "Dietary Filters", "Favorites System", "Cross-Platform"]
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Live Project":
      return "text-green-400";
    case "Completed":
      return "text-blue-400";
    case "In Development":
      return "text-yellow-400";
    case "Coming Soon":
      return "text-purple-400";
    default:
      return "text-gray-400";
  }
};

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  if (!projectId) return null;

  const project = projectData[projectId];
  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center min-h-screen p-4"
      onClick={handleBackdropClick}
      data-testid="project-modal"
    >
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="font-orbitron font-bold text-3xl text-white" data-testid="modal-title">
              {project.title}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="modal-close"
            >
              <X size={24} />
            </Button>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed" data-testid="modal-description">
              {project.description}
            </p>
            
            <div>
              <h3 className="font-semibold text-neon-cyan mb-3">Technology Stack</h3>
              <div className="flex flex-wrap gap-2" data-testid="modal-tech-stack">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white"
                    data-testid={`tech-tag-${index}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-neon-cyan mb-3">Key Features</h3>
              <ul className="grid md:grid-cols-2 gap-2" data-testid="modal-features">
                {project.features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-center text-gray-300"
                    data-testid={`feature-${index}`}
                  >
                    <Check size={16} className="text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center justify-between pt-6 border-t border-gray-700">
              <span 
                className={`text-sm font-semibold ${getStatusColor(project.status)}`}
                data-testid="modal-status"
              >
                {project.status.toUpperCase()}
              </span>
              {project.link && (
                <Button
                  asChild
                  className="bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-semibold hover:shadow-lg transition-all"
                  data-testid="modal-view-project"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
