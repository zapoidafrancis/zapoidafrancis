# Zapoida Francis - Music Portfolio PRD

## Original Problem Statement
A musician, music producer, and audio engineer based in Berlin needs a captivating and mobile-friendly online portfolio. The portfolio should function like a showreel, allowing potential clients to easily browse their work. The aesthetic should reflect the Berlin fashion/underground scene.

## User Persona
- **Name**: zapoida francis (Francesco Maria De Lucia)
- **Profession**: Audio Engineer, Music Producer, Musician, Sound Designer, Guitar Teacher, Multimedia Artist
- **Location**: Berlin, Germany
- **Goal**: Attract potential clients by showcasing professional work and credentials

## Core Requirements

### Implemented ✅
1. **Hero Section** - Interactive RGB chromatic aberration, infinite marquee, CTA buttons
2. **Works Section** - Filterable gallery with embedded Spotify/Instagram/external links (18 projects)
3. **CV Section** - Timeline layout, downloadable PDF (desktop download / mobile new tab)
4. **References Section** - 4 testimonial cards with downloadable reference letters
5. **Art Section** (Solo Project)
   - "LATEST" feature for LOVE LANGUAGE EP with 5 embedded YouTube videos
   - Artist bio with photo (appears AFTER the "Latest" section and episodes)
   - "Listen to zapoida francis on:" streaming links (Spotify, Apple Music, Tidal, Deezer, YouTube Music)
   - **Tabbed Content Section** (Music/Videos/Press tabs)
6. **Footer/Contact** - CTA, email, social links
7. **Design System** - Purple accent (#a855f7), Bebas Neue + Inter, film grain, sharp edges
8. **Mobile Experience** - Fixed mobile menu with backdrop blur, responsive layout
9. **SEO** - Meta tags, Open Graph images, sitemap.xml, robots.txt
10. **Touch Device Support** - Hero split effect works correctly on iPad/tablets

### Deployment ✅
- **Live URL**: https://zapoidafrancis.com
- **Hosting**: GitHub Pages (free)
- **CI/CD**: GitHub Actions auto-deploy on push to main branch
- **HTTPS**: Enforced

## Technical Architecture
```
/app
├── .github/workflows/deploy.yml (GitHub Actions)
├── frontend/
│   ├── public/ (images, SEO files, documents)
│   ├── src/components/ (Hero, Works, CV, References, SoloProject, Header, Footer)
│   ├── src/data/mock.js (all content data)
│   └── package.json (yarn, react-scripts)
```

## Streaming Profile Links
- Spotify: https://open.spotify.com/artist/5iL3jq2jrFe0UqWFzEFZIQ
- Apple Music: https://music.apple.com/us/artist/zapoida-francis/1599640411
- Tidal: https://tidal.com/artist/29676090
- Deezer: https://www.deezer.com/en/artist/154059692
- YouTube Music: https://music.youtube.com/channel/UC_xVyQEZdA0LDjmvhbm2MXg

## How to Update Content
1. Edit files in `/frontend/src/` (components or mock.js)
2. Click "Save to GitHub" in Emergent
3. GitHub Actions automatically rebuilds and deploys (~2-3 min)

## Last Updated
April 2026
