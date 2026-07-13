import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ShoppingBag,
  Mail,
  Palette,
  Bot,
  Layers,
  Users,
  Sparkles,
  Boxes,
  Linkedin,
  Globe,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const capabilities = [
  {
    icon: ShoppingBag,
    title: "Native E-commerce",
    desc: "Shopify theme development and custom Liquid, built for scale.",
  },
  {
    icon: Mail,
    title: "Data-Driven Growth",
    desc: "Klaviyo automation and retention that keeps customers coming back.",
  },
  {
    icon: Palette,
    title: "Strategic Identity",
    desc: "Art direction that turns positioning into a cohesive visual language.",
  },
  {
    icon: Bot,
    title: "AI Automations",
    desc: "Workflow automation with n8n, Claude and Gemini to move faster.",
  },
];

const tools = [
  "Shopify",
  "Liquid",
  "Klaviyo",
  "Meta Ads",
  "Google Ads",
  "n8n",
  "Claude",
  "Adobe CC",
];

function Index() {
  const [lang, setLang] = useState<"EN" | "ES">("EN");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-accent text-accent-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            Studio<span className="text-gradient-accent">.</span>
          </a>
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-full border border-border bg-card p-1 text-xs font-semibold">
              {(["EN", "ES"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full px-3 py-1 transition-colors ${
                    lang === l
                      ? "bg-gradient-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href="#works"
              className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-opacity hover:opacity-90 sm:inline-block"
            >
              View Projects
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="py-20 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-gradient-accent" />
            Available for select projects
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            We build{" "}
            <span className="font-serif italic font-normal text-accent-1">brands</span> that stand
            out and{" "}
            <span className="font-serif italic font-normal text-accent-1">systems</span> that sell.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Bridging the gap between high-end visual design and technical e-commerce execution.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#works"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* Capabilities */}
        <section className="pb-8">
          <SectionLabel>Core Capabilities</SectionLabel>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {capabilities.map((c) => (
              <div key={c.title} className="bento-card flex flex-col p-8">
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-accent-1">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Works */}
        <section id="works" className="pt-16">
          <SectionLabel>Selected Works</SectionLabel>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <WorkCard
              className="md:col-span-2"
              tag="Shopify Expert"
              client="Folkways"
              headline="The Technical Scale"
              body="Led the migration of 2000+ products to Shopify 2.0, re-architecting the storefront for performance, maintainability and a dramatically smoother shopping UX."
              metric="2000+"
              metricLabel="products migrated"
              icon={Boxes}
            />
            <WorkCard
              tag="Lead Developer & Designer"
              client="Paw Royalty"
              headline="Full-Stack Creation"
              body="End-to-end creation of a US-market store — design, build and launch — with custom Klaviyo flows powering retention from day one."
              metric="US"
              metricLabel="market launch"
              icon={Layers}
            />
            <WorkCard
              tag="Brand Manager"
              client="B-WAY"
              headline="Leadership & Expansion"
              body="Managed a 6-person team through international expansion across the US &amp; Brazil, plus large-scale physical events for 300+ people."
              metric="6"
              metricLabel="person team led"
              icon={Users}
            />
            <WorkCard
              className="md:col-span-2"
              tag="Branding Designer"
              client="Elevate Local"
              headline="Brand Identity"
              body="Designed the full logo and visual identity system for a European medical marketing agency, balancing clinical trust with modern energy."
              metric="EU"
              metricLabel="brand identity"
              icon={Palette}
            />
          </div>
        </section>

        {/* Methodology & Tech */}
        <section className="pt-16">
          <SectionLabel>Methodology &amp; Stack</SectionLabel>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bento-card flex flex-col justify-between overflow-hidden bg-foreground p-10 text-background md:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-background/60">
                The Approach
              </span>
              <p className="mt-6 text-2xl font-bold leading-snug tracking-tight md:text-3xl">
                No static wireframes. Direct design and execution over Shopify Liquid and code —
                for <span className="text-gradient-accent">rapid iteration</span> and functional realism.
              </p>
            </div>
            <div className="bento-card p-8">
              <h3 className="text-lg font-bold tracking-tight">Tools</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Architect */}
        <section id="contact" className="py-16">
          <div className="bento-card p-10 md:p-14">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr] md:items-end">
              <div>
                <SectionLabel>The Architect</SectionLabel>
                <p className="max-w-xl text-2xl font-bold leading-snug tracking-tight md:text-3xl">
                  26-year-old designer based in Buenos Aires, holding dual degrees in Graphic Design
                  and Multimedia &amp; Interaction Design from UADE.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@example.com"
                  className="group inline-flex items-center justify-between gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
                >
                  Contact me
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <div className="flex gap-3">
                  <SocialLink icon={Linkedin} label="LinkedIn" />
                  <SocialLink icon={Globe} label="Behance" />
                </div>
              </div>
            </div>
          </div>
          <p className="pb-10 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Crafted in Buenos Aires.
          </p>
        </section>
      </main>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      {children}
    </h2>
  );
}

function WorkCard({
  className = "",
  tag,
  client,
  headline,
  body,
  metric,
  metricLabel,
  icon: Icon,
}: {
  className?: string;
  tag: string;
  client: string;
  headline: string;
  body: string;
  metric: string;
  metricLabel: string;
  icon: typeof Boxes;
}) {
  return (
    <div className={`bento-card group flex flex-col p-8 md:p-10 ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold">
          <Icon className="h-3.5 w-3.5 text-accent-1" />
          {tag}
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-1" />
      </div>
      <div className="mt-8 flex flex-1 flex-col">
        <p className="text-sm font-semibold text-muted-foreground">{client}</p>
        <h3 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">{headline}</h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{body}</p>
      </div>
      <div className="mt-8 flex items-baseline gap-3 border-t border-border pt-6">
        <span className="text-4xl font-bold tracking-tight text-gradient-accent">{metric}</span>
        <span className="text-sm text-muted-foreground">{metricLabel}</span>
      </div>
    </div>
  );
}

function SocialLink({ icon: Icon, label }: { icon: typeof Linkedin; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}
