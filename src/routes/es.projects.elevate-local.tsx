import { createFileRoute } from "@tanstack/react-router";
import { caseHead } from "@/lib/caseMeta";
import { ElevateLocalProject } from "@/pages/projects/elevate-local";

export const Route = createFileRoute("/es/projects/elevate-local")({
  component: ElevateLocalProject,
  head: () => caseHead("elevate-local", "es"),
});
