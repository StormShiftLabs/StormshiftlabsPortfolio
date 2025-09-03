import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Code, Smartphone, Globe, Database, Layers, Cpu } from "lucide-react";

const skills = [
  { name: "Swift", icon: Code, color: "from-orange-500 to-red-500" },
  { name: "React", icon: Layers, color: "from-blue-500 to-cyan-500" },
  { name: "React Native", icon: Smartphone, color: "from-blue-500 to-purple-500" },
  { name: "WordPress", icon: Globe, color: "from-blue-600 to-blue-800" },
  { name: "Firebase", icon: Database, color: "from-yellow-500 to-orange-500" },
  { name: "SwiftUI", icon: Cpu, color: "from-purple-500 to-pink-500" },
];

export default function About() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          {/* About Content */}
          <div className="space-y-8">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-8" data-testid="about-title">
              About <span className="text-neon-cyan">StormShift Labs</span>
            </h2>
            <div className="text-gray-300 text-lg leading-relaxed space-y-6" data-testid="about-content">
              <p>
                StormShift Labs is the work of <strong className="text-white">Justin Storm</strong>, 
                a self-taught developer blending creativity and technology. My journey began building 
                my first client website — Top Speed Cincy — on WordPress.
              </p>
              <p>
                I then dove into iOS development through Sean Allen's YouTube course, creating an 
                Appetizer Ordering app with advanced ordering, cart, and account features. From there,
                I shifted my focus to modern web development, learning React and building <a href="https://mindmatch-theta.vercel.app" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:text-neon-purple transition-colors"><strong>Mind Match</strong></a>, 
                a web-based matching game that sharpened my skills in React, TypeScript, and component-driven design.
              </p>
              <p>
                I've also built two other client websites: <strong className="text-white">RigdonFitness.com</strong> for a personal trainer, 
                built with React & TypeScript, and <strong className="text-white">JoshlynsJourney.com</strong> for a fundraiser, 
                created with HTML, CSS, and JavaScript. These projects showcase my ability to work with different 
                technologies and deliver solutions tailored to client needs.
              </p>
              <p>
                I'm currently expanding my expertise with Crispy Potato, an AI-powered meal planning app built with React & React Native, 
                combining my interests in technology and practical problem-solving. Every project marks a step forward — learning, 
                experimenting, and refining my craft.
              </p>
            </div>
          </div>
          
          {/* Tech Skills */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700" data-testid="skills-container">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className="text-center group" data-testid={`skill-${skill.name.toLowerCase().replace(' ', '-')}`}>
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gradient-to-br ${skill.color} p-2 sm:p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400 leading-tight">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
