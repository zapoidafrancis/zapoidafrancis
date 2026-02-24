import React, { useState, useRef } from 'react';
import { heroData } from '../data/mock';

const Hero = () => {
  const [split, setSplit] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

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

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0 to 1
    const y = (e.clientY - rect.top) / rect.height; // 0 to 1
    
    // Target zone: upper-center (where the head is)
    // Center X is around 0.65 (right side of screen), upper Y is around 0.25
    const targetX = 0.65;
    const targetY = 0.25;
    
    // Calculate distance from target zone (0 = on target, 1 = far away)
    const distX = Math.abs(x - targetX);
    const distY = Math.abs(y - targetY);
    const distance = Math.sqrt(distX * distX + distY * distY);
    
    // Invert: closer to target = more effect (max at distance 0)
    // Max distance is roughly 0.8, so normalize and invert
    const proximity = Math.max(0, 1 - (distance / 0.5));
    
    // Map proximity to split range: 8px base + up to 20px more when on target
    const splitAmount = 8 + (proximity * 20);
    const splitY = 5 + (proximity * 15);
    
    setSplit({ x: splitAmount, y: splitY });
  };

  const handleMouseLeave = () => {
    setSplit({ x: 8, y: 5 });
  };

  // Default split values (subtle when not hovering near head)
  const redX = -(split.x || 8);
  const cyanX = split.x || 8;
  const blueY = -(split.y || 5);

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex flex-col justify-center bg-[#0d0d0d] text-[#f0f0e8] relative overflow-hidden"
    >
      {/* Background - pure black */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        {/* Container for figure with split - masked to center area */}
        <div 
          className="absolute inset-0"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)',
          }}
        >
          {/* Base grayscale layer */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${photoUrl})`,
              backgroundPosition: 'center 15%',
              filter: 'grayscale(100%)',
              opacity: 0.35,
            }}
          ></div>
          
          {/* RGB Magenta - shifts left */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rgb-layer-red"
            style={{
              backgroundImage: `url(${photoUrl})`,
              backgroundPosition: 'center 15%',
              filter: 'grayscale(100%) sepia(1) hue-rotate(-50deg) saturate(5) brightness(0.9)',
              opacity: 0.4,
              mixBlendMode: 'screen',
              transform: `translateX(${redX}px)`,
            }}
          ></div>
          
          {/* RGB Cyan - shifts right */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rgb-layer-cyan"
            style={{
              backgroundImage: `url(${photoUrl})`,
              backgroundPosition: 'center 15%',
              filter: 'grayscale(100%) sepia(1) hue-rotate(130deg) saturate(5) brightness(0.9)',
              opacity: 0.4,
              mixBlendMode: 'screen',
              transform: `translateX(${cyanX}px)`,
            }}
          ></div>
          
          {/* RGB Blue/Violet - shifts up */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rgb-layer-blue"
            style={{
              backgroundImage: `url(${photoUrl})`,
              backgroundPosition: 'center 15%',
              filter: 'grayscale(100%) sepia(1) hue-rotate(200deg) saturate(4) brightness(0.9)',
              opacity: 0.3,
              mixBlendMode: 'screen',
              transform: `translateY(${blueY}px)`,
            }}
          ></div>
        </div>
        
        {/* Grain texture */}
        <div 
          className="absolute inset-0 opacity-12 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        ></div>
        
        {/* Left gradient for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent"></div>
        
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/20"></div>
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
