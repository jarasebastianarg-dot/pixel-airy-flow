/**
 * Native i18n dictionary for the home page. No external APIs.
 * Spanish keeps the industry terms people actually use in English
 * (landing page, email, Shopify, brand manager, etc.).
 */

export type Lang = "en" | "es";

export const dictionary = {
  en: {
    nav: {
      work: "Work",
      services: "What I do",
      about: "About",
      contact: "Contact",
      cta: "Get in touch",
      langLabel: "Language",
    },
    hero: {
      badge: "Brand & Design Strategy Lead at Xtendo Global",
      headline: {
        pre: "I lead ",
        em1: "brands",
        mid: " and build their ",
        em2: "landing pages, emails and stores",
        post: ".",
      },
      subtitle:
        "I write brand manuals and design campaigns, then build the HubSpot landing pages, emails and Shopify stores myself.",
      ctaPrimary: "See projects",
      ctaSecondary: "Download CV",
    },
    sections: {
      works: "Selected work",
      services: "What I do",
      about: "About me",
      experience: "Experience",
      credentials: "Education",
      contact: "Contact",
    },
    works: {
      viewCase: "View case study",
      items: {
        "xtendo-global": {
          tag: "Brand & Design Strategy Lead",
          headline: "Brand manual, sub-brand and HubSpot funnels for 1,500+ people",
          body: "After an outside studio designed the new logo, I built everything else: a 45-page manual, a new sub-brand, templates, landing pages, emails and a launch video made with Claude.",
          disciplines: ["Brand system", "HubSpot", "AI"],
        },
        "paw-royalty": {
          tag: "Designer & Shopify developer",
          headline: "A pet supplement brand, launched from zero",
          body: "Brand identity, the Shopify store coded in Liquid, a Subscribe & Save page, a quiz and the Klaviyo emails for a US launch.",
          disciplines: ["Branding", "Shopify", "Klaviyo"],
        },
        folkways: {
          tag: "Designer & Shopify developer",
          headline: "A wine store with 2,000+ products, moved to Shopify 2.0",
          body: "I migrated the catalog, replaced apps with native Liquid sections and rebuilt the Klaviyo emails.",
          disciplines: ["Shopify", "Liquid", "Klaviyo"],
        },
        "b-way": {
          tag: "Packaging designer → Brand Manager",
          headline: "Two years at B-WAY, in three countries",
          body: "I started designing packaging and ended up leading a team of 5: Shopify stores, campaigns and event stands in the US, Brazil and Argentina.",
          disciplines: ["Packaging", "Team lead", "Events"],
        },
        "elevate-local": {
          tag: "Brand identity designer",
          headline: "A visual identity for an agency that markets medical clinics",
          body: "Logo system, colors, typography and guidelines for a European agency, plus the logo-reveal animation. All done remotely.",
          disciplines: ["Identity", "Guidelines", "Motion"],
        },
      },
    },
    services: {
      heading: { pre: "Brand, web and ", em: "AI", post: ", done by the same person." },
      intro:
        "Most of my projects need all four. I can lead the brand, design the pieces and also build the pages and flows, so nothing gets lost between the design and what goes live.",
      items: [
        {
          title: "Brand & design leadership",
          desc: "Brand manuals, templates and campaigns a whole company can use. I also lead and train the designers who keep it consistent.",
          tools: ["Illustrator", "Photoshop", "InDesign", "Figma", "After Effects"],
        },
        {
          title: "Landing pages & email",
          desc: "Webinar and campaign landing pages, forms and email flows in HubSpot and Klaviyo, designed and built by me.",
          tools: ["HubSpot", "Klaviyo", "Meta Ads", "Make"],
        },
        {
          title: "Shopify stores",
          desc: "Custom Shopify stores coded in Liquid, HTML and CSS. No bought themes: each store is built around how its customers shop.",
          tools: ["Shopify", "Liquid", "HTML / CSS"],
        },
        {
          title: "AI workflows",
          desc: "I use Claude and Gemini to write, design and code faster: videos, landing pages, image prompts. Then I train the team to use them.",
          tools: ["Claude", "Claude Design", "Gemini"],
        },
      ],
    },
    about: {
      heading: { pre: "I studied graphic design. ", em: "Now I also build it." },
      bio: "I'm Sebastián, from Buenos Aires. I studied graphic design and multimedia design at UADE, and along the way I started building what I designed: Shopify stores, HubSpot landing pages, email flows. Today I lead brand and design at Xtendo Global, a B2B company with more than 1,500 people in 9 countries, with a team of two designers. I also take freelance brand and e-commerce projects.",
      portraitAlt: "Portrait of Sebastián Jara",
    },
    contact: {
      heading: { pre: "Let's ", em: "talk", post: "." },
      body: "I'm open to remote roles in brand, design and marketing, and to freelance projects. The fastest way to reach me is email or LinkedIn.",
      downloadCv: "Download CV",
      cvNote: "PDF, English",
      email: "Email",
      copy: "Copy email",
      copied: "Copied",
      copyAria: "Copy email address",
      footer: "Sebastián Jara. Buenos Aires, Argentina.",
    },
    experience: [
      {
        role: "Brand & Design Strategy Lead",
        company: "Xtendo Global, remote",
        period: "Aug 2026 - Present",
        highlights: [
          "Took over the company-wide rebrand halfway through and worked with the CEO on the logo decisions and messaging. B2B BPO and CX company, 1,500+ people, 9 countries.",
          "Wrote and designed the 45-page brand manual and a library of 15+ templates.",
          "Design and build the webinar landing pages and emails in HubSpot. With AI, a landing page now takes 1 day instead of 4 or 5.",
          "Lead and train a team of 2 designers, including how to work with AI.",
        ],
      },
      {
        role: "Brand & E-commerce Designer",
        company: "Freelance, remote",
        period: "Oct 2025 - Present",
        highlights: [
          "Brand identity, UI/UX and Shopify stores for clients in the US and Argentina.",
          "Landing pages for paid social campaigns, built with AI-assisted development.",
        ],
      },
      {
        role: "Brand Manager",
        company: "B-WAY, Buenos Aires (hybrid)",
        period: "Aug 2024 - Dec 2025",
        highlights: [
          "Led a 5-person marketing team: campaigns, content, paid media and launches.",
          "Ran the Shopify stores and paid media for the US, Brazil and Argentina.",
          "Designed and organized the stands for Barber Week Buenos Aires and Brazil, and trained the brand educators.",
        ],
      },
      {
        role: "Product & Packaging Designer",
        company: "B-WAY, Buenos Aires",
        period: "Nov 2023 - Aug 2024",
        highlights: [
          "Designed the packaging for the full product line and coordinated production with the factory in China.",
          "Made the e-commerce visuals and social media assets. Promoted to Brand Manager after 9 months.",
        ],
      },
      {
        role: "Graphic Designer",
        company: "Freelance, remote",
        period: "2022 - 2023",
        highlights: ["Brand identities, social media content and web design for clients in different industries."],
      },
    ],
    credentials: [
      {
        title: "Bachelor's Degree in Graphic Design",
        institution: "UADE (Universidad Argentina de la Empresa)",
        period: "2019 - 2024",
      },
      {
        title: "Bachelor's Degree in Multimedia & Interaction Design",
        institution: "UADE (Universidad Argentina de la Empresa)",
        period: "2020 - 2024",
      },
      {
        title: "Foundations of Digital Marketing & E-commerce",
        institution: "Google, professional certificate",
        period: "2025",
      },
      {
        title: "OPI 2.0, public speaking",
        institution: "Franco Pisso",
        period: "In progress",
      },
      {
        title: "CAE, Certificate in Advanced English (C1)",
        institution: "Cambridge",
        period: "2018",
      },
    ],
  },

  es: {
    nav: {
      work: "Proyectos",
      services: "Qué hago",
      about: "Sobre mí",
      contact: "Contacto",
      cta: "Escribime",
      langLabel: "Idioma",
    },
    hero: {
      badge: "Brand & Design Strategy Lead en Xtendo Global",
      headline: {
        pre: "Lidero ",
        em1: "marcas",
        mid: " y construyo sus ",
        em2: "landing pages, emails y tiendas",
        post: ".",
      },
      subtitle:
        "Escribo manuales de marca y diseño campañas, y después armo yo mismo las landing pages en HubSpot, los emails y las tiendas en Shopify.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Descargar CV",
    },
    sections: {
      works: "Proyectos seleccionados",
      services: "Qué hago",
      about: "Sobre mí",
      experience: "Experiencia",
      credentials: "Formación",
      contact: "Contacto",
    },
    works: {
      viewCase: "Ver caso",
      items: {
        "xtendo-global": {
          tag: "Brand & Design Strategy Lead",
          headline: "Manual de marca, sub-marca y embudos en HubSpot para más de 1.500 personas",
          body: "Un estudio externo diseñó el logo nuevo y yo armé todo lo demás: un manual de 45 páginas, una sub-marca, plantillas, landing pages, emails y un video de lanzamiento hecho con Claude.",
          disciplines: ["Sistema de marca", "HubSpot", "IA"],
        },
        "paw-royalty": {
          tag: "Diseñador y desarrollador Shopify",
          headline: "Una marca de suplementos para mascotas, lanzada desde cero",
          body: "Identidad de marca, la tienda en Shopify programada en Liquid, una página de Subscribe & Save, un quiz y los emails en Klaviyo para su lanzamiento en Estados Unidos.",
          disciplines: ["Branding", "Shopify", "Klaviyo"],
        },
        folkways: {
          tag: "Diseñador y desarrollador Shopify",
          headline: "Una tienda de vinos con más de 2.000 productos, migrada a Shopify 2.0",
          body: "Migré el catálogo, reemplacé apps por secciones nativas en Liquid y rearmé los emails en Klaviyo.",
          disciplines: ["Shopify", "Liquid", "Klaviyo"],
        },
        "b-way": {
          tag: "Diseñador de packaging → Brand Manager",
          headline: "Dos años en B-WAY, en tres países",
          body: "Empecé diseñando packaging y terminé liderando un equipo de 5: tiendas en Shopify, campañas y stands en eventos de Estados Unidos, Brasil y Argentina.",
          disciplines: ["Packaging", "Liderazgo", "Eventos"],
        },
        "elevate-local": {
          tag: "Diseñador de identidad",
          headline: "Una identidad visual para una agencia que hace marketing para clínicas médicas",
          body: "Sistema de logo, colores, tipografía y manual para una agencia europea, más la animación del logo. Todo a distancia.",
          disciplines: ["Identidad", "Manual", "Motion"],
        },
      },
    },
    services: {
      heading: { pre: "Marca, web e ", em: "IA", post: ", a cargo de la misma persona." },
      intro:
        "La mayoría de mis proyectos necesitan las cuatro cosas. Puedo liderar la marca, diseñar las piezas y también construir las páginas y los flujos, así no se pierde nada entre el diseño y lo que sale publicado.",
      items: [
        {
          title: "Liderazgo de marca y diseño",
          desc: "Manuales de marca, plantillas y campañas que puede usar toda una empresa. También lidero y capacito a los diseñadores que lo mantienen consistente.",
          tools: ["Illustrator", "Photoshop", "InDesign", "Figma", "After Effects"],
        },
        {
          title: "Landing pages y email",
          desc: "Landing pages de webinars y campañas, formularios y flujos de email en HubSpot y Klaviyo, diseñados y armados por mí.",
          tools: ["HubSpot", "Klaviyo", "Meta Ads", "Make"],
        },
        {
          title: "Tiendas en Shopify",
          desc: "Tiendas en Shopify programadas a medida en Liquid, HTML y CSS. Sin temas comprados: cada tienda se arma según cómo compran sus clientes.",
          tools: ["Shopify", "Liquid", "HTML / CSS"],
        },
        {
          title: "Flujos con IA",
          desc: "Uso Claude y Gemini para escribir, diseñar y programar más rápido: videos, landing pages, prompts para imágenes. Después capacito al equipo para usarlos.",
          tools: ["Claude", "Claude Design", "Gemini"],
        },
      ],
    },
    about: {
      heading: { pre: "Estudié diseño gráfico. ", em: "Hoy también lo construyo." },
      bio: "Soy Sebastián, de Buenos Aires. Estudié diseño gráfico y diseño multimedial en UADE, y en el camino empecé a construir lo que diseñaba: tiendas en Shopify, landing pages en HubSpot, flujos de email. Hoy lidero marca y diseño en Xtendo Global, una empresa B2B con más de 1.500 personas en 9 países, con un equipo de dos diseñadores. También tomo proyectos freelance de marca y e-commerce.",
      portraitAlt: "Retrato de Sebastián Jara",
    },
    contact: {
      heading: { pre: "", em: "Hablemos", post: "." },
      body: "Estoy abierto a puestos remotos de marca, diseño y marketing, y a proyectos freelance. La forma más rápida de contactarme es por email o LinkedIn.",
      downloadCv: "Descargar CV",
      cvNote: "PDF, español",
      email: "Email",
      copy: "Copiar email",
      copied: "Copiado",
      copyAria: "Copiar dirección de email",
      footer: "Sebastián Jara. Buenos Aires, Argentina.",
    },
    experience: [
      {
        role: "Brand & Design Strategy Lead",
        company: "Xtendo Global, remoto",
        period: "Ago 2026 - Actualidad",
        highlights: [
          "Tomé el rebranding de la empresa a mitad de camino y trabajé con el CEO en las decisiones del logo y el mensaje. Empresa B2B de BPO y CX, más de 1.500 personas, 9 países.",
          "Escribí y diseñé el manual de marca de 45 páginas y una biblioteca de más de 15 plantillas.",
          "Diseño y armo en HubSpot las landing pages y los emails de los webinars. Con IA, una landing ahora lleva 1 día en lugar de 4 o 5.",
          "Lidero y capacito a un equipo de 2 diseñadores, también en cómo trabajar con IA.",
        ],
      },
      {
        role: "Brand & E-commerce Designer",
        company: "Freelance, remoto",
        period: "Oct 2025 - Actualidad",
        highlights: [
          "Identidad de marca, UI/UX y tiendas en Shopify para clientes de Estados Unidos y Argentina.",
          "Landing pages para campañas pagas en redes, armadas con desarrollo asistido por IA.",
        ],
      },
      {
        role: "Brand Manager",
        company: "B-WAY, Buenos Aires (híbrido)",
        period: "Ago 2024 - Dic 2025",
        highlights: [
          "Lideré un equipo de marketing de 5 personas: campañas, contenido, pauta y lanzamientos.",
          "Manejé las tiendas en Shopify y la pauta para Estados Unidos, Brasil y Argentina.",
          "Diseñé y organicé los stands de Barber Week Buenos Aires y Brasil, y capacité a los educadores de la marca.",
        ],
      },
      {
        role: "Diseñador de producto y packaging",
        company: "B-WAY, Buenos Aires",
        period: "Nov 2023 - Ago 2024",
        highlights: [
          "Diseñé el packaging de toda la línea de productos y coordiné la producción con la fábrica en China.",
          "Hice las piezas para el e-commerce y las redes. A los 9 meses me ascendieron a Brand Manager.",
        ],
      },
      {
        role: "Diseñador gráfico",
        company: "Freelance, remoto",
        period: "2022 - 2023",
        highlights: ["Identidades de marca, contenido para redes y diseño web para clientes de distintos rubros."],
      },
    ],
    credentials: [
      {
        title: "Licenciatura en Diseño Gráfico",
        institution: "UADE (Universidad Argentina de la Empresa)",
        period: "2019 - 2024",
      },
      {
        title: "Licenciatura en Diseño Multimedial y de Interacción",
        institution: "UADE (Universidad Argentina de la Empresa)",
        period: "2020 - 2024",
      },
      {
        title: "Fundamentos de Marketing Digital y E-commerce",
        institution: "Google, certificado profesional",
        period: "2025",
      },
      {
        title: "OPI 2.0, oratoria",
        institution: "Franco Pisso",
        period: "En curso",
      },
      {
        title: "CAE, Certificate in Advanced English (C1)",
        institution: "Cambridge",
        period: "2018",
      },
    ],
  },
};

export type Dict = (typeof dictionary)["en"];
