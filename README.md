# Down2Earth Adventures

A premium, production-ready React website for Down2Earth Adventures — a trekking company in Nepal. Built with a dark luxury aesthetic inspired by international travel brands like National Geographic.

## Tech Stack

- **React** (Vite) — Fast, modern React tooling
- **Tailwind CSS** — Utility-first styling with custom design system
- **Framer Motion** — Smooth animations and transitions
- **React Router** — Multi-page navigation

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The dev server runs at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Sticky glassmorphism navbar with mobile menu
│   ├── Footer.jsx      # Site footer with links
│   ├── Hero.jsx        # Reusable hero with video/image background
│   ├── DestinationCard.jsx
│   └── ServiceCard.jsx
├── pages/
│   ├── Home.jsx        # Hero, features, destinations, testimonials, CTA
│   ├── About.jsx       # Company story, mission, team
│   ├── Destinations.jsx # Trekking destinations with filter
│   ├── Services.jsx    # Guided trekking, custom tours, etc.
│   └── Contact.jsx     # Form, WhatsApp, map
├── App.jsx
├── main.jsx
└── index.css
```

## Design System

- **Theme**: Dark luxury (charcoal/black backgrounds)
- **Accent**: Emerald green, subtle gold gradients
- **Typography**: Playfair Display (headings), Outfit (body)
- **Effects**: Glassmorphism, smooth scroll, hover transitions

## Pages

1. **Home** — Full-screen video hero, feature cards, destination grid, testimonials, CTA
2. **About** — Company story, mission/vision, team section
3. **Destinations** — Filterable grid of trekking destinations
4. **Services** — Guided trekking, custom tours, expeditions, mountain flights
5. **Contact** — Form UI, WhatsApp button, Google Map embed

## Note

This is a **frontend-only** implementation. The contact form shows a demo alert; no data is submitted. Replace placeholder content (phone numbers, emails, map) with real values for production.
