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

  const marqueeRoles = [...roles, ...roles];
  const photoUrl = 'https://customer-assets.emergentagent.com/job_1649a5ec-c60b-476c-b815-ab79b57e6169/artifacts/zpwuzo59_438204671_1500072907526634_6067261798977781686_n.jpg';

  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#0d0d0d] text-[#f0f0e8] relative overflow-hidden">
      {/* Background photo layers with smooth transitions */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base grayscale layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-grey-base"
          style={{
            backgroundImage: `url(${photoUrl})`,
            backgroundPosition: 'center 15%',
            filter: 'grayscale(100%)',
            opacity: 0.5,
          }}
        ></div>
        
        {/* Negative layer - fades in and out */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-negative"
          style={{
            backgroundImage: `url(${photoUrl})`,
            backgroundPosition: 'center 15%',
            filter: 'grayscale(100%) invert(100%)',
          }}
        ></div>
        
        {/* RGB Split - Magenta/Pink channel - shifts left */}
        <div 
          className="absolute inset-0 animate-rgb-red"
          style={{ mixBlendMode: 'screen' }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${photoUrl})`,
              backgroundPosition: 'center 15%',
              filter: 'grayscale(100%) sepia(100%) saturate(3) hue-rotate(280deg) brightness(0.8)',
            }}
          ></div>
        </div>
        
        {/* RGB Split - Cyan channel - shifts right */}
        <div 
          className="absolute inset-0 animate-rgb-cyan"
          style={{ mixBlendMode: 'screen' }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${photoUrl})`,
              backgroundPosition: 'center 15%',
              filter: 'grayscale(100%) sepia(100%) saturate(3) hue-rotate(140deg) brightness(0.8)',
            }}
          ></div>
        </div>
        
        {/* RGB Split - Green/Yellow channel - shifts up */}
        <div 
          className="absolute inset-0 animate-rgb-green"
          style={{ mixBlendMode: 'screen' }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${photoUrl})`,
              backgroundPosition: 'center 15%',
              filter: 'grayscale(100%) sepia(100%) saturate(3) hue-rotate(40deg) brightness(0.8)',
            }}
          ></div>
        </div>
        
        {/* Grain texture */}
        <div 
          className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        ></div>
        
        {/* Left gradient for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent"></div>
        
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 pt-32 pb-20">
        <h1 
          className="font-display text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-tight mb-4 opacity-0 animate-fade-in-up"
          data-testid="hero-name"
        >
          <span className="block">zapoida</span>
          <span className="block text-[#a855f7]">francis</span>
        </h1>

        <p 
          className="text-lg md:text-xl max-w-lg text-[#a0a0a0] leading-relaxed mt-12 mb-16 opacity-0 animate-fade-in-up delay-200"
          data-testid="hero-description"
        >
          {heroData.description}
        </p>

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

      <div className="w-full overflow-hidden border-t border-b border-[#2a2a2a] py-6 mt-auto relative z-10">
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
