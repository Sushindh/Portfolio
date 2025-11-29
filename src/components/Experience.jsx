import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Project Intern",
      company: "Samsung PRISM (Samsung R&D Institute India)",
      date: "July 2025 – Present",
      location: "Remote",
      features: [
        "Developing an AI-powered Intelligent Chatbot for LSM/USM platforms using LLMs, Retrieval Augmented Generation (RAG) and intelligent automation techniques.",
        "Collaborating with cross-functional teams to design scalable chatbot workflows, analyze user interaction patterns and document architectural decisions.",
        "Successfully integrated client–server pipelines with a RAG-based LLM model, enabling more accurate and context-aware responses by leveraging Co-Pilot and modern AI engineering practices.",
        
      ]
    },
    {
      title: "DevOps Intern",
      company: "C-DAC, Chennai",
      date: "May 2025 - July 2025",
      location: "Chennai, Tamil Nadu",
      features: [
        "Implemented observability and monitoring for containerized applications using Docker, enhancing system reliability.",
        "Utilized Prometheus, Grafana, and Loki to collect and visualize metrics, improving performance analysis.",
        "Integrated OpenTelemetry for distributed tracing, enabling end-to-end monitoring solutions.",
        "Gained hands-on experience in building resilient infrastructure aligned with DevOps best practices."
      ]
    },
  ];

  return (
    <section id="experience" className="py-32 px-4 bg-gray-950/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card card-glow bg-gray-800/20 p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-lg text-blue-400 font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col items-start md:items-end text-gray-400 text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={16} />
                    {exp.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex gap-3 text-gray-300">
                    <ChevronRight size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
