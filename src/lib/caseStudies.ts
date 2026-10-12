import bwayThumb from "@/assets/bway/bway-brand.jpg.asset.json";

/**
 * Single source of truth for the case studies: order, cover image and route.
 * The home grid and the "Next project" footer on every case page read from here,
 * so the order and numbering stay the same everywhere.
 */
export type CaseStudy = {
  slug: "xtendo-global" | "paw-royalty" | "folkways" | "b-way" | "elevate-local";
  client: string;
  href: "/projects/xtendo-global" | "/projects/paw-royalty" | "/projects/folkways" | "/projects/b-way" | "/projects/elevate-local";
  cover: string;
  year: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "xtendo-global",
    client: "Xtendo Global",
    href: "/projects/xtendo-global",
    cover: "/work/xtendo/xtendo-cover.webp",
    year: "2026",
  },
  {
    slug: "paw-royalty",
    client: "Paw Royalty",
    href: "/projects/paw-royalty",
    cover: "https://raw.githubusercontent.com/jarasebastianarg-dot/Portfolio-Photos/main/Paw%20Royalty%20thumbnail.png",
    year: "2025",
  },
  {
    slug: "folkways",
    client: "Folkways",
    href: "/projects/folkways",
    cover: "https://raw.githubusercontent.com/jarasebastianarg-dot/Portfolio-Photos/main/Folkways%20Thumbnail.webp",
    year: "2025",
  },
  {
    slug: "b-way",
    client: "B-WAY",
    href: "/projects/b-way",
    cover: bwayThumb.url,
    year: "2023-2025",
  },
  {
    slug: "elevate-local",
    client: "Elevate Local",
    href: "/projects/elevate-local",
    cover: "/work/elevate/elevate-logo-reveal-poster.webp",
    year: "2025",
  },
];

/** "Case study / 02" style label for a slug */
export function caseNumber(slug: CaseStudy["slug"]): string {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return String(i + 1).padStart(2, "0");
}

export function nextCase(slug: CaseStudy["slug"]): CaseStudy {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return caseStudies[(i + 1) % caseStudies.length];
}
