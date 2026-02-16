import React, { useState } from 'react';
import { Play, Music2, ExternalLink, FileText, Video } from 'lucide-react';
import { soloProject } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const SoloProject = () => {
  const [playingSong, setPlayingSong] = useState(null);

  const handlePlaySong = (songId) => {
    if (playingSong === songId) {
      setPlayingSong(null);
    } else {
      setPlayingSong(songId);
    }
  };

  return (
    <section id="solo-project" className="min-h-screen bg-[#1a1a1a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Music2 className="w-12 h-12 text-[#9370db]" />
            <h2 className="text-5xl md:text-6xl font-bold">{soloProject.name}</h2>
          </div>
          <p className="text-xl text-gray-400 mb-6">{soloProject.description}</p>
          <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">{soloProject.bio}</p>
        </div>

        {/* Tabs for different content */}
        <Tabs defaultValue="songs" className="w-full">
          <TabsList className="bg-[#0a0a0a] mb-8 p-1 grid w-full grid-cols-2 md:grid-cols-4 gap-2">
            <TabsTrigger value="songs" className="data-[state=active]:bg-[#9370db] data-[state=active]:text-white">
              Songs
            </TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:bg-[#9370db] data-[state=active]:text-white">
              Videos
            </TabsTrigger>
            <TabsTrigger value="interviews" className="data-[state=active]:bg-[#9370db] data-[state=active]:text-white">
              Interviews
            </TabsTrigger>
            <TabsTrigger value="film" className="data-[state=active]:bg-[#9370db] data-[state=active]:text-white">
              Music Film
            </TabsTrigger>
          </TabsList>

          {/* Songs Tab */}
          <TabsContent value="songs">
            {soloProject.songs && soloProject.songs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {soloProject.songs.map(song => (
                  <Card key={song.id} className="bg-[#0a0a0a] border-gray-800 hover:border-[#9370db] transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={song.image}
                        alt={song.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <button
                          onClick={() => handlePlaySong(song.id)}
                          className="w-16 h-16 bg-[#90ee90] rounded-full flex items-center justify-center hover:bg-[#7fdf7f] transition-all hover:scale-110"
                        >
                          <Play className="w-8 h-8 text-black ml-1" />
                        </button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{song.title}</h3>
                      <p className="text-gray-400 mb-4">{song.duration}</p>
                      {playingSong === song.id && (
                        <audio controls className="w-full mb-4" autoPlay>
                          <source src={song.audioUrl} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      )}
                      <a
                        href={song.spotifyUrl}
                        className="inline-flex items-center gap-2 text-[#9370db] hover:text-[#8060c0] transition-colors"
                      >
                        Listen on Spotify <ExternalLink className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-[#0a0a0a] border-gray-800">
                <CardContent className="p-12 text-center">
                  <Music2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-2xl text-gray-400 mb-4">Coming Soon</p>
                  <p className="text-gray-500">Solo project songs will be added here</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos">
            {soloProject.videos && soloProject.videos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {soloProject.videos.map(video => (
                  <Card key={video.id} className="bg-[#0a0a0a] border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Video className="w-5 h-5 text-[#90ee90]" />
                        {video.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-black rounded-lg overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          src={video.videoUrl}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-[#0a0a0a] border-gray-800">
                <CardContent className="p-12 text-center">
                  <Video className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-2xl text-gray-400 mb-4">Coming Soon</p>
                  <p className="text-gray-500">Solo project videos will be added here</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Interviews Tab */}
          <TabsContent value="interviews">
            {soloProject.interviews && soloProject.interviews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {soloProject.interviews.map(interview => (
                  <Card key={interview.id} className="bg-[#0a0a0a] border-gray-800 hover:border-[#9370db] transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <FileText className="w-6 h-6 text-[#90ee90] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{interview.title}</h3>
                          <p className="text-[#9370db] text-sm mb-1">{interview.publication}</p>
                          <p className="text-gray-500 text-sm mb-4">{interview.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4">{interview.excerpt}</p>
                      <a
                        href={interview.url}
                        className="inline-flex items-center gap-2 text-[#90ee90] hover:text-[#7fdf7f] transition-colors"
                      >
                        Read Full Interview <ExternalLink className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-[#0a0a0a] border-gray-800">
                <CardContent className="p-12 text-center">
                  <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-2xl text-gray-400 mb-4">Coming Soon</p>
                  <p className="text-gray-500">Solo project interviews will be added here</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Music Film Tab */}
          <TabsContent value="film">
            {soloProject.musicFilm ? (
              <Card className="bg-[#0a0a0a] border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white text-3xl">{soloProject.musicFilm.title}</CardTitle>
                  <p className="text-gray-400 text-lg">{soloProject.musicFilm.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src={soloProject.musicFilm.videoUrl}
                      title={soloProject.musicFilm.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-gray-400 italic">{soloProject.musicFilm.credits}</p>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-[#0a0a0a] border-gray-800">
                <CardContent className="p-12 text-center">
                  <Video className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-2xl text-gray-400 mb-4">Coming Soon</p>
                  <p className="text-gray-500">Music film content will be added here</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SoloProject;
