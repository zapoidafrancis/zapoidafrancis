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
    <section className="min-h-screen flex flex-col justify-center bg-[#0d0d0d] text-[#f0f0e8] relative overflow-hidden">
      {/* Background photo with grayscale and grain effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 grayscale"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_1649a5ec-c60b-476c-b815-ab79b57e6169/artifacts/zpwuzo59_438204671_1500072907526634_6067261798977781686_n.jpg)',
            backgroundPosition: 'center 20%',
          }}
        ></div>
        {/* Grain overlay on photo */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        ></div>
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/70 via-[#0d0d0d]/50 to-[#0d0d0d]/90"></div>
      </div>
      
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

        {/* Description - constrained to avoid orphans */}
        <p 
          className="text-lg md:text-xl max-w-xl text-[#a0a0a0] leading-relaxed mt-12 mb-16 opacity-0 animate-fade-in-up delay-200"
          data-testid="hero-description"
        >
          Audio professional based in Berlin, blending creativity with technical expertise to craft immersive soundscapes.
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

      {/* Infinite scrolling marquee - roles (faster) */}
      <div className="w-full overflow-hidden border-t border-b border-[#2a2a2a] py-6 mt-auto">
        <div className="animate-marquee-fast flex whitespace-nowrap items-center">
          {marqueeRoles.map((role, idx) => (
            <span 
              key={idx} 
              className="font-display text-4xl md:text-5xl lg:text-6xl text-[#f0f0e8] flex items-center"
            >
              <span className="mx-6">{role}</span>
              <span className="text-[#a855f7] text-xs mx-2">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
