import React from 'react';
import { Play } from 'lucide-react';

const SoloProject = () => {
  const episodes = [
    { id: 1, title: "Episode I", youtubeId: "GeXjv5r4O0E" },
    { id: 2, title: "Episode II", youtubeId: "LRu4FQcLsUo" },
    { id: 3, title: "Episode III", youtubeId: "omb6GWfifVk" },
    { id: 4, title: "Episode IV", youtubeId: "7JxBms57h6o" },
    { id: 5, title: "Episode V", youtubeId: "O_36vFuV5z0" },
  ];

  return (
    <section id="solo-project" className="min-h-screen bg-[#141414] text-[#f0f0e8] py-32 px-6 md:px-12 noise-bg relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 
            className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight"
            data-testid="solo-title"
          >
            Art
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-[#a855f7] to-transparent mt-8"></div>
        </div>

        {/* LOVE LANGUAGE Announcement Banner */}
        <div className="mb-16">
          <div className="border-2 border-[#a855f7] bg-[#a855f7]/5 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <Play className="w-5 h-5 text-[#a855f7]" />
              <span className="text-[#a855f7] text-sm tracking-widest uppercase">Now Streaming</span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
              LOVE LANGUAGE
            </h3>
            <p className="text-[#a0a0a0] text-lg md:text-xl max-w-2xl leading-relaxed">
              Watch the music short film — a multimedia EP performed, written, and directed by <span className="text-[#f0f0e8]">zapoida francis</span>.
            </p>
          </div>
        </div>

        {/* Episodes Grid */}
        <div className="space-y-8">
          <h4 className="font-display text-2xl text-[#666] tracking-wider">Episodes</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.map((episode) => (
              <div 
                key={episode.id}
                className="bg-[#0d0d0d] border-2 border-[#2a2a2a] hover:border-[#a855f7] transition-colors duration-300 group"
                data-testid={`episode-${episode.id}`}
              >
                {/* YouTube Embed */}
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                    title={`LOVE LANGUAGE - ${episode.title}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                {/* Episode Label */}
                <div className="p-4 border-t border-[#2a2a2a]">
                  <p className="text-[#a855f7] text-sm tracking-wider">{episode.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon - More Content */}
        <div className="mt-20 pt-16 border-t border-[#2a2a2a]">
          <p className="text-[#666] text-center text-sm tracking-wider">
            More songs, interviews & content coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoloProject;
