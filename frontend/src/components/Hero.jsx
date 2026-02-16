import React from 'react';
import { Music, Headphones, Guitar } from 'lucide-react';
import { heroData } from '../data/mock';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white px-4 py-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Icon decorations */}
        <div className="flex justify-center gap-8 mb-8 opacity-60">
          <Music className="w-8 h-8 animate-pulse" style={{ animationDelay: '0s' }} />
          <Headphones className="w-8 h-8 animate-pulse" style={{ animationDelay: '0.3s' }} />
          <Guitar className="w-8 h-8 animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          {heroData.name}
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-[#9370db] font-light tracking-wide">
          {heroData.tagline}
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-12">
          {heroData.description}
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#works"
            className="px-8 py-4 bg-[#9370db] text-white font-semibold rounded-sm hover:bg-[#8060c0] transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-[#90ee90] text-[#90ee90] font-semibold rounded-sm hover:bg-[#90ee90] hover:text-black transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
