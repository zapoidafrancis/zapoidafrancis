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
      {/* Background photo with dramatic artistic effects */}
      <div className="absolute inset-0 z-0">
        {/* Main photo - full color, prominent */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://customer-assets.emergentagent.com/job_1649a5ec-c60b-476c-b815-ab79b57e6169/artifacts/zpwuzo59_438204671_1500072907526634_6067261798977781686_n.jpg)',
            backgroundPosition: 'center 15%',
            opacity: 0.6,
          }}
        ></div>
        
        {/* Purple duotone overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(88, 28, 135, 0.5) 100%)',
            mixBlendMode: 'color',
          }}
        ></div>
        
        {/* Heavy horizontal scan lines */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 3px,
              rgba(0, 0, 0, 0.4) 3px,
              rgba(0, 0, 0, 0.4) 6px
            )`,
          }}
        ></div>
        
        {/* Vertical glitch stripes */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 40px,
              rgba(168, 85, 247, 0.15) 40px,
              rgba(168, 85, 247, 0.15) 42px,
              transparent 42px,
              transparent 120px,
              rgba(168, 85, 247, 0.2) 120px,
              rgba(168, 85, 247, 0.2) 125px
            )`,
          }}
        ></div>
        
        {/* Noise/grain texture */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        ></div>
        
        {/* Left side dark gradient for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent"></div>
        
        {/* Bottom gradient for marquee */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 pt-32 pb-20">
        {/* Name - MASSIVE lowercase */}
        <h1 
          className="font-display text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-tight mb-4 opacity-0 animate-fade-in-up"
          data-testid="hero-name"
        >
          <span className="block">zapoida</span>
          <span className="block text-[#a855f7]">francis</span>
        </h1>

        {/* Description - full text */}
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

      {/* Infinite scrolling marquee - roles (faster) */}
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
