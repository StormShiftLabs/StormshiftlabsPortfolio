import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  status: string;
  side: "left" | "right";
  color: "cyan" | "purple";
}

const timelineItems: TimelineItem[] = [
  {
    id: "top-speed-cincy",
    title: "Top Speed Cincy",
    description: "First client website built with WordPress",
    status: "CLIENT PROJECT",
    side: "left",
    color: "cyan"
  },
  {
    id: "sean-allen-course",
    title: "Sean Allen Course",
    description: "iOS development fundamentals and SwiftUI",
    status: "LEARNING MILESTONE",
    side: "right",
    color: "purple"
  },
  {
    id: "appetizer-app",
    title: "Appetizer Ordering App",
    description: "Full-featured SwiftUI app with MVVM architecture",
    status: "COURSE PROJECT",
    side: "left",
    color: "cyan"
  },
  {
    id: "habitn",
    title: "Habitn",
    description: "ADHD-focused habit tracker with Firebase",
    status: "IN DEVELOPMENT",
    side: "right",
    color: "purple"
  },
  {
    id: "mind-match",
    title: "Mind Match",
    description: "React-based memory matching game",
    status: "UPCOMING",
    side: "left",
    color: "cyan"
  },
  {
    id: "picky-chef",
    title: "Picky Chef",
    description: "React Native recipe discovery app",
    status: "UPCOMING",
    side: "right",
    color: "purple"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "CLIENT PROJECT":
    case "COURSE PROJECT":
      return "text-blue-400";
    case "LEARNING MILESTONE":
      return "text-orange-400";
    case "IN DEVELOPMENT":
    case "UPCOMING":
      return "text-yellow-400";
    default:
      return "text-gray-400";
  }
};

export default function Timeline() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="timeline" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-center mb-16" data-testid="timeline-title">
          Development <span className="text-neon-cyan">Journey</span>
        </h2>
        
        <div ref={ref} className={`relative ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          {/* Timeline Line - Hidden on mobile, shown on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-cyan to-neon-purple opacity-50"></div>
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-cyan to-neon-purple opacity-50"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-16" data-testid="timeline-items">
            {timelineItems.map((item, index) => (
              <div key={item.id} className="relative" data-testid={`timeline-item-${item.id}`}>
                {/* Mobile Layout */}
                <div className="md:hidden flex items-center justify-between">
                  {item.side === "left" ? (
                    <>
                      <div className="w-5/12 text-right pr-4">
                        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700">
                          <h3 className={`font-bold text-lg mb-2 ${item.color === "cyan" ? "text-neon-cyan" : "text-neon-purple"}`}>
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                          <span className={`text-xs font-semibold ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                      <div className="relative z-10">
                        <div className={`w-6 h-6 rounded-full border-4 border-gray-900 ${
                          item.color === "cyan" ? "bg-neon-cyan" : "bg-neon-purple"
                        }`}></div>
                      </div>
                      <div className="w-5/12 pl-4"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-5/12 text-right pr-4"></div>
                      <div className="relative z-10">
                        <div className={`w-6 h-6 rounded-full border-4 border-gray-900 ${
                          item.color === "cyan" ? "bg-neon-cyan" : "bg-neon-purple"
                        }`}></div>
                      </div>
                      <div className="w-5/12 pl-4">
                        <div className="bg-gradient-to-l from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700">
                          <h3 className={`font-bold text-lg mb-2 ${item.color === "cyan" ? "text-neon-cyan" : "text-neon-purple"}`}>
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                          <span className={`text-xs font-semibold ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-between">
                  {item.side === "left" ? (
                    <>
                      <div className="w-5/12 text-right pr-8">
                        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700">
                          <h3 className={`font-bold text-xl mb-2 ${item.color === "cyan" ? "text-neon-cyan" : "text-neon-purple"}`}>
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                          <span className={`text-xs font-semibold ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                      <div className="relative z-10">
                        <div className={`w-6 h-6 rounded-full border-4 border-gray-900 ${
                          item.color === "cyan" ? "bg-neon-cyan" : "bg-neon-purple"
                        }`}></div>
                      </div>
                      <div className="w-5/12 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-5/12 text-right pr-8"></div>
                      <div className="relative z-10">
                        <div className={`w-6 h-6 rounded-full border-4 border-gray-900 ${
                          item.color === "cyan" ? "bg-neon-cyan" : "bg-neon-purple"
                        }`}></div>
                      </div>
                      <div className="w-5/12 pl-8">
                        <div className="bg-gradient-to-l from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700">
                          <h3 className={`font-bold text-xl mb-2 ${item.color === "cyan" ? "text-neon-cyan" : "text-neon-purple"}`}>
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                          <span className={`text-xs font-semibold ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
