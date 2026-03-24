import React, { useState } from 'react';
import { ExternalLink, Github, Code, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: "Payment Gateway Integration",
      description: "Built a secure full-stack payment gateway using FastAPI, React, and MongoDB with integrated observability. Designed real-time error tracking using OpenTelemetry and visualized insights with Grafana Alloy. Implemented alerting and system health dashboards to support production-grade monitoring.",
      features: ["Real-time telemetry", "Production-grade monitoring", "Alerting dashboards"],
      techStack: ["FastAPI", "React", "TailwindCSS", "MongoDB", "Docker", "Grafana Dashboard", "Grafana Alloy", "OpenTelemetry", "Prometheus", "Loki", "Tempo"],
      github: "https://github.com/Sushindh/Payment-Gateway-Obs",
      color: "blue"
    },
    {
      title: "Observability of a basic Flask application using Alloy",
      description: "Created a lightweight Flask application to demonstrate end-to-end observability with OpenTelemetry, Docker, and Grafana Alloy. Configured telemetry collection for 3+ endpoints; presented demo during a technical session to 15+ peers.",
      features: ["End-to-end observability", "Docker containerization", "Live technical presentation"],
      techStack: ["Flask", "Docker", "Grafana Dashboard", "Grafana Alloy", "OpenTelemetry", "Prometheus", "Loki", "Tempo"],
      github: "https://github.com/Sushindh/Alloy-LTGP--Observability",
      color: "purple"
    },
    {
      title: "Capstone Student Management System (Production Use at VITC, Continuous Development)",
      description: "Co-Developed and deployed a full-scale academic management platform used by 3000+ students and 300+ faculty panels, eliminating manual tracking and greatly improving operational efficiency.",
      features: [
        "Role-Based Access Control (RBAC) for Guides and Panels",
        "Dynamic Evaluation & Marking Schema with Configurable Weights",
        "Real-time Panel Grading Interface with Plagiarism Flagging",
        "Automated Deadline Locking & Submission Integrity System",
        "Exception Handling Workflow for Edit Requests & Extensions",
        "Integrated Attendance Tracking & Student Contribution Assessment",
        "Excel/CSV Bulk Data Parsing for Panel Scheduling",
        "Modern, Responsive UI with Lucide React Icons"
      ],
      techStack: ["React", "Tailwind CSS", "Express JS", "Mongo DB"],
      color: "yellow"
    },
    {
      title: "Login/Signup System",
      description: "Created a responsive login and signup page using Vite and React with modern UI/UX design. Implemented clean and intuitive design patterns with Tailwind CSS utilities. Developed reusable and modular components for efficient development and seamless functionality across all device sizes.",
      features: ["Responsive design", "Modern UI/UX", "Reusable components"],
      techStack: ["React", "Vite", "TailwindCSS"],
      github: "https://github.com/Sushindh/week2",
      demo: "https://week2-olive.vercel.app/",
      color: "green"
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { gradient: "from-blue-600/10 to-transparent", border: "hover:border-blue-500/50", icon: "text-blue-400", tech: "bg-blue-500/10 text-blue-300 border-blue-500/20" },
      purple: { gradient: "from-purple-600/10 to-transparent", border: "hover:border-purple-500/50", icon: "text-purple-400", tech: "bg-purple-500/10 text-purple-300 border-purple-500/20" },
      green: { gradient: "from-green-600/10 to-transparent", border: "hover:border-green-500/50", icon: "text-green-400", tech: "bg-green-500/10 text-green-300 border-green-500/20" },
      yellow: { gradient: "from-yellow-600/10 to-transparent", border: "hover:border-yellow-500/50", icon: "text-yellow-400", tech: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20" }
    };
    return colors[color] || colors.blue;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-gradient inline-block">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => {
            const isExpanded = expandedProject === index;
            const colors = getColorClasses(project.color);

            return (
              <motion.div
                variants={itemVariants}
                key={index}
                layout
                className={`bg-dark-card border border-dark-border backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-glass hover:-translate-y-1 group ${colors.border}`}
                onClick={() => setExpandedProject(isExpanded ? null : index)}
              >
                <motion.div layout className={`p-6 sm:p-8 bg-gradient-to-br transition-opacity ${colors.gradient} h-full flex flex-col cursor-pointer relative`}>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-white/10 transition-colors"></div>

                  <motion.div layout className="flex items-start justify-between gap-4 mb-4 relative z-10">
                    <motion.h3 layout className="text-xl md:text-2xl font-bold text-white font-heading leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {project.title}
                    </motion.h3>
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm ${colors.icon}`}>
                      <Code size={24} />
                    </div>
                  </motion.div>

                  <motion.p layout className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </motion.p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-5 mb-6 overflow-hidden"
                      >
                        <div>
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.features.map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`${colors.tech} border px-3 py-1.5 rounded-lg text-xs font-medium`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div layout className="flex gap-3 pt-4 border-t border-white/10 items-center justify-between mt-auto">
                    <div className="flex gap-3 relative z-20">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white py-2 px-4 rounded-xl transition-all font-medium text-sm cursor-pointer shadow-sm hover:shadow-md group/btn"
                        >
                          <Github size={18} className="group-hover/btn:scale-110 transition-transform" />
                          <span className="hidden sm:inline">Code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white py-2 px-4 rounded-xl transition-all font-medium text-sm cursor-pointer shadow-[0_4px_14px_rgba(139,92,246,0.3)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 group/btn"
                        >
                          <ExternalLink size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          <span className="hidden sm:inline">Demo</span>
                        </a>
                      )}
                    </div>
                    <motion.button
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-20 border border-transparent hover:border-white/10"
                      aria-label="Toggle details"
                    >
                      <ChevronDown size={20} />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}

          <motion.div
            variants={itemVariants}
            className="bg-dark-bg p-8 flex flex-col items-center justify-center min-h-[300px] border border-dashed border-white/20 rounded-2xl hover:bg-white/[0.02] hover:border-white/30 transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Code size={32} className="text-gray-500 group-hover:text-gray-300 transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-gray-300 mb-3 font-heading">More Building</h3>
            <p className="text-gray-500 text-center max-w-sm">
              Constantly learning and building new things. Stay tuned for exciting new projects and updates!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
