import { createFileRoute, notFound } from "@tanstack/react-router";
import { LandingPage, findLanding, landingHead } from "@/pages/landing";

/** Short keyword landing pages (see src/lib/landings.ts) */
export const Route = createFileRoute("/es/$landing")({
  loader: ({ params }) => {
    if (!findLanding(params.landing, "es")) throw notFound();
  },
  head: ({ params }) => landingHead(params.landing, "es"),
  component: LandingPage,
});
