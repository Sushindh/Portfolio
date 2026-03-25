import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark-border py-12 px-4 overflow-hidden mt-20">
      <div className="absolute inset-0 bg-dark-bg"></div>

      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent shadow-[0_0_20px_rgba(139,92,246,0.3)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-5">
            <a
              href="#home"
              className="text-3xl font-bold font-heading text-gradient inline-block hover:scale-105 transition-transform origin-left"
            >
              Sushindh
            </a>
            <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
              Aspiring Software Engineer | B.Tech CSE ’27, VIT Chennai | Intern @ Samsung PRISM | Ex-Intern @ CDAC | Exploring ML AI, Cloud | DSA & Tech Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-heading text-xl font-bold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-3 font-medium">
              <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/0 group-hover:bg-primary-500 transition-colors"></span>Home</a>
              <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/0 group-hover:bg-primary-500 transition-colors"></span>About</a>
              <a href="#experience" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/0 group-hover:bg-primary-500 transition-colors"></span>Experience</a>
              <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/0 group-hover:bg-primary-500 transition-colors"></span>Projects</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-heading text-xl font-bold">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/sushindh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-card border border-dark-border hover:border-primary-500 text-gray-400 hover:text-white p-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/sushindh-a-7281a1288"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-card border border-dark-border hover:border-primary-500 text-gray-400 hover:text-white p-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sushindh.anandan@gmail.com"
                className="bg-dark-card border border-dark-border hover:border-primary-500 text-gray-400 hover:text-white p-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-1"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-medium">
          <p className="text-gray-500 text-sm">
            © {currentYear} Sushindh Anandan. All rights reserved.
          </p>
          {/* <p className="text-gray-500 text-sm flex items-center gap-1.5">
            Crafted with <Heart size={14} className="text-pink-500 hover:scale-125 transition-transform cursor-pointer" /> using React & Tailwind
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
