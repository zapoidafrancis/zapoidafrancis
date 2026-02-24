import React from 'react';
import { Mail, MapPin, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { heroData } from '../data/mock';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0d0d0d] text-[#f0f0e8] py-20 px-6 md:px-12 border-t-2 border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          {/* Brand & CTA */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-5xl md:text-6xl mb-6">
              <span className="text-[#f0f0e8]">zapoida</span>{' '}
              <span className="text-[#a855f7]">francis</span>
            </h3>
            <p className="text-[#a0a0a0] leading-relaxed max-w-lg text-lg mb-8">
              You have an idea? You want me to perfect your music or your mixed media project? You wanna learn guitar? Shoot me a message and let's talk.
            </p>
            <a 
              href={`mailto:${heroData.email}`}
              className="btn-filled px-8 py-4 text-sm inline-flex items-center gap-2"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-2xl mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href={`mailto:${heroData.email}`}
                className="flex items-center gap-3 text-[#a0a0a0] hover:text-[#a855f7] transition-colors group"
                data-testid="contact-email"
              >
                <Mail className="w-5 h-5" />
                <span className="border-b border-transparent group-hover:border-[#a855f7]">
                  {heroData.email}
                </span>
              </a>
              <div className="flex items-center gap-3 text-[#a0a0a0]">
                <MapPin className="w-5 h-5" />
                {heroData.location}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href={`https://www.linkedin.com/in/${heroData.linkedin.toLowerCase().replace(/\s+/g, '-')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#2a2a2a] flex items-center justify-center hover:border-[#a855f7] hover:bg-[#a855f7] hover:text-[#0d0d0d] transition-all duration-300"
                aria-label="LinkedIn"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 border-2 border-[#2a2a2a] flex items-center justify-center hover:border-[#a855f7] hover:bg-[#a855f7] hover:text-[#0d0d0d] transition-all duration-300"
                aria-label="Instagram"
                data-testid="social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#2a2a2a] mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#666] font-mono text-xs tracking-wider">
            &copy; {new Date().getFullYear()} ZAPOIDA FRANCIS. ALL RIGHTS RESERVED.
          </p>
          
          {/* Back to top */}
          <a 
            href="#"
            className="flex items-center gap-2 text-[#666] hover:text-[#a855f7] transition-colors font-mono text-xs tracking-wider group"
          >
            BACK TO TOP 
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
