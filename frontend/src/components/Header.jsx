import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#works', label: 'Work' },
    { href: '#cv', label: 'CV' },
    { href: '#references', label: 'References' },
    { href: '#solo-project', label: 'Art' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Blur overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#0d0d0d]/70 backdrop-blur-md z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#2a2a2a]' 
            : 'bg-transparent'
        }`}
        data-testid="header"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              className="hover:opacity-80 transition-opacity duration-300"
              data-testid="header-logo"
            >
              <img 
                src="/images/zf_logo_white.png" 
                alt="ZF" 
                className="h-8 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-[0.2em] uppercase text-[#a0a0a0] hover:text-[#a855f7] transition-colors duration-300"
                  data-testid={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#f0f0e8] hover:text-[#a855f7] transition-colors p-2 relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden fixed left-0 right-0 top-[73px] px-6 py-8 flex flex-col gap-6 z-50">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-[0.2em] uppercase text-[#f0f0e8] hover:text-[#a855f7] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
