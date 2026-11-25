import { createFileRoute, notFound } from "@tanstack/react-router";
import { getService } from "@/lib/services";
import { ServicePage, serviceHead } from "@/pages/service";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    if (!getService(params.slug)) throw notFound();
  },
  head: ({ params }) => serviceHead(params.slug, "en"),
  component: ServicePage,
});
