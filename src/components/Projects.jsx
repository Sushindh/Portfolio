import React, { useState } from 'react';
import { ExternalLink, Github, Code, ChevronDown } from 'lucide-react';

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
      techStack: ["Flask", "Docker", "Grafana Dashboard", "Grafana Alloy","OpenTelemetry", "Prometheus", "Loki", "Tempo"],
      github: "https://github.com/Sushindh/Alloy-LTGP--Observability",
      color: "purple"
    },
    {
      title: " Capstone Student Management System (Production Use at VITC, Continuous Development)",
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
      blue: { gradient: "from-blue-600/10 to-transparent", border: "hover:border-blue-500/50", tech: "bg-blue-600/20 text-blue-300 border-blue-500/30" },
      purple: { gradient: "from-purple-600/10 to-transparent", border: "hover:border-purple-500/50", tech: "bg-purple-600/20 text-purple-300 border-purple-500/30" },
      green: { gradient: "from-green-600/10 to-transparent", border: "hover:border-green-500/50", tech: "bg-green-600/20 text-green-300 border-green-500/30" },
      yellow: { gradient: "from-yellow-600/10 to-transparent", border: "hover:border-yellow-500/50", tech: "bg-yellow-600/20 text-yellow-300 border-yellow-500/30" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`portfolio-card card-glow bg-gradient-to-br ${getColorClasses(project.color).gradient} ${getColorClasses(project.color).border} p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm transition-all cursor-pointer hover:shadow-lg`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
                </div>
                <Code size={24} className={`text-blue-400 flex-shrink-0`} />
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4 text-justify ">{project.description}</p>
              
              {expandedProject === index && (
                <div className="space-y-3 mb-4 pb-4 border-t border-gray-600/30 pt-4">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Features</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-gray-700/30 text-gray-200 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Tech</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={getColorClasses(project.color).tech + " px-2 py-1 rounded text-xs"}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex gap-2 pt-3 border-t border-gray-600/30 items-center justify-between">
                <div className="flex gap-2 flex-1 relative z-20">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-1 bg-gray-700/30 hover:bg-gray-600/40 text-gray-200 py-2 px-3 rounded-lg transition-all font-medium text-sm cursor-pointer pointer-events-auto z-20"
                  >
                    <Github size={16} />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 hover:from-blue-600/50 hover:to-purple-600/50 text-white py-2 px-3 rounded-lg transition-all font-medium text-sm cursor-pointer pointer-events-auto z-20"
                    >
                      <ExternalLink size={16} />
                      <span className="hidden sm:inline">Demo</span>
                    </a>
                  )}
                </div>
                <button
                  className="text-gray-400 hover:text-white transition-colors z-20 relative"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedProject(expandedProject === index ? null : index);
                  }}
                >
                  <ChevronDown size={18} className={`transition-transform ${expandedProject === index ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          ))}
          
          <div className="card-glow bg-gradient-to-br from-gray-700/20 to-transparent p-8 rounded-xl border border-dashed border-gray-700/50 backdrop-blur-sm hover:border-gray-600 transition-all flex flex-col items-center justify-center min-h-72">
            <div className="text-center">
              <Code size={48} className="mx-auto mb-4 text-gray-400" />
              <h3 className="text-2xl font-bold text-gray-300 mb-2">More Coming Soon</h3>
              <p className="text-gray-400">Stay tuned for exciting new projects and updates!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
