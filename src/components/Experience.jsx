import React from 'react';
import { Calendar, MapPin, ChevronRight, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Project Intern",
      company: "Samsung PRISM (Samsung R&D Institute India)",
      date: "July 2025 – Present",
      location: "Remote",
      icon: "bg-primary-500/20 text-primary-400 border-primary-500/30",
      features: [
        "Developing an AI-powered Intelligent Chatbot for LSM/USM platforms using LLMs, Retrieval Augmented Generation (RAG) and intelligent automation techniques.",
        "Collaborating with cross-functional teams to design scalable chatbot workflows, analyze user interaction patterns and document architectural decisions.",
        "Successfully integrated client–server pipelines with a RAG-based LLM model, enabling more accurate and context-aware responses by leveraging Co-Pilot and modern AI engineering practices.",
      ]
    },
    {
      title: "DevOps Intern",
      company: "C-DAC, Chennai",
      date: "May 2025 - June 2025",
      location: "Chennai, Tamil Nadu",
      icon: "bg-secondary-500/20 text-secondary-400 border-secondary-500/30",
      features: [
        "Implemented observability and monitoring for containerized applications using Docker, enhancing system reliability.",
        "Utilized Prometheus, Grafana, and Loki to collect and visualize metrics, improving performance analysis.",
        "Integrated OpenTelemetry for distributed tracing, enabling end-to-end monitoring solutions.",
        "Gained hands-on experience in building resilient infrastructure aligned with DevOps best practices."
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0, opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="experience" className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-gradient inline-block">
            Experience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline continuous line */}
          <div className="absolute left-6 md:left-1/2 md:-ml-[0.5px] top-4 bottom-4 w-px bg-gradient-to-b from-primary-500/50 via-secondary-500/50 to-transparent"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                variants={itemVariants}
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -ml-3 md:-ml-3.5 top-6 z-20 w-8 h-8 md:w-9 md:h-9 rounded-full bg-dark-bg border-4 border-dark-border flex items-center justify-center shadow-glass transition-transform duration-300 hover:scale-125">
                  <div className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-gradient-to-br ${index % 2 === 0 ? 'from-primary-400 to-primary-600 shadow-[0_0_10px_rgba(139,92,246,0.8)]' : 'from-secondary-400 to-secondary-600 shadow-[0_0_10px_rgba(6,182,212,0.8)]'}`}></div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-dark-card border border-dark-border p-6 md:p-8 rounded-2xl backdrop-blur-xl group hover:border-white/20 transition-all hover:shadow-glass hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-[100px] -mr-8 -mt-8 transition-colors duration-500 group-hover:bg-white/10"></div>

                    <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white font-heading mb-1">{exp.title}</h3>
                        <p className={`text-lg font-medium ${index % 2 === 0 ? 'text-primary-400' : 'text-secondary-400'}`}>{exp.company}</p>
                      </div>
                      <div className={`p-2.5 rounded-xl border backdrop-blur-sm hidden sm:block ${exp.icon}`}>
                        <Briefcase size={20} />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm font-medium mb-6 relative z-10 bg-dark-bg/50 inline-flex p-1.5 rounded-lg border border-white/5">
                      <div className="flex items-center gap-1.5 px-2">
                        <Calendar size={14} className={index % 2 === 0 ? 'text-primary-400' : 'text-secondary-400'} />
                        {exp.date}
                      </div>
                      <div className="w-px h-4 bg-white/10 hidden sm:block"></div>
                      <div className="flex items-center gap-1.5 px-2">
                        <MapPin size={14} className={index % 2 === 0 ? 'text-primary-400' : 'text-secondary-400'} />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-3 relative z-10">
                      {exp.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex gap-3 text-gray-300 group/item">
                          <ChevronRight size={18} className={`flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:translate-x-1 ${index % 2 === 0 ? 'text-primary-400' : 'text-secondary-400'}`} />
                          <span className="text-sm md:text-base leading-relaxed text-gray-400 group-hover/item:text-gray-200 transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
