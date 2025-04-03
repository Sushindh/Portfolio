import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Linkedin, Github, ExternalLink, Code, BookOpen, Award, Briefcase, Moon, Sun } from 'lucide-react';
import Profile from "../images/Profile.jpeg"

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'patents', label: 'Patents' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = [
    { category: 'Languages', items: ['C++', 'C', 'Java', 'Python'] },
    { category: 'Frontend', items: ['React JS', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'] },
    { category: 'Design', items: ['Figma'] },
    { category: 'Tools', items: ['GIT', 'GitHub'] }
  ];

  const experiences = [
    {
      title: 'Student Research Intern (Paper in Process) ',
      company: 'VIT Chennai - SRIP 2024',
      period: 'May 2024 - July 2024',
      location: 'Remote',
      description: [
        'Conducted research on collision avoidance in autonomous vehicles, focusing on trajectory prediction using a Double-Layer Hidden Markov Model.',
        'Co-authored a research paper titled "Enhanced Collision Avoidance in Autonomous Vehicles" with emphasis on predictive analytics.',
        'Achieved 98% accuracy, 80% precision, and 100% recall, ensuring highly reliable collision predictions.'
      ]
    },
    {
      title: 'Member - Web Development Team',
      company: 'CodeChef VIT-C Student Chapter',
      period: 'June 2024 - Present',
      location: 'Chennai, India',
      description: [
        'Contributed to weekly tasks to enhance my skills in React.js and Tailwind CSS.',
        'Collaborated on club projects, developing frontend components and integrating responsive designs.',
        'Live Projects: Quiz.app, LoginSignup.app'
      ]
    }
  ];

  const projects = [
    {
      title: 'PECCON',
      description: 'Designed and developed a responsive website for PECCON International Conference, ensuring smooth user experience.',
      techStack: ['HTML', 'CSS'],
      liveLink: 'https://peccon25.com',
      repo: null,
      status: 'Ongoing'
    },
    {
      title: 'Capstone Student Management System',
      description: 'Developing a web-based system to streamline faculty-student project management and progress tracking.',
      techStack: ['MERN Stack', 'Tailwind CSS'],
      liveLink: null,
      repo: null,
      status: 'Ongoing'
    },
    {
      title: 'CodeChef Club Login and Signup Page',
      description: 'Built a secure and responsive login/signup interface for the CodeChef Club\'s authentication system.',
      techStack: ['React.js', 'Tailwind CSS'],
      liveLink: null,
      repo: 'https://github.com/Sushindh/LoginSignup',
      status: 'Completed'
    },
    {
      title: 'EDITH – Gesture Recognition for Sign Language',
      description: 'Built a system translating sign language to text and voice for seamless communication between deaf and hearing individuals.',
      techStack: ['ScikitLearn', 'MediaPipe', 'RandomForest', 'Pickle', 'React.js', 'Tailwind.css', 'Flask', 'OpenCV'],
      liveLink: null,
      repo: 'https://github.com/IamRasengan/EDITH-Even-Deaf-I-m-The-Hero--Project_OneAPI_Hack_KPR',
      status: 'Ongoing'
    },
    {
      title: 'MircoFi - Decentralized Lending Platform',
      description: 'Developed an intuitive frontend interface for a peer-to-peer microloan platform leveraging NFTs as collateral.',
      techStack: ['React JS', 'Tailwind CSS', 'Solidity'],
      liveLink: 'https://micro-fi.vercel.app',
      repo: null,
      status: 'Completed'
    }
  ];

  const patents = [
    {
      title: 'PORTABLE DRUG DELIVERY DEVICE',
      status: 'Published',
      description: [
        'Invented a smart insulin pen with automated dosage control via a smartphone app.',
        'Integrated a "Find Me" feature using Bluetooth for device tracking.',
        'Application Number: 202541004858'
      ]
    }
  ];

  const certificates = [
    { title: 'Summer Research Internship Program', link: 'https://drive.google.com/file/d/1-Zx1HgvDZWlWVivcdnEPVfUpjuZa6V2J/view?usp=sharing' },
    { title: 'Intel GEN AI Hackathon', link: 'https://drive.google.com/file/d/1MEg8AHQ0Bng6aT2loxgR95FbJhwKJ14P/view?usp=sharing' },
    { title: 'Defy 25', link: 'https://drive.google.com/file/d/1jXUAboDtZ40iOHReWKDEAFBPOU1QA0tq/view?usp=sharing' }
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-20 transition-all duration-300 ${scrollY > 20 
        ? darkMode 
          ? 'bg-gray-800 shadow-lg shadow-purple-900/20' 
          : 'bg-white shadow-lg shadow-purple-500/10' 
        : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>S.A</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className={`${activeSection === item.id 
                  ? darkMode ? 'text-purple-400 font-medium' : 'text-purple-600 font-medium' 
                  : darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-500'} 
                  transition-colors duration-300`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-indigo-700'} 
                transition-colors duration-300 hover:scale-110 transform`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-indigo-700'} 
                transition-colors duration-300`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className={`${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-500'} focus:outline-none`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-b-lg`}>
            <div className="container mx-auto px-4 py-2">
              {navItems.map(item => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  className={`block py-2 ${activeSection === item.id 
                    ? darkMode ? 'text-purple-400 font-medium' : 'text-purple-600 font-medium'
                    : darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      <section id="home" className={`min-h-screen flex items-center justify-center ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900' 
          : 'bg-gradient-to-br from-purple-50 to-indigo-100'
        } pt-20`}>
        <div className="container mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className={`text-4xl md:text-6xl font-bold leading-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Hi, I'm <span className={darkMode ? 'text-purple-400' : 'text-purple-600'}>Sushindh Anandan</span>
            </h1>
            <h2 className={`text-xl md:text-2xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Computer Science Engineering Student</h2>
            <p className={`mb-8 max-w-md mx-auto md:mx-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Passionate about web development, machine learning, and creating innovative solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#contact" className={`${
                darkMode 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
                } font-medium py-2 px-6 rounded-full transition-all duration-300 flex items-center hover:scale-105 transform`}>
                <Mail className="w-4 h-4 mr-2" /> Contact Me
              </a>
              <a href="#projects" className={`${
                darkMode 
                  ? 'bg-transparent hover:bg-purple-900/30 text-purple-400 border border-purple-500' 
                  : 'bg-transparent hover:bg-purple-50 text-purple-600 border border-purple-600'
                } font-medium py-2 px-6 rounded-full transition-all duration-300 flex items-center hover:scale-105 transform`}>
                <Code className="w-4 h-4 mr-2" /> View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-xl flex items-center justify-center overflow-hidden">
              <span className="text-white text-7xl font-bold"><img src={Profile} /></span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className={`p-2 rounded-lg shadow-md ${darkMode ? 'bg-gray-800 text-purple-400' : 'bg-white text-purple-600'}`}>
            About
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
  <div className="container mx-auto px-4">
    <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-800'}`}>About Me</h2>
    
    {/* Introduction paragraph */}
    <div className={`mb-16 text-lg max-w-4xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      <p className="mb-4">
        Hi, I'm <span className="font-bold">Sushindh Anandan</span>, a <span className="font-bold">B.Tech Computer Science</span> student at <span className="font-bold">VIT Chennai</span>, aspiring to be a <span className="font-bold">Full Stack Web Developer</span> and <span className="font-bold">UI/UX Designer</span>.
      </p>
      <p className="mb-4">
        I specialize in <span className="font-bold">frontend development</span> with <span className="font-bold">React.js, Tailwind CSS, JavaScript, HTML, and CSS</span>, creating responsive and intuitive user interfaces. Additionally, I have experience in <span className="font-bold">UI/UX design</span> using <span className="font-bold">Figma and Canva</span>.
      </p>
      <p className="mb-4">
        Currently, I am <span className="font-bold">learning the MERN stack</span> to expand my backend development skills and build <span className="font-bold">scalable full-stack applications</span>. I am also proficient in <span className="font-bold">Python, C, C++, and Java</span>, with a keen interest in <span className="font-bold">AI, ML, and Data Science</span>.
      </p>
      <p>
        Passionate about technology's impact, I am committed to continuous learning and innovation to solve real-world problems. I strive to grow as a <span className="font-bold">software engineering professional</span>, leveraging my skills to build meaningful solutions and contribute to the tech community. Always open to new challenges and opportunities!
      </p>
    </div>
    
    <div className="flex flex-col md:flex-row items-start space-y-10 md:space-y-0 md:space-x-10">
      <div className="md:w-1/2">
        <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Education</h3>
        <div className={`rounded-lg p-6 shadow-md border-l-4 border-purple-500 ${
          darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <h4 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Bachelor of Technology - Computer Science and Engineering
          </h4>
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Vellore Institute of Technology Chennai, India
          </p>
          <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>August 2023 - July 2027</p>
          <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>CGPA: 8.83 (Till sem 3)</p>
          <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
            <span className="font-medium">Courses:</span> Object-Oriented Programming, Data Structures Algorithms,
            Design and Analysis of Algorithms, Computer Networks, Operating Systems, 
            Theory of Computation, Computer Architecture Organization
          </p>
        </div>
      </div>
      <div className="md:w-1/2">
        <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className={`rounded-lg p-6 shadow-md border-l-4 border-indigo-500 ${
              darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-sm font-medium m-1 shadow-sm ${
                    darkMode 
                      ? 'bg-gray-800 text-indigo-400 border border-indigo-600/30' 
                      : 'bg-white text-indigo-600'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {index !== experiences.length - 1 && (
                  <div className={`absolute left-6 top-10 h-full w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                )}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md ${
                      darkMode ? 'bg-purple-600' : 'bg-purple-600'}`}>
                      <Briefcase className="text-white w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className={`rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500 ${
                      darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            {exp.title}
                          </h3>
                          <p className={darkMode ? 'text-purple-400 font-medium' : 'text-purple-600 font-medium'}>
                            {exp.company}
                          </p>
                        </div>
                        <div className={`mt-2 md:mt-0 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <p>{exp.period}</p>
                          <p className="text-sm">{exp.location}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className={`flex items-start ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2 ${
                              darkMode ? 'bg-purple-400' : 'bg-purple-500'}`}></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 
                transform hover:scale-105 border-t-4 border-purple-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {project.title}
                    </h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      project.status === 'Ongoing' 
                        ? darkMode ? 'bg-yellow-900/50 text-yellow-300' : 'bg-yellow-100 text-yellow-800' 
                        : darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="mb-4">
                    <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className={`px-2 py-1 rounded-md text-xs font-medium mr-2 mb-2 shadow-sm ${
                          darkMode 
                            ? 'bg-gray-800 text-purple-400 border border-purple-500/30' 
                            : 'bg-white text-purple-600'}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-3 mt-4">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-sm flex items-center transition-colors duration-300 ${
                          darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                      </a>
                    )}
                    {project.repo && (
                      <a 
                        href={project.repo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-sm flex items-center transition-colors duration-300 ${
                          darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'}`}
                      >
                        <Github className="w-4 h-4 mr-1" /> Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section id="patents" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Patents & Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 flex items-center ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                <Award className="w-6 h-6 mr-2" /> Patents
              </h3>
              {patents.map((patent, index) => (
                <div key={index} className={`rounded-lg p-6 shadow-md mb-6 border-l-4 border-purple-500 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {patent.title}
                    </h4>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                      {patent.status}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {patent.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2 ${
                          darkMode ? 'bg-purple-400' : 'bg-purple-500'}`}></span>
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <h3 className={`text-2xl font-semibold mb-6 flex items-center ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                <BookOpen className="w-6 h-6 mr-2" /> Certificates
              </h3>
              <div className={`rounded-lg p-6 shadow-md border-l-4 border-indigo-500 ${
                darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <ul className="space-y-4">
                  {certificates.map((cert, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                        {cert.title}
                      </span>
                      <a 
                        href={cert.link} 
                        target='_blank'
                        className={`text-sm font-medium flex items-center ${
                          darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-800'}`}
                      >
                        View Certificate <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${
  darkMode 
    ? 'bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900'
    : 'bg-gradient-to-br from-purple-50 to-indigo-100'}`}>
  <div className="container mx-auto px-4">
    <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      Get In Touch
    </h2>
    
    <div className={`max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden ${
      darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex flex-col md:flex-row">
        {/* Contact Info Side */}
        <div className={`md:w-1/2 p-8 md:p-12 ${
          darkMode 
            ? 'bg-gradient-to-br from-purple-800 to-indigo-900' 
            : 'bg-gradient-to-br from-purple-600 to-indigo-700'
        } text-white`}>
          <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
          <div className="space-y-8">
            <div className="flex items-center group">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 group-hover:bg-white/30 transition-all duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-purple-200 mb-1">Email</p>
                <a href="mailto:sushindh.anandan@gmail.com" className="hover:underline transition-all duration-300">
                  sushindh.anandan@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center group">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 group-hover:bg-white/30 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-purple-200 mb-1">LinkedIn</p>
                <a href="https://www.linkedin.com/in/sushindh-a-7281a1288/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-300">
                  linkedin.com/in/sushindh-a
                </a>
              </div>
            </div>
            
            <div className="flex items-center group">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 group-hover:bg-white/30 transition-all duration-300">
                <Github className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-purple-200 mb-1">GitHub</p>
                <a href="https://github.com/Sushindh" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-300">
                  github.com/Sushindh
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/sushindh-a-7281a1288/" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Sushindh" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:sushindh.anandan@gmail.com" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form Side */}
        <div className={`md:w-1/2 p-8 md:p-12 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
          <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Send Me a Message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:outline-none ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 focus:ring-purple-500 text-white' 
                    : 'bg-gray-50 border border-gray-300 focus:ring-purple-500'
                }`}
                placeholder="Arun Kumar"
              />
            </div>
            
            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:outline-none ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 focus:ring-purple-500 text-white' 
                    : 'bg-gray-50 border border-gray-300 focus:ring-purple-500'
                }`}
                placeholder="xyz@gmail.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:outline-none ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 focus:ring-purple-500 text-white' 
                    : 'bg-gray-50 border border-gray-300 focus:ring-purple-500'
                }`}
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className={`px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 ${
                darkMode 
                  ? 'bg-purple-600 hover:bg-purple-700' 
                  : 'bg-purple-600 hover:bg-purple-700'
              } w-full md:w-auto`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
            </div>
  )}

  export default Portfolio