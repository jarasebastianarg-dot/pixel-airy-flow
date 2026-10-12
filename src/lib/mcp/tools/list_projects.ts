import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const projects = [
  {
    slug: "xtendo-global",
    client: "Xtendo Global",
    role: "Brand & Design Strategy Lead",
    headline: "Brand manual, sub-brand and HubSpot funnels for 1,500+ people",
    summary:
      "Supervised the rebrand (logo by an external studio) and built the system around it: a 45-page brand manual, 15+ templates, campaigns and motion across 9 countries.",
    stack: ["Brand Guidelines", "Templates", "Campaigns", "Motion", "Claude", "HubSpot"],
    url: "/projects/xtendo-global",
  },
  {
    slug: "folkways",
    client: "Folkways",
    role: "Lead Designer & AI-Assisted Developer",
    headline: "A wine store with 2,000+ products, moved to Shopify 2.0",
    summary:
      "I migrated the catalog, replaced apps with native Liquid sections and rebuilt the Klaviyo emails.",
    stack: ["Shopify", "Shopify Liquid", "HTML/CSS", "Klaviyo", "Email Automations"],
    impact: ["2,000+ SKUs migrated to Shopify 2.0", "Native Liquid storefront", "Klaviyo retention flows rebuilt"],
    url: "/projects/folkways",
  },
  {
    slug: "paw-royalty",
    client: "Paw Royalty",
    role: "Lead Developer & Designer",
    headline: "A pet supplement brand, launched from zero",
    summary:
      "End-to-end creation for a US market launch: brand identity, UI/UX, storefront and Klaviyo integration.",
    stack: ["Shopify", "Brand Identity", "UI/UX", "Klaviyo"],
  },
  {
    slug: "b-way",
    client: "B-WAY",
    role: "Brand Manager",
    headline: "Two years at B-WAY, in three countries",
    summary:
      "Led a 5-person team scaling operations across three markets, driving digital campaigns and 300+ attendee physical events.",
    stack: ["Brand Strategy", "Paid Media", "E-commerce", "Events"],
  },
  {
    slug: "elevate-local",
    client: "Elevate Local",
    role: "Branding Designer",
    headline: "A visual identity for an agency that markets medical clinics",
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