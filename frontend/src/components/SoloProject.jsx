import React from 'react';

const SoloProject = () => {
  const episodes = [
    { id: 1, title: "Words of Affirmation", youtubeId: "GeXjv5r4O0E" },
    { id: 2, title: "Quality Time", youtubeId: "LRu4FQcLsUo" },
    { id: 3, title: "Acts of Service", youtubeId: "omb6GWfifVk" },
    { id: 4, title: "Gifts", youtubeId: "7JxBms57h6o" },
    { id: 5, title: "Physical Touch", youtubeId: "O_36vFuV5z0" },
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

        {/* LOVE LANGUAGE Announcement */}
        <div className="mb-12">
          <span className="text-[#a855f7] text-sm tracking-widest uppercase mb-4 block">Latest</span>
          <h3 className="font-display text-5xl md:text-6xl lg:text-7xl mb-4">
            LOVE LANGUAGE
          </h3>
          <p className="text-[#f0f0e8] text-xl md:text-2xl mb-4">
            Watch the music short film!
          </p>
          <p className="text-[#a0a0a0] text-lg whitespace-nowrap">
            A multimedia EP and web series created, written and directed by <span className="text-[#f0f0e8]">zapoida francis</span>.
          </p>
        </div>

        {/* Episodes - 2 per row, bigger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {episodes.map((episode) => (
            <div 
              key={episode.id}
              className="bg-[#0d0d0d] border-2 border-[#2a2a2a] hover:border-[#a855f7] transition-colors duration-300"
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
              
              {/* Episode Title */}
              <div className="p-4 border-t border-[#2a2a2a]">
                <p className="text-[#a855f7] text-lg tracking-wider">{episode.title}</p>
              </div>
            </div>
          ))}
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
