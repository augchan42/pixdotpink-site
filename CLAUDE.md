# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Pix" - a Next.js 15 site for a cyberpunk-themed I-Ching oracle service. The site features an auto-playing image carousel with a pink neon aesthetic and references to "tactical divination" and "digital samurai oracle" themes.

**Domain**: pix.pink

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Regenerate carousel items from images
npm run generate:carousel
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Fonts**: Geist Sans, Geist Mono, Permanent Marker (Google Fonts)
- **Carousel**: Embla Carousel with autoplay plugin
- **Analytics**: Vercel Analytics + Google Analytics

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata, fonts, analytics
│   ├── page.tsx           # Homepage with carousel
│   ├── globals.css        # Global styles with Tailwind
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── api/
│       └── og/route.tsx   # Open Graph image generation (edge runtime)
├── components/
│   ├── ui/                # shadcn/ui components (button, card, carousel)
│   ├── Footer.tsx         # Footer with Digital Rain Studios branding
│   ├── TwitterLogo.js     # Custom Twitter/X logo component
│   └── GoogleAnalytics.tsx # GA4 integration
├── lib/
│   ├── carousel-items.ts  # AUTO-GENERATED: carousel image list
│   └── utils.ts           # Utility functions (cn helper)
└── scripts/
    └── generateCarouselItems.js  # Node script to generate carousel-items.ts
```

### Key Architectural Patterns

**Auto-Generated Carousel Items**
- Carousel images live in `public/images/carousel/`
- Run `npm run generate:carousel` to scan the carousel directory and auto-generate `src/lib/carousel-items.ts`
- The generated file is marked "DO NOT EDIT" - always regenerate instead
- When adding new carousel images: add to `public/images/carousel/`, then run the generation script

**shadcn/ui Integration**
- Uses `components.json` config with New York style, RSC mode, TypeScript
- Path aliases: `@/components`, `@/lib`, `@/hooks`
- Components use CSS variables defined in `globals.css` for theming
- Icon library: lucide-react

**Metadata & SEO**
- All metadata centralized in `src/app/layout.tsx`
- Uses `NEXT_PUBLIC_SITE_URL` env var (defaults to https://pix.pink)
- Dynamic OG image generation via `/api/og` route (Vercel OG)
- Sitemap generated from `src/app/sitemap.ts`
- Theme color: #FF71BE (neon pink)

**Image Handling**
- Next.js Image component with `fill` + `object-contain` for carousel
- First carousel item has `priority` prop for LCP optimization
- OG image uses base64-encoded JPEG from public directory

**Client vs Server Components**
- Homepage (`page.tsx`) is client component due to carousel interactivity
- Layout and OG route are server components
- Analytics components injected in root layout

## Design System

**Color Theme**: Cyberpunk/neon aesthetic with pink (#FF71BE) as primary color
**Fonts**:
- Permanent Marker for headings (cyberpunk feel)
- Geist Sans/Mono for body text

**Responsive Design**:
- Mobile-first approach
- Carousel: 90vw mobile → 85vw tablet → 80vw desktop
- Carousel height: 50vh mobile → 60vh tablet → 70vh desktop

## Content & Branding

**Site Personality**: Cyberpunk I-Ching oracle with "street samurai" aesthetic
- Keywords: tactical divination, digital samurai, market patterns, hexagram flows
- Twitter handle: @8bitoracle
- Publisher: Digital Rain Studios
- Specific Twitter post linked in footer: https://x.com/8bitoracle/status/1874406371430649927

## Environment Variables

- `NEXT_PUBLIC_SITE_URL`: Site URL for metadata (defaults to https://pix.pink)
- Google Analytics ID configured in `GoogleAnalytics.tsx`

## Important Notes

- **DO NOT manually edit** `src/lib/carousel-items.ts` - it's auto-generated
- When adding carousel images, run `npm run generate:carousel`
- OG image route runs on Edge runtime for performance
- Site uses both Google Analytics and Vercel Analytics
