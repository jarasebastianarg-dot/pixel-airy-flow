import { createFileRoute } from "@tanstack/react-router";
import { caseHead } from "@/lib/caseMeta";
import { FolkwaysProject } from "@/pages/projects/folkways";

export const Route = createFileRoute("/projects/folkways")({
  component: FolkwaysProject,
  head: () => caseHead("folkways", "en"),
});
