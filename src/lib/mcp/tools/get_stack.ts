import { defineTool } from "@lovable.dev/mcp-js";

const stack = [
  {
    group: "Design & UX",
    tools: ["Photoshop", "Illustrator", "InDesign", "After Effects", "Figma", "Canva", "Claude Design"],
  },
  {
    group: "Build & Code",
    tools: ["Shopify", "Shopify Liquid", "HTML/CSS", "Webflow"],
  },
  {
    group: "Scale & Automate",
    tools: ["Klaviyo", "HubSpot", "Email Automation", "Meta Ads", "Make"],
  },
  {
    group: "AI Models",
    tools: ["Claude", "Claude Co-Work", "Gemini"],
  },
];

export default defineTool({
  name: "get_stack",
  title: "Get tech stack",
  description: "Return the tools and technologies Sebastián works with, grouped by discipline.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(stack, null, 2) }],
    structuredContent: { stack },
  }),
});