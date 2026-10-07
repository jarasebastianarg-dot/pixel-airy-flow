# Design & Marketing Portfolio

Act as a Senior Frontend Engineer and Expert UI/UX Designer. Build a premium, high-converting portfolio website using React, Tailwind CSS, and Lucide Icons.

Visual Direction & Layout (Crucial):

Style: Modern "Bento Box" grid structure. Strictly modular.

Spacing (The "Aires"): UI must feel extremely spacious and breathable. Use generous padding inside cards (e.g., p-8 or p-10) and clean gaps (gap-6 or gap-8).

Color Palette: Clean, sophisticated aesthetic. Off-white/very light gray background (bg-gray-50 or similar) with crisp white cards (bg-white). Use a vibrant, energetic accent color (like a modern gradient orange/coral) ONLY for key metrics, active states, and primary CTA buttons.

Typography: Sans-serif, highly legible, editorial feel. Large headings with tight tracking, readable body text with generous line height.

Language: Primary English, but include a UI toggle button in the header for "EN / ES" (just the UI element for now).

Page Structure & Content: Build a single-page layout with the following distinct sections:

1. Header & Hero (The Hook)

Clean navbar with Logo/Name and the EN/ES toggle.

A massive, bold headline: "Visual Marketing & E-commerce Specialist."

Subtitle: "Strategic Design | AI-Driven Analytics | Global Brand Management."

Include a vibrant CTA button: "View Projects".

2. Core Capabilities (Bento Grid - Top Section) Create a CSS Grid (md:grid-cols-4). Create distinct aesthetic cards for:

E-commerce & Shopify: Mention native development, Liquid coding, and CRO.

Growth & Email Marketing: Retention strategies, Klaviyo, and campaign design.

Brand Identity: Strategic design and art direction.

AI Automations: n8n, Claude, Gemini workflows.

3. Selected Works (Bento Grid - Main Section) Make these cards visually prominent, mixing col-span-2 and full-width cards.

Folkways: Focus on "The Technical Scale". Tag: Shopify Expert. Highlight the migration of 2000+ products to Shopify 2.0, focusing on performance and UX.

Paw Royalty: Focus on "Full-Stack Creation". Tag: Lead Developer & Designer. Highlight end-to-end US market store creation with custom Klaviyo flows.

B-WAY: Focus on "Leadership & Expansion". Tag: Brand Manager. Highlight managing a 6-person team, international expansion (US & Brazil), and large-scale physical events (300+ people).

Elevate Local: Focus on "Brand Identity". Tag: Branding Designer. Highlight logo and identity for a European medical marketing agency.

4. Methodology & Tech Stack (Bento Grid - Lower Section)

The Approach Card: A strong text block stating: "No static wireframes. Direct design and execution over Shopify Liquid and code for rapid iteration and functional realism."

Tools Card: Visually group icons/names for Shopify, Liquid, Klaviyo, Meta/Google Ads, n8n, Claude, and Adobe Creative Suite.

5. The Architect (Bio & Footer)

A clean, minimalist footer section.

Brief bio: "26-year-old designer based in Buenos Aires, holding dual degrees in Graphic Design and Multimedia & Interaction Design from UADE."

Links to LinkedIn, Behance, and an email contact button.

Technical Requirements for Lovable:

Ensure the Bento grid is fully responsive (stacking elegantly on mobile).

Add subtle hover states to the Bento cards (e.g., slight lift -translate-y-1 or subtle shadow increase) to make it feel interactive but not overwhelming.

Use Lucide-react for all iconography.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://pixel-airy-flow.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/05b18e1c-dabd-4628-8e9b-1fff20ea84aa).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
