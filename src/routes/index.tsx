import { createFileRoute } from "@tanstack/react-router";
import { HomePage, homeHead } from "@/pages/home";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => homeHead("en"),
});
