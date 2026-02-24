import React from 'react';
import { heroData } from '../data/mock';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-black"></div>
      
      <div className="max-w-7xl mx-auto text-left relative z-10 w-full">
        {/* Name - HUGE and BOLD with pulse animation */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tight animate-pulse-glow">
          <span className="block">{heroData.name.split(' ')[0]}</span>
          <span className="block text-[#9370db]">{heroData.name.split(' ').slice(1).join(' ')}</span>
        </h1>

        {/* Tagline - Clean and bold */}
        <div className="mb-12 animate-fade-in-up">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 tracking-wide">
            {heroData.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl text-gray-400 leading-relaxed mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {heroData.description}
        </p>

        {/* CTA Buttons - Minimal and sleek */}
        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <a
            href="#works"
            className="group px-10 py-5 bg-[#9370db] text-white font-bold text-lg rounded-none hover:bg-[#8060c0] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="group-hover:tracking-wider transition-all duration-300">VIEW WORK</span>
          </a>
          <a
            href="#contact"
            className="group px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-lg rounded-none hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="group-hover:tracking-wider transition-all duration-300">CONTACT</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#9370db] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
