import React, { useState } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';

const About = () => {
  const [expandedPatent, setExpandedPatent] = useState(null);
  return (
    <section id="about" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hey there! I'm a pre-final year Computer Science undergrad at VIT Chennai who believes tech is more than just code — it's about creating real-world impact with meaningful solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey spans full-stack development, DevOps practices, and observability engineering. I've worked hands-on with cutting-edge technologies during my internship at C-DAC, where I built monitoring solutions and conducted technical sessions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm passionate about building scalable systems, exploring AI/ML, Cloud Computing and contributing to projects that make a difference. Whether it's debugging a tricky error or diving into a new framework, I enjoy breaking complex problems into simple, effective solutions.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm border border-blue-500/30 hover:border-blue-400 transition-all skill-badge">Problem Solver</span>
              <span className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm border border-purple-500/30 hover:border-purple-400 transition-all skill-badge">Team Player</span>
              <span className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm border border-green-500/30 hover:border-green-400 transition-all skill-badge">Continuous Learner</span>
              <span className="bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-full text-sm border border-yellow-500/30 hover:border-yellow-400 transition-all skill-badge">Initiative Taker</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card-glow bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50">
              <h3 className="text-2xl font-bold mb-4 text-blue-400 flex items-center gap-2"><span className="text-2xl">🎓</span>Education</h3>
              <div className="space-y-2">
                <p className="font-medium">Bachelor of Technology - Computer Science</p>
                <p className="text-gray-400">Vellore Institute of Technology, Chennai</p>
                <p className="text-gray-400">CGPA: 8.84 | Aug 2023 - July 2027</p>
              </div>
            </div>
            
            <div className="card-glow bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50">
              <h3 className="text-2xl font-bold mb-4 text-purple-400 flex items-center gap-2"><span className="text-2xl">🔬</span>Patents</h3>
              <div className="space-y-4">
                <div className="pt-4 border-t border-purple-500/20">
                  <p className="font-medium">Wearable Eye Drop Dispensing Device</p>
                  <p className="text-gray-400 text-sm">Automates eye-drop delivery with UV-C sterilization and wireless control</p>
                  <p className="text-gray-400 text-sm">Patent ID: 202541108328 | Published Nov 2025</p>
                  <a 
                    href="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 bg-purple-600/20 hover:bg-purple-600/40 px-3 py-1 rounded text-sm mt-2 transition-all cursor-pointer z-20 relative pointer-events-auto"
                  >
                    <ExternalLink size={14} />
                    View Details
                  </a>
                </div>
                <div>
                  <p className="font-medium">Portable Drug Delivery Device</p>
                  <p className="text-gray-400 text-sm">Smart insulin pen with smartphone automation</p>
                  <p className="text-gray-400 text-sm">Patent ID: 202541004858 | Published Jan 2025</p>
                  <a 
                    href="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 bg-purple-600/20 hover:bg-purple-600/40 px-3 py-1 rounded text-sm mt-2 transition-all cursor-pointer z-20 relative pointer-events-auto"
                  >
                    <ExternalLink size={14} />
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
