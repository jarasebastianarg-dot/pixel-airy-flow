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
      badge: "Brand & Design Strategy Lead @ Xtendo Global",
      headline: {
        pre: "I lead ",
        em1: "brands",
        mid: " and build the ",
        em2: "AI systems",
        post: " that make marketing teams 5× faster.",
      },
      subtitle:
        "Brand & Design Strategy Lead at Xtendo Global. I turn brand strategy into systems teams actually use — guidelines, templates, campaigns, landing pages, Shopify stores and motion — designed by me and built faster with AI.",
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
        "No hand-off between strategy, design and build — I lead the brand, design the system and automate the production, so nothing gets lost between what's designed and what actually ships.",
      items: [
        {
          kicker: "Leadership",
          title: "Brand & Design Leadership",
          desc: "Rebrands, brand guidelines and template systems that a whole company can use — plus leading and training the designers who keep it consistent.",
          tags: ["Rebranding", "Guidelines", "Team lead"],
        },
        {
          kicker: "Growth",
          title: "Growth & Lifecycle",
          desc: "Landing pages, webinar campaigns and email flows in HubSpot and Klaviyo — built to turn traffic into registrations, leads and repeat customers.",
          tags: ["HubSpot", "Klaviyo", "Landing pages"],
        },
        {
          kicker: "Commerce",
          title: "Shopify & Custom E-commerce",
          desc: "I build custom Shopify storefronts — Liquid, HTML and CSS, with AI doing the heavy lifting on implementation. No off-the-shelf themes: every store is built for how it actually needs to convert.",
          tags: ["Shopify 2.0", "Liquid", "Headless"],
        },
        {
          kicker: "AI Systems",
          title: "AI Design Systems & Automation",
          desc: "AI-powered design systems and workflows in Claude, Make and n8n that let small teams ship in days, not weeks — and the training so the team can run them.",
          tags: ["Claude", "Make", "n8n"],
        },
      ],
    },
    works: {
      "xtendo-global": {
        tag: "Brand & Design Strategy Lead",
        headline: "Building the Brand System for a 1,500-Person Rebrand",
        body: "Supervised the rebrand and built everything around the new logo: a 45-page brand manual, 15+ templates, campaigns and motion across 9 countries.",
      },
      folkways: {
        tag: "Shopify Designer & Developer",
        headline: "Rebuilding a 2,000+ SKU Store",
        body: "Migrated 2,000+ products to Shopify 2.0 and replaced app bloat with native Liquid sections.",
      },
      "paw-royalty": {
        tag: "Lead Designer & AI-Assisted Developer",
        headline: "Launching a Brand From Zero",
        body: "End-to-end creation for a US market entry: brand identity, UI/UX and Klaviyo integration.",
      },
      "b-way": {
        tag: "Brand Manager",
        headline: "From Designer to Brand Manager",
        body: "Led a 5-person team across the US, Brazil and Argentina — from packaging to 300+ attendee events.",
      },
      "elevate-local": {
        tag: "Branding Designer",
        headline: "A Brand Clinics Trust",
        body: "Complete visual identity and logo-reveal motion for a European medical marketing agency.",
      },
    },
    methodology: {
      heading: { pre: "One system, ", em: "four", post: " engines." },
      intro:
        "Design, code, growth and AI orchestrated as a single stack — four connected engines, one continuous pipeline from concept to conversion.",
      clusters: {
        design: {
          kicker: "Craft",
          group: "Design & UX",
          blurb: "Brand systems, editorial layouts and interface craft.",
          more: "I design end-to-end — logo systems, packaging, UI kits and editorial layouts — the design fundamentals every other engine in this stack builds on top of.",
        },
        build: {
          kicker: "Ship",
          group: "Build & Code",
          blurb: "Storefronts and marketing sites shipped end-to-end.",
          more: "From Shopify 2.0 storefronts to B2B landing pages, I build every page myself in code — no hand-off to a developer, no off-the-shelf theme, using AI-assisted development to move faster without cutting corners.",
        },
        scale: {
          kicker: "Growth",
          group: "Scale & Automate",
          blurb: "Retention, paid media and lifecycle automation.",
          more: "End-to-end growth workflows: landing pages built to capture, Klaviyo and HubSpot email flows, and automated follow-up sequences that turn traffic into pipeline — for e-commerce brands and B2B companies alike.",
        },
        ai: {
          kicker: "Intelligence",
          group: "AI Models",
          blurb: "AI used across design, code and growth.",
          more: "Claude, Claude Co-Work and Gemini orchestrated into the actual build process — generating UI variations, writing production Liquid, and automating campaign reporting so less time goes into busywork.",
        },
      },
      readMore: "Read more",
      showLess: "Show less",
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
        role: "Brand & Design Strategy Lead",
        company: "Xtendo Global — Remote",
        period: "Aug 2026 — Present",
        highlights: [
          "Supervised the company-wide rebrand, partnering with the CEO on logo decisions and messaging for a B2B BPO & CX company (1,500+ people, 9 countries).",
          "Created the 45-page brand manual and a library of 15+ templates so every team produces on-brand material.",
          "Built AI-powered design systems in Claude that cut landing page production from 4–5 days to 1.",
          "Run HubSpot webinar campaigns end-to-end (landing pages, invitation and follow-up emails) and lead and train a team of 2 designers.",
        ],
      },
      {
        role: "Brand & E-commerce Designer",
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
          "Led a 5-person interdisciplinary marketing team running 360° campaigns aligned to commercial KPIs.",
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
        period: "2025",
      },
      {
        title: "OPI 2.0 — Public Speaking",
        institution: "Franco Pisso - Program",
        period: "In progress",
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
          "2,000+ SKUs migrated to Shopify 2.0",
          "Native Liquid sections replacing third-party apps",
          "Klaviyo retention flows rebuilt",
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
          "Custom Liquid storefront with Subscribe & Save and quiz",
          "Klaviyo welcome, quiz and replenishment flows",
        ],
      },
      "b-way": {
        client: "B-WAY",
        role: "Brand Manager",
        problem:
          "A grooming brand scaling across the US, Brazil and Argentina with fragmented branding, three disconnected storefronts and production lead times that throttled every campaign.",
        solution:
          "Unified brand system across packaging, retail and digital, plus regional e-commerce storefronts built on a shared design language. Led a 5-person team on 360° campaigns and deployed AI-driven analytics and automation workflows for reporting, asset production and paid-media iteration.",
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
      badge: "Brand & Design Strategy Lead @ Xtendo Global",
      headline: {
        pre: "Lidero ",
        em1: "marcas",
        mid: " y construyo los ",
        em2: "sistemas con IA",
        post: " que hacen 5× más rápidos a los equipos de marketing.",
      },
      subtitle:
        "Brand & Design Strategy Lead en Xtendo Global. Convierto la estrategia de marca en sistemas que los equipos realmente usan — manuales, plantillas, campañas, landing pages, tiendas Shopify y motion — diseñados por mí y construidos más rápido con IA.",
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
        "Sin traspasos entre estrategia, diseño y ejecución — lidero la marca, diseño el sistema y automatizo la producción, así nada se pierde entre lo que se diseña y lo que sale a producción.",
      items: [
        {
          kicker: "Leadership",
          title: "Liderazgo de marca y diseño",
          desc: "Rebrandings, manuales de marca y sistemas de plantillas que toda una empresa puede usar — y el liderazgo y la capacitación de los diseñadores que lo mantienen consistente.",
          tags: ["Rebranding", "Manual de marca", "Team lead"],
        },
        {
          kicker: "Growth",
          title: "Growth y lifecycle",
          desc: "Landing pages, campañas de webinars y flujos de email en HubSpot y Klaviyo — pensados para convertir tráfico en inscriptos, leads y clientes que vuelven.",
          tags: ["HubSpot", "Klaviyo", "Landing pages"],
        },
        {
          kicker: "Commerce",
          title: "Shopify y e-commerce a medida",
          desc: "Construyo storefronts de Shopify a medida — Liquid, HTML y CSS, con AI haciendo el trabajo pesado de la implementación. Sin themes genéricos: cada tienda se construye según cómo necesita convertir.",
          tags: ["Shopify 2.0", "Liquid", "Headless"],
        },
        {
          kicker: "AI Systems",
          title: "Sistemas de diseño con IA",
          desc: "Sistemas de diseño y workflows con IA en Claude, Make y n8n para que equipos chicos entreguen en días y no en semanas — y la capacitación para que el equipo los use.",
          tags: ["Claude", "Make", "n8n"],
        },
      ],
    },
    works: {
      "xtendo-global": {
        tag: "Brand & Design Strategy Lead",
        headline: "El sistema de marca de un rebranding para 1.500 personas",
        body: "Supervisé el rebranding y construí todo alrededor del logo nuevo: manual de marca de 45 páginas, más de 15 plantillas, campañas y motion en 9 países.",
      },
      folkways: {
        tag: "Shopify Designer & Developer",
        headline: "Reconstruir una tienda de +2.000 SKU",
        body: "Migré más de 2.000 productos a Shopify 2.0 y reemplacé el exceso de apps por secciones nativas en Liquid.",
      },
      "paw-royalty": {
        tag: "Lead Designer & AI-Assisted Developer",
        headline: "Lanzar una marca desde cero",
        body: "Creación integral para entrar al mercado de EE.UU.: identidad, UI/UX e integración con Klaviyo.",
      },
      "b-way": {
        tag: "Brand Manager",
        headline: "De diseñador a Brand Manager",
        body: "Lideré un equipo de 5 personas en EE.UU., Brasil y Argentina — del packaging a eventos de +300 asistentes.",
      },
      "elevate-local": {
        tag: "Branding Designer",
        headline: "Una marca en la que confían las clínicas",
        body: "Identidad visual completa y motion de presentación del logo para una agencia europea de marketing médico.",
      },
    },
    methodology: {
      heading: { pre: "Un sistema, ", em: "cuatro", post: " motores." },
      intro:
        "Diseño, código, growth y AI orquestados como un único stack: cuatro motores conectados, un pipeline continuo del concepto a la conversión.",
      clusters: {
        design: {
          kicker: "Craft",
          group: "Design & UX",
          blurb: "Sistemas de marca, layouts editoriales y craft de interfaz.",
          more: "Diseño de punta a punta — sistemas de logo, packaging, UI kits y layouts editoriales — los fundamentos de diseño sobre los que se construye cada otro motor de este stack.",
        },
        build: {
          kicker: "Ship",
          group: "Build & Code",
          blurb: "Tiendas y sitios de marketing entregados de punta a punta.",
          more: "Desde storefronts en Shopify 2.0 hasta landing pages B2B, construyo cada página yo mismo en código — sin hand-off a un desarrollador, sin themes genéricos, usando desarrollo asistido por AI para moverme más rápido sin cortar caminos.",
        },
        scale: {
          kicker: "Growth",
          group: "Scale & Automate",
          blurb: "Retención, paid media y automation de lifecycle.",
          more: "Workflows de growth end-to-end: landing pages hechas para capturar, flujos de email en Klaviyo y HubSpot, y secuencias de follow-up automatizadas que convierten tráfico en pipeline — para marcas de e-commerce y empresas B2B por igual.",
        },
        ai: {
          kicker: "Intelligence",
          group: "AI Models",
          blurb: "AI usada en diseño, código y growth.",
          more: "Claude, Claude Co-Work y Gemini orquestados dentro del proceso real de construcción — generando variaciones de UI, escribiendo Liquid de producción y automatizando el reporting de campañas para que menos tiempo se vaya en trabajo repetitivo.",
        },
      },
      readMore: "Ver más",
      showLess: "Ver menos",
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
        role: "Brand & Design Strategy Lead",
        company: "Xtendo Global — Remoto",
        period: "Ago 2026 — Presente",
        highlights: [
          "Supervisé el rebranding de toda la empresa, trabajando con el CEO en las decisiones de logo y comunicación, para una compañía B2B de BPO y CX (1.500+ personas, 9 países).",
          "Creé el manual de marca de 45 páginas y una biblioteca de más de 15 plantillas para que cada equipo produzca material de marca.",
          "Armé sistemas de diseño con IA en Claude que redujeron la producción de una landing de 4–5 días a 1.",
          "Gestiono campañas de webinars en HubSpot de punta a punta (landings, emails de invitación y seguimiento) y lidero y capacito a un equipo de 2 diseñadores.",
        ],
      },
      {
        role: "Diseñador de Marca y E-commerce",
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
          "Lideré un equipo interdisciplinario de marketing de 5 personas con campañas 360° alineadas a KPIs comerciales.",
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
        period: "2025",
      },
      {
        title: "OPI 2.0 — Oratoria",
        institution: "Franco Pisso — Programa",
        period: "En curso",
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
          "2.000+ SKUs migrados a Shopify 2.0",
          "Secciones nativas en Liquid en lugar de apps de terceros",
          "Flows de retención en Klaviyo rearmados",
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
          "Tienda a medida en Liquid con Subscribe & Save y quiz",
          "Flows de Klaviyo de bienvenida, quiz y reposición",
        ],
      },
      "b-way": {
        client: "B-WAY",
        role: "Brand Manager",
        problem:
          "Una marca de grooming escalando en EE.UU., Brasil y Argentina con branding fragmentado, tres tiendas desconectadas y tiempos de producción que frenaban cada campaña.",
        solution:
          "Unifiqué el sistema de marca en packaging, retail y digital, y construí las tiendas regionales sobre un mismo lenguaje de diseño. Lideré un equipo de 5 personas en campañas 360° e implementé workflows de analytics y automation con AI para reporting, producción de assets e iteración de paid media.",
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