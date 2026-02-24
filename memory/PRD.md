# Zapoida Francis - Music Portfolio PRD

## Original Problem Statement
A musician, music producer, and audio engineer based in Berlin needs a captivating and mobile-friendly online portfolio. The portfolio should function like a showreel, allowing potential clients to easily browse their work. The aesthetic should reflect the Berlin fashion/underground scene.

## User Persona
- **Name**: zapoida francis (Francesco Maria De Lucia)
- **Profession**: Audio Engineer, Music Producer, Musician, Sound Designer, Guitar Teacher, Multimedia Artist
- **Location**: Berlin, Germany
- **Goal**: Attract potential clients by showcasing professional work and credentials

## Core Requirements

### ✅ Implemented
1. **Hero Section**
   - Name displayed as "zapoida francis" in massive bold typography (Bebas Neue)
   - RGB chromatic aberration effect on background photo (slow, never settling, 12-27px split)
   - Infinite scrolling marquee with roles
   - CTA buttons (View Work, Get in Touch)
   - Purple accent color (#a855f7)

2. **Works Section**
   - Filterable gallery by role
   - Embedded Spotify players for tracks and albums
   - Embedded Instagram reels
   - External links to Bandcamp and other platforms
   - All 18 projects populated with real data

3. **CV Section**
   - Single column layout (Experience then Education)
   - Timeline layout for professional experience
   - Education section
   - Proper spacing between jobs
   - Download CV button (UI ready, awaiting PDF)

4. **References Section**
   - 4 testimonial cards with quotes
   - Download reference letter buttons (UI ready, awaiting PDFs)

5. **Solo Project Section**
   - Coming soon placeholder

6. **Footer/Contact**
   - CTA: "You have an idea? You want me to perfect your music or your mixed media project? Shoot me a message and let's talk."
   - Email, location, social links

7. **Design System**
   - Purple accent (#a855f7)
   - Sharp-edged UI (0 border-radius)
   - Bebas Neue display font + Inter body font
   - Film grain texture overlay

### ⏳ Pending (P1)
1. **Download Buttons Functionality**
   - CV PDF file needed
   - 4 Reference letter PDFs needed

### 📋 Backlog (P2)
1. **Solo Project Content** - User to provide songs, videos, interviews
2. **Backend Integration** - Migrate mock data to MongoDB

## Technical Architecture
```
/app
├── backend (FastAPI - not yet integrated)
└── frontend (React + Tailwind)
    └── src
        ├── index.css (design system, RGB split animations)
        ├── components/ (Hero, Works, CV, References, etc.)
        └── data/mock.js (all content data)
```

## Design Tokens
- **Primary BG**: #0d0d0d
- **Accent**: #a855f7
- **Text Primary**: #f0f0e8
- **Border**: #2a2a2a

## Hero Animation Details
- RGB chromatic aberration on figure
- Magenta shifts left, Cyan shifts right, Blue shifts up
- Range: 12px (min) to 27px (max)
- Duration: 32 seconds, continuous, never settling
- Masked to center area (figure only, not edges)

## Last Updated
December 2025
