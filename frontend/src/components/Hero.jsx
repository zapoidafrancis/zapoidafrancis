import React, { useState, useRef, useEffect } from 'react';
import { heroData } from '../data/mock';

const Hero = () => {
  const [split, setSplit] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const heroRef = useRef(null);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const roles = [
    'musician',
    'audio engineer', 
    'music producer',
    'sound designer',
    'guitar teacher',
    'multimedia artist'
  ];

  const photoUrl = 'https://customer-assets.emergentagent.com/job_1649a5ec-c60b-476c-b815-ab79b57e6169/artifacts/zpwuzo59_438204671_1500072907526634_6067261798977781686_n.jpg';
  const photoUrlGrayscale = '/images/hero_grayscale.jpg';

  // Check if position is in the figure zone (center area where the body/face is)
  const isInFigureZone = (x, y) => {
    // Figure is roughly in center, upper-middle of the hero
    return x > 0.35 && x < 0.85 && y > 0.1 && y < 0.75;
  };

  const handleMouseMove = (e) => {
    // Desktop only
    if (isMobile || !heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Only split when cursor is in the center zone (over the figure)
    if (isInFigureZone(x, y)) {
      const targetX = 0.6;
      const targetY = 0.35;
      
      const distX = Math.abs(x - targetX);
      const distY = Math.abs(y - targetY);
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      const proximity = Math.max(0, 1 - (distance / 0.4));
      
      const splitAmount = 10 + (proximity * 18);
      const splitY = 6 + (proximity * 12);
      
      setSplit({ x: splitAmount, y: splitY });
    } else {
      // Outside center zone - return to base split
      setSplit({ x: 8, y: 5 });
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setSplit({ x: 8, y: 5 });
    }
  };

  // Mobile touch handlers
  const handleTouchStart = (e) => {
    if (!isMobile || !heroRef.current) return;
    
    const touch = e.touches[0];
    const rect = heroRef.current.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width;
    const y = (touch.clientY - rect.top) / rect.height;
    
    if (isInFigureZone(x, y)) {
      setIsTouching(true);
      setSplit({ x: 20, y: 12 });
    }
  };

  const handleTouchMove = (e) => {
    if (!isMobile || !heroRef.current) return;
    
    const touch = e.touches[0];
    const rect = heroRef.current.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width;
    const y = (touch.clientY - rect.top) / rect.height;
    
    if (isInFigureZone(x, y)) {
      setIsTouching(true);
      setSplit({ x: 20, y: 12 });
    } else {
      setIsTouching(false);
      setSplit({ x: 8, y: 5 });
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      setIsTouching(false);
      setSplit({ x: 8, y: 5 });
    }
  };

  // Mobile: base split same as desktop (8px), increases to 20px when touching
  // Desktop: base split 8px, increases when hovering near head
  const baseSplit = 8;
  const baseSplitY = 5;

  // Default split values
  const redX = -(split.x || baseSplit);
  const cyanX = split.x || baseSplit;
  const blueY = -(split.y || baseSplitY);

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="min-h-screen flex flex-col justify-center bg-[#0d0d0d] text-[#f0f0e8] relative overflow-hidden"
    >
      {/* Background - pure black */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        {/* Container for figure with split */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base grayscale layer - using actual grayscale image for Safari thumbnail compatibility */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${photoUrlGrayscale})`,
              backgroundPosition: 'center 15%',
              opacity: 0.35,
              transform: 'scale(1.05)',
            }}
          ></div>
          
          {/* RGB Magenta - shifts left */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${photoUrlGrayscale})`,
              backgroundPosition: 'center 15%',
              filter: 'sepia(1) hue-rotate(-50deg) saturate(4) brightness(0.9)',
              WebkitFilter: 'sepia(1) hue-rotate(-50deg) saturate(4) brightness(0.9)',
              opacity: 0.4,
              mixBlendMode: 'screen',
              transform: `scale(1.05) translate3d(${redX}px, 0, 0)`,
              transition: 'transform 0.3s ease-out',
            }}
          ></div>
          
          {/* RGB Cyan - shifts right */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${photoUrlGrayscale})`,
              backgroundPosition: 'center 15%',
              filter: 'sepia(1) hue-rotate(130deg) saturate(4) brightness(0.9)',
              WebkitFilter: 'sepia(1) hue-rotate(130deg) saturate(4) brightness(0.9)',
              opacity: 0.4,
              mixBlendMode: 'screen',
              transform: `scale(1.05) translate3d(${cyanX}px, 0, 0)`,
              transition: 'transform 0.3s ease-out',
            }}
          ></div>
          
          {/* RGB Blue/Violet - shifts up */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${photoUrlGrayscale})`,
              backgroundPosition: 'center 15%',
              filter: 'sepia(1) hue-rotate(200deg) saturate(3) brightness(0.9)',
              WebkitFilter: 'sepia(1) hue-rotate(200deg) saturate(3) brightness(0.9)',
              opacity: 0.3,
              mixBlendMode: 'screen',
              transform: `scale(1.05) translate3d(0, ${blueY}px, 0)`,
              transition: 'transform 0.3s ease-out',
            }}
          ></div>
        </div>
        
        {/* Grain texture - subtle */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
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
          Audio professional based in Berlin, blending<br className="hidden md:inline" /> creativity with technical expertise to craft immersive soundscapes and outstanding{' '}
          <span className="md:inline block">sonic experiences.</span>
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

      <div className="w-full overflow-hidden border-t border-b border-[#2a2a2a] py-4 md:py-6 mt-auto relative z-10">
        <div className="flex">
          <div className="marquee-track flex-shrink-0">
            {roles.map((role, idx) => (
              <span 
                key={`a-${idx}`} 
                className="font-display text-2xl md:text-5xl lg:text-6xl text-[#f0f0e8] inline-flex items-center"
              >
                <span className="mx-3 md:mx-6">{role}</span>
                <span className="text-[#a855f7] text-xs mx-1 md:mx-2">●</span>
              </span>
            ))}
          </div>
          <div className="marquee-track flex-shrink-0">
            {roles.map((role, idx) => (
              <span 
                key={`b-${idx}`} 
                className="font-display text-2xl md:text-5xl lg:text-6xl text-[#f0f0e8] inline-flex items-center"
              >
                <span className="mx-3 md:mx-6">{role}</span>
                <span className="text-[#a855f7] text-xs mx-1 md:mx-2">●</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
