import React, { useState } from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { roles, works } from '../data/mock';

const Works = () => {
  const [selectedRole, setSelectedRole] = useState('all');
  const [expandedWork, setExpandedWork] = useState(null);

  const filteredWorks = (selectedRole === 'all'
    ? works
    : works.filter(work => work.role.includes(selectedRole))
  ).sort((a, b) => b.year - a.year);

  const toggleExpand = (workId) => {
    setExpandedWork(expandedWork === workId ? null : workId);
  };

  const renderPlatformEmbed = (work) => {
    if (work.type === 'spotify-track' && work.spotifyId) {
      return (
        <div className="mt-6">
          <iframe
            style={{ borderRadius: '0' }}
            src={`https://open.spotify.com/embed/track/${work.spotifyId}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      );
    }

    if (work.type === 'spotify-album' && work.spotifyId) {
      return (
        <div className="mt-6">
          <iframe
            style={{ borderRadius: '0' }}
            src={`https://open.spotify.com/embed/album/${work.spotifyId}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      );
    }

    if (work.type === 'instagram' && work.instagramUrl) {
      const reelId = work.instagramUrl.match(/reel\/([^\/\?]+)/)?.[1];
      
      return (
        <div className="mt-6">
          {reelId && (
            <div className="relative w-full border-2 border-[#2a2a2a]" style={{ paddingBottom: '125%' }}>
              <iframe
                src={`https://www.instagram.com/reel/${reelId}/embed/`}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          )}
          <a
            href={work.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 mt-4 btn-sharp text-xs"
          >
            <ExternalLink className="w-4 h-4" />
            Open Instagram
          </a>
        </div>
      );
    }

    if (work.type === 'bandcamp' && work.bandcampUrl) {
      return (
        <div className="mt-6">
          <a
            href={work.bandcampUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-sharp px-4 py-3 text-xs"
          >
            <ExternalLink className="w-4 h-4" />
            Listen on Bandcamp
          </a>
        </div>
      );
    }

    if (work.type === 'link' && work.externalUrl) {
      return (
        <div className="mt-6">
          <a
            href={work.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-filled px-4 py-3 text-xs"
          >
            <ExternalLink className="w-4 h-4" />
            View Project
          </a>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="works" className="min-h-screen bg-[#0d0d0d] text-[#f0f0e8] py-32 px-6 md:px-12 noise-bg relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 
            className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight"
            data-testid="works-title"
          >
            Selected Works
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-[#a855f7] to-transparent mt-8"></div>
        </div>

        {/* Role Filters */}
        <div className="mb-16 flex flex-wrap gap-3" data-testid="works-filters">
          {roles.map(role => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-300 border-2 ${
                selectedRole === role.id
                  ? 'bg-[#a855f7] text-[#0d0d0d] border-[#a855f7]'
                  : 'bg-transparent text-[#a0a0a0] border-[#2a2a2a] hover:border-[#a855f7] hover:text-[#a855f7]'
              }`}
              data-testid={`filter-${role.id}`}
            >
              {role.name}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map(work => (
            <div
              key={work.id}
              className="bg-[#141414] border-2 border-[#2a2a2a] overflow-hidden card-hover flex flex-col group"
              data-testid={`work-card-${work.id}`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden img-zoom">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60"></div>
                
                {/* Year badge */}
                <div className="absolute top-4 right-4 bg-[#0d0d0d]/90 border border-[#2a2a2a] px-3 py-1">
                  <span className="text-xs text-[#a855f7] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {work.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold leading-tight text-[#f0f0e8] mb-2">
                  {work.title}
                </h3>
                <p className="text-[#a855f7] text-sm mb-3">{work.artist}</p>
                <p className="text-[#a0a0a0] text-sm mb-4 leading-relaxed">{work.description}</p>

                {/* Role Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.role.map((roleId, idx) => {
                    const roleData = roles.find(r => r.id === roleId);
                    return (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-[#1a1a1a] border border-[#2a2a2a] text-[#a0a0a0] text-xs"
                      >
                        {roleData?.name}
                      </span>
                    );
                  })}
                </div>

                {/* Platform Embed */}
                {expandedWork === work.id && renderPlatformEmbed(work)}

                {/* Expand Button */}
                {expandedWork !== work.id && work.type !== 'no-link' && (
                  <div className="mt-auto pt-4">
                    <button
                      onClick={() => toggleExpand(work.id)}
                      className="w-full py-3 px-4 btn-filled text-xs flex items-center justify-center gap-2"
                    >
                      {work.type.includes('spotify') ? 'Play on Spotify' : 
                       work.type === 'bandcamp' ? 'Listen on Bandcamp' :
                       work.type === 'instagram' ? 'View Instagram' :
                       'View Project'}
                    </button>
                  </div>
                )}

                {/* Collapse button when expanded */}
                {expandedWork === work.id && (
                  <button
                    onClick={() => toggleExpand(work.id)}
                    className="mt-4 w-full py-2 border-2 border-[#2a2a2a] text-[#666] text-xs uppercase tracking-wider hover:border-[#a855f7] hover:text-[#a855f7] transition-all"
                  >
                    Collapse
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-[#2a2a2a]">
            <p className="text-[#666] text-lg">No works found for this role</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Works;
