import { createFileRoute } from "@tanstack/react-router";
import { caseHead } from "@/lib/caseMeta";
import { BWayProject } from "@/pages/projects/b-way";

export const Route = createFileRoute("/projects/b-way")({
  component: BWayProject,
  head: () => caseHead("b-way", "en"),
});
