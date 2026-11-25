import type { Lang } from "@/i18n/dictionary";
import type { CaseStudy } from "@/lib/caseStudies";
import { caseStudySchema, jsonLd, pageMeta } from "@/lib/seo";

/**
 * Search titles, descriptions and Schema.org data for every case study, in both
 * languages. The /projects/* and /es/projects/* routes build their <head> from here.
 */
type MetaCopy = { title: string; description: string; socialTitle: string; socialDescription: string };

const caseMeta: Record<
  CaseStudy["slug"],
  { client: string; year: string; about: string[]; en: MetaCopy; es: MetaCopy }
> = {
  "xtendo-global": {
    client: "Xtendo Global",
    year: "2026",
    about: ["Brand system", "Brand manual", "Sub-brand design", "HubSpot landing pages and email", "AI design workflow", "Gemini Gem"],
    en: {
      title: "Xtendo Global: Brand system, HubSpot landings and AI | Sebastián Jara",
      description:
        "Case study: Xtendo Global had a new logo and a thin brand guide. I gave it a look, wrote the 45-page brand manual, built a Gemini Gem so anyone can make on-brand pieces, and designed HubSpot landing pages and emails.",
      socialTitle: "Xtendo Global: Brand & Design Strategy case study",
      socialDescription: "How I turned a logo with no look into a brand system for 1,500+ people in 9 countries, with AI.",
    },
    es: {
      title: "Xtendo Global: manual de marca, landings en HubSpot e IA | Sebastián Jara",
      description:
        "Caso de estudio: Xtendo Global tenía un logo nuevo y un manual pobre. Le di una identidad visual, escribí un manual de marca de 45 páginas, armé una gema de Gemini para crear piezas de marca y diseñé landings y emails en HubSpot.",
      socialTitle: "Xtendo Global: caso de estrategia de marca y diseño",
      socialDescription: "Cómo convertí un logo sin estética en un sistema de marca para más de 1.500 personas en 9 países, con IA.",
    },
  },
  "paw-royalty": {
    client: "Paw Royalty",
    year: "2025",
    about: ["Brand identity", "Shopify store development", "Subscription e-commerce", "B2B wholesale portal", "Klaviyo email design"],
    en: {
      title: "Paw Royalty: Launching a pet supplement brand on Shopify | Sebastián Jara",
      description:
        "Case study: how I launched Paw Royalty from zero for the US market. Brand identity, a Shopify store coded in Liquid, a Subscribe & Save page, a wellness quiz and Klaviyo emails.",
      socialTitle: "Paw Royalty: Shopify launch case study",
      socialDescription: "How I designed a new pet supplement brand and built its Shopify store from zero.",
    },
    es: {
      title: "Paw Royalty: diseño de marca y tienda Shopify desde cero | Sebastián Jara",
      description:
        "Caso de estudio: cómo lancé Paw Royalty desde cero para Estados Unidos. Identidad de marca, tienda Shopify programada en Liquid, página de Subscribe & Save, quiz de bienestar, portal mayorista B2B y emails en Klaviyo.",
      socialTitle: "Paw Royalty: caso de lanzamiento en Shopify",
      socialDescription: "Cómo diseñé una marca nueva de suplementos para mascotas y armé su tienda Shopify desde cero.",
    },
  },
  folkways: {
    client: "Folkways",
    year: "2025",
    about: ["Shopify store redesign", "Shopify Liquid development", "E-commerce design", "Klaviyo email design"],
    en: {
      title: "Folkways: Shopify store rebuild and Klaviyo emails | Sebastián Jara",
      description:
        "Case study: how I rebuilt the Shopify store of a wine shop with 2,000+ products in Liquid, replaced its cart, upsell and pop-up apps with native sections, and redid its Klaviyo emails.",
      socialTitle: "Folkways: Shopify store rebuild case study",
      socialDescription: "How I rebuilt a 2,000+ product wine store on Shopify and replaced its apps with native Liquid sections.",
    },
    es: {
      title: "Folkways: rediseño de tienda Shopify y emails en Klaviyo | Sebastián Jara",
      description:
        "Caso de estudio: cómo rearmé en Liquid la tienda Shopify de una vinoteca con más de 2.000 productos, reemplacé sus apps de carrito, upsell y pop-ups por secciones nativas y rehice sus emails en Klaviyo.",
      socialTitle: "Folkways: caso de rediseño de tienda Shopify",
      socialDescription: "Cómo rearmé una tienda de vinos con más de 2.000 productos en Shopify y reemplacé sus apps por secciones nativas.",
    },
  },
  "b-way": {
    client: "B-WAY",
    year: "2023-2025",
    about: ["Packaging design", "Brand management", "Shopify stores", "Event and stand design", "Marketing team leadership"],
    en: {
      title: "B-WAY: From packaging designer to brand manager | Sebastián Jara",
      description:
        "Two years at B-WAY, a barber tools brand. I started on packaging, became Brand Manager and led a 5-person team across the US, Brazil and Argentina.",
      socialTitle: "B-WAY: From packaging designer to brand manager",
      socialDescription:
        "Packaging made with the factory in China, Shopify stores for three countries, Meta Ads, email and event stands at Barber Week.",
    },
    es: {
      title: "B-WAY: de diseñador de packaging a brand manager | Sebastián Jara",
      description:
        "Dos años en B-WAY, una marca de herramientas para barberos. Empecé diseñando packaging, pasé a Brand Manager y lideré un equipo de 5 personas en Estados Unidos, Brasil y Argentina.",
      socialTitle: "B-WAY: de diseñador de packaging a brand manager",
      socialDescription:
        "Packaging producido con la fábrica en China, tiendas Shopify para tres países, Meta Ads, email y stands en Barber Week.",
    },
  },
  "elevate-local": {
    client: "Elevate Local",
    year: "2025",
    about: ["Brand identity", "Visual identity", "Logo system", "Brand guidelines", "Logo animation"],
    en: {
      title: "Elevate Local: Visual identity for a medical marketing agency | Sebastián Jara",
      description:
        "The visual identity I designed for a marketing agency that works with medical clinics in Europe: logo system, colors, type, brand guidelines and a logo animation, done fully remote.",
      socialTitle: "Elevate Local: Visual identity for a medical marketing agency",
      socialDescription:
        "Logo system, mineral color palette, typography and brand guidelines for a B2B agency in the European medical sector.",
    },
    es: {
      title: "Elevate Local: identidad visual para una agencia de marketing médico | Sebastián Jara",
      description:
        "La identidad visual que diseñé para una agencia de marketing que trabaja con clínicas médicas en Europa: sistema de logo, colores, tipografía, manual de marca y animación del logo, 100% a distancia.",
      socialTitle: "Elevate Local: identidad visual para una agencia de marketing médico",
      socialDescription:
        "Sistema de logo, paleta de colores minerales, tipografía y manual de marca para una agencia B2B del sector médico europeo.",
    },
  },
};

/** <head> for a case study page in one language */
export function caseHead(slug: CaseStudy["slug"], lang: Lang) {
  const m = caseMeta[slug];
  const copy = m[lang];
  const path = `/projects/${slug}`;
  const image = `/og/${slug}.jpg`;
  return {
    ...pageMeta({
      title: copy.title,
      description: copy.description,
      path,
      lang,
      type: "article",
      image,
      imageAlt: lang === "es" ? `Caso ${m.client} por Sebastián Jara` : `${m.client} case study by Sebastián Jara`,
      socialTitle: copy.socialTitle,
      socialDescription: copy.socialDescription,
    }),
    scripts: [
      jsonLd(
        caseStudySchema({
          path,
          lang,
          name: copy.socialTitle,
          description: copy.description,
          image,
          client: m.client,
          year: m.year,
          about: m.about,
        }),
      ),
    ],
  };
}
