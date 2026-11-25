/**
 * SEO helpers shared by every route: absolute URLs, per-page meta tags and
 * Schema.org JSON-LD. Search engines and AI crawlers read these from the
 * server-rendered HTML, so they must stay absolute and in sync with the copy.
 */

import type { Lang } from "@/i18n/dictionary";
import { localizePath } from "@/i18n/locale";

export const SITE_URL = "https://www.jarasebastian.online";
export const SITE_NAME = "Sebastián Jara";
export const PERSON_NAME = "Sebastián Jara";
export const EMAIL = "jarasebastian.arg@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/sebastian-jara-dsgn/";
export const DEFAULT_OG_IMAGE = "/og/home.jpg";

export const absoluteUrl = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

const PERSON_ID = `${SITE_URL}/#person`;
const SERVICE_ID = `${SITE_URL}/#service`;
const WEBSITE_ID = `${SITE_URL}/#website`;

type PageMetaInput = {
  title: string;
  description: string;
  /** English path of the page; the Spanish one is derived from it */
  path: string;
  lang?: Lang;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  socialTitle?: string;
  socialDescription?: string;
};

/** Title, description, canonical, hreflang alternates, Open Graph and Twitter tags for one page */
export function pageMeta({
  title,
  description,
  path,
  lang = "en",
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  type = "website",
  socialTitle,
  socialDescription,
}: PageMetaInput) {
  const url = absoluteUrl(localizePath(path, lang));
  const enUrl = absoluteUrl(localizePath(path, "en"));
  const esUrl = absoluteUrl(localizePath(path, "es"));
  const img = absoluteUrl(image);
  const ogTitle = socialTitle ?? title;
  const ogDesc = socialDescription ?? description;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: lang === "es" ? "es_AR" : "en_US" },
      { property: "og:locale:alternate", content: lang === "es" ? "en_US" : "es_AR" },
      { property: "og:url", content: url },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: ogDesc },
      { property: "og:image", content: img },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      ...(imageAlt ? [{ property: "og:image:alt", content: imageAlt }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle },
      { name: "twitter:description", content: ogDesc },
      { name: "twitter:image", content: img },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en", href: enUrl },
      { rel: "alternate", hrefLang: "es", href: esUrl },
      { rel: "alternate", hrefLang: "x-default", href: enUrl },
    ],
  };
}

/** A <script type="application/ld+json"> entry for a route's head().scripts */
export function jsonLd(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

/** Who Sebastián is: the entity AI answers and Google's knowledge systems resolve to */
export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: PERSON_NAME,
  alternateName: "Sebastian Jara",
  url: `${SITE_URL}/`,
  image: absoluteUrl("/media/portrait.jpg"),
  email: `mailto:${EMAIL}`,
  jobTitle: "Brand & Design Strategy Lead",
  description:
    "Brand and design strategist from Buenos Aires, Argentina. Creates brand identities, brand manuals and design systems, and builds the HubSpot landing pages, emails and Shopify stores that put them to work, using AI to work faster.",
  worksFor: { "@type": "Organization", name: "Xtendo Global" },
  address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
  knowsLanguage: ["es", "en"],
  alumniOf: { "@type": "CollegeOrUniversity", name: "UADE (Universidad Argentina de la Empresa)" },
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "Bachelor's Degree in Graphic Design", credentialCategory: "degree" },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Bachelor's Degree in Multimedia & Interaction Design",
      credentialCategory: "degree",
    },
  ],
  knowsAbout: [
    "Branding",
    "Brand identity design",
    "Brand strategy",
    "Brand guidelines and brand manuals",
    "Visual identity",
    "Packaging design",
    "Landing page design",
    "HubSpot",
    "Klaviyo",
    "Email marketing design",
    "Shopify",
    "Shopify Liquid development",
    "E-commerce design",
    "AI design workflows",
    "Generative AI for design teams",
  ],
  sameAs: [LINKEDIN],
};

/** The freelance offer: what you can hire Sebastián for, and where */
export const serviceSchema = {
  "@type": "ProfessionalService",
  "@id": SERVICE_ID,
  name: "Sebastián Jara · Brand & Design Strategy",
  url: `${SITE_URL}/`,
  image: absoluteUrl(DEFAULT_OG_IMAGE),
  description:
    "Freelance branding and design services by Sebastián Jara: brand identity, brand manuals and design systems, HubSpot and Klaviyo landing pages and emails, custom Shopify stores, and AI design workflows. Remote, in English and Spanish.",
  founder: { "@id": PERSON_ID },
  email: EMAIL,
  address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
  areaServed: [
    { "@type": "Country", name: "Argentina" },
    { "@type": "Country", name: "United States" },
    { "@type": "Place", name: "Latin America" },
    { "@type": "Place", name: "Europe" },
  ],
  availableLanguage: ["English", "Spanish"],
  knowsAbout: personSchema.knowsAbout,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        name: "Brand identity and brand manuals",
        url: `${SITE_URL}/services/brand-identity`,
        description: "Logo systems, color, typography, brand guidelines and templates a whole company can use.",
      },
      {
        name: "Landing pages and email in HubSpot and Klaviyo",
        url: `${SITE_URL}/services/landing-pages-email`,
        description: "Webinar and campaign landing pages, forms and email flows, designed and built.",
      },
      {
        name: "Shopify store design and development",
        url: `${SITE_URL}/services/shopify-stores`,
        description: "Shopify stores designed and built from scratch or redesigned, coded in Liquid, HTML and CSS.",
      },
      {
        name: "AI design workflows",
        url: `${SITE_URL}/services/ai-design-workflows`,
        description: "Tools and training so a team can create on-brand pieces faster with Claude and Gemini.",
      },
    ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", ...s, provider: { "@id": PERSON_ID } } })),
  },
  sameAs: [LINKEDIN],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  description: "Portfolio of Sebastián Jara, brand and design strategist.",
  inLanguage: ["en", "es"],
  publisher: { "@id": PERSON_ID },
};

/** JSON-LD for one case study page: the project plus breadcrumbs */
export function caseStudySchema({
  path,
  name,
  description,
  image,
  client,
  year,
  about,
  lang = "en",
}: {
  lang?: Lang;
  path: string;
  name: string;
  description: string;
  image: string;
  client: string;
  year: string;
  about: string[];
}) {
  const url = absoluteUrl(localizePath(path, lang));
  const home = absoluteUrl(localizePath("/", lang));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        url,
        name,
        headline: name,
        description,
        image: absoluteUrl(image),
        dateCreated: year,
        creator: { "@id": PERSON_ID },
        author: { "@id": PERSON_ID },
        sourceOrganization: { "@type": "Organization", name: client },
        about,
        isPartOf: { "@id": WEBSITE_ID },
        inLanguage: lang,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: lang === "es" ? "Inicio" : "Home", item: home },
          { "@type": "ListItem", position: 2, name: lang === "es" ? "Trabajos" : "Work", item: `${home}#works` },
          { "@type": "ListItem", position: 3, name: client, item: url },
        ],
      },
      { ...personSchema },
    ],
  };
}
