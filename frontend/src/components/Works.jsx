import React, { useState } from 'react';
import { Play, ExternalLink, Calendar } from 'lucide-react';
import { roles, works } from '../data/mock';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Works = () => {
  const [selectedRole, setSelectedRole] = useState('all');
  const [playingAudio, setPlayingAudio] = useState(null);

  const filteredWorks = selectedRole === 'all'
    ? works
    : works.filter(work => work.role.includes(selectedRole));

  const handlePlayAudio = (audioId) => {
    if (playingAudio === audioId) {
      setPlayingAudio(null);
    } else {
      setPlayingAudio(audioId);
    }
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
            <div
              key={work.id}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-[#9370db]"
            >
              {/* Image/Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                {work.type === 'audio' && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button
                      onClick={() => handlePlayAudio(work.id)}
                      className="w-16 h-16 bg-[#90ee90] rounded-full flex items-center justify-center hover:bg-[#7fdf7f] transition-all"
                    >
                      <Play className="w-8 h-8 text-black ml-1" />
                    </button>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{work.title}</h3>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                    <Calendar className="w-3 h-3 mr-1" />
                    {work.year}
                  </Badge>
                </div>

                <p className="text-[#9370db] mb-3">{work.artist}</p>
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

                {/* Audio Player or Video Link */}
                {work.type === 'audio' && playingAudio === work.id && (
                  <audio controls className="w-full mt-4" autoPlay>
                    <source src={work.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}

                {work.type === 'video' && (
                  <a
                    href={work.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#c4a037] transition-colors mt-2"
                  >
                    Watch Video <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
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
