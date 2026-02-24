import React from 'react';
import { heroData } from '../data/mock';

const Hero = () => {
  const roles = [
    'musician',
    'audio engineer', 
    'music producer',
    'sound designer',
    'guitar teacher',
    'multimedia artist'
  ];

  // Duplicate roles for seamless infinite scroll
  const marqueeRoles = [...roles, ...roles];

  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#0d0d0d] text-[#f0f0e8] relative overflow-hidden noise-bg">
      {/* Subtle top gradient */}
      <div className="absolute inset-0 hero-gradient pointer-events-none"></div>
      
      {/* Film grain overlay */}
      <div className="grain-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 pt-32 pb-20">
        {/* Name - MASSIVE lowercase */}
        <h1 
          className="font-display text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-tight mb-4 opacity-0 animate-fade-in-up"
          data-testid="hero-name"
        >
          <span className="block">zapoida</span>
          <span className="block text-[#a855f7]">francis</span>
        </h1>

        {/* Description */}
        <p 
          className="text-lg md:text-xl max-w-2xl text-[#a0a0a0] leading-relaxed mt-12 mb-16 opacity-0 animate-fade-in-up delay-200"
          data-testid="hero-description"
        >
          {heroData.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-300">
          <a
            href="#works"
            className="btn-filled px-8 py-4 text-sm tracking-widest inline-block text-center"
            data-testid="hero-cta-works"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="btn-sharp px-8 py-4 text-sm tracking-widest inline-block text-center"
            data-testid="hero-cta-contact"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Infinite scrolling marquee - roles */}
      <div className="w-full overflow-hidden border-t border-b border-[#2a2a2a] py-6 mt-auto">
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {marqueeRoles.map((role, idx) => (
            <span 
              key={idx} 
              className="font-display text-4xl md:text-5xl lg:text-6xl text-[#f0f0e8] flex items-center"
            >
              <span className="mx-6">{role}</span>
              <span className="text-[#a855f7] text-sm mx-2">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
