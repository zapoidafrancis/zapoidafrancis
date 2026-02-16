// Mock data for music portfolio

export const heroData = {
  name: "Alex Rivera",
  tagline: "Music Producer • Audio Engineer • Musician",
  description: "Crafting immersive soundscapes and bringing musical visions to life through production, mixing, and performance."
};

export const roles = [
  { id: 'all', name: 'All Works' },
  { id: 'sound-designer', name: 'Sound Designer' },
  { id: 'mixing-engineer', name: 'Mixing Engineer' },
  { id: 'mastering-engineer', name: 'Mastering Engineer' },
  { id: 'guitar-player', name: 'Guitar Player' },
  { id: 'music-producer', name: 'Music Producer' },
  { id: 'audio-engineer', name: 'Audio Engineer' },
  { id: 'music-composer', name: 'Music Composer' },
  { id: 'studio-assistant', name: 'Studio Assistant' },
  { id: 'bass-player', name: 'Bass Player' }
];

export const works = [
  {
    id: 1,
    title: "Ethereal Dreams EP",
    artist: "Luna Collective",
    role: ['mixing-engineer', 'mastering-engineer'],
    type: 'audio',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    description: "Mixed and mastered 5-track EP blending ambient textures with electronic elements.",
    year: 2024
  },
  {
    id: 2,
    title: "Neon Lights Film Score",
    artist: "Independent Film",
    role: ['sound-designer', 'music-composer'],
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
    description: "Original score and sound design for neo-noir short film.",
    year: 2024
  },
  {
    id: 3,
    title: "Live Session at Abbey Studios",
    artist: "The Midnight Riders",
    role: ['guitar-player', 'bass-player'],
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80',
    description: "Guitar and bass performance for live recording session.",
    year: 2023
  },
  {
    id: 4,
    title: "Urban Echoes Album",
    artist: "Marcus Stone",
    role: ['music-producer', 'audio-engineer'],
    type: 'audio',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    description: "Produced and engineered full-length hip-hop album with live instrumentation.",
    year: 2023
  },
  {
    id: 5,
    title: "Podcast Series - Tech Talks",
    artist: "Silicon Valley Insights",
    role: ['audio-engineer', 'mastering-engineer'],
    type: 'audio',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
    description: "Audio engineering and mastering for 12-episode podcast series.",
    year: 2024
  },
  {
    id: 6,
    title: "Recording Sessions - Studio Work",
    artist: "Various Artists",
    role: ['studio-assistant', 'audio-engineer'],
    type: 'audio',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80',
    description: "Studio assistance and engineering for multiple recording projects.",
    year: 2023
  }
];

export const cvData = {
  experience: [
    {
      title: "Senior Audio Engineer",
      company: "Soundwave Studios",
      period: "2022 - Present",
      description: "Leading audio engineering projects, mixing, and mastering for various clients including indie artists and commercial productions."
    },
    {
      title: "Music Producer & Composer",
      company: "Freelance",
      period: "2020 - Present",
      description: "Producing original music, scoring for films and video content, sound design for multimedia projects."
    },
    {
      title: "Studio Assistant",
      company: "Red Moon Recording",
      period: "2019 - 2022",
      description: "Assisted in recording sessions, maintained studio equipment, learned advanced production techniques."
    }
  ],
  education: [
    {
      degree: "Audio Engineering Diploma",
      institution: "Institute of Audio Research",
      year: "2019"
    },
    {
      degree: "Music Theory & Composition Certificate",
      institution: "Berklee Online",
      year: "2018"
    }
  ],
  skills: [
    "Pro Tools", "Logic Pro X", "Ableton Live", "Sound Design",
    "Mixing & Mastering", "Music Composition", "Guitar", "Bass",
    "Studio Recording", "Audio Restoration", "Live Sound"
  ]
};

export const references = [
  {
    name: "Sarah Martinez",
    role: "Film Director",
    company: "Indie Films Co.",
    quote: "Alex's sound design brought our film to life. Their attention to detail and creative approach exceeded all expectations.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80'
  },
  {
    name: "Marcus Chen",
    role: "Recording Artist",
    company: "Independent",
    quote: "Working with Alex was transformative. They understood my vision and elevated the production beyond what I imagined.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80'
  },
  {
    name: "Jessica Thompson",
    role: "Studio Manager",
    company: "Soundwave Studios",
    quote: "Alex is not only technically skilled but brings creative energy to every project. A true professional.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80'
  }
];

export const soloProject = {
  name: "Midnight Frequencies",
  description: "An experimental electronic project exploring the intersection of ambient soundscapes and rhythmic complexity.",
  bio: "Midnight Frequencies is my personal artistic exploration where I blend synthesizers, field recordings, and live instrumentation to create immersive sonic experiences.",
  songs: [
    {
      id: 1,
      title: "Horizon",
      duration: "4:32",
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
      spotifyUrl: '#',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80'
    },
    {
      id: 2,
      title: "Echoes in the Void",
      duration: "5:18",
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
      spotifyUrl: '#',
      image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&q=80'
    },
    {
      id: 3,
      title: "Digital Rain",
      duration: "3:45",
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
      spotifyUrl: '#',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80'
    }
  ],
  videos: [
    {
      id: 1,
      title: "Horizon - Official Music Video",
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80'
    },
    {
      id: 2,
      title: "Behind the Sound - Studio Session",
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80'
    }
  ],
  interviews: [
    {
      id: 1,
      title: "Interview with Electronic Music Magazine",
      publication: "EM Mag",
      date: "March 2024",
      url: '#',
      excerpt: "Discussing the creative process behind Midnight Frequencies and the future of ambient electronic music."
    },
    {
      id: 2,
      title: "Podcast: The Sound Design Journey",
      publication: "Audio Producers Podcast",
      date: "January 2024",
      url: '#',
      excerpt: "A deep dive into my approach to sound design and music production."
    }
  ],
  musicFilm: {
    title: "Frequencies - A Visual Album",
    description: "A 30-minute visual journey through the Midnight Frequencies soundscape, exploring themes of isolation, connection, and transformation.",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?w=1200&q=80',
    credits: "Directed, scored, and produced by Alex Rivera"
  }
};
