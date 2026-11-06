# Shivam Raj — Portfolio

A premium personal portfolio for Shivam Raj, a B.Tech Computer Science Engineering student. Built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Overview

The site presents a recruiter-friendly overview of Shivam's background, technical skills, projects, leadership experience, education, achievements, coding profiles, and contact details. It uses a dark navy theme with blue/purple accents, subtle glassmorphism, and restrained scroll animations.

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

### Production

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Project Structure

```
portfolio/
├── index.html                  # Vite shell, SEO/OG metadata, fonts, favicon
├── public/
│   ├── profile.jpeg            # Hero portrait
│   ├── resume.pdf              # Downloadable resume
│   └── projects/               # Project cover images (SVG)
├── src/
│   ├── App.jsx                 # Section order and page background
│   ├── main.jsx                # React entry point
│   ├── index.css               # Tailwind layers, theme utilities, base styles
│   ├── data/
│   │   └── content.js          # All editable portfolio content
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Experience.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── ProjectCard.jsx
│       ├── Education.jsx
│       ├── Achievements.jsx
│       ├── CodingProfiles.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── Icon.jsx
│       ├── Reveal.jsx
│       ├── SectionHeading.jsx
│       └── SocialLinks.jsx
├── tailwind.config.js          # Theme colors, fonts, shadows
├── vite.config.js
├── postcss.config.js
├── README.md
└── FEATURE.md
```

## Customization

Most content is centralized in `src/data/content.js`:

- **Profile:** name, headline, tagline, description, email, location, photo, and resume URL.
- **Navigation and socials:** nav labels/anchors and GitHub/LinkedIn/LeetCode links.
- **About, experience, education, achievements:** editable summaries and entries.
- **Skills:** the six skill groups and their badges.
- **Projects:** title, category, description, tags, image, GitHub, and demo URLs.
- **Coding profiles and contact:** platform handles, URLs, and contact details.

To update visual assets:

- Replace `public/profile.jpeg` to change the hero portrait.
- Replace `public/resume.pdf` with the final resume.
- Replace files in `public/projects/` or update the image paths in `content.js`.

### Placeholder Links

LinkedIn, LeetCode, Codeforces, project repositories, and project demos are intentionally marked with `#` because those URLs were not provided. Add real URLs in `src/data/content.js` before publishing. Placeholder links are rendered in a muted, non-clickable state.

The included `public/resume.pdf` is a starter resume built only from the known portfolio details. Replace it with the final version before sharing.

## Features

- Sticky navbar with active-section highlighting and mobile menu
- Responsive hero with photo frame, availability badge, CTAs, and socials
- About, education, and experience timelines
- Six skill groups rendered as icon cards and badges (no percentage bars)
- Three featured project cards with cover art, tags, and optional links
- Achievements and coding-profile cards with honest placeholders
- Contact section with email details and a `mailto:` contact form
- Auto-updating copyright year and back-to-top link
- Scroll reveal animations with `prefers-reduced-motion` support
- SEO metadata, Open Graph/Twitter tags, and a custom SVG favicon

## Technologies

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion
- Lucide React

## Deployment

Deploy the generated `dist/` directory to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host. For SPA hosting, set the fallback route to `index.html`.

## Notes

- The contact form opens the visitor's default email app via `mailto:`; no backend is required.
- The site is designed as a single-page portfolio with anchor navigation.
- Update `FEATURE.md` when features are added or removed.
