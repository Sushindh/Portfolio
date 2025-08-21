import React, { useState, useEffect } from 'react';
import { Github, Linkedin, SquarePlay, Mail, Phone, MapPin, Code, Database, Cloud, Award, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['Java', 'Python', 'C/C++', 'JavaScript', 'HTML/CSS'],
    frameworks: ['React.js', 'FastAPI', 'Tailwind CSS', 'Express.js', 'Node.js'],
    tools: ['Docker', 'OpenTelemetry', 'Grafana', 'Prometheus', 'Loki', 'Tempo', 'MongoDB', 'Git', 'Linux'],
    cloud: ['Oracle Cloud Infrastructure', 'DevOps', 'Observability', 'Containerization']
  };

  const projects = [
    {
      title: "Observability on Payment Gateway",
      tech: "FastAPI, React, TailwindCSS, MongoDB, Docker, Observability tools",
      description: "Built a secure full-stack payment gateway using FastAPI, React, and MongoDB with integrated observability. Designed real-time error tracking using OpenTelemetry and visualized insights with Grafana Alloy. Implemented alerting and system health dashboards to support production-grade monitoring.",
      features: ["Real-time telemetry", "Production-grade monitoring", "Alerting dashboards"],
      github: "https://github.com/Sushindh/Payment-Gateway-Obs"
    },
    {
      title: "Observability of a basic Flask application using Alloy",
      tech: "Flask, Docker, Observability tools",
      description: "Created a lightweight Flask application to demonstrate end-to-end observability with OpenTelemetry, Docker, and Grafana Alloy. Configured telemetry collection for 3+ endpoints; presented demo during a technical session to 15+ peers.",
      features: ["End-to-end observability", "Docker containerization", "Live technical presentation"],
      github: "https://github.com/Sushindh/Alloy-LTGP--Observability"
    },
    {
      title: "Login & SignUp Page",
      tech: "React.js, Vite, TailwindCSS",
      description: "Created a responsive login and signup page using Vite and React with modern UI/UX design. Implemented clean and intuitive design patterns with Tailwind CSS utilities. Developed reusable and modular components for efficient development and seamless functionality across all device sizes.",
      features: ["Responsive design", "Modern UI/UX", "Reusable components"],
      github: "https://github.com/Sushindh/week2",
      demo: "https://week2-olive.vercel.app/"
    },
    {
      title: "Capstone Student Management System (Ongoing)",
      tech: "MongoDB, Express, React, Node, TailwindCSS",
      description: "Co-developed a full-stack coordination tool for 50+ student-project pairs, automating 100% of manual progress tracking. Led frontend and UX design using React and Tailwind, enhancing academic workflow visibility and reducing update overhead.",
      features: ["Full-stack MERN", "Automated tracking", "UX-focused design"],
      github: null
    }
  ]

  const NavItem = ({ section, label }) => (
    <button
      onClick={() => scrollToSection(section)}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
        activeSection === section 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'text-gray-300 hover:text-white hover:bg-gray-800'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sushindh Anandan
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              <NavItem section="home" label="Home" />
              <NavItem section="about" label="About" />
              <NavItem section="experience" label="Experience" />
              <NavItem section="projects" label="Projects" />
              <NavItem section="skills" label="Skills" />
              <NavItem section="contact" label="Contact" />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <NavItem section="home" label="Home" />
              <NavItem section="about" label="About" />
              <NavItem section="experience" label="Experience" />
              <NavItem section="projects" label="Projects" />
              <NavItem section="skills" label="Skills" />
              <NavItem section="contact" label="Contact" />
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              Sushindh Anandan
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Aspiring Software Engineer | Ex-Intern @ C-DAC | Intern @ Samsung PRISM<br/>B.Tech CSE '27 at VIT, Chennai
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Full-stack developer passionate about creating impactful solutions with React, FastAPI, and DevOps. 
              Exploring AI/ML, Cloud, and building scalable systems.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:sushindh.anandan@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="https://github.com/sushindh" className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/sushindh-a-7281a1288" className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://drive.google.com/file/d/1tG6w8z3QYkpAYcug5Nagd7824S2jvdtA/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              <ExternalLink size={20} />
              View Resume
            </a>
          </div>

          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
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
              
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">Problem Solver</span>
                <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">Team Player</span>
                <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">Continuous Learner</span>
                <span className="bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-sm">Initiative Taker</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Education</h3>
                <div className="space-y-2">
                  <p className="font-medium">Bachelor of Technology - Computer Science</p>
                  <p className="text-gray-400">Vellore Institute of Technology, Chennai</p>
                  <p className="text-gray-400">CGPA: 8.84 | Aug 2023 - July 2027</p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Patent</h3>
                <div className="space-y-2">
                  <p className="font-medium">Portable Drug Delivery Device</p>
                  <p className="text-gray-400">Smart insulin pen with smartphone automation</p>
                  <p className="text-gray-400">Patent ID: 202541004858 | Published Jan 2025</p>
                  <a 
                    href="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm mt-3 transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Patent Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {/* Samsung Prism Internship */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-400">Project Intern</h3>
                  <p className="text-gray-300">Samsung PRISM (Samsung R&D Institute India), Remote</p>
                </div>
                <span className="text-gray-400 bg-gray-700 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 self-start">
                  July 2025 – Present
                </span>
              </div>
              {/* <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Engineered observability pipelines for containerized Python applications using Docker, OpenTelemetry, and Grafana Alloy stack (Loki, Tempo, Prometheus).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Instrumented real-time telemetry across multiple applications, enabling performance monitoring and efficient debugging via distributed tracing.</span>
                </li>
              </ul> */}
            </div>
            {/* C-DAC Experience */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-400">DevOps Intern</h3>
                  <p className="text-gray-300">Centre for Development of Advanced Computing (C-DAC), Chennai, Tamil Nadu</p>
                </div>
                <span className="text-gray-400 bg-gray-700 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 self-start">
                  May 2025 – June 2025
                </span>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Engineered observability pipelines for containerized Python applications using Docker, OpenTelemetry, and Grafana Alloy stack (Loki, Tempo, Prometheus).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Instrumented real-time telemetry across multiple applications, enabling performance monitoring and efficient debugging via distributed tracing.</span>
                </li>
              </ul>
            </div>

            {/* CodeChef Project Team Experience */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-purple-400">Project Team Member</h3>
                  <p className="text-gray-300">CodeChef VIT-Chennai Chapter</p>
                </div>
                <span className="text-gray-400 bg-gray-700 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 self-start">
                  February 2025 - Present
                </span>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Contributing to innovative project development and technical initiatives within the CodeChef chapter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Collaborating on competitive programming solutions and educational content creation.</span>
                </li>
              </ul>
            </div>

            {/* CodeChef Web Development Experience */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-green-400">Web Development Team Member</h3>
                  <p className="text-gray-300">CodeChef VIT-Chennai Chapter</p>
                </div>
                <span className="text-gray-400 bg-gray-700 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 self-start">
                  June 2024 - Present
                </span>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Designing, developing, and maintaining websites to ensure seamless user experience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Collaborating with team members to implement innovative web solutions and optimize site performance.</span>
                </li>
              </ul>
            </div>

            {/* Newton School Experience */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-yellow-400">Design Team Member</h3>
                  <p className="text-gray-300">Newton School Coding Club VITC</p>
                </div>
                <span className="text-gray-400 bg-gray-700 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 self-start">
                  January 2024 - May 2025
                </span>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Created visual content and marketing materials for coding events and workshops.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Collaborated with technical teams to design user-friendly interfaces and promotional graphics.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-sm text-gray-400 mb-3">Tech Stack:</p>
                  <p className="text-sm text-gray-300">{project.tech}</p>
                </div>
                {project.github && (
                  <div className="mt-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                    >
                      <Github size={16} />
                      View Repository
                    </a>
                  </div>
                )}
              
                {project.demo && (
                  <div className="mt-4">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                    >
                      <SquarePlay size={16} />
                      View demo
                    </a>
                  </div>
                )}
              </div>
            ))}
            <div className="mt-1 text-center">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 h-[467px] ">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Stay Tuned! 🚀</h4>
                <p className="text-gray-300 mb-4">
                  I'm constantly working on new projects and exploring cutting-edge technologies. 
                  Follow my GitHub for the latest updates and releases.
                </p>
                <a 
                  href="https://github.com/sushindh" 
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Github size={20} />
                  Follow on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-blue-400" size={24} />
                <h3 className="text-xl font-semibold text-blue-400">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold text-purple-400">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-green-400" size={24} />
                <h3 className="text-xl font-semibold text-green-400">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="text-yellow-400" size={24} />
                <h3 className="text-xl font-semibold text-yellow-400">Cloud & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill, index) => (
                  <span key={index} className="bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          {/* Certifications */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300">
                <Award className="text-blue-400 mx-auto mb-4" size={32} />
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Oracle Cloud Infrastructure 2025</h4>
                <p className="text-gray-300">Certified AI Foundations Associate</p>
                <p className="text-gray-400 text-sm mt-2">June 2025</p>
                <a 
                  href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=2D8ADC900F8551BA85566F7786F42CC6935B6DF083AED6E354F5564467D026D7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm mt-3 transition-colors"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center hover:border-purple-500/50 transition-all duration-300">
                <Award className="text-purple-400 mx-auto mb-4" size={32} />
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Getting Started with OpenTelemetry</h4>
                <p className="text-gray-300">The Linux Foundation</p>
                <p className="text-gray-400 text-sm mt-2">April 2025</p>
                <a 
                  href="https://drive.google.com/file/d/1R2UcJ2___d81-OjMCxuFF9-1T4o8lshh/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm mt-3 transition-colors"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center hover:border-green-500/50 transition-all duration-300">
                <Award className="text-green-400 mx-auto mb-4" size={32} />
                <h4 className="text-lg font-semibold text-green-400 mb-2">OpenTelemetry Foundations</h4>
                <p className="text-gray-300">Hands On Guide to Observability - Udemy</p>
                <p className="text-gray-400 text-sm mt-2">June 2025</p>
                <a 
                  href="https://www.linkedin.com/in/sushindh-a-7281a1288/details/certifications/1749579771902/single-media-viewer?type=DOCUMENT&profileId=ACoAAEXLgNAB8G-FovuO71EUEPkpxz_fdwHjd0I&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BP3%2Bl%2Fi%2BFSjStoYNcM61tKA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm mt-3 transition-colors"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center hover:border-yellow-500/50 transition-all duration-300">
                <Award className="text-yellow-400 mx-auto mb-4" size={32} />
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">Introduction to Quantum Computing</h4>
                <p className="text-gray-300">LinkedIn Learning</p>
                <p className="text-gray-400 text-sm mt-2">2024</p>
                <a 
                  href="https://lnkd.in/gE2HDcPi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm mt-3 transition-colors"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center hover:border-pink-500/50 transition-all duration-300">
                <Award className="text-pink-400 mx-auto mb-4" size={32} />
                <h4 className="text-lg font-semibold text-pink-400 mb-2">Matlab Onramp</h4>
                <p className="text-gray-300">MathWorks</p>
                <p className="text-gray-400 text-sm mt-2">2024</p>
                <a 
                  href="https://matlabacademy.mathworks.com/progress/share/certificate.html?id=127584ba-1e75-4d5f-979d-1e3c76104189&"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 text-sm mt-3 transition-colors"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center hover:border-cyan-500/50 transition-all duration-300">
                <Award className="text-cyan-400 mx-auto mb-4" size={32} />
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Intel GEN AI Hackathon</h4>
                <p className="text-gray-300">KPR Institute of Engineering and Technology</p>
                <p className="text-gray-400 text-sm mt-2">October 2024</p>
                <a 
                  href="https://drive.google.com/file/d/1MEg8AHQ0Bng6aT2loxgR95FbJhwKJ14P/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm mt-3 transition-colors"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center hover:border-indigo-500/50 transition-all duration-300">
                <Award className="text-indigo-400 mx-auto mb-4" size={32} />
                <h4 className="text-lg font-semibold text-indigo-400 mb-2">Defy 25</h4>
                <p className="text-gray-300">VIT Chennai</p>
                <p className="text-gray-400 text-sm mt-2">January 2025</p>
                <a 
                  href="https://drive.google.com/file/d/1jXUAboDtZ40iOHReWKDEAFBPOU1QA0tq/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm mt-3 transition-colors"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center hover:border-red-500/50 transition-all duration-300">
                <Award className="text-red-400 mx-auto mb-4" size={32} />
                <h4 className="text-lg font-semibold text-red-400 mb-2">Data Dash 2024</h4>
                <p className="text-gray-300">IEEE RAS VIT Chennai</p>
                <p className="text-gray-400 text-sm mt-2">January 2024</p>
                <a 
                  href="https://api.badgr.io/public/assertions/sn0lwrHKQim0PvXcauNPVQ?identity__email=sushindh.anandan%40gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-sm mt-3 transition-colors"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborating on interesting projects, or just having a chat about technology over coffee ☕
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <Phone className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Phone</h3>
              <p className="text-gray-300">+91 9940384952</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <Mail className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Email</h3>
              <p className="text-gray-300">sushindh.anandan@gmail.com</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <MapPin className="text-green-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2 text-green-400">Location</h3>
              <p className="text-gray-300">Chennai, Tamil Nadu</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:sushindh.anandan@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              <Mail size={20} />
              Send Email
            </a>
            <a href="https://linkedin.com/in/sushindh-a-7281a1288" className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
            <a href="https://github.com/sushindh" className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              <Github size={20} />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Sushindh Anandan. Built with React & Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Crafted with passion for creating impactful solutions ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;