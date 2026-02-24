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

    // Instagram - show button only
    if (work.type === 'instagram' && work.instagramUrl) {
      return (
        <div className="mt-4">
          <a
            href={work.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            View on Instagram
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
    <section id="works" className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Selected Works</h2>
          <p className="text-xl text-gray-400">Projects spanning multiple roles in audio production</p>
        </div>

        {/* Role Filters */}
        <div className="mb-12 flex flex-wrap gap-3">
          {roles.map(role => (
            <Button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              variant={selectedRole === role.id ? 'default' : 'outline'}
              className={`rounded-full transition-all duration-300 ${
                selectedRole === role.id
                  ? 'bg-[#9370db] text-white hover:bg-[#8060c0]'
                  : 'border-gray-600 text-gray-300 hover:border-[#90ee90] hover:text-[#90ee90]'
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
              className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-800 hover:border-[#9370db] flex flex-col"
            >
              {/* Image/Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
                
                {/* Play icon for items with embeds */}
                {(work.type.includes('spotify') || work.type === 'bandcamp') && (
                  <button
                    onClick={() => toggleExpand(work.id)}
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                  >
                    <div className="w-16 h-16 bg-[#90ee90] rounded-full flex items-center justify-center hover:bg-[#7fdf7f] transition-all hover:scale-110">
                      <Play className="w-8 h-8 text-black ml-1" />
                    </div>
                  </button>
                )}
              </div>

              {/* Content */}
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold leading-tight">{work.title}</h3>
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
                       work.type === 'instagram' ? 'View on Instagram' :
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
