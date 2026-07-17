import { defineTool } from "@lovable.dev/mcp-js";

const capabilities = [
  {
    area: "Commerce",
    title: "Shopify & Custom E-commerce",
    description:
      "Scalable storefronts using custom Liquid, HTML and CSS. Performance-driven, no bloated themes.",
    tags: ["Shopify 2.0", "Liquid", "Headless"],
  },
  {
    area: "Retention",
    title: "Retention & Email Marketing",
    description:
      "Automated Klaviyo CRM flows and campaigns that turn one-time buyers into repeat customers and maximize LTV.",
    tags: ["Klaviyo", "Lifecycle", "LTV"],
  },
  {
    area: "Identity",
    title: "Brand Identity & UI/UX",
    description:
      "Cohesive visual systems from packaging to digital interfaces, grounded in academic design principles.",
    tags: ["Systems", "UI/UX", "Packaging"],
  },
  {
    area: "Automation",
    title: "AI & Workflow Automation",
    description:
      "Connecting Make, Claude and Gemini to streamline operations and scale businesses efficiently.",
    tags: ["Make", "Claude", "Gemini"],
  },
];

export default defineTool({
  name: "list_capabilities",
  title: "List capabilities",
  description: "List the core services and disciplines Sebastián offers.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(capabilities, null, 2) }],
    structuredContent: { capabilities },
  }),
});