import React, { useState } from 'react';

const SoloProject = () => {
  const [activeTab, setActiveTab] = useState('songs');

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

        {/* Tabbed Section: Songs / Videos / News */}
        <div className="mb-24">
          {/* Tab Navigation */}
          <div className="flex gap-0 mb-10 border-b border-[#2a2a2a]" data-testid="art-tabs">
            {['songs', 'videos', 'news'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm tracking-widest uppercase transition-colors duration-300 border-b-2 -mb-px ${
                  activeTab === tab
                    ? 'text-[#f0f0e8] border-[#a855f7]'
                    : 'text-[#666] border-transparent hover:text-[#a0a0a0]'
                }`}
                data-testid={`tab-${tab}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Songs Tab */}
          {activeTab === 'songs' && (
            <div className="space-y-6" data-testid="songs-content">
              {/* LOVE LANGUAGE EP — March 6, 2026 */}
              <iframe
                src="https://open.spotify.com/embed/album/2mVrgCRGoXOoywCo3fEyS5?utm_source=generator&theme=0"
                width="100%" height="352" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" title="LOVE LANGUAGE"
              />
              {/* no use — June 20, 2025 */}
              <iframe
                src="https://open.spotify.com/embed/album/0DptGmGjOW4IUXA0hbYPNx?utm_source=generator&theme=0"
                width="100%" height="352" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" title="no use"
              />
              {/* ashtray girl — November 29, 2024 */}
              <iframe
                src="https://open.spotify.com/embed/track/554RUSH2zJIprjrXo7ANgu?utm_source=generator&theme=0"
                width="100%" height="152" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" title="ashtray girl"
              />
              {/* mankind (Remixes) — November 15, 2024 */}
              <iframe
                src="https://open.spotify.com/embed/album/5RiPoIMFeXnYpmI4P14YRu?utm_source=generator&theme=0"
                width="100%" height="352" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" title="mankind (Remixes)"
              />
              {/* mankind — 2024 */}
              <iframe
                src="https://open.spotify.com/embed/track/3y2zjUuUMVJ2x4EOrnI0PU?utm_source=generator&theme=0"
                width="100%" height="152" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" title="mankind"
              />
              {/* CHEMIZTRY — April 26, 2024 */}
              <iframe
                src="https://open.spotify.com/embed/track/3e20Txv4Y19GBxIWDdhuZq?utm_source=generator&theme=0"
                width="100%" height="152" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" title="CHEMIZTRY"
              />
              {/* lonely Boy (Remixes) — April 5, 2024 */}
              <iframe
                src="https://open.spotify.com/embed/album/40FEOBmxfdQOYT0aUUpstY?utm_source=generator&theme=0"
                width="100%" height="352" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" title="lonely Boy (Remixes)"
              />
              {/* Indian Tea Party — October 27, 2023 */}
              <iframe
                src="https://open.spotify.com/embed/track/7uHQJOrcDWfNOZ0oQGehsN?utm_source=generator&theme=0"
                width="100%" height="152" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" title="Indian Tea Party"
              />
              {/* lonely Boy — 2023 */}
              <iframe
                src="https://open.spotify.com/embed/track/3vo8Iw664LmmCPYhueFbJ7?utm_source=generator&theme=0"
                width="100%" height="152" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" title="lonely Boy"
              />
              {/* eyes (Jack Howchin Remix) — 2022 */}
              <iframe
                src="https://open.spotify.com/embed/track/4rYZTwwF453mM0k5PwNx8X?utm_source=generator&theme=0"
                width="100%" height="152" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" title="eyes (Jack Howchin Remix)"
              />
              {/* the long run — 2022 */}
              <iframe
                src="https://open.spotify.com/embed/track/54j3vFaNxAEVIrZMygiHSD?utm_source=generator&theme=0"
                width="100%" height="152" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" title="the long run"
              />
              {/* eyes — 2022 */}
              <iframe
                src="https://open.spotify.com/embed/track/0tlCqJah8c9W6midaEFMx2?utm_source=generator&theme=0"
                width="100%" height="152" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" title="eyes"
              />
            </div>
          )}

          {/* Videos Tab */}
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="videos-content">
              {[
                { id: "jLkk21nl-b8", title: "might be me (Official Visualizer)" },
                { id: "a-Wupdl97ys", title: "kiss before we met (Official Visualizer)" },
                { id: "oWRFv-3TSbM", title: "No Mistake (Official Visualizer)" },
                { id: "bCtzmKyVGYA", title: "ashtray girl (Official Lyric Visualizer)" },
                { id: "UqONgXfShqw", title: "mankind (Official Lyric Video)" },
                { id: "C7G2HBukP-w", title: "CHEMIZTRY (Official Music Video)" },
                { id: "5AVEwy0rQ18", title: "Indian Tea Party (Live Acoustic)" },
                { id: "d36O4g2Q8Ms", title: "Indian Tea Party (Official Lyric Video)" },
                { id: "OvcUK5ubgcY", title: "lonely Boy (Official Gameplay / Lyric Video)" },
                { id: "l3PtmmrS8QM", title: "the long run (Official Music Video)" },
                { id: "6Bp8ttfHd_k", title: "eyes (Official Music Video)" },
              ].map((video) => (
                <div
                  key={video.id}
                  className="bg-[#0d0d0d] border-2 border-[#2a2a2a] hover:border-[#a855f7] transition-colors duration-300"
                  data-testid={`video-${video.id}`}
                >
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 border-t border-[#2a2a2a]">
                    <p className="text-[#f0f0e8] text-sm tracking-wider">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* News Tab */}
          {activeTab === 'news' && (
            <div className="space-y-6" data-testid="news-content">
              {[
                {
                  href: "https://www.bimm-institute.de/news/graduate-set-to-release-love-language-a-music-short-film/",
                  img: "https://www.bimm-institute.de/wp-content/uploads/2025/09/2024_0905_16552700-1400x620.jpg",
                  source: "BIMM University Berlin",
                  date: "September 22, 2025",
                  title: "Graduate set to release LOVE LANGUAGE, a music short film",
                  desc: "BIMM Berlin graduate Zapoida Francis is set to release LOVE LANGUAGE — a bold music short film exploring queer love and identity.",
                  testId: "news-bimm"
                },
                {
                  href: "https://www.issuewire.com/berlin-artist-zapoida-francis-launches-love-language-queer-music-short-film-series-on-the-five-love-languages-1843518055923926",
                  img: "/images/news_issuewire.jpg",
                  source: "IssueWire",
                  date: "September 17, 2025",
                  title: "Berlin Artist zapoida francis Launches LOVE LANGUAGE: Queer Music Short Film Series",
                  desc: "What if Call Me by Your Name and Beyoncé's Lemonade had a baby? The result might look and sound like LOVE LANGUAGE, a bold, five-episode queer music film.",
                  testId: "news-issuewire"
                },
                {
                  href: "https://youtu.be/p64EfvmgC78",
                  img: "https://img.youtube.com/vi/p64EfvmgC78/hqdefault.jpg",
                  source: "Unsigned Berlin",
                  date: "",
                  title: "Zapoida Francis | Unsigned Berlin S2E3",
                  desc: "Video interview featuring zapoida francis on Unsigned Berlin, Season 2 Episode 3.",
                  testId: "news-unsigned"
                }
              ].map((item) => (
                <a
                  key={item.testId}
                  href={item.href}
                  target="_blank" rel="noopener noreferrer"
                  className="flex gap-0 bg-[#0d0d0d] border-2 border-[#2a2a2a] hover:border-[#a855f7] transition-colors duration-300 overflow-hidden h-40 md:h-44"
                  data-testid={item.testId}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-36 md:w-52 h-full object-cover shrink-0"
                  />
                  <div className="py-4 px-5 md:px-6 flex flex-col justify-center overflow-hidden">
                    <p className="text-[#666] text-xs tracking-widest uppercase mb-2">{item.source}{item.date && ` — ${item.date}`}</p>
                    <h3 className="text-[#f0f0e8] text-base md:text-lg tracking-wider mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-[#a0a0a0] text-sm leading-relaxed line-clamp-2 hidden md:block">{item.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#2a2a2a] mb-16"></div>

        {/* Artist Bio Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-0">
            {/* Photo - centered on mobile, left on desktop */}
            <div className="md:col-start-1 md:row-start-1 md:self-start flex justify-center md:justify-start">
              <div className="overflow-hidden border-2 border-[#2a2a2a] max-w-[280px]">
                <img 
                  src="/images/zapoida_artist.jpg" 
                  alt="zapoida francis" 
                  className="w-full h-auto object-contain"
                  data-testid="bio-photo"
                />
              </div>
            </div>
            
            {/* Bio text - on desktop: right column spanning both rows */}
            <div className="md:col-start-2 md:row-start-1 md:row-span-2 text-[#a0a0a0] leading-relaxed space-y-4">
              <p>
                zapoida francis is an artist based in Berlin, Germany. His music blends together introspective, indie songwriting with electronic and hyperpop soundscapes, adding touches of punk rock overtures. He utilises dark sonorities, samples, synthesizers, guitars and layered vocals to express himself through his artistry.
              </p>
              <p>
                His work feels nostalgic but with fresh overtones, with a distinctive underlying narrative. After releasing two singles: <a href="https://open.spotify.com/track/0tlCqJah8c9W6midaEFMx2" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">eyes</a> and <a href="https://open.spotify.com/track/54j3vFaNxAEVIrZMygiHSD" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">the long run</a> in 2022, he began experimenting with new ways to make art by integrating web3 digital interactive content such as AR/VR and NFTs.
              </p>
              <p>
                In 2023, alongside the release of <a href="https://open.spotify.com/track/3vo8Iw664LmmCPYhueFbJ7" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">lonely Boy</a>, he created a video game for his listeners to play while streaming the track. The following release, <a href="https://open.spotify.com/album/3u1H86IEymilVRxuEU3dFt" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">Indian Tea Party</a>, featured a collaboration with the apparel brand <a href="https://www.instagram.com/1chokeraweek" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">Alien Cleopatra</a>. The same year, he contributed, in collaboration with <a href="https://open.spotify.com/artist/64IGVIZAUwff9ZGlrWtCU3" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">Sky Deep</a>, to two songs featured in the soundtrack of the German TV show <a href="https://www.zdf.de/serien/loving-her-102" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">Loving Her (ZDF)</a>, including the track <a href="https://open.spotify.com/track/3aMqYsiO42By7dsueEgus2" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">No Mistake</a>.
              </p>
              <p>
                2024 began with <a href="https://open.spotify.com/track/3ZYNi3ybMuWNY3pHJ86CnT" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">CHEMIZTRY</a>, a collaboration with Swedish artist <a href="https://open.spotify.com/artist/7ivXJdhxFbbdq7G6JcYfWu" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">Jack Howchin</a> and Lithuanian singer <a href="https://open.spotify.com/artist/3YbNiYLva38PdATw03DSXH" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">Gia Ivy</a>, both featured in an aesthetic and tragicomic <a href="https://youtu.be/C7G2HBukP-w" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">music video</a>, followed by <a href="https://open.spotify.com/track/3y2zjUuUMVJ2x4EOrnI0PU" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">mankind</a>, a hyperpop queer anthem with its <a href="https://open.spotify.com/album/5RiPoIMFeXnYpmI4P14YRu" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">remixes</a> by <a href="https://open.spotify.com/artist/3xJ54VQTXSMcCYbO1dDhvc" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">Nayeli</a> and <a href="https://music.apple.com/de/artist/satiric/1607534469?l=en-GB" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">SATIRIC</a>, and the single <a href="https://open.spotify.com/track/554RUSH2zJIprjrXo7ANgu" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">ashtray girl</a>.
              </p>
              <p>
                Kicking off 2025, he released the instrumental club EP <a href="https://open.spotify.com/album/5hin0jFQ60PZqpFA9hEhx5" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">no use</a>. He wrote and directed <a href="https://youtube.com/playlist?list=PLxcTOTWn7TmJEjSWFSiuo7tEVIRRcRZL7" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">LOVE LANGUAGE</a>, a queer music short film series, launching from autumn 2025, along with the <a href="https://open.spotify.com/album/2mVrgCRGoXOoywCo3fEyS5" target="_blank" rel="noopener noreferrer" className="text-[#f0f0e8] hover:text-[#a855f7] transition-colors duration-300">homonymous music EP</a>.
              </p>
            </div>

            {/* Streaming links - after bio on mobile, bottom-left on desktop */}
            <div className="md:col-start-1 md:row-start-2 md:self-end flex flex-col items-start mt-16 md:mt-0" data-testid="streaming-links">
              <p className="text-[#a0a0a0] text-sm tracking-wider mb-4">Listen to zapoida francis on</p>
              <div className="flex flex-col gap-3">
                <a href="https://open.spotify.com/artist/5iL3jq2jrFe0UqWFzEFZIQ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#a0a0a0] hover:text-[#1DB954] transition-colors duration-300" data-testid="link-spotify">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                  <span className="text-sm tracking-wider">Spotify</span>
                </a>
                <a href="https://music.apple.com/us/artist/zapoida-francis/1599640411" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#a0a0a0] hover:text-[#FC3C44] transition-colors duration-300" data-testid="link-apple-music">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z"/></svg>
                  <span className="text-sm tracking-wider">Apple Music</span>
                </a>
                <a href="https://tidal.com/search?q=zapoida+francis" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#a0a0a0] hover:text-[#f0f0e8] transition-colors duration-300" data-testid="link-tidal">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.012 12l4.004-4.004-4.004-4.004zM16.042 7.996l3.979-3.979L24 7.996l-3.979 3.979z"/></svg>
                  <span className="text-sm tracking-wider">Tidal</span>
                </a>
                <a href="https://www.deezer.com/en/artist/154059692" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#a0a0a0] hover:text-[#A238FF] transition-colors duration-300" data-testid="link-deezer">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M.693 10.024c.381 0 .693-1.256.693-2.807 0-1.55-.312-2.807-.693-2.807C.312 4.41 0 5.666 0 7.217s.312 2.808.693 2.808ZM21.038 1.56c-.364 0-.684.805-.91 2.096C19.765 1.446 19.184 0 18.526 0c-.78 0-1.464 2.036-1.784 5-.312-2.158-.788-3.536-1.325-3.536-.745 0-1.386 2.704-1.62 6.472-.442-1.932-1.083-3.145-1.793-3.145s-1.35 1.213-1.793 3.145c-.242-3.76-.874-6.463-1.628-6.463-.537 0-1.013 1.378-1.325 3.535C6.938 2.036 6.262 0 5.474 0c-.658 0-1.247 1.447-1.602 3.665-.217-1.291-.546-2.105-.91-2.105-.675 0-1.221 2.807-1.221 6.272 0 3.466.546 6.273 1.221 6.273.277 0 .537-.476.736-1.273.32 2.928.996 4.938 1.776 4.938.606 0 1.143-1.204 1.507-3.11.251 3.622.875 6.195 1.602 6.195.46 0 .875-1.023 1.187-2.677C10.142 21.6 11 24 12.004 24c1.005 0 1.863-2.4 2.235-5.822.312 1.654.727 2.677 1.186 2.677.728 0 1.352-2.573 1.603-6.195.364 1.906.9 3.11 1.507 3.11.78 0 1.455-2.01 1.775-4.938.208.797.46 1.273.737 1.273.675 0 1.22-2.807 1.22-6.273-.008-3.457-.553-6.272-1.23-6.272ZM23.307 10.024c.381 0 .693-1.256.693-2.807 0-1.55-.312-2.807-.693-2.807-.381 0-.693 1.256-.693 2.807s.312 2.808.693 2.808Z"/></svg>
                  <span className="text-sm tracking-wider">Deezer</span>
                </a>
                <a href="https://music.youtube.com/channel/UC_xVyQEZdA0LDjmvhbm2MXg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#a0a0a0] hover:text-[#FF0000] transition-colors duration-300" data-testid="link-youtube-music">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"/></svg>
                  <span className="text-sm tracking-wider">YouTube Music</span>
                </a>
              </div>
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
