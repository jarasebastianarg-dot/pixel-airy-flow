import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "./list_projects";

export default defineTool({
  name: "get_project",
  title: "Get project details",
  description: "Get details for a single portfolio project by its slug (see list_projects).",
  inputSchema: {
    slug: z
      .string()
      .min(1)
      .describe("Project slug, e.g. 'folkways'. Use list_projects to discover slugs."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const project = projects.find((p) => p.slug === slug.toLowerCase().trim());
    if (!project) {
      return {
        content: [{ type: "text", text: `No project found with slug "${slug}".` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(project, null, 2) }],
      structuredContent: { project },
    };
  },
});