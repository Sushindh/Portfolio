import React from 'react';
import { Menu, X, Download, ExternalLink } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection, setMobileMenuOpen, mobileMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const NavItem = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`px-4 py-2 rounded-lg font-medium transition-all ${
        activeSection === id
          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
          : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all"
        >
          Sushindh
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <NavItem key={item.id} id={item.id} label={item.label} />
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1X86yfwRvwHWI8i0h-SBdp9bUqdAFG9Ib/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-semibold transition-all"
          >
            <Download size={18} />
            <span className="hidden lg:inline">Resume</span>
          </a>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-md border-t border-gray-700/30 py-4 px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-700/30 mt-4 space-y-2">
            <a
              href="https://drive.google.com/file/d/1X86yfwRvwHWI8i0h-SBdp9bUqdAFG9Ib/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-all"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
