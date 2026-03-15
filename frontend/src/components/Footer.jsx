import React from 'react';
import { Mail, MapPin, Linkedin, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
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
            <p className="text-[#a0a0a0] leading-relaxed max-w-xl text-lg mb-2">
              You have an idea? You want me to perfect your music<br className="hidden md:inline" /> or your mixed media project? Do you want to learn guitar?
            </p>
            <p className="text-[#a0a0a0] leading-relaxed max-w-xl text-lg mb-8">
              Shoot me a message and let's talk.
            </p>
            <a 
              href={`mailto:${heroData.email}`}
              className="btn-filled px-8 py-4 text-sm inline-flex items-center gap-2"
              data-testid="footer-cta"
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
                href="https://www.linkedin.com/in/francesco-maria-de-lucia-a89734266"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#2a2a2a] flex items-center justify-center hover:border-[#a855f7] hover:bg-[#a855f7] hover:text-[#0d0d0d] transition-all duration-300"
                aria-label="LinkedIn"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/zapoidafrancis/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#2a2a2a] flex items-center justify-center hover:border-[#a855f7] hover:bg-[#a855f7] hover:text-[#0d0d0d] transition-all duration-300"
                aria-label="Instagram"
                data-testid="social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@zapoidafrancis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#2a2a2a] flex items-center justify-center hover:border-[#a855f7] hover:bg-[#a855f7] hover:text-[#0d0d0d] transition-all duration-300"
                aria-label="YouTube"
                data-testid="social-youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://open.spotify.com/artist/5iL3jq2jrFe0UqWFzEFZIQ?si=qhiP7dR2TmmGDCgIfoGpAw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#2a2a2a] flex items-center justify-center hover:border-[#a855f7] hover:bg-[#a855f7] hover:text-[#0d0d0d] transition-all duration-300"
                aria-label="Spotify"
                data-testid="social-spotify"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a
                href="https://linktr.ee/zapoidafrancis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#2a2a2a] flex items-center justify-center hover:border-[#a855f7] hover:bg-[#a855f7] hover:text-[#0d0d0d] transition-all duration-300"
                aria-label="Linktree"
                data-testid="social-linktree"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10h16" />
                  <path d="M6.5 4.5l11 11" />
                  <path d="M6.5 15.5l11 -11" />
                  <path d="M12 10v-8" />
                  <path d="M12 15v7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#2a2a2a] mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#666] text-xs tracking-wider">
            &copy; {new Date().getFullYear()} ZAPOIDA FRANCIS. ALL RIGHTS RESERVED.
          </p>
          
          {/* Back to top */}
          <a 
            href="#"
            className="flex items-center gap-2 text-[#666] hover:text-[#a855f7] transition-colors text-xs tracking-wider group"
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
