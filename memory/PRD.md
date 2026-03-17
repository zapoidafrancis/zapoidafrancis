# Zapoida Francis - Music Portfolio PRD

## Original Problem Statement
A musician, music producer, and audio engineer based in Berlin needs a captivating and mobile-friendly online portfolio. The portfolio should function like a showreel, allowing potential clients to easily browse their work. The aesthetic should reflect the Berlin fashion/underground scene.

## User Persona
- **Name**: zapoida francis (Francesco Maria De Lucia)
- **Profession**: Audio Engineer, Music Producer, Musician, Sound Designer, Guitar Teacher, Multimedia Artist
- **Location**: Berlin, Germany
- **Goal**: Attract potential clients by showcasing professional work and credentials

## Core Requirements

### Implemented
1. **Hero Section** - Interactive RGB chromatic aberration, infinite marquee, CTA buttons
2. **Works Section** - Filterable gallery with embedded Spotify/Instagram/external links (18 projects)
3. **CV Section** - Timeline layout, downloadable PDF (desktop download / mobile new tab)
4. **References Section** - 4 testimonial cards with downloadable reference letters
5. **Art Section** (formerly Solo Project)
   - "LATEST" feature for LOVE LANGUAGE EP with 5 embedded YouTube videos
   - Artist bio with photo
   - "Listen to zapoida francis on:" streaming links (Spotify, Apple Music, Tidal, Deezer, YouTube Music)
6. **Footer/Contact** - CTA, email, social links
7. **Design System** - Purple accent (#a855f7), Bebas Neue + Inter, film grain, sharp edges
8. **Mobile Experience** - Fixed mobile menu with backdrop blur, responsive layout

### Backlog (P2)
1. **Backend Integration** - Migrate mock data from `/app/frontend/src/data/mock.js` to MongoDB + FastAPI
2. **Content Management System** - Admin panel for post-deployment content editing

## Technical Architecture
```
/app
├── backend (FastAPI - scaffold only)
└── frontend (React + Tailwind)
    └── src
        ├── components/ (Hero, Works, CV, References, SoloProject, Header, Footer)
        ├── data/mock.js (all content data)
        └── App.css (keyframe animations, global styles)
```

## Design Tokens
- **Primary BG**: #0d0d0d
- **Section BG**: #141414
- **Accent**: #a855f7
- **Text Primary**: #f0f0e8
- **Text Secondary**: #a0a0a0
- **Border**: #2a2a2a

## Streaming Profile Links
- Spotify: https://open.spotify.com/artist/5iL3jq2jrFe0UqWFzEFZIQ
- Apple Music: https://music.apple.com/us/artist/zapoida-francis/1599640411
- Tidal: https://tidal.com/search?q=zapoida+francis
- Deezer: https://www.deezer.com/en/artist/154059692
- YouTube Music: https://music.youtube.com/channel/UC_xVyQEZdA0LDjmvhbm2MXg

## Last Updated
March 2026
