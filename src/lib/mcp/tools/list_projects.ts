import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const projects = [
  {
    slug: "xtendo-global",
    client: "Xtendo Global",
    role: "Brand & Design Strategy Lead",
    headline: "Building the brand system behind a 1,500-person rebrand",
    summary:
      "Supervised the rebrand (logo by an external studio) and built the system around it: a 45-page brand manual, 15+ templates, campaigns and motion across 9 countries.",
    stack: ["Brand Guidelines", "Templates", "Campaigns", "Motion", "Claude", "HubSpot"],
    url: "/projects/xtendo-global",
  },
  {
    slug: "folkways",
    client: "Folkways",
    role: "Lead Designer & AI-Assisted Developer",
    headline: "Architecting a 2,000+ SKU Shopify migration & native retention ecosystem",
    summary:
      "Migrated 2,000+ products to Shopify 2.0, replaced app bloat with native Liquid sections and rebuilt the Klaviyo retention system.",
    stack: ["Shopify", "Shopify Liquid", "HTML/CSS", "Klaviyo", "Email Automations"],
    impact: ["2,000+ SKUs migrated to Shopify 2.0", "Native Liquid storefront", "Klaviyo retention flows rebuilt"],
    url: "/projects/folkways",
  },
  {
    slug: "paw-royalty",
    client: "Paw Royalty",
    role: "Lead Developer & Designer",
    headline: "Full-stack launch for a US market entry",
    summary:
      "End-to-end creation for a US market launch: brand identity, UI/UX, storefront and Klaviyo integration.",
    stack: ["Shopify", "Brand Identity", "UI/UX", "Klaviyo"],
  },
  {
    slug: "b-way",
    client: "B-WAY",
    role: "Brand Manager",
    headline: "Global expansion across US, BR and AR",
    summary:
      "Led a 5-person team scaling operations across three markets, driving digital campaigns and 300+ attendee physical events.",
    stack: ["Brand Strategy", "Paid Media", "E-commerce", "Events"],
  },
  {
    slug: "elevate-local",
    client: "Elevate Local",
    role: "Branding Designer",
    headline: "Clinical aesthetics for a European medical marketing agency",
    summary: "Complete visual identity for a European medical marketing agency.",
    stack: ["Brand Identity", "Visual System"],
  },
];

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description: "List Sebastián's selected portfolio projects with client, role and headline.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
    structuredContent: { projects },
  }),
});

export { projects };