import type { CaseStudy } from "@/lib/caseStudies";

/**
 * Service pages (/services/$slug). Each page targets what a client searches
 * for when hiring ("freelance brand identity designer", "Shopify developer"...)
 * and answers it with facts from real projects. Copy lives here in EN and ES.
 */

type Copy = {
  /** Short name used in nav, cards and breadcrumbs */
  name: string;
  /** Page <title> */
  title: string;
  /** Meta description */
  description: string;
  /** H1 */
  headline: string;
  intro: string;
  forWho: string[];
  deliverables: string[];
  proof: string;
  faq: { q: string; a: string }[];
};

export type Service = {
  slug: "brand-identity" | "shopify-stores" | "landing-pages-email" | "ai-design-workflows";
  related: CaseStudy["slug"][];
  tools: string[];
  /** Schema.org serviceType */
  serviceType: string;
  en: Copy;
  es: Copy;
};

export const services: Service[] = [
  {
    slug: "brand-identity",
    related: ["xtendo-global", "elevate-local", "paw-royalty"],
    tools: ["Illustrator", "Photoshop", "InDesign", "Figma", "After Effects"],
    serviceType: "Brand identity design",
    en: {
      name: "Brand identity & brand manuals",
      title: "Freelance Brand Identity Designer · Brand Manuals & Guidelines | Sebastián Jara",
      description:
        "Hire a freelance brand identity designer: logo systems, color, typography, brand manuals and templates your whole team can use. Remote from Buenos Aires, in English and Spanish.",
      headline: "Brand identity and brand manuals that a whole company can actually use.",
      intro:
        "I design the visual identity of a brand (logo system, color, typography, photography and layouts) and write it down in a brand manual with ready-to-use templates. Then I make sure people use it: I train the team and, if needed, design the first campaigns, landing pages or packaging myself.",
      forWho: [
        "New brands that need an identity from zero.",
        "Companies with a logo but no visual system, where every team makes pieces its own way.",
        "Agencies and B2B companies that need guidelines for teams in several countries.",
      ],
      deliverables: [
        "Logo system: main logo, variations, safe area and incorrect uses.",
        "Color palette with values for screen and print.",
        "Typography system with sizes for titles and body text.",
        "Brand manual (PDF) with voice and tone, photography, web, social media and co-branding rules.",
        "Templates: presentations, social posts, documents, email signatures or business cards.",
        "Optional: logo animation, sub-brands and team training.",
      ],
      proof:
        "At Xtendo Global I turned a new logo with no visual direction into a 45-page brand manual and a library of 15+ templates used by 1,500+ people in 9 countries. For Elevate Local I designed a complete identity for a European agency, fully remote.",
      faq: [
        {
          q: "How long does a brand identity project take?",
          a: "It depends on the scope. A focused identity with its guidelines usually takes a few weeks; a full brand system with a long manual and templates takes longer. I give you a timeline with the proposal.",
        },
        {
          q: "Do you only design the logo?",
          a: "No. The logo is one part. I design the full system around it and the manual that explains how to use it, so the brand looks the same no matter who makes the piece.",
        },
        {
          q: "Can you work with a logo we already have?",
          a: "Yes. At Xtendo an outside studio had made the logo and I built everything else: the look, the manual, the sub-brand and the templates.",
        },
      ],
    },
    es: {
      name: "Identidad de marca y manuales",
      title: "Diseñador de identidad de marca freelance · Manuales de marca | Sebastián Jara",
      description:
        "Diseñador de identidad de marca freelance: sistema de logo, color, tipografía, manual de marca y plantillas que todo el equipo puede usar. Remoto desde Buenos Aires, en español e inglés.",
      headline: "Identidad y manuales de marca que toda una empresa puede usar de verdad.",
      intro:
        "Diseño la identidad visual de una marca (sistema de logo, color, tipografía, fotografía y diagramación) y la dejo por escrito en un manual con plantillas listas para usar. Después me aseguro de que se use: capacito al equipo y, si hace falta, diseño yo las primeras campañas, landing pages o packaging.",
      forWho: [
        "Marcas nuevas que necesitan una identidad desde cero.",
        "Empresas con logo pero sin sistema visual, donde cada equipo hace las piezas a su manera.",
        "Agencias y empresas B2B que necesitan reglas para equipos en varios países.",
      ],
      deliverables: [
        "Sistema de logo: logo principal, variantes, área de resguardo y usos incorrectos.",
        "Paleta de colores con valores para pantalla e impresión.",
        "Sistema tipográfico con tamaños para títulos y textos.",
        "Manual de marca (PDF) con tono de voz, fotografía, web, redes y co-branding.",
        "Plantillas: presentaciones, posteos, documentos, firmas de email o tarjetas.",
        "Opcional: animación del logo, sub-marcas y capacitación del equipo.",
      ],
      proof:
        "En Xtendo Global convertí un logo nuevo sin dirección estética en un manual de marca de 45 páginas y una biblioteca de más de 15 plantillas que usan más de 1.500 personas en 9 países. Para Elevate Local diseñé la identidad completa de una agencia europea, 100% a distancia.",
      faq: [
        {
          q: "¿Cuánto tarda un proyecto de identidad de marca?",
          a: "Depende del alcance. Una identidad acotada con su manual suele llevar algunas semanas; un sistema de marca completo con un manual largo y plantillas lleva más. Te paso los plazos junto con la propuesta.",
        },
        {
          q: "¿Solo diseñás el logo?",
          a: "No. El logo es una parte. Diseño todo el sistema alrededor y el manual que explica cómo usarlo, para que la marca se vea igual sin importar quién haga la pieza.",
        },
        {
          q: "¿Podés trabajar con un logo que ya tenemos?",
          a: "Sí. En Xtendo el logo lo había hecho un estudio externo y yo armé todo lo demás: la estética, el manual, la sub-marca y las plantillas.",
        },
      ],
    },
  },
  {
    slug: "shopify-stores",
    related: ["paw-royalty", "folkways", "b-way"],
    tools: ["Shopify", "Liquid", "HTML / CSS", "Klaviyo"],
    serviceType: "Shopify store design and development",
    en: {
      name: "Custom Shopify stores",
      title: "Freelance Shopify Designer & Liquid Developer · Custom Stores | Sebastián Jara",
      description:
        "Hire a freelance Shopify designer and developer: custom stores coded in Liquid, Shopify 2.0 migrations, subscriptions, B2B wholesale portals and Klaviyo emails. Remote, in English and Spanish.",
      headline: "Custom Shopify stores, designed and coded in Liquid.",
      intro:
        "I design the store and code it myself in Shopify Liquid, HTML and CSS, without bought themes or a pile of apps. That means the store looks the way it was designed, loads fast and is easy for your team to run. I also set up the emails that bring customers back.",
      forWho: [
        "Brands launching their first Shopify store.",
        "Stores stuck on an old theme that need to move to Shopify 2.0.",
        "Brands that need custom features: subscriptions, quizzes or a B2B wholesale section.",
      ],
      deliverables: [
        "Store design: home, collection, product, cart and landing pages.",
        "Theme coded in Liquid with native sections your team can edit.",
        "Shopify 2.0 migrations, including large catalogs.",
        "Subscribe & Save, product quizzes and B2B pricing for tagged customer accounts.",
        "Klaviyo email flows and campaigns designed and coded.",
      ],
      proof:
        "I launched Paw Royalty's store from zero for the US market, with Subscribe & Save, a wellness quiz and a B2B wholesale portal. I moved Folkways, a wine store with 2,000+ products, to Shopify 2.0 and replaced its cart, upsell and pop-up apps with native sections. At B-WAY I ran three Shopify stores for the US, Brazil and Argentina.",
      faq: [
        {
          q: "Do you use ready-made Shopify themes?",
          a: "No. I code the theme in Liquid so the store matches the design and doesn't depend on extra apps for basic features.",
        },
        {
          q: "Can you migrate my store to Shopify 2.0?",
          a: "Yes. I did it for Folkways, with more than 2,000 products, rebuilding the storefront with native Liquid sections.",
        },
        {
          q: "Can you set up wholesale prices for B2B customers?",
          a: "Yes. For Paw Royalty I built a B2B section where customers with a b2b tag see wholesale prices with their discounts and a price guide, while everyone else sees the regular store.",
        },
      ],
    },
    es: {
      name: "Tiendas Shopify a medida",
      title: "Diseñador y desarrollador Shopify freelance · Tiendas en Liquid | Sebastián Jara",
      description:
        "Diseñador y desarrollador Shopify freelance: tiendas a medida programadas en Liquid, migraciones a Shopify 2.0, suscripciones, portales mayoristas B2B y emails en Klaviyo. Remoto, en español e inglés.",
      headline: "Tiendas Shopify a medida, diseñadas y programadas en Liquid.",
      intro:
        "Diseño la tienda y la programo yo en Shopify Liquid, HTML y CSS, sin temas comprados ni una pila de apps. Así la tienda se ve como se diseñó, carga rápido y es fácil de manejar para tu equipo. También armo los emails que hacen volver a los clientes.",
      forWho: [
        "Marcas que lanzan su primera tienda en Shopify.",
        "Tiendas trabadas en un tema viejo que necesitan pasar a Shopify 2.0.",
        "Marcas que necesitan funciones a medida: suscripciones, quizzes o una sección mayorista B2B.",
      ],
      deliverables: [
        "Diseño de la tienda: home, colecciones, producto, carrito y landing pages.",
        "Tema programado en Liquid con secciones nativas que tu equipo puede editar.",
        "Migraciones a Shopify 2.0, incluso con catálogos grandes.",
        "Subscribe & Save, quizzes de producto y precios B2B para cuentas con tag.",
        "Flujos y campañas de email en Klaviyo, diseñados y programados.",
      ],
      proof:
        "Lancé desde cero la tienda de Paw Royalty para Estados Unidos, con Subscribe & Save, un quiz de bienestar y un portal mayorista B2B. Pasé a Folkways, una tienda de vinos con más de 2.000 productos, a Shopify 2.0 y reemplacé sus apps de carrito, upsell y pop-ups por secciones nativas. En B-WAY manejé tres tiendas Shopify para Estados Unidos, Brasil y Argentina.",
      faq: [
        {
          q: "¿Usás temas de Shopify ya hechos?",
          a: "No. Programo el tema en Liquid para que la tienda respete el diseño y no dependa de apps extra para funciones básicas.",
        },
        {
          q: "¿Podés migrar mi tienda a Shopify 2.0?",
          a: "Sí. Lo hice para Folkways, con más de 2.000 productos, rearmando la tienda con secciones nativas en Liquid.",
        },
        {
          q: "¿Podés armar precios mayoristas para clientes B2B?",
          a: "Sí. Para Paw Royalty armé una sección B2B donde los clientes con el tag b2b ven precios mayoristas con sus descuentos y una tabla guía, y el resto ve la tienda normal.",
        },
      ],
    },
  },
  {
    slug: "landing-pages-email",
    related: ["xtendo-global", "paw-royalty", "folkways"],
    tools: ["HubSpot", "Klaviyo", "Meta Ads", "Make"],
    serviceType: "Landing page and email design",
    en: {
      name: "Landing pages & email in HubSpot and Klaviyo",
      title: "HubSpot Landing Page & Email Designer · Freelance | Sebastián Jara",
      description:
        "Freelance landing page and email designer for HubSpot and Klaviyo: webinar and campaign landing pages, forms and email flows, designed and built on your brand. Remote, in English and Spanish.",
      headline: "Landing pages and emails in HubSpot and Klaviyo, designed and built on your brand.",
      intro:
        "I design and build the pages and emails of your campaigns: the landing page with its form, the invitation and follow-up emails, and the social posts that send people there. All on the same brand system, so every campaign looks like the same company.",
      forWho: [
        "B2B companies that run webinars and campaigns in HubSpot.",
        "E-commerce brands that sell through Klaviyo email flows.",
        "Marketing teams that need to launch campaigns faster without losing quality.",
      ],
      deliverables: [
        "Campaign and webinar landing pages with forms connected to your CRM.",
        "Invitation, reminder and follow-up emails.",
        "Klaviyo flows: welcome, cart, cashback and subscription.",
        "Reusable templates so your team can launch the next campaign on its own.",
        "Campaigns in several languages (Spanish, Portuguese, English).",
      ],
      proof:
        "At Xtendo Global I design and build the webinar funnels in HubSpot. One invitation email reached a 48% open rate and a 20% click-through rate, and with AI a landing page now takes 1 day instead of 4 or 5. I also designed and coded the Klaviyo emails for Paw Royalty and Folkways.",
      faq: [
        {
          q: "Do you design or also build the pages?",
          a: "Both. I design them and build them directly in HubSpot or Klaviyo, so what goes live is exactly what was designed.",
        },
        {
          q: "Can you make campaigns in Spanish and Portuguese?",
          a: "Yes. At Xtendo I build landing pages and emails for different countries and languages on the same brand system.",
        },
        {
          q: "How fast can a landing page be ready?",
          a: "With templates and AI for the first draft, a landing page can be ready in about a day once the content is defined.",
        },
      ],
    },
    es: {
      name: "Landing pages y emails en HubSpot y Klaviyo",
      title: "Diseñador de landing pages y emails en HubSpot · Freelance | Sebastián Jara",
      description:
        "Diseñador freelance de landing pages y emails para HubSpot y Klaviyo: landings de webinars y campañas, formularios y flujos de email, diseñados y armados con tu marca. Remoto, en español e inglés.",
      headline: "Landing pages y emails en HubSpot y Klaviyo, diseñados y armados con tu marca.",
      intro:
        "Diseño y armo las páginas y los emails de tus campañas: la landing con su formulario, los emails de invitación y seguimiento, y los posteos que llevan a la gente ahí. Todo con el mismo sistema de marca, para que cada campaña se vea como la misma empresa.",
      forWho: [
        "Empresas B2B que hacen webinars y campañas en HubSpot.",
        "Marcas de e-commerce que venden con flujos de email en Klaviyo.",
        "Equipos de marketing que necesitan lanzar campañas más rápido sin perder calidad.",
      ],
      deliverables: [
        "Landing pages de campañas y webinars con formularios conectados a tu CRM.",
        "Emails de invitación, recordatorio y seguimiento.",
        "Flujos en Klaviyo: bienvenida, carrito, cashback y suscripción.",
        "Plantillas reutilizables para que tu equipo lance la próxima campaña solo.",
        "Campañas en varios idiomas (español, portugués, inglés).",
      ],
      proof:
        "En Xtendo Global diseño y armo los embudos de webinars en HubSpot. Un email de invitación llegó a 48% de apertura y 20% de clickthrough, y con IA una landing page ahora lleva 1 día en vez de 4 o 5. También diseñé y programé los emails en Klaviyo de Paw Royalty y Folkways.",
      faq: [
        {
          q: "¿Diseñás o también armás las páginas?",
          a: "Las dos cosas. Las diseño y las armo directamente en HubSpot o Klaviyo, así lo que sale publicado es exactamente lo que se diseñó.",
        },
        {
          q: "¿Podés hacer campañas en español y portugués?",
          a: "Sí. En Xtendo armo landings y emails para distintos países e idiomas con el mismo sistema de marca.",
        },
        {
          q: "¿En cuánto tiempo puede estar lista una landing?",
          a: "Con plantillas e IA para el primer borrador, una landing puede estar lista en alrededor de un día una vez definido el contenido.",
        },
      ],
    },
  },
  {
    slug: "ai-design-workflows",
    related: ["xtendo-global"],
    tools: ["Claude", "Gemini", "Claude Design"],
    serviceType: "AI design workflow consulting",
    en: {
      name: "AI design workflows for teams",
      title: "AI Design Workflows & Brand Tools for Teams (Gemini, Claude) | Sebastián Jara",
      description:
        "I set up AI design workflows for teams: Gemini Gems trained on your brand manual, prompt books and training so anyone can create on-brand pieces faster. Remote, in English and Spanish.",
      headline: "AI tools that let your whole team create on-brand pieces, faster.",
      intro:
        "I turn your brand manual into AI tools your team can use: a Gemini Gem that creates on-brand images from one sentence, a prompt book for designers and a guide for people who have never used AI. Then I train the team so the tools are actually used.",
      forWho: [
        "Companies where the design team can't keep up with every request.",
        "Teams outside design (sales, HR, marketing) that need on-brand pieces quickly.",
        "Design teams that want to use AI without losing the brand's look.",
      ],
      deliverables: [
        "A Gemini Gem (or similar) trained on your brand manual and official logos.",
        "A step-by-step guide for people who have never used AI.",
        "A prompt book with visual rules and ready-to-use prompts for designers.",
        "A plan B with editable templates when AI is not the right tool.",
        "Team training sessions.",
      ],
      proof:
        "At Xtendo Global I built the Xtendo Brand Designer: a Gemini Gem trained on the brand manual that anyone in the company can use to make posts, flyers and slides. I wrote its 11-page guide and a prompt book for my design team, and landing pages went from 4-5 days to 1 day.",
      faq: [
        {
          q: "Do people need to know how to use AI?",
          a: "No. The tool is designed for people who have never used AI: they ask in one sentence and get an image ready to publish, with a guide that explains every step.",
        },
        {
          q: "Will the AI respect our brand?",
          a: "It's trained on your brand manual and official logos, and the guide includes a checklist before publishing. There's also a plan B with templates for when the result isn't right.",
        },
        {
          q: "Which AI tools do you use?",
          a: "Mainly Gemini and Claude. I pick the one that fits the tools your company already uses.",
        },
      ],
    },
    es: {
      name: "Flujos de diseño con IA para equipos",
      title: "Flujos de diseño con IA y herramientas de marca para equipos (Gemini, Claude) | Sebastián Jara",
      description:
        "Armo flujos de diseño con IA para equipos: gemas de Gemini entrenadas con tu manual de marca, prompt books y capacitación para que cualquiera haga piezas de marca más rápido. Remoto, en español e inglés.",
      headline: "Herramientas de IA para que todo tu equipo haga piezas de marca, más rápido.",
      intro:
        "Convierto tu manual de marca en herramientas de IA que tu equipo puede usar: una gema de Gemini que crea imágenes de marca a partir de una frase, un prompt book para diseñadores y una guía para gente que nunca usó IA. Después capacito al equipo para que las herramientas se usen de verdad.",
      forWho: [
        "Empresas donde el equipo de diseño no llega con todos los pedidos.",
        "Equipos que no son de diseño (ventas, RR.HH., marketing) y necesitan piezas de marca rápido.",
        "Equipos de diseño que quieren usar IA sin perder la estética de la marca.",
      ],
      deliverables: [
        "Una gema de Gemini (o similar) entrenada con tu manual de marca y los logos oficiales.",
        "Una guía paso a paso para gente que nunca usó IA.",
        "Un prompt book con reglas visuales y prompts listos para diseñadores.",
        "Un plan B con plantillas editables para cuando la IA no es la herramienta indicada.",
        "Capacitaciones para el equipo.",
      ],
      proof:
        "En Xtendo Global armé el Diseñador de Marca Xtendo: una gema de Gemini entrenada con el manual de marca que cualquiera en la empresa usa para hacer posteos, flyers y presentaciones. Escribí su guía de 11 páginas y un prompt book para mi equipo de diseño, y las landing pages pasaron de 4-5 días a 1 día.",
      faq: [
        {
          q: "¿La gente necesita saber usar IA?",
          a: "No. La herramienta está pensada para gente que nunca usó IA: piden en una frase y reciben una imagen lista para publicar, con una guía que explica cada paso.",
        },
        {
          q: "¿La IA respeta nuestra marca?",
          a: "Está entrenada con tu manual de marca y los logos oficiales, y la guía incluye un checklist antes de publicar. También hay un plan B con plantillas para cuando el resultado no sale bien.",
        },
        {
          q: "¿Qué herramientas de IA usás?",
          a: "Principalmente Gemini y Claude. Elijo la que encaja con las herramientas que tu empresa ya usa.",
        },
      ],
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Shared "how we work" steps, shown on every service page */
export const process = {
  en: [
    { t: "Intro call", b: "We talk about your business, your goals and what you need." },
    { t: "Proposal", b: "You get a written proposal with scope, deliverables, timeline and price." },
    { t: "Design and build", b: "I design, share progress at agreed checkpoints and build what's needed." },
    { t: "Handoff", b: "You get the final files, guidelines or access, plus a walkthrough for your team." },
  ],
  es: [
    { t: "Llamada inicial", b: "Hablamos de tu negocio, tus objetivos y lo que necesitás." },
    { t: "Propuesta", b: "Te mando una propuesta por escrito con alcance, entregables, plazos y precio." },
    { t: "Diseño y desarrollo", b: "Diseño, te muestro avances en las fechas acordadas y armo lo que haga falta." },
    { t: "Entrega", b: "Recibís los archivos finales, manuales o accesos, y una explicación para tu equipo." },
  ],
};
