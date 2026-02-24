# Zapoida Francis - Music Portfolio PRD

## Original Problem Statement
A musician, music producer, and audio engineer based in Berlin needs a captivating and mobile-friendly online portfolio. The portfolio should function like a showreel, allowing potential clients to easily browse their work. The aesthetic should reflect the Berlin fashion/underground scene inspired by iriedaily.de, voostore.com, and vertere-berlin.com.

## User Persona
- **Name**: zapoida francis (Francesco Maria De Lucia)
- **Profession**: Audio Engineer, Music Producer, Musician, Sound Designer, Guitar Teacher
- **Location**: Berlin, Germany
- **Goal**: Attract potential clients by showcasing professional work and credentials

## Core Requirements

### ✅ Implemented (P0)
1. **Hero Section**
   - Name displayed as "zapoida francis" in massive bold typography
   - Berlin-based intro text
   - Infinite scrolling marquee with roles
   - CTA buttons (View Work, Get in Touch)

2. **Works Section**
   - Filterable gallery by role (Sound Designer, Mixing Engineer, Mastering Engineer, Guitar Player, Bass Player, Music Producer, Music Composer, Studio Assistant)
   - Embedded Spotify players for tracks and albums
   - Embedded Instagram reels
   - External links to Bandcamp and other platforms
   - All 18 projects populated with real data

3. **CV Section**
   - Timeline layout for professional experience (6 positions)
   - Education section (2 degrees)
   - Languages section
   - Download CV button (UI ready, awaiting PDF)

4. **References Section**
   - 4 testimonial cards with quotes
   - Download reference letter buttons (UI ready, awaiting PDFs)

5. **Solo Project Section**
   - Coming soon placeholder

6. **Footer/Contact**
   - Email, location
   - Social links (LinkedIn, Instagram)

7. **Design System - Berlin Underground Aesthetic**
   - Neon cyan accent (#00f0ff)
   - Sharp-edged UI (0 border-radius)
   - Bebas Neue display font + Inter body font
   - Film grain texture overlay
   - Dark backgrounds (#0d0d0d, #141414)
   - Off-white text (#f0f0e8)

### ⏳ Pending (P1)
1. **Download Buttons Functionality**
   - CV PDF file needed
   - 4 Reference letter PDFs needed
   - Implementation: Link files in /public/documents/ and update download handlers

### 📋 Backlog (P2)
1. **Solo Project Content**
   - User to provide songs, videos, interviews

2. **Backend Integration**
   - Migrate mock.js data to MongoDB
   - Create FastAPI endpoints
   - Admin panel for content management

## Technical Architecture

```
/app
├── backend (FastAPI - not yet integrated)
│   ├── .env
│   ├── requirements.txt
│   └── server.py
└── frontend (React + Tailwind)
    ├── .env
    ├── package.json
    └── src
        ├── index.css (design system, animations)
        ├── App.css (component styles)
        ├── App.js
        ├── components/
        │   ├── Header.jsx
        │   ├── Hero.jsx
        │   ├── Works.jsx
        │   ├── CV.jsx
        │   ├── References.jsx
        │   ├── SoloProject.jsx
        │   └── Footer.jsx
        └── data/
            └── mock.js (all content data)
```

## Design Tokens
- **Primary BG**: #0d0d0d
- **Secondary BG**: #141414
- **Card BG**: #1a1a1a
- **Text Primary**: #f0f0e8
- **Text Secondary**: #a0a0a0
- **Accent**: #00f0ff
- **Border**: #2a2a2a

## Data Source
All content currently managed in `/app/frontend/src/data/mock.js`

## Testing Status
- Frontend: 98% pass rate
- All navigation, filters, embeds working
- Mobile responsive ✅
- Minor issues fixed

## Last Updated
December 2025
