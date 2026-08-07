import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const projects = [
  {
    slug: "folkways",
    client: "Folkways",
    role: "Lead Designer & AI-Assisted Developer",
    headline: "Architecting a 2,000+ SKU Shopify migration & native retention ecosystem",
    summary:
      "Migrated 2,000+ products to Shopify 2.0 without losing performance; consolidated apps and built a native Klaviyo retention system.",
    stack: ["Shopify", "Shopify Liquid", "HTML/CSS", "Klaviyo", "Email Automations"],
    impact: [
      "2,000+ SKUs migrated & automated",
      "-40% page load time",
      "+28% cart conversion rate",
      "+45% recurring revenue",
    ],
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
      "Led a 6-person team scaling operations across three markets, driving digital campaigns and 300+ attendee physical events.",
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