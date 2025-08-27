import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    document.title = "StormShift Labs - iOS & Web Developer | Swift, React, WordPress Services";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Justin Storm - StormShift Labs offers professional iOS app development, web development, and Firebase integration services. Specializing in Swift, SwiftUI, React, and WordPress solutions.');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-navy via-black to-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio onProjectClick={setSelectedProject} />
      <Timeline />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-black/50 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 StormShift Labs. Built with passion and powered by innovation.
          </p>
        </div>
      </footer>

      <ProjectModal 
        projectId={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
