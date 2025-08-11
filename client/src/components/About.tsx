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
                StormShift Labs is the work of <strong className="text-white">Justin Madanayake</strong>, 
                a self-taught developer blending creativity and technology. My journey began building 
                my first client website — Top Speed Cincy — on WordPress.
              </p>
              <p>
                I then dove into iOS development through Sean Allen's YouTube course, creating an 
                Appetizer Ordering app with advanced ordering, cart, and account features. That experience 
                set the stage for my first real self-built app, <strong className="text-neon-purple">Habitn</strong> — 
                an ADHD-focused habit tracker built with Swift, MVVM, and Firebase.
              </p>
              <p>
                From there, I explored React with Mind Match, a web-based matching game, and expanded 
                into mobile-first AI solutions with Picky Chef, a React Native app for meal planning. 
                Every project represents a step forward — learning, experimenting, and refining my craft.
              </p>
            </div>
          </div>
          
          {/* Tech Skills */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700" data-testid="skills-container">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mb-8">
                {skills.slice(0, 3).map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className="text-center group" data-testid={`skill-${skill.name.toLowerCase().replace(' ', '-')}`}>
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 bg-gradient-to-br ${skill.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
                {skills.slice(3).map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className="text-center group" data-testid={`skill-${skill.name.toLowerCase().replace(' ', '-')}`}>
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 bg-gradient-to-br ${skill.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400">{skill.name}</span>
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
