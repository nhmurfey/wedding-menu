# Wedding Menu Website Brainstorm

**Date:** 2026-04-03
**Status:** Ready for detailed specification

## Overview

A wedding menu website for Holly & Nathan's wedding (April 15th, 2026) that guests access via QR code. The site showcases 5-6 courses with food and wine pairings, personal stories behind each pairing, and the day's schedule. The design draws heavy inspiration from Wes Anderson's visual style — symmetrical layouts, pastel palette, vintage serif typography, and whimsical playful details.

## Project Type

Static/SSG web application (Next.js on Vercel)

## Target Users

Wedding guests scanning a QR code on the day — needs to be mobile-first, fast-loading, and immediately readable.

## Major Components

### Menu Display
- Purpose: Show 5-6 courses with dish details, wine pairings, and stories
- Key capabilities:
  - Toggle between Standard and Vegetarian menus (per-course, only where alternatives exist)
  - Each course shows: dish name, description, paired wine name, wine description, personal story, pairing rationale, allergen info, photo
  - Placeholder images that are easy to swap for real photos later

### Wedding Schedule
- Purpose: Show the day's run of times (ceremony, drinks, dinner, speeches, etc.)
- Key capabilities:
  - Timeline/schedule view of the wedding day events

### QR Code Landing
- Purpose: Entry point for guests
- Key capabilities:
  - Clean, welcoming landing with Holly & Nathan's names and wedding date
  - Smooth scroll or navigation into courses and schedule

## Technology Stack

### Language(s)
- TypeScript

### Frameworks & Libraries
- Next.js (App Router): Full-stack React framework
- Tailwind CSS: Styling with Wes Anderson-inspired design tokens
- Google Fonts: Vintage serif typography (e.g., Playfair Display, Libre Baskerville)

### Data
- JSON data file(s) in the repo for menu content — easy to edit directly in code
- No database needed

### Infrastructure
- Vercel: Hosting and deployment
- Static/SSG generation for fast load times

## Design Direction — Wes Anderson Aesthetic

### Color Palette
- Muted pastels: dusty rose, sage green, cream/off-white, warm mustard, soft terracotta
- Accent colors for borders and decorative elements

### Typography
- Vintage serif for headings (Playfair Display or similar)
- Clean readable body font (Libre Baskerville or similar)
- Occasional handwritten/script accents

### Layout & Details
- Strong symmetry and centered compositions
- Decorative borders and frames around cards
- Subtle ornamental dividers between courses
- Consistent, deliberate spacing

## Content Per Course

Each course entry contains:
- **Dish name** and description
- **Vegetarian alternative** (where applicable, toggled)
- **Paired wine** name and description
- **Personal story** — how Holly & Nathan connect to this dish/wine
- **Pairing rationale** — why the wine works with the dish
- **Allergen information**
- **Photo** (placeholder initially)

## Open Questions

- Exact number of courses (5 or 6)?
- Specific allergens to call out (gluten, dairy, nuts, etc.) or free-text?
- Any specific events for the wedding day schedule?
- Custom domain or `.vercel.app` URL?
- Will there be a printed QR code design, or just the URL?

## Next Steps

1. Review this brainstorm document
2. Run `/01-idea-honing WEDDING_MENU_BRAINSTORM.md` to create detailed specification
3. Or jump straight to building if this scope feels right

---
*Generated with /00-brainstorm on 2026-04-03*
