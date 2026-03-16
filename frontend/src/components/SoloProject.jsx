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

        {/* Artist Bio Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Photo */}
            <div className="aspect-square overflow-hidden border-2 border-[#2a2a2a]">
              <img 
                src="/images/zapoida_artist.jpg" 
                alt="zapoida francis" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bio */}
            <div>
              <h3 className="font-display text-4xl md:text-5xl mb-6">zapoida francis</h3>
              <div className="text-[#a0a0a0] leading-relaxed space-y-4">
                <p>
                  zapoida francis is an artist based in Berlin, Germany. His music blends together introspective, indie songwriting with electronic and hyperpop soundscapes, adding touches of punk rock overtures. He utilises dark sonorities, samples, synthesizers, guitars and layered vocals to express himself through his artistry.
                </p>
                <p>
                  His work feels nostalgic but with fresh overtones, with a distinctive underlying narrative. After releasing two singles: <span className="text-[#f0f0e8]">eyes</span> and <span className="text-[#f0f0e8]">the long run</span> in 2022, he began experimenting with new ways to make art by integrating web3 digital interactive content such as AR/VR and NFTs.
                </p>
                <p>
                  In 2023, alongside the release of <span className="text-[#f0f0e8]">lonely Boy</span>, he created a video game for his listeners to play while streaming the track. The following release, <span className="text-[#f0f0e8]">Indian Tea Party</span>, featured a collaboration with the apparel brand "Alien Cleopatra". The same year, he contributed, in collaboration with Sky Deep, to two songs featured in the soundtrack of the German TV show <span className="text-[#f0f0e8]">Loving Her</span> (zdf neo), including the track <span className="text-[#f0f0e8]">No Mistake</span>.
                </p>
                <p>
                  2024 began with <span className="text-[#f0f0e8]">CHEMIZTRY</span>, a collaboration with Swedish artist Jack Howchin and Lithuanian singer Gia Ivy, both featured in an aesthetic and tragicomic music video, followed by <span className="text-[#f0f0e8]">mankind</span>, a hyperpop queer anthem with its remixes by Nayeli and SATIRIC, and the single <span className="text-[#f0f0e8]">ashtray girl</span>.
                </p>
                <p>
                  Kicking off 2025, he released the instrumental club EP <span className="text-[#f0f0e8]">no use</span>. He wrote and directed <span className="text-[#f0f0e8]">LOVE LANGUAGE</span>, a queer music short film series, launching from autumn 2025, along with the homonymous music EP.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#2a2a2a] mb-16"></div>

        {/* LOVE LANGUAGE Announcement */}
        <div className="mb-12">
          <span className="text-[#a855f7] text-sm tracking-widest uppercase mb-4 block">Latest</span>
          <h3 className="font-display text-5xl md:text-6xl lg:text-7xl mb-4">
            LOVE LANGUAGE
          </h3>
          <p className="text-[#f0f0e8] text-xl md:text-2xl mb-4">
            Watch the music short film now!
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
                <p className="text-[#f0f0e8] text-lg tracking-wider">{episode.title}</p>
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
