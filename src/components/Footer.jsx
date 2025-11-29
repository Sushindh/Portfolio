import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-700/30 py-12 px-4">
      <div className="max-w-6xl mx-auto ">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all"
            >
              Sushindh
            </a>
            <p className="text-gray-400">
              Aspiring Software Engineer | B.Tech CSE ’27, VIT Chennai | Intern @ Samsung PRISM | Ex-Intern @ CDAC | Exploring ML AI, Cloud | DSA &Tech Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2 ">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a><br/>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a><br/>
              <a href="#experience" className="text-gray-400 hover:text-white transition-colors text-sm">Experience</a><br/>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">Projects</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/sushindh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white p-3 rounded-lg transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/sushindh-a-7281a1288"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white p-3 rounded-lg transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sushindh.anandan@gmail.com"
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white p-3 rounded-lg transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/30 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Sushindh Anandan. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Crafted with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
