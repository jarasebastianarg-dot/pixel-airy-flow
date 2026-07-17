import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Return Sebastián Jaimes' public bio, role, location, and primary focus areas.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Sebastián Jaimes",
      title: "Creative Developer & Growth Partner",
      location: "Buenos Aires, Argentina",
      focus: [
        "Shopify & custom e-commerce development",
        "Retention & email marketing (Klaviyo)",
        "Brand identity and UI/UX",
        "AI & workflow automation",
      ],
      bio: "Creative developer and growth partner merging academic graphic design with technical e-commerce execution. Builds high-converting Shopify architectures, retention systems, and brand identities for US, BR and AR clients.",
      education: [
        "B.A. Graphic Design — UADE (2019–2024)",
        "B.A. Multimedia & Interaction Design — UADE (2020–2024)",
        "Digital Marketing & GenAI — IBM / Google Professional Certificate",
        "CAE — Certificate in Advanced English C1, Cambridge",
      ],
      languages: ["Spanish (native)", "English (C1)"],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});