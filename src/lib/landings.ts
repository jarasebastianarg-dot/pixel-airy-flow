import type { CaseStudy } from "@/lib/caseStudies";
import type { Service } from "@/lib/services";

/**
 * Short landing pages, each built around ONE real search (from Google's
 * suggestions), for people close to hiring. Every topic exists in English and
 * Spanish with its own URL; the two are linked as translations (hreflang).
 */

type LandingCopy = {
  /** Path of this language version, e.g. "/b2b-branding" or "/es/branding-para-empresas-b2b" */
  path: string;
  /** The search this page answers */
  keyword: string;
  title: string;
  description: string;
  headline: string;
  answer: string;
  points: string[];
  proofTitle: string;
  proof: string;
  faq: { q: string; a: string }[];
  cta: string;
};

export type Landing = {
  id: "b2b-branding" | "brand-guidelines" | "ai-brand-guidelines";
  service: Service["slug"];
  cases: CaseStudy["slug"][];
  en: LandingCopy;
  es: LandingCopy;
};

export const landings: Landing[] = [
  {
    id: "b2b-branding",
    service: "brand-identity",
    cases: ["xtendo-global", "elevate-local"],
    en: {
      path: "/b2b-branding",
      keyword: "B2B branding",
      title: "B2B Branding Designer · Brand Systems for B2B Companies | Sebastián Jara",
      description:
        "Freelance B2B branding designer: brand identity, brand manuals and templates for B2B companies with teams in several countries. Proven with a 1,500-person company in 9 countries.",
      headline: "B2B branding for companies whose teams all need to look like one brand.",
      answer:
        "B2B branding is about consistency at scale: sales decks, proposals, webinars, social posts and emails made by different teams, in different countries, that still look like the same company. I design the identity, write the manual and build the templates and tools that keep it that way.",
      points: [
        "A visual identity and brand manual written for non-designers.",
        "Templates for the pieces B2B teams use most: decks, case studies, ebooks, webinar posts.",
        "Landing pages and emails in HubSpot on the same system.",
        "AI tools so sales and HR can create on-brand pieces on their own.",
      ],
      proofTitle: "Proof: Xtendo Global",
      proof:
        "Xtendo Global is a B2B company with 1,500+ people in 9 countries. I wrote its 45-page brand manual, built 15+ templates and the webinar funnels in HubSpot (one invitation email: 48% open rate), and created a Gemini Gem so anyone can make on-brand pieces.",
      faq: [
        {
          q: "How is B2B branding different from B2C branding?",
          a: "In B2B the brand lives in sales material, proposals, events and long buying cycles, and it's used by many teams. The system has to be easy to apply by people who aren't designers.",
        },
        {
          q: "Do you work with B2B companies outside Argentina?",
          a: "Yes. I've worked remotely with companies in the US, Europe and Latin America, in English and Spanish.",
        },
        {
          q: "Can you also build our HubSpot landing pages?",
          a: "Yes. I design and build landing pages and emails in HubSpot on the same brand system.",
        },
      ],
      cta: "Tell me about your B2B brand",
    },
    es: {
      path: "/es/branding-para-empresas-b2b",
      keyword: "branding para empresas B2B",
      title: "Branding para empresas B2B · Diseñador de marca freelance | Sebastián Jara",
      description:
        "Branding para empresas B2B: identidad de marca, manual de marca y plantillas para empresas con equipos en varios países. Probado en una empresa de 1.500 personas en 9 países.",
      headline: "Branding para empresas B2B donde todos los equipos tienen que verse como una sola marca.",
      answer:
        "El branding B2B se trata de mantener la coherencia a gran escala: presentaciones de ventas, propuestas, webinars, posteos y emails hechos por distintos equipos, en distintos países, que igual se ven como la misma empresa. Diseño la identidad, escribo el manual y armo las plantillas y herramientas que lo sostienen.",
      points: [
        "Una identidad visual y un manual de marca escrito para gente que no es diseñadora.",
        "Plantillas para lo que más usan los equipos B2B: presentaciones, casos de éxito, ebooks, posteos de webinars.",
        "Landing pages y emails en HubSpot con el mismo sistema.",
        "Herramientas de IA para que ventas y RR.HH. hagan piezas de marca por su cuenta.",
      ],
      proofTitle: "Prueba: Xtendo Global",
      proof:
        "Xtendo Global es una empresa B2B con más de 1.500 personas en 9 países. Escribí su manual de marca de 45 páginas, armé más de 15 plantillas y los embudos de webinars en HubSpot (un email de invitación: 48% de apertura) y creé una gema de Gemini para que cualquiera haga piezas de marca.",
      faq: [
        {
          q: "¿En qué se diferencia el branding B2B del B2C?",
          a: "En B2B la marca vive en material de ventas, propuestas, eventos y ciclos de compra largos, y la usan muchos equipos. El sistema tiene que ser fácil de aplicar por gente que no es diseñadora.",
        },
        {
          q: "¿Trabajás con empresas B2B fuera de Argentina?",
          a: "Sí. Trabajé a distancia con empresas de Estados Unidos, Europa y Latinoamérica, en español e inglés.",
        },
        {
          q: "¿También podés armar nuestras landing pages en HubSpot?",
          a: "Sí. Diseño y armo landing pages y emails en HubSpot con el mismo sistema de marca.",
        },
      ],
      cta: "Contame sobre tu marca B2B",
    },
  },
  {
    id: "brand-guidelines",
    service: "brand-identity",
    cases: ["xtendo-global", "elevate-local"],
    en: {
      path: "/brand-guidelines-design",
      keyword: "brand guidelines designer",
      title: "Brand Guidelines Designer · Brand Manuals Your Team Will Use | Sebastián Jara",
      description:
        "Freelance brand guidelines designer: brand manuals with logo, color, typography, voice, photography and templates, written so your whole team can apply them. Examples from real projects.",
      headline: "Brand guidelines your team will actually open and use.",
      answer:
        "Brand guidelines (or a brand manual) are the rules that make every piece look like the same brand: how to use the logo, colors, type, photos and tone of voice. I design them as a practical document with real examples and templates, not a PDF that nobody opens.",
      points: [
        "Logo: versions, safe area, minimum size and incorrect uses.",
        "Color and typography with exact values for screen and print.",
        "Voice and tone, photography, web and social media rules.",
        "Co-branding and sub-brands.",
        "Ready-to-use templates for the pieces your team makes most.",
      ],
      proofTitle: "Proof: a 45-page brand manual",
      proof:
        "For Xtendo Global I wrote a 45-page brand manual with the CEO, covering logo, color, type, voice, photography, web, social media and co-branding, plus a 9-page manual for its sub-brand Talent Solutions. You can browse pages of both in the case study.",
      faq: [
        {
          q: "What's the difference between brand guidelines and a brand manual?",
          a: "They're usually the same thing: the document with the rules for using the brand. Some companies call the short version guidelines and the full version a manual.",
        },
        {
          q: "Can you write guidelines for a logo we already have?",
          a: "Yes. At Xtendo an outside studio had made the logo; I defined the look around it and wrote the full manual.",
        },
        {
          q: "Do you include templates?",
          a: "Yes. The manual comes with templates for the pieces your team uses most, so the rules are easy to follow.",
        },
      ],
      cta: "Start your brand guidelines",
    },
    es: {
      path: "/es/manual-de-identidad-corporativa",
      keyword: "manual de identidad corporativa",
      title: "Manual de identidad corporativa y manual de marca · Diseño freelance | Sebastián Jara",
      description:
        "Diseño de manual de identidad corporativa (manual de marca): logo, colores, tipografía, tono de voz, fotografía y plantillas, escrito para que todo el equipo lo pueda aplicar. Ejemplos reales.",
      headline: "Un manual de identidad corporativa que tu equipo de verdad abre y usa.",
      answer:
        "El manual de identidad corporativa (o manual de marca) son las reglas que hacen que cada pieza se vea como la misma marca: cómo usar el logo, los colores, la tipografía, las fotos y el tono de voz. Lo diseño como un documento práctico, con ejemplos reales y plantillas, no un PDF que nadie abre.",
      points: [
        "Logo: versiones, área de resguardo, tamaño mínimo y usos incorrectos.",
        "Colores y tipografía con valores exactos para pantalla e impresión.",
        "Tono de voz, fotografía, web y redes sociales.",
        "Co-branding y sub-marcas.",
        "Plantillas listas para las piezas que más hace tu equipo.",
      ],
      proofTitle: "Prueba: un manual de marca de 45 páginas",
      proof:
        "Para Xtendo Global escribí con el CEO un manual de marca de 45 páginas que cubre logo, color, tipografía, tono de voz, fotografía, web, redes y co-branding, más un manual de 9 páginas para su sub-marca Talent Solutions. Podés ver páginas de los dos en el caso.",
      faq: [
        {
          q: "¿Cuál es la diferencia entre manual de identidad corporativa y manual de marca?",
          a: "Normalmente son lo mismo: el documento con las reglas para usar la marca. En algunos países se le dice manual de identidad corporativa y en otros manual de marca o brandbook.",
        },
        {
          q: "¿Podés hacer el manual de un logo que ya tenemos?",
          a: "Sí. En Xtendo el logo lo había hecho un estudio externo; yo definí la estética alrededor y escribí el manual completo.",
        },
        {
          q: "¿Incluye plantillas?",
          a: "Sí. El manual viene con plantillas para las piezas que más usa tu equipo, así las reglas son fáciles de seguir.",
        },
      ],
      cta: "Empezar tu manual de marca",
    },
  },
  {
    id: "ai-brand-guidelines",
    service: "ai-design-workflows",
    cases: ["xtendo-global"],
    en: {
      path: "/ai-brand-guidelines",
      keyword: "AI brand guidelines",
      title: "AI Brand Guidelines · Turn Your Brand Manual into an AI Tool | Sebastián Jara",
      description:
        "AI brand guidelines for teams: I turn your brand manual into a Gemini Gem (or similar) that creates on-brand images from one sentence, plus a guide and a prompt book. A real case, in use at a 1,500-person company.",
      headline: "AI brand guidelines: your brand manual, turned into a tool anyone can use.",
      answer:
        "Most AI image tools ignore your brand. I train an AI assistant (like a Gemini Gem) on your brand manual and official logos, so anyone in the company can ask for a post, flyer or slide in one sentence and get an on-brand image back. Then I write the guide and train the team.",
      points: [
        "An AI assistant trained on your brand manual and logos.",
        "A one-sentence formula people can use from day one.",
        "A prompt book with visual rules for your designers.",
        "A checklist before publishing and a plan B with templates.",
        "Team training.",
      ],
      proofTitle: "Proof: the Xtendo Brand Designer",
      proof:
        "At Xtendo Global I built a Gemini Gem trained on the brand manual that people outside design use to make posts, flyers and slides. I wrote its 11-page guide, and with AI in the workflow landing pages went from 4-5 days to 1 day.",
      faq: [
        {
          q: "Which AI tool do you use?",
          a: "Mainly Gemini Gems and Claude. I pick the one that fits the tools your company already uses.",
        },
        {
          q: "Will the images really follow our brand?",
          a: "They're based on your manual and official logos, and the guide includes a checklist before publishing. For pieces where AI isn't the right tool, there are editable templates.",
        },
        {
          q: "Do we need a brand manual first?",
          a: "It helps a lot. If you don't have one, I can write it first and build the AI tool on top of it.",
        },
      ],
      cta: "Build your AI brand tool",
    },
    es: {
      path: "/es/manual-de-marca-con-ia",
      keyword: "manual de marca con IA",
      title: "Manual de marca con IA · Tu identidad corporativa en una herramienta de IA | Sebastián Jara",
      description:
        "Convierto tu manual de marca o de identidad corporativa en una herramienta de IA (como una gema de Gemini) que crea piezas de marca a partir de una frase, con guía y prompt book. Caso real en una empresa de 1.500 personas.",
      headline: "Tu manual de marca, convertido en una herramienta de IA que cualquiera puede usar.",
      answer:
        "La mayoría de las herramientas de IA ignoran tu marca. Entreno un asistente de IA (como una gema de Gemini) con tu manual de marca y tus logos oficiales, para que cualquiera en la empresa pida un posteo, un flyer o una presentación en una frase y reciba una imagen de marca. Después escribo la guía y capacito al equipo.",
      points: [
        "Un asistente de IA entrenado con tu manual de marca y tus logos.",
        "Una fórmula de una frase que se usa desde el primer día.",
        "Un prompt book con reglas visuales para tus diseñadores.",
        "Un checklist antes de publicar y un plan B con plantillas.",
        "Capacitación del equipo.",
      ],
      proofTitle: "Prueba: el Diseñador de Marca Xtendo",
      proof:
        "En Xtendo Global armé una gema de Gemini entrenada con el manual de marca que usa gente que no es de diseño para hacer posteos, flyers y presentaciones. Escribí su guía de 11 páginas, y con IA en el proceso las landing pages pasaron de 4-5 días a 1 día.",
      faq: [
        {
          q: "¿Qué herramienta de IA usás?",
          a: "Principalmente gemas de Gemini y Claude. Elijo la que encaja con las herramientas que tu empresa ya usa.",
        },
        {
          q: "¿Las imágenes respetan de verdad la marca?",
          a: "Se basan en tu manual y tus logos oficiales, y la guía incluye un checklist antes de publicar. Para las piezas donde la IA no es la herramienta indicada, hay plantillas editables.",
        },
        {
          q: "¿Necesitamos tener un manual de marca antes?",
          a: "Ayuda mucho. Si no tienen uno, puedo escribirlo primero y armar la herramienta de IA sobre esa base.",
        },
      ],
      cta: "Armar tu herramienta de marca con IA",
    },
  },
];

export const landingByPath = (path: string) =>
  landings.find((l) => l.en.path === path || l.es.path === path);
