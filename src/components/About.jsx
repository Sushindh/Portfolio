import React, { useState } from 'react';
import { ExternalLink, ChevronDown, GraduationCap, Microscope, Code2, Network, Cpu, Lightbulb, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const [expandedPatent, setExpandedPatent] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-gradient inline-block">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Hey there! I'm a pre-final year Computer Science undergrad at <span className="text-white font-medium">VIT Chennai</span> who believes tech is more than just code — it's about creating real-world impact with meaningful solutions.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              My journey spans <span className="text-primary-400 font-medium">full-stack development</span>, DevOps practices, and observability engineering. I've worked hands-on with cutting-edge technologies during my internship at C-DAC, where I built monitoring solutions and conducted technical sessions.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              I'm passionate about building scalable systems, exploring <span className="text-secondary-400 font-medium">AI Security</span>, Backend Engineering and contributing to projects that make a difference. Whether it's debugging a tricky error or diving into a new framework, I enjoy breaking complex problems into simple, effective solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-10">
              {[
                { label: 'Problem Solver', icon: Lightbulb, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
                { label: 'Team Player', icon: Network, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
                { label: 'Continuous Learner', icon: Cpu, color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' },
                { label: 'Initiative Taker', icon: Code2, color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20' }
              ].map((skill, i) => (
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  key={i}
                  className={`flex items-center gap-2 ${skill.bg} ${skill.color} px-4 py-2.5 rounded-full text-sm font-medium border ${skill.border} backdrop-blur-sm shadow-sm transition-all`}
                >
                  <skill.icon size={16} />
                  {skill.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 lg:mt-0 mt-8"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(6,182,212,0.15)" }}
              className="bg-dark-card p-8 rounded-2xl border border-dark-border backdrop-blur-xl transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-500/10 rounded-bl-full -mr-16 -mt-16 group-hover:bg-secondary-500/20 transition-colors"></div>

              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3 font-heading relative z-10">
                <div className="p-2.5 rounded-xl bg-secondary-500/20 border border-secondary-500/30 text-secondary-400">
                  <GraduationCap size={24} />
                </div>
                Education
              </h3>

              <div className="space-y-3 relative z-10">
                <p className="text-lg font-bold text-gray-200">Bachelor of Technology - Computer Science</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <p className="text-secondary-400 font-medium tracking-wide">Vellore Institute of Technology, Chennai</p>
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-lg text-xs font-semibold text-white tracking-wider">CGPA: 8.90</span>
                </div>
                <p className="text-gray-500 text-sm font-medium">Aug 2023 - July 2027</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(139,92,246,0.15)" }}
              className="bg-dark-card p-8 rounded-2xl border border-dark-border backdrop-blur-xl transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-bl-full -mr-16 -mt-16 group-hover:bg-primary-500/20 transition-colors"></div>

              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3 font-heading relative z-10">
                <div className="p-2.5 rounded-xl bg-primary-500/20 border border-primary-500/30 text-primary-400">
                  <Microscope size={24} />
                </div>
                Patents
              </h3>

              <div className="space-y-6 relative z-10">
                <div className="group/patent">
                  <p className="text-lg font-bold text-gray-200 group-hover/patent:text-primary-400 transition-colors">Wearable Eye Drop Dispensing Device</p>
                  <p className="text-gray-400 mt-2 mb-3 leading-relaxed">Automates eye-drop delivery with UV-C sterilization and wireless control</p>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm font-mono bg-dark-bg px-2.5 py-1 rounded-md border border-white/5">ID: 202541108328 | Nov 2025</p>
                    <a
                      href="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white bg-primary-500/20 hover:bg-primary-500 hover:text-white border border-primary-500/30 px-4 py-1.5 rounded-lg text-sm transition-all font-medium cursor-pointer"
                    >
                      <ExternalLink size={14} />
                      Verify
                    </a>
                  </div>
                </div>

                <div className="h-px bg-white/10 w-full" />

                <div className="group/patent">
                  <p className="text-lg font-bold text-gray-200 group-hover/patent:text-primary-400 transition-colors">Portable Drug Delivery Device</p>
                  <p className="text-gray-400 mt-2 mb-3 leading-relaxed">Smart insulin pen with smartphone automation and tracking</p>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm font-mono bg-dark-bg px-2.5 py-1 rounded-md border border-white/5">ID: 202541004858 | Jan 2025</p>
                    <a
                      href="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white bg-primary-500/20 hover:bg-primary-500 hover:text-white border border-primary-500/30 px-4 py-1.5 rounded-lg text-sm transition-all font-medium cursor-pointer"
                    >
                      <ExternalLink size={14} />
                      Verify
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(16,185,129,0.15)" }}
              className="bg-dark-card p-8 rounded-2xl border border-dark-border backdrop-blur-xl transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -mr-16 -mt-16 group-hover:bg-emerald-500/20 transition-colors"></div>

              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3 font-heading relative z-10">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
                  <BookOpen size={24} />
                </div>
                Research Publications
              </h3>

              <div className="space-y-6 relative z-10">
                <div className="group/pub">
                  <p className="text-lg font-bold text-gray-200 group-hover/pub:text-emerald-400 transition-colors">
                    Transient Search Driven Random Forest Model for Predicting Diluted Heavy Crude Oil Viscosity
                  </p>
                  <p className="text-gray-400 mt-2 mb-3 leading-relaxed">Frontiers in Physics, 2026</p>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm font-mono bg-dark-bg px-2.5 py-1 rounded-md border border-white/5">Journal Article</p>
                    <a
                      href="https://www.frontiersin.org/journals/physics/articles/10.3389/fphy.2026.1775533/abstract"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white bg-emerald-500/20 hover:bg-emerald-500 hover:text-white border border-emerald-500/30 px-4 py-1.5 rounded-lg text-sm transition-all font-medium cursor-pointer"
                    >
                      <ExternalLink size={14} />
                      Read Paper
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
