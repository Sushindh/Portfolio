import React from 'react';
import { Code, Zap, Wrench, Cloud, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillsData = {
    languages: {
      title: "Languages",
      icon: Code,
      color: "blue",
      skills: ["Java", "Python", "C", "C++", "JavaScript", "HTML/CSS", "SQL"]
    },
    frameworks: {
      title: "Frameworks & Libraries",
      icon: Zap,
      color: "purple",
      skills: ["React", "Tailwind CSS", "Fast API"]
    },
    tools: {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "green",
      skills: ["Git", "GitHub", "Docker", "MongoDB", "Linux","VS Code", " Microsoft Office Suite (PowerPoint, Excel, Word)"]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "yellow",
      skills: ["Prometheus", "Grafana", "Grafana Alloy","Tempo", "Loki", "OpenTelemetry"]
    },
    soft: {
      title: "Soft Skills",
      icon: Lightbulb,
      color: "pink",
      skills: ["Effective Communication", "Team Collaboration", "Adaptability", "Ownership Mindset"]
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-600/10",
        text: "text-blue-400",
        border: "border-blue-500/30",
        hover: "hover:border-blue-400"
      },
      purple: {
        bg: "bg-purple-600/10",
        text: "text-purple-400",
        border: "border-purple-500/30",
        hover: "hover:border-purple-400"
      },
      green: {
        bg: "bg-green-600/10",
        text: "text-green-400",
        border: "border-green-500/30",
        hover: "hover:border-green-400"
      },
      yellow: {
        bg: "bg-yellow-600/10",
        text: "text-yellow-400",
        border: "border-yellow-500/30",
        hover: "hover:border-yellow-400"
      },
      pink: {
        bg: "bg-pink-600/10",
        text: "text-pink-400",
        border: "border-pink-500/30",
        hover: "hover:border-pink-400"
      }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-32 px-4 bg-gray-950/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData).map(([key, skillGroup], index) => {
            const IconComponent = skillGroup.icon;
            const colorClasses = getColorClasses(skillGroup.color);
            
            return (
              <div
                key={key}
                className="skill-group card-glow bg-gray-800/20 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={`${colorClasses.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent size={24} className={colorClasses.text} />
                </div>
                
                <h3 className={`text-lg font-bold mb-4 ${colorClasses.text}`}>
                  {skillGroup.title}
                </h3>
                
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`skill-badge ${colorClasses.bg} ${colorClasses.text} px-4 py-2 rounded-lg text-sm border ${colorClasses.border} ${colorClasses.hover} transition-all`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="mt-16 p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
          <p className="text-gray-300">
            I'm passionate about staying at the forefront of technology. Currently exploring MLOps and Full Stack Development
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
