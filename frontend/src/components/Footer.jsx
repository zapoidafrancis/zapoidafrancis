import React from 'react';
import { Mail, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white py-16 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#d4af37]">Alex Rivera</h3>
            <p className="text-gray-400 leading-relaxed">
              Music producer, audio engineer, and musician passionate about crafting exceptional sonic experiences.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@alexrivera.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                <Mail className="w-5 h-5" />
                contact@alexrivera.com
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                Los Angeles, CA
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Alex Rivera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
