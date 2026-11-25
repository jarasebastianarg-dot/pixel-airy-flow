import { createFileRoute } from "@tanstack/react-router";
import { caseHead } from "@/lib/caseMeta";
import { XtendoProject } from "@/pages/projects/xtendo-global";

export const Route = createFileRoute("/es/projects/xtendo-global")({
  component: XtendoProject,
  head: () => caseHead("xtendo-global", "es"),
});
