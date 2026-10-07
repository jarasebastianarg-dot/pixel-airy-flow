import { defineTool } from "@lovable.dev/mcp-js";

const experience = [
  {
    role: "Brand & Design Strategy Lead",
    company: "Xtendo Global — Remote",
    period: "Aug 2026 — Present",
    highlights: [
      "Supervised the company-wide rebrand with the CEO for a B2B BPO & CX company (1,500+ people, 9 countries).",
      "Created the 45-page brand manual and a library of 15+ templates.",
      "Built AI-powered design systems in Claude that cut landing page production from 4–5 days to 1.",
      "Run HubSpot webinar campaigns end-to-end and lead a team of 2 designers.",
    ],
  },
  {
    role: "Brand & E-commerce Designer",
    company: "Freelance — Remote",
    period: "Oct 2025 — Present",
    highlights: [
      "Lead brand identity and UI/UX for US + Argentina clients, shipping web and app platforms engineered around the buyer journey.",
      "Build scalable design systems and high-converting landing pages — using AI-assisted development to execute faster — that turn paid social traffic into measurable e-commerce revenue.",
    ],
  },
  {
    role: "Brand Manager",
    company: "B-WAY — Buenos Aires, AR (Hybrid)",
    period: "Aug 2024 — Dec 2025",
    highlights: [
      "Led a 5-person interdisciplinary marketing team running 360° campaigns aligned to commercial KPIs.",
      "Deployed AI-driven analytics workflows that cut production lead times by 30%.",
      "Owned e-commerce and paid media strategy across US, BR and AR, improving ROAS on core SKUs.",
      "Orchestrated flagship events (B-WAY Experience, Barber Week) driving qualified lead generation at scale.",
    ],
  },
  {
    role: "Product Designer",
    company: "B-WAY — Buenos Aires, AR",
    period: "Nov 2023 — Aug 2024",
    highlights: [
      "Produced e-commerce visuals and paid social assets that lifted CTR and engagement across the funnel.",
      "Optimized digital storefront UX to reduce friction and support product conversion.",
      "Designed international trade-show stands optimized for visitor flow and lead capture.",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Freelance — Remote",
    period: "2022 — 2023",
    highlights: [
      "Delivered end-to-end brand identities and UI/UX systems across multiple industries.",
      "Ran editorial and social content strategy focused on brand voice and audience retention.",
    ],
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