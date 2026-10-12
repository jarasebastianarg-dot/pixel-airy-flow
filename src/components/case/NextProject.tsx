import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseNumber, nextCase, type CaseStudy } from "@/lib/caseStudies";
import { useTr } from "@/i18n/projectTranslate";

/** Short one-line pitch per project, shown in the "Next project" card. Keys are English; tr() swaps to Spanish. */
const pitch: Record<CaseStudy["slug"], string> = {
  "xtendo-global": "Brand manual, sub-brand, HubSpot landings and AI for a company of 1,500+ people",
  "paw-royalty": "A pet supplement brand launched from zero in the US",
  folkways: "A wine store with 2,000+ products moved to Shopify 2.0",
  "b-way": "Two years at B-WAY, from packaging designer to brand manager",
  "elevate-local": "Visual identity for a medical marketing agency in Europe",
};

/**
 * Footer shared by every case study: contact prompt, back link and a large card
 * that leads to the next project, so visitors can keep browsing without going home.
 */
export function NextProject({ current }: { current: CaseStudy["slug"] }) {
  const { tr } = useTr();
  const next = nextCase(current);
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-accent-1" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent-1">{tr("Next project")}</span>
            </div>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {tr("Want to work together or have a question about this project?")}{" "}
              <a href="/#contact" className="font-semibold text-foreground underline decoration-accent-1/50 underline-offset-4 hover:decoration-accent-1">
                {tr("Get in touch")}
              </a>
              .
            </p>
          </div>
          <Link
            to="/"
            hash="works"
            className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-[var(--shadow-card)] transition-colors hover:bg-secondary md:self-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            {tr("All projects")}
          </Link>
        </div>

        <Link
          to={next.href}
          className="group mt-10 grid overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)] md:grid-cols-12"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-secondary md:col-span-7 md:aspect-auto md:min-h-[18rem]">
            <img
              src={next.cover}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-between gap-6 p-6 md:col-span-5 md:p-10">
            <div>
              <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {tr("Case study")} {caseNumber(next.slug)} · {next.year}
              </p>
              <p className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{next.client}</p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{tr(pitch[next.slug])}</p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-1">
              {tr("View case study")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

/** "Case study / 03" label for the sticky top bar of each case page */
export function useCaseLabel(slug: CaseStudy["slug"]): string {
  const { tr } = useTr();
  return `${tr("Case study")} / ${caseNumber(slug)}`;
}
