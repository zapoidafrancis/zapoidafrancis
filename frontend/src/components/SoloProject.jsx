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

        {/* LOVE LANGUAGE Announcement - FIRST */}
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

        {/* Episodes - 2 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
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

        {/* Divider */}
        <div className="w-full h-px bg-[#2a2a2a] mb-16"></div>

        {/* Artist Bio Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Photo + Streaming Links */}
            <div className="space-y-6">
              <div className="overflow-hidden border-2 border-[#2a2a2a] max-w-[260px]">
                <img 
                  src="/images/zapoida_artist.jpg" 
                  alt="zapoida francis" 
                  className="w-full h-auto object-contain"
                  data-testid="bio-photo"
                />
              </div>

              {/* Listen on platforms */}
              <div className="max-w-[260px]" data-testid="streaming-links">
                <p className="text-[#a0a0a0] text-sm tracking-wider mb-4">Listen to zapoida francis on:</p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://open.spotify.com/artist/5iL3jq2jrFe0UqWFzEFZIQ" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#a0a0a0] hover:text-[#1DB954] transition-colors duration-300" data-testid="link-spotify">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                    <span className="text-xs tracking-wider">Spotify</span>
                  </a>
                  <a href="https://music.apple.com/us/artist/zapoida-francis/1599640411" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#a0a0a0] hover:text-[#FC3C44] transition-colors duration-300" data-testid="link-apple-music">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.7.28a10.14 10.14 0 00-1.564-.201C17.67.007 17.203 0 15.8 0H8.2c-1.403 0-1.87.007-2.337.079a10.14 10.14 0 00-1.564.2A5.022 5.022 0 002.426.892C1.31 1.624.564 2.624.247 3.934a9.23 9.23 0 00-.24 2.19C.003 6.59 0 7.057 0 8.46v7.08c0 1.403.003 1.87.008 2.337.016.742.092 1.48.24 2.19.317 1.31 1.062 2.31 2.18 3.042.59.39 1.254.654 1.953.808.52.1 1.043.163 1.564.2.467.073.934.08 2.337.08h7.6c1.403 0 1.87-.007 2.337-.08a10.14 10.14 0 001.564-.2 5.022 5.022 0 001.874-.614c1.118-.733 1.863-1.733 2.18-3.042a9.23 9.23 0 00.24-2.19c.004-.467.008-.934.008-2.337V8.46c0-1.403-.004-1.87-.008-2.336zM17.7 17.2a.69.69 0 01-.68.72h-.04a.69.69 0 01-.68-.68v-6.61l-7.12 2.26v5.24a.69.69 0 01-.68.72h-.04a.69.69 0 01-.68-.68V8.56c0-.3.19-.56.47-.66l8.44-2.68a.69.69 0 01.89.66v11.32z"/></svg>
                    <span className="text-xs tracking-wider">Apple Music</span>
                  </a>
                  <a href="https://tidal.com/search?q=zapoida+francis" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#a0a0a0] hover:text-[#f0f0e8] transition-colors duration-300" data-testid="link-tidal">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996l4.004 4.004L8.008 8l4.004 4 4.004-4-4.004-4.004zm0 8.008l-4.004 4.004L12.012 20l4.004-4.004-4.004-3.996z"/></svg>
                    <span className="text-xs tracking-wider">Tidal</span>
                  </a>
                  <a href="https://www.deezer.com/en/artist/154059692" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#a0a0a0] hover:text-[#FF0092] transition-colors duration-300" data-testid="link-deezer">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.81 4.16v3.03H24V4.16h-5.19zM6.27 8.38v3.027h5.189V8.38H6.27zm12.54 0v3.027H24V8.38h-5.19zM6.27 12.594v3.027h5.189v-3.027H6.27zm6.271 0v3.027h5.19v-3.027h-5.19zm6.27 0v3.027H24v-3.027h-5.19zM0 16.81v3.029h5.19v-3.03H0zm6.27 0v3.029h5.189v-3.03H6.27zm6.271 0v3.029h5.19v-3.03h-5.19zm6.27 0v3.029H24v-3.03h-5.19z"/></svg>
                    <span className="text-xs tracking-wider">Deezer</span>
                  </a>
                  <a href="https://music.youtube.com/channel/UC_xVyQEZdA0LDjmvhbm2MXg" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#a0a0a0] hover:text-[#FF0000] transition-colors duration-300" data-testid="link-youtube-music">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"/></svg>
                    <span className="text-xs tracking-wider">YouTube Music</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Bio - no title, just text */}
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

        {/* Coming Soon - More Content */}
        <div className="pt-16 border-t border-[#2a2a2a]">
          <p className="text-[#666] text-center text-sm tracking-wider">
            More songs, interviews & content coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoloProject;
