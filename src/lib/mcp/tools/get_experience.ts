import { defineTool } from "@lovable.dev/mcp-js";

const experience = [
  {
    role: "Brand & Design Strategy Lead",
    company: "Xtendo Global, remote",
    period: "Aug 2026 – Present",
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
    period: "Oct 2025 – Present",
    highlights: [
      "Brand identity, UI/UX and Shopify stores for clients in the US and Argentina.",
      "Landing pages for paid social campaigns, built with AI-assisted development.",
    ],
  },
  {
    role: "Brand Manager",
    company: "B-WAY, Buenos Aires (hybrid)",
    period: "Aug 2024 – Dec 2025",
    highlights: [
      "Led a 5-person marketing team: campaigns, content, paid media and launches.",
      "Ran the Shopify stores and paid media for the US, Brazil and Argentina.",
      "Designed and organized the stands for Barber Week Buenos Aires and Brazil, and trained the brand educators.",
    ],
  },
  {
    role: "Product & Packaging Designer",
    company: "B-WAY, Buenos Aires",
    period: "Nov 2023 – Aug 2024",
    highlights: [
      "Designed the packaging for the full product line and coordinated production with the factory in China.",
      "Made the e-commerce visuals and social media assets. Promoted to Brand Manager after 9 months.",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Freelance, remote",
    period: "2022 – 2023",
    highlights: ["Brand identities, social media content and web design for clients in different industries."],
  },
];

export default defineTool({
  name: "get_experience",
  title: "Get experience",
  description: "Return Sebastián's professional experience timeline with role, company and highlights.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(experience, null, 2) }],
    structuredContent: { experience },
  }),
});