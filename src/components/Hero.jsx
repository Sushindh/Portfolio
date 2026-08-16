import React from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary-500/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-fuchsia-500/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-10">
          <motion.div variants={itemVariants} className="inline-block mb-3">
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-gray-300 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight leading-tight"
          >
            Hi, I'm <br className="md:hidden" />
            <span className="text-gradient">Sushindh Anandan</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 mb-8">
            <h2 className="text-xl md:text-3xl text-gray-300 font-medium font-heading">
              Software Engineer & <span className="text-white">Full-Stack Developer</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base font-medium">
              <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-gray-200">Ex-Intern @ C-DAC</span>
              <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-gray-200">Intern @ Samsung PRISM</span>
              <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-gray-200">B.Tech CSE '27</span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Passionate about creating impactful solutions with modern web technologies.
            Currently exploring AI/ML, Cloud native architectures, and building scalable systems.
          </motion.p>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-4 mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:sushindh.anandan@gmail.com"
            className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all group"
          >
            <Mail size={20} className="group-hover:rotate-12 transition-transform" />
            Let's Connect
          </motion.a>

          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1, translateY: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/sushindh"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-full text-white backdrop-blur-md transition-all group"
              aria-label="GitHub"
            >
              <Github size={24} className="group-hover:text-white text-gray-300 transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, translateY: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/sushindh-a-7281a1288"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-full text-white backdrop-blur-md transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="group-hover:text-[#0A66C2] text-gray-300 transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, translateY: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1BfhI_lo7Xvx0Yzd2bRdn7XMp8rjo6K5Q/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-full text-white backdrop-blur-md transition-all group"
              aria-label="Resume"
            >
              <ExternalLink size={24} className="text-gray-300 transition-colors" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          {/* <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-16 border-2 border-white/20 rounded-full flex justify-center p-2 backdrop-blur-sm bg-white/5 hover:border-white/40 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-gradient-to-b from-primary-400 to-secondary-400 rounded-full"
            />
          </motion.div> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
