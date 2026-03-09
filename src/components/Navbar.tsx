import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'achievements', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#achievements' },
    { name: 'My Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    scrollToSection('home');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 ${
        isScrolled 
          ? 'shadow-lg shadow-black/20 border-b border-gray-800/50' 
          : 'border-b border-gray-800/30'
      }`}
      style={{ 
        zIndex: 9999,
        pointerEvents: 'auto',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgb(2, 8, 23)'
      }}
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between" style={{ height: isDesktop ? '5rem' : '4rem', ...(isDesktop ? { display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '1rem', alignItems: 'center' } : {}) }}>
          
          {/* Logo - Left */}
          <div className="flex justify-start">
            <button
              onClick={handleLogoClick}
              className="font-bold cursor-pointer inline-block hover:scale-105 transition-transform bg-transparent border-0 p-0"
              style={{ pointerEvents: 'auto', fontSize: isDesktop ? '1.75rem' : '1.4rem' }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                Pratik
              </span>
              <span className="text-white ml-1">Bugade</span>
            </button>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="items-center justify-center gap-2" style={{ display: isDesktop ? 'flex' : 'none' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              const sectionId = link.href.replace('#', '');
              
              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollToSection(sectionId)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border-0 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50' 
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/50'
                  }`}
                  style={{ 
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                    zIndex: 1
                  }}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="text-white p-2 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer border-0 bg-transparent"
              style={{ pointerEvents: 'auto', display: isDesktop ? 'none' : 'flex', alignItems: 'center' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden w-full px-4 sm:px-6 lg:px-8 pb-4">
            <div className="max-w-7xl mx-auto">
              <div className="mt-2 py-4 bg-gray-800/95 backdrop-blur-md rounded-lg border border-gray-700/50">
                <div className="flex flex-col px-4 gap-2">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.replace('#', '');
                    const sectionId = link.href.replace('#', '');
                    
                    return (
                      <button
                        key={link.name}
                        type="button"
                        onClick={() => scrollToSection(sectionId)}
                        className={`w-full px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 border-0 text-left ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50' 
                            : 'bg-gray-700/50 text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white'
                        }`}
                        style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                      >
                        {link.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
