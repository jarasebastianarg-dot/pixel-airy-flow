import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Return Sebastián Jara's public bio, role, location, and primary focus areas.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Sebastián Jara",
      title: "Brand & Design Strategy Lead",
      location: "Buenos Aires, Argentina (remote)",
      focus: [
        "Brand manuals, templates and campaigns",
        "Landing pages and email in HubSpot and Klaviyo",
        "Custom Shopify stores (Liquid, HTML, CSS)",
        "AI workflows with Claude and Gemini, and training teams to use them",
      ],
      bio: "Graphic designer from Buenos Aires. Brand & Design Strategy Lead at Xtendo Global, where I lead a team of 2 designers. I also build what I design: HubSpot landing pages and emails, and Shopify stores for clients in the US and Argentina.",
      education: [
        "B.A. Graphic Design, UADE (2019-2024)",
        "B.A. Multimedia & Interaction Design, UADE (2020-2024)",
        "Foundations of Digital Marketing & E-commerce, Google Professional Certificate (2025)",
        "CAE, Certificate in Advanced English (C1), Cambridge (2018)",
      ],
      languages: ["Spanish (native)", "English (C1)"],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});