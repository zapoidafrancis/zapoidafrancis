import React, { useState } from 'react';
import { Play, ExternalLink, Calendar, Music } from 'lucide-react';
import { roles, works } from '../data/mock';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const Works = () => {
  const [selectedRole, setSelectedRole] = useState('all');
  const [expandedWork, setExpandedWork] = useState(null);

  const filteredWorks = selectedRole === 'all'
    ? works
    : works.filter(work => work.role.includes(selectedRole));

  const toggleExpand = (workId) => {
    setExpandedWork(expandedWork === workId ? null : workId);
  };

  const renderPlatformEmbed = (work) => {
    // Spotify embeds
    if (work.type === 'spotify-track' && work.spotifyId) {
      return (
        <div className="mt-4">
          <iframe
            style={{ borderRadius: '12px' }}
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
        <div className="mt-4">
          <iframe
            style={{ borderRadius: '12px' }}
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

    // Instagram - embed player
    if (work.type === 'instagram' && work.instagramUrl) {
      // Extract reel ID from URL
      const reelId = work.instagramUrl.match(/reel\/([^\/\?]+)/)?.[1];
      
      return (
        <div className="mt-4">
          {reelId && (
            <div className="relative w-full" style={{ paddingBottom: '125%' }}>
              <iframe
                src={`https://www.instagram.com/reel/${reelId}/embed/`}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
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
            className="inline-flex items-center gap-2 px-4 py-2 mt-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Open in Instagram
          </a>
        </div>
      );
    }

    // Bandcamp
    if (work.type === 'bandcamp' && work.bandcampUrl) {
      return (
        <div className="mt-4">
          <a
            href={work.bandcampUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#629aa9] text-white rounded-lg hover:bg-[#5289a0] transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Listen on Bandcamp
          </a>
        </div>
      );
    }

    // Generic external link
    if (work.type === 'link' && work.externalUrl) {
      return (
        <div className="mt-4">
          <a
            href={work.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#90ee90] text-black rounded-lg hover:bg-[#7fdf7f] transition-all"
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
    <section id="works" className="min-h-screen bg-black text-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - BOLD with animation */}
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter animate-pulse-glow uppercase">
            Selected Works
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light">Projects spanning multiple roles in audio production</p>
        </div>

        {/* Role Filters */}
        <div className="mb-16 flex flex-wrap gap-4">
          {roles.map(role => (
            <Button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              variant={selectedRole === role.id ? 'default' : 'outline'}
              className={`rounded-none transition-all duration-300 font-bold uppercase text-sm tracking-wider ${
                selectedRole === role.id
                  ? 'bg-[#9370db] text-white hover:bg-[#8060c0] shadow-lg shadow-purple-500/50'
                  : 'border-gray-700 text-gray-300 hover:border-[#9370db] hover:text-white bg-transparent'
              }`}
            >
              {role.name}
            </Button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map(work => (
            <Card
              key={work.id}
              className="bg-[#0a0a0a] rounded-none overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500 border-2 border-gray-900 hover:border-[#9370db] flex flex-col group hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Image/Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold leading-tight text-white">{work.title}</h3>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300 flex-shrink-0 ml-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {work.year}
                  </Badge>
                </div>

                <p className="text-[#9370db] mb-3 font-medium">{work.artist}</p>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{work.description}</p>

                {/* Role Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.role.map((roleId, idx) => {
                    const roleData = roles.find(r => r.id === roleId);
                    return (
                      <Badge key={idx} className="bg-[#2a2a2a] text-gray-300 text-xs">
                        {roleData?.name}
                      </Badge>
                    );
                  })}
                </div>

                {/* Platform Embed - Show when expanded or always for cards with content */}
                {expandedWork === work.id && renderPlatformEmbed(work)}

                {/* External Link Button - Show when not expanded */}
                {expandedWork !== work.id && work.type !== 'no-link' && (
                  <div className="mt-auto">
                    <button
                      onClick={() => toggleExpand(work.id)}
                      className="w-full py-2 px-4 bg-[#9370db] text-white rounded-lg hover:bg-[#8060c0] transition-all flex items-center justify-center gap-2"
                    >
                      <Music className="w-4 h-4" />
                      {work.type.includes('spotify') ? 'Play on Spotify' : 
                       work.type === 'bandcamp' ? 'Listen on Bandcamp' :
                       work.type === 'instagram' ? 'View Instagram Reel' :
                       'View Project'}
                    </button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">No works found for this role</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Works;
