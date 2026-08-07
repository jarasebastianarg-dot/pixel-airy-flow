/**
 * Native i18n dictionary. No external APIs.
 * Spanish copy intentionally keeps industry-standard terms in English
 * (e-commerce, leads, automation, workflows, AI, UI/UX, frontend, etc.).
 */

export type Lang = "en" | "es";

export const dictionary = {
  en: {
    nav: {
      work: "Work",
      capabilities: "Capabilities",
      stack: "Stack",
      about: "About",
      viewProjects: "View Projects",
      langLabel: "Language",
    },
    hero: {
      badge: "Ecommerce & Brand Specialist",
      headline: {
        pre: "I build ",
        em1: "brands",
        mid: " that stand out and ",
        em2: "systems",
        post: " that sell.",
      },
      subtitle:
        "I work across marketing, design and automation — and I use AI as part of how I build, not just talk about it. I design the UI/UX, then build it myself directly in Shopify, using AI-assisted development to move faster without cutting corners.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Get in touch",
    },
    sections: {
      works: "Selected Works",
      capabilities: "Core Capabilities",
      stack: "Methodology & Stack",
      about: "The Architect",
      experience: "Experience",
      credentials: "Credentials",
    },
    capabilities: {
      heading: { pre: "Four disciplines, ", em: "one", post: " operator." },
      intro:
        "There's no hand-off between design, code and growth — I do all three myself, so nothing gets lost in translation between what's designed and what actually ships.",
      items: [
        {
          kicker: "Commerce",
          title: "Shopify & Custom E-commerce",
          desc: "I build custom Shopify storefronts — Liquid, HTML and CSS, with AI doing the heavy lifting on implementation. No off-the-shelf themes: every store is built for how it actually needs to convert.",
          tags: ["Shopify 2.0", "Liquid", "Headless"],
        },
        {
          kicker: "Retention",
          title: "Retention & Email Marketing",
          desc: "Klaviyo flows and campaigns that bring customers back — welcome series, abandoned cart, post-purchase. Email marketing built to move revenue, not just open rates.",
          tags: ["Klaviyo", "Lifecycle", "LTV"],
        },
        {
          kicker: "Identity",
          title: "Brand Identity & UI/UX",
          desc: "I design brand systems end to end — logo, packaging, digital interfaces — built on the design fundamentals I studied at university and applied to brands that actually need to scale.",
          tags: ["Systems", "UI/UX", "Packaging"],
        },
        {
          kicker: "Automation",
          title: "AI & Workflow Automation",
          desc: "I connect Claude, Gemini and Make to cut out repetitive work — so campaigns ship faster and less time goes into busywork.",
          tags: ["Make", "Claude", "Gemini"],
        },
      ],
    },
    works: {
      folkways: {
        tag: "Shopify Expert",
        headline: "Rebuilding a 2,000+ SKU Store",
        body: "Migrated 2,000+ products to Shopify 2.0 without losing a single drop of performance.",
      },
      "paw-royalty": {
        tag: "Lead Designer & AI-Assisted Developer",
        headline: "Launching a Brand From Zero",
        body: "End-to-end creation for a US market entry: brand identity, UI/UX and Klaviyo integration.",
      },
      "b-way": {
        tag: "Brand Manager",
        headline: "From Designer to Brand Manager",
        body: "Steered a 6-person team scaling operations across the US and Brazil, driving digital and 300+ attendee physical events.",
      },
      "elevate-local": {
        tag: "Branding Designer",
        headline: "A Brand Clinics Trust",
        body: "Complete visual identity for a European medical marketing agency.",
      },
    },
    methodology: {
      heading: { pre: "One system, ", em: "four", post: " engines." },
      intro:
        "Design, code, growth and AI orchestrated as a single stack. Tap any cluster — the workspace re-compiles in real time.",
      clusters: {
        design: {
          kicker: "Craft",
          group: "Design & UX",
          blurb: "Brand systems, editorial layouts and interface craft.",
        },
        build: {
          kicker: "Ship",
          group: "Build & Code",
          blurb: "Storefronts and marketing sites shipped end-to-end.",
        },
        scale: {
          kicker: "Growth",
          group: "Scale & Automate",
          blurb: "Retention, paid media and lifecycle automation.",
        },
        ai: {
          kicker: "Intelligence",
          group: "AI Models",
          blurb: "AI used across design, code and growth.",
        },
      },
      toolUse: {
        Photoshop: "Photo retouching and campaign visuals",
        Illustrator: "Logo systems and vector creative assets",
        InDesign: "Editorial layouts and brand guidelines",
        "After Effects": "Motion graphics for social and product",
        Figma: "Product UI, prototypes and design systems",
        Canva: "Fast-turn social decks and pitch material",
        "Claude Design": "AI-assisted concept exploration and iteration",
        Shopify: "Custom theme development and headless architecture",
        "Shopify Liquid": "Bespoke sections built to each merchant's flow",
        "HTML / CSS": "Responsive, accessible, pixel-accurate markup",
        Klaviyo: "CRM flows, segmentation and A/B testing",
        "Email Automation": "Lifecycle campaigns end-to-end",
        "Meta Ads": "Paid social: creative, testing and reporting",
        Make: "No-code pipelines connecting the whole stack",
        Claude: "Engineering co-pilot and long-form copywriting",
        "Claude Co-Work": "Async pair-programming and workflow acceleration",
        Gemini: "Research, data analysis and multimodal tasks",
      } as Record<string, string>,
      live: "live",
    },
    about: {
      heading: { pre: "Designer by training. ", em: "Builder by habit." },
      bio: "I'm Sebastián — a graphic designer by training who ended up building the things I design, not just handing them off. I studied design formally, but most of what I do day to day is Shopify builds, brand systems, and workflows that used to take a team and now take me and a few AI tools. I care more about whether something actually works than whether it looks good in a deck.",
      downloadCv: "Download Resume",
      email: "Email",
      copy: "Copy",
      copied: "Copied",
      copyAria: "Copy email address",
      footer: "Crafted in Buenos Aires.",
    },
    experience: [
      {
        role: "Branding & UI/UX Designer",
        company: "Freelance — Remote",
        period: "Oct 2025 — Present",
        highlights: [
          "Lead brand identity and UI/UX for a US + Argentina client portfolio, shipping web and app platforms engineered around the buyer journey.",
          "Build scalable design systems and high-converting landing pages — using AI-assisted development to execute faster — that turn paid social traffic into measurable e-commerce revenue.",
        ],
      },
      {
        role: "Brand Manager",
        company: "B-WAY — Buenos Aires, AR (Hybrid)",
        period: "Aug 2024 — Dec 2025",
        highlights: [
          "Directed a 6-person interdisciplinary marketing team running 360° campaigns aligned to commercial KPIs.",
          "Deployed AI-driven analytics workflows that cut production lead times by 30% and sharpened targeting precision.",
          "Owned e-commerce and paid media strategy across 3 international markets (US, BR, AR), improving ROAS on core SKUs.",
          "Orchestrated flagship events (B-WAY Experience, Barber Week) driving qualified lead generation at scale.",
        ],
      },
      {
        role: "Product Designer",
        company: "B-WAY — Buenos Aires, AR",
        period: "Nov 2023 — Aug 2024",
        highlights: [
          "Produced high-impact e-commerce visuals and paid social assets that lifted CTR and engagement across the funnel.",
          "Optimized digital storefront UX to reduce friction and support product conversion and brand trust.",
          "Designed international trade-show stands optimized for visitor flow and on-site lead capture.",
        ],
      },
      {
        role: "Graphic Designer",
        company: "Freelance — Remote",
        period: "2022 — 2023",
        highlights: [
          "Delivered end-to-end brand identities and UI/UX systems for clients across multiple industries.",
          "Ran editorial and social content strategy focused on brand voice consistency and audience retention.",
        ],
      },
    ],
    credentials: [
      {
        title: "Bachelor's Degree in\u00a0Graphic Design",
        institution: "UADE (Universidad Argentina de la Empresa)",
        period: "2019 — 2024",
      },
      {
        title: "Bachelor's Degree in Multimedia & Interaction Design",
        institution: "UADE (Universidad Argentina de la Empresa)",
        period: "2020 — 2024",
      },
      {
        title: "Foundations of Digital Marketing & E-commerce",
        institution: "Google - Professional Certificate",
        period: "2026",
      },
      {
        title: "OPI 2.0 — Public Speaking",
        institution: "Franco Pisso - Professional Certificate",
        period: "2026",
      },
      {
        title: "CAE - Certificate in Advanced English C1",
        institution: "Cambridge",
        period: "2018",
      },
    ],
    caseStudyLabels: {
      problem: "The Problem",
      solution: "Technical & Automation Solution",
      impact: "Impact",
    },
    caseStudies: {
      folkways: {
        client: "Folkways",
        role: "Lead Designer & AI-Assisted Developer",
        problem:
          "A catalog of 2,000+ wines lived on a legacy storefront: slow pages, duplicated manual processes and an app stack that fought against itself. Growth was capped by operations, not by demand.",
        solution:
          "Full migration to Shopify 2.0 with custom Liquid sections, a normalized product data model and automated import workflows that replaced manual catalog entry. Klaviyo was rebuilt natively with lifecycle flows, segmentation and A/B testing, while Make pipelines and AI-assisted content generation kept 2,000+ SKUs enriched and in sync.",
        impact: [
          "2,000+ SKUs migrated and automated",
          "-40% page load time",
          "+28% cart conversion rate",
          "+45% recurring revenue",
          "42% average email open rate",
        ],
      },
      "paw-royalty": {
        client: "Paw Royalty",
        role: "Lead Developer & Designer",
        problem:
          "A new pet-supplement brand entering the US market with no identity, no storefront and no retention engine — and no room for a slow, expensive launch.",
        solution:
          "End-to-end build: brand identity, UI/UX designed and implemented directly in Shopify code, a conversion-first PDP, a dedicated Subscribe & Save page and a quiz that routes each customer to a personalized recommendation. Klaviyo automation covers welcome, quiz-result, abandoned-cart and replenishment flows, with AI-assisted copy and creative iteration accelerating campaign production.",
        impact: [
          "Full US launch shipped end-to-end",
          "48% average email open rate",
          "22% of total revenue attributed to email",
          "30x ROI on retention campaigns",
        ],
      },
      "b-way": {
        client: "B-WAY",
        role: "Brand Manager",
        problem:
          "A grooming brand scaling across the US, Brazil and Argentina with fragmented branding, three disconnected storefronts and production lead times that throttled every campaign.",
        solution:
          "Unified brand system across packaging, retail and digital, plus regional e-commerce storefronts built on a shared design language. Directed a 6-person team on 360° campaigns and deployed AI-driven analytics and automation workflows for reporting, asset production and paid-media iteration.",
        impact: [
          "3 international markets operated (US, BR, AR)",
          "-30% production lead times",
          "Improved ROAS on core SKUs",
          "300+ attendee flagship events",
        ],
      },
      "elevate-local": {
        client: "Elevate Local",
        role: "Branding Designer",
        problem:
          "A European medical marketing agency selling B2B remotely, with no visual system to signal clinical credibility across proposals, decks and digital touchpoints.",
        solution:
          "A complete identity system: logo suite, clinical color palette, typographic scale and asset library, delivered with usage guidelines and templated files so the remote team can produce on-brand material without a designer in the loop.",
        impact: [
          "Full identity system delivered",
          "Consistent B2B presence across every touchpoint",
          "Self-serve templates for a fully remote team",
        ],
      },
    },
  },

  es: {
    nav: {
      work: "Proyectos",
      capabilities: "Servicios",
      stack: "Stack",
      about: "Sobre mí",
      viewProjects: "Ver proyectos",
      langLabel: "Idioma",
    },
    hero: {
      badge: "Ecommerce & Brand Specialist",
      headline: {
        pre: "Construyo ",
        em1: "marcas",
        mid: " que se destacan y ",
        em2: "sistemas",
        post: " que venden.",
      },
      subtitle:
        "Trabajo entre marketing, diseño y automatización — y uso AI como parte de cómo construyo, no solo para hablar de eso. Diseño el UI/UX y después lo construyo yo mismo directamente en Shopify, usando desarrollo asistido por AI para ir más rápido sin bajar la calidad.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Hablemos",
    },
    sections: {
      works: "Proyectos seleccionados",
      capabilities: "Servicios principales",
      stack: "Metodología y stack",
      about: "El arquitecto",
      experience: "Experiencia",
      credentials: "Formación",
    },
    capabilities: {
      heading: { pre: "Cuatro disciplinas, ", em: "un", post: " solo operador." },
      intro:
        "No hay traspasos entre diseño, código y growth — los tres los hago yo, así que nada se pierde en el camino entre lo que se diseña y lo que realmente sale a producción.",
      items: [
        {
          kicker: "Commerce",
          title: "Shopify y e-commerce a medida",
          desc: "Construyo storefronts de Shopify a medida — Liquid, HTML y CSS, con AI haciendo el trabajo pesado de la implementación. Sin themes genéricos: cada tienda se construye según cómo necesita convertir.",
          tags: ["Shopify 2.0", "Liquid", "Headless"],
        },
        {
          kicker: "Retention",
          title: "Retención y email marketing",
          desc: "Flows y campañas en Klaviyo que hacen volver a los clientes — bienvenida, carrito abandonado, post-compra. Email marketing hecho para mover revenue, no solo tasas de apertura.",
          tags: ["Klaviyo", "Lifecycle", "LTV"],
        },
        {
          kicker: "Identity",
          title: "Identidad de marca y UI/UX",
          desc: "Diseño sistemas de marca de punta a punta — logo, packaging, interfaces digitales — apoyados en los fundamentos de diseño que estudié en la universidad y aplicados a marcas que necesitan escalar de verdad.",
          tags: ["Systems", "UI/UX", "Packaging"],
        },
        {
          kicker: "Automation",
          title: "AI y automatización de workflows",
          desc: "Conecto Claude, Gemini y Make para eliminar el trabajo repetitivo — así las campañas salen más rápido y se pierde menos tiempo en tareas mecánicas.",
          tags: ["Make", "Claude", "Gemini"],
        },
      ],
    },
    works: {
      folkways: {
        tag: "Shopify Expert",
        headline: "Reconstruir una tienda de +2.000 SKU",
        body: "Migré más de 2.000 productos a Shopify 2.0 sin perder una gota de performance.",
      },
      "paw-royalty": {
        tag: "Lead Designer & AI-Assisted Developer",
        headline: "Lanzar una marca desde cero",
        body: "Creación integral para entrar al mercado de EE.UU.: identidad, UI/UX e integración con Klaviyo.",
      },
      "b-way": {
        tag: "Brand Manager",
        headline: "De diseñador a Brand Manager",
        body: "Lideré un equipo de 6 personas escalando la operación en EE.UU. y Brasil, con campañas digitales y eventos de +300 asistentes.",
      },
      "elevate-local": {
        tag: "Branding Designer",
        headline: "Una marca en la que confían las clínicas",
        body: "Identidad visual completa para una agencia europea de marketing médico.",
      },
    },
    methodology: {
      heading: { pre: "Un sistema, ", em: "cuatro", post: " motores." },
      intro:
        "Diseño, código, growth y AI orquestados como un único stack. Tocá cualquier cluster: el workspace se re-compila en tiempo real.",
      clusters: {
        design: {
          kicker: "Craft",
          group: "Design & UX",
          blurb: "Sistemas de marca, layouts editoriales y craft de interfaz.",
        },
        build: {
          kicker: "Ship",
          group: "Build & Code",
          blurb: "Tiendas y sitios de marketing entregados de punta a punta.",
        },
        scale: {
          kicker: "Growth",
          group: "Scale & Automate",
          blurb: "Retención, paid media y automation de lifecycle.",
        },
        ai: {
          kicker: "Intelligence",
          group: "AI Models",
          blurb: "AI usada en diseño, código y growth.",
        },
      },
      toolUse: {
        Photoshop: "Retoque fotográfico y piezas de campaña",
        Illustrator: "Sistemas de logo y assets vectoriales",
        InDesign: "Layouts editoriales y manuales de marca",
        "After Effects": "Motion graphics para social y producto",
        Figma: "UI de producto, prototipos y design systems",
        Canva: "Decks y piezas de social de entrega rápida",
        "Claude Design": "Exploración de conceptos asistida por AI",
        Shopify: "Themes a medida y arquitectura headless",
        "Shopify Liquid": "Secciones propias según el flow de cada marca",
        "HTML / CSS": "Markup responsive, accesible y pixel-perfect",
        Klaviyo: "Flows de CRM, segmentación y A/B testing",
        "Email Automation": "Campañas de lifecycle de punta a punta",
        "Meta Ads": "Paid social: creatividad, testing y reporting",
        Make: "Pipelines no-code que conectan todo el stack",
        Claude: "Co-piloto de ingeniería y copywriting",
        "Claude Co-Work": "Pair-programming async y aceleración de workflows",
        Gemini: "Research, análisis de datos y tareas multimodales",
      } as Record<string, string>,
      live: "live",
    },
    about: {
      heading: { pre: "Diseñador de formación. ", em: "Constructor por costumbre." },
      bio: "Soy Sebastián — diseñador gráfico de formación que terminó construyendo lo que diseña, en vez de solo entregarlo. Estudié diseño formalmente, pero mi día a día son builds de Shopify, sistemas de marca y workflows que antes requerían un equipo y hoy los hago yo con algunas herramientas de AI. Me importa más que algo funcione de verdad que cómo se ve en una presentación.",
      downloadCv: "Descargar CV",
      email: "Email",
      copy: "Copiar",
      copied: "Copiado",
      copyAria: "Copiar dirección de email",
      footer: "Hecho en Buenos Aires.",
    },
    experience: [
      {
        role: "Branding & UI/UX Designer",
        company: "Freelance — Remoto",
        period: "Oct 2025 — Presente",
        highlights: [
          "Lidero identidad de marca y UI/UX para clientes de EE.UU. y Argentina, entregando plataformas web y app diseñadas alrededor del buyer journey.",
          "Construyo design systems escalables y landing pages de alta conversión — usando desarrollo asistido por AI para ejecutar más rápido — que transforman tráfico de paid social en revenue medible de e-commerce.",
        ],
      },
      {
        role: "Brand Manager",
        company: "B-WAY — Buenos Aires, AR (Híbrido)",
        period: "Ago 2024 — Dic 2025",
        highlights: [
          "Dirigí un equipo interdisciplinario de marketing de 6 personas con campañas 360° alineadas a KPIs comerciales.",
          "Implementé workflows de analytics con AI que redujeron un 30% los tiempos de producción y afinaron el targeting.",
          "Lideré la estrategia de e-commerce y paid media en 3 mercados (US, BR, AR), mejorando el ROAS de los SKUs principales.",
          "Coordiné eventos insignia (B-WAY Experience, Barber Week) generando leads calificados a escala.",
        ],
      },
      {
        role: "Product Designer",
        company: "B-WAY — Buenos Aires, AR",
        period: "Nov 2023 — Ago 2024",
        highlights: [
          "Produje piezas de e-commerce y paid social que subieron el CTR y el engagement en todo el funnel.",
          "Optimicé la UX de la tienda digital para reducir fricción y sostener conversión y confianza de marca.",
          "Diseñé stands para ferias internacionales optimizados para el flujo de visitantes y la captación de leads.",
        ],
      },
      {
        role: "Graphic Designer",
        company: "Freelance — Remoto",
        period: "2022 — 2023",
        highlights: [
          "Entregué identidades de marca y sistemas de UI/UX completos para clientes de distintas industrias.",
          "Llevé la estrategia de contenido editorial y social enfocada en consistencia de marca y retención de audiencia.",
        ],
      },
    ],
    credentials: [
      {
        title: "Licenciatura en Diseño\u00a0Gráfico",
        institution: "UADE (Universidad Argentina de la Empresa)",
        period: "2019 — 2024",
      },
      {
        title: "Licenciatura en Diseño Multimedia y de Interacción",
        institution: "UADE (Universidad Argentina de la Empresa)",
        period: "2020 — 2024",
      },
      {
        title: "Fundamentos de Digital Marketing y E-commerce",
        institution: "Google — Certificado profesional",
        period: "2026",
      },
      {
        title: "OPI 2.0 — Oratoria",
        institution: "Franco Pisso — Certificado profesional",
        period: "2026",
      },
      {
        title: "CAE — Certificate in Advanced English C1",
        institution: "Cambridge",
        period: "2018",
      },
    ],
    caseStudyLabels: {
      problem: "El problema",
      solution: "Solución técnica y de automation",
      impact: "Impacto",
    },
    caseStudies: {
      folkways: {
        client: "Folkways",
        role: "Lead Designer & AI-Assisted Developer",
        problem:
          "Un catálogo de más de 2.000 vinos vivía en una tienda vieja: páginas lentas, procesos manuales duplicados y un stack de apps que se peleaba entre sí. El techo de crecimiento era operativo, no de demanda.",
        solution:
          "Migración completa a Shopify 2.0 con secciones Liquid propias, un modelo de datos de producto normalizado y workflows de importación automatizados que reemplazaron la carga manual del catálogo. Rearmé Klaviyo de forma nativa con flows de lifecycle, segmentación y A/B testing, mientras pipelines en Make y generación de contenido con AI mantienen los 2.000+ SKUs enriquecidos y sincronizados.",
        impact: [
          "2.000+ SKUs migrados y automatizados",
          "-40% en tiempo de carga",
          "+28% en conversión de carrito",
          "+45% de revenue recurrente",
          "42% de open rate promedio en email",
        ],
      },
      "paw-royalty": {
        client: "Paw Royalty",
        role: "Lead Developer & Designer",
        problem:
          "Una marca nueva de suplementos para mascotas entrando al mercado de EE.UU. sin identidad, sin tienda y sin motor de retención — y sin margen para un lanzamiento lento y caro.",
        solution:
          "Build integral: identidad de marca, UI/UX diseñado e implementado directamente en el código de Shopify, una PDP orientada a conversión, una página dedicada de Subscribe & Save y un quiz que lleva a cada cliente a una recomendación personalizada. La automation en Klaviyo cubre welcome, resultado del quiz, abandoned cart y reposición, con copy y creatividades iteradas con AI para acelerar la producción de campañas.",
        impact: [
          "Lanzamiento completo en EE.UU. de punta a punta",
          "48% de open rate promedio en email",
          "22% del revenue total atribuido a email",
          "30x de ROI en campañas de retención",
        ],
      },
      "b-way": {
        client: "B-WAY",
        role: "Brand Manager",
        problem:
          "Una marca de grooming escalando en EE.UU., Brasil y Argentina con branding fragmentado, tres tiendas desconectadas y tiempos de producción que frenaban cada campaña.",
        solution:
          "Unifiqué el sistema de marca en packaging, retail y digital, y construí las tiendas regionales sobre un mismo lenguaje de diseño. Dirigí un equipo de 6 personas en campañas 360° e implementé workflows de analytics y automation con AI para reporting, producción de assets e iteración de paid media.",
        impact: [
          "3 mercados internacionales operados (US, BR, AR)",
          "-30% en tiempos de producción",
          "Mejora del ROAS en los SKUs principales",
          "Eventos insignia de +300 asistentes",
        ],
      },
      "elevate-local": {
        client: "Elevate Local",
        role: "Branding Designer",
        problem:
          "Una agencia europea de marketing médico que vende B2B de forma remota, sin un sistema visual que transmitiera credibilidad clínica en propuestas, decks y puntos de contacto digitales.",
        solution:
          "Un sistema de identidad completo: familia de logos, paleta clínica, escala tipográfica y librería de assets, entregado con guías de uso y plantillas para que el equipo remoto produzca material on-brand sin depender de un diseñador.",
        impact: [
          "Sistema de identidad completo entregado",
          "Presencia B2B consistente en cada punto de contacto",
          "Plantillas self-serve para un equipo 100% remoto",
        ],
      },
    },
  },
};

export type Dict = (typeof dictionary)["en"];