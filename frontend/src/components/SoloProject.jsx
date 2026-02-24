import React from 'react';
import { Music, Video, Mic } from 'lucide-react';
import { soloProject } from '../data/mock';

const SoloProject = () => {
  return (
    <section id="solo-project" className="min-h-[70vh] bg-[#141414] text-[#f0f0e8] py-32 px-6 md:px-12 noise-bg relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-[#00f0ff] text-sm tracking-[0.3em] uppercase mb-4">Personal</p>
          <h2 
            className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight"
            data-testid="solo-title"
          >
            Solo Project
          </h2>
          <div className="divider w-32 mt-8"></div>
        </div>

        {/* Coming Soon State */}
        <div className="border-2 border-dashed border-[#2a2a2a] p-12 md:p-20 text-center">
          <div className="flex justify-center gap-8 mb-10">
            <div className="w-16 h-16 border-2 border-[#2a2a2a] flex items-center justify-center opacity-40">
              <Music className="w-6 h-6 text-[#00f0ff]" />
            </div>
            <div className="w-16 h-16 border-2 border-[#2a2a2a] flex items-center justify-center opacity-40">
              <Video className="w-6 h-6 text-[#00f0ff]" />
            </div>
            <div className="w-16 h-16 border-2 border-[#2a2a2a] flex items-center justify-center opacity-40">
              <Mic className="w-6 h-6 text-[#00f0ff]" />
            </div>
          </div>

          <h3 className="font-display text-4xl mb-4 text-[#666]">Coming Soon</h3>
          <p className="text-[#666] max-w-lg mx-auto leading-relaxed font-mono text-sm">
            {soloProject.bio}
          </p>

          {/* Animated dots */}
          <div className="flex justify-center gap-2 mt-10">
            <div className="w-2 h-2 bg-[#00f0ff] opacity-40 animate-pulse"></div>
            <div className="w-2 h-2 bg-[#00f0ff] opacity-40 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-[#00f0ff] opacity-40 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoloProject;
