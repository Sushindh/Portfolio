import React from 'react';
import { Code, Zap, Wrench, Cloud, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

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
      skills: ["Git", "GitHub", "Docker", "MongoDB", "Linux", "VS Code", "Microsoft Office Suite"]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "yellow",
      skills: ["Prometheus", "Grafana", "Grafana Alloy", "Tempo", "Loki", "OpenTelemetry"]
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
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        border: "border-blue-500/20",
        glow: "group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
      },
      purple: {
        bg: "bg-purple-500/10",
        text: "text-purple-400",
        border: "border-purple-500/20",
        glow: "group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
      },
      green: {
        bg: "bg-green-500/10",
        text: "text-green-400",
        border: "border-green-500/20",
        glow: "group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
      },
      yellow: {
        bg: "bg-yellow-500/10",
        text: "text-yellow-400",
        border: "border-yellow-500/20",
        glow: "group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]"
      },
      pink: {
        bg: "bg-pink-500/10",
        text: "text-pink-400",
        border: "border-pink-500/20",
        glow: "group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
      }
    };
    return colors[color];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-gradient inline-block">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {Object.entries(skillsData).map(([key, skillGroup], index) => {
            const IconComponent = skillGroup.icon;
            const colors = getColorClasses(skillGroup.color);

            return (
              <motion.div
                variants={itemVariants}
                key={key}
                className="bg-dark-card border border-dark-border p-6 rounded-2xl backdrop-blur-xl group hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-glass relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full -mr-12 -mt-12 transition-colors duration-500 group-hover:from-white/10"></div>

                <div className={`${colors.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${colors.border} ${colors.glow} transition-all duration-300 relative z-10`}>
                  <IconComponent size={28} className={colors.text} />
                </div>

                <h3 className="text-xl font-bold text-white font-heading mb-4 relative z-10">
                  {skillGroup.title}
                </h3>

                <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`text-sm font-medium px-3 py-1.5 rounded-lg border ${colors.border} bg-white/5 text-gray-300 hover:text-white transition-colors cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
