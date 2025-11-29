import React from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            Sushindh Anandan
          </h1>
          <div className="flex flex-col items-center gap-2 mb-8">
            <p className="text-xl md:text-2xl text-blue-300 font-semibold">
              Aspiring Software Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-gray-300 text-sm md:text-base">
              <span className="px-3 py-1 bg-blue-500/20 rounded-full">Ex-Intern @ C-DAC</span>
              <span className="px-3 py-1 bg-purple-500/20 rounded-full">Intern @ Samsung PRISM</span>
              <span className="px-3 py-1 bg-green-500/20 rounded-full">B.Tech CSE '27</span>
            </div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Full-stack developer passionate about creating impactful solutions with React, FastAPI and DevOps. 
            Exploring AI/ML, Cloud and building scalable systems.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          <a href="mailto:sushindh.anandan@gmail.com" className="btn-glow flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-7 py-3 rounded-lg font-semibold shadow-lg shadow-blue-500/50 transform hover:-translate-y-1 group">
            <Mail size={20} className="group-hover:rotate-12 transition-transform" />
            Get In Touch
          </a>
          <a href="https://github.com/sushindh" className="btn-glow flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-7 py-3 rounded-lg font-semibold border border-gray-600 hover:border-gray-500 shadow-lg transform hover:-translate-y-1 group">
            <Github size={20} className="group-hover:scale-125 transition-transform" />
            GitHub
          </a>
          <a href="https://linkedin.com/in/sushindh-a-7281a1288" className="btn-glow flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 px-7 py-3 rounded-lg font-semibold shadow-lg shadow-blue-500/40 transform hover:-translate-y-1 group">
            <Linkedin size={20} className="group-hover:rotate-12 transition-transform" />
            LinkedIn
          </a>
          <a href="https://drive.google.com/file/d/1X86yfwRvwHWI8i0h-SBdp9bUqdAFG9Ib/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-glow flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 px-7 py-3 rounded-lg font-semibold shadow-lg shadow-purple-500/50 transform hover:-translate-y-1 group">
            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            View Resume
          </a>
        </div>

        <div className="animate-bounce-slow mt-16" onClick={() => scrollToSection('about')}>
          <ChevronDown size={36} className="mx-auto text-blue-400 animate-float cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
