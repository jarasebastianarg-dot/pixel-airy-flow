import { createFileRoute } from "@tanstack/react-router";
import { caseHead } from "@/lib/caseMeta";
import { PawRoyaltyProject } from "@/pages/projects/paw-royalty";

export const Route = createFileRoute("/es/projects/paw-royalty")({
  component: PawRoyaltyProject,
  head: () => caseHead("paw-royalty", "es"),
});
