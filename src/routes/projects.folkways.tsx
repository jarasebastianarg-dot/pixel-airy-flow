import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ShoppingBag,
  Boxes,
  Zap,
  Sparkles,
  Layers,
  Gauge,
  TrendingUp,
  Repeat,
  ShoppingCart,
  Mail,
  MousePointerClick,
} from "lucide-react";

export const Route = createFileRoute("/projects/folkways")({
  component: FolkwaysProject,
  head: () => ({
    meta: [
      { title: "Folkways — 2,000+ SKU Shopify Migration & Retention Ecosystem" },
      {
        name: "description",
        content:
          "Case study: architecting a 2,000+ SKU migration to Shopify 2.0 with a native cart, app consolidation, Klaviyo retention and conversion-driven Liquid.",
      },
      { property: "og:title", content: "Folkways — Shopify 2.0 Migration Case Study" },
      {
        property: "og:description",
        content:
          "How I migrated 2,000+ SKUs, cut app bloat, and rebuilt a native retention ecosystem in Shopify Liquid.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects/folkways" },
    ],
    links: [{ rel: "canonical", href: "/projects/folkways" }],
  }),
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function Reveal({
  children,
  className,
  stagger = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-px w-8 bg-accent-1" />
      <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent-1">
        {children}
      </span>
    </div>
  );
}

const stack = [
  "Shopify",
  "Shopify Liquid",
  "HTML / CSS",
  "Klaviyo",
  "Email Automations",
];

const focus = ["Shopify 2.0 Migration", "App Consolidation", "CRO"];

const executionCards = [
  {
    icon: ShoppingCart,
    kicker: "AOV",
    title: "Native Cart & AOV Optimization",
    body: "Replaced rigid, app-injected blocks with a 100% custom native architecture. Engineered cross-sell layouts (“You May Also Like”) and dynamic messaging for volume discounts and shipping tiers directly in Shopify Liquid to strategically increase Average Order Value and overall cart conversion.",
  },
  {
    icon: Layers,
    kicker: "Ops",
    title: "App Consolidation & Cost Reduction",
    body: "Simplified the client's operational workflow by auditing and stripping away single-use third-party apps. Consolidating utilities into fewer high-impact tools drastically reduced monthly software expenses and backend configuration time, empowering the team to focus on growth rather than maintenance.",
  },
  {
    icon: Mail,
    kicker: "Retention",
    title: "CRM Integration & Customer Loyalty",
    body: "Maximized the ROI of their existing tech stack by unlocking Klaviyo's full potential. Transitioned fragmented lead capture tools into a cohesive CRM ecosystem, using conditional Liquid logic to deploy targeted “Subscribe & Save” widgets that drive long-term retention and recurring revenue.",
  },
  {
    icon: MousePointerClick,
    kicker: "CRO",
    title: "Conversion-Driven Frontend Architecture",
    body: "Engineered real-time scarcity triggers (“Only 9 left”) directly synced with the backend to drive urgency and accelerate purchasing decisions. Deployed pure CSS sticky media logic to keep the “Add to Cart” action always within the viewport — eliminating scroll fatigue and removing friction from the buying journey.",
  },
];

const metrics = [
  { icon: Boxes, value: "2,000+", label: "SKUs Migrated & Automated" },
  { icon: Gauge, value: "-40%", label: "Reduction in Page Load Time" },
  { icon: TrendingUp, value: "+28%", label: "Increase in Cart Conversion Rate" },
  { icon: Repeat, value: "+45%", label: "Boost in Recurring Revenue" },
];

function FolkwaysProject() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-accent-1"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to portfolio
          </Link>
          <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Case Study / 01
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_-10%,oklch(0.72_0.18_45_/_0.18),transparent_55%),radial-gradient(circle_at_90%_10%,oklch(0.7_0.19_25_/_0.15),transparent_60%)]"
        />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
          <Reveal stagger={0.12}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Shopify Expert · E-commerce</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-5xl text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-[4.5rem]"
            >
              Folkways: Architecting a{" "}
              <span className="text-gradient-accent">2,000+ SKU</span>{" "}
              Website Migration &{" "}
              <span className="font-serif italic font-normal text-accent-1">
                Native Retention
              </span>{" "}
              Ecosystem.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              A full Shopify 2.0 rebuild — from catalog migration to a bespoke
              retention loop — engineered directly in Liquid, without a single
              bloated app.
            </motion.p>
          </Reveal>

          {/* TL;DR bar */}
          <Reveal className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3" stagger={0.08}>
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Role
              </div>
              <div className="mt-3 text-base font-semibold text-foreground md:text-lg">
                Lead E-commerce Developer & Designer
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Tech Stack
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Focus
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {focus.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-accent px-3 py-1 text-xs font-semibold text-accent-foreground"
                  >
                    <Sparkles className="h-3 w-3" />
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* The Friction */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:grid md:grid-cols-12 md:gap-12 md:px-10 md:py-28">
          <Reveal className="md:col-span-4" stagger={0.08}>
            <motion.div variants={fadeUp}>
              <SectionLabel>01 — Context</SectionLabel>
              <h2 className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                The{" "}
                <span className="font-serif italic font-normal text-accent-1">
                  Friction
                </span>
              </h2>
            </motion.div>
          </Reveal>
          <Reveal className="mt-8 md:col-span-8 md:mt-0" stagger={0.08}>
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-foreground/85 md:text-xl"
            >
              Moving a massive, complex catalog to Shopify 2.0 required more
              than a simple theme update. The brand was suffering from severe{" "}
              <span className="font-semibold text-foreground">
                “app bloat,”
              </span>{" "}
              which caused critical page load delays, broke visual cohesion,
              and created a chaotic backend workflow.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              The team was forced to manage multiple single-use third-party
              applications, draining resources and complicating day-to-day
              operations.
            </motion.p>
          </Reveal>
        </div>
      </section>

      {/* The Execution */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end" stagger={0.1}>
            <motion.div variants={fadeUp} className="md:col-span-7">
              <SectionLabel>02 — Build</SectionLabel>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                The{" "}
                <span className="font-serif italic font-normal text-accent-1">
                  Execution
                </span>
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-muted-foreground md:col-span-5 md:text-lg"
            >
              Designing and architecting directly within Shopify Liquid and
              native CSS to achieve a pixel-perfect match with the brand's
              identity — without compromising functionality for the user or
              the backend workflow.
            </motion.p>
          </Reveal>

          <Reveal className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2" stagger={0.08}>
            {executionCards.map((c, i) => (
              <motion.article
                key={c.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative isolate flex h-full flex-col overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)] md:p-10"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.18_45_/_0.22),transparent_65%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <header className="flex items-start justify-between gap-6">
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-accent-1 ring-1 ring-inset ring-border transition-colors duration-500 group-hover:bg-gradient-accent group-hover:text-accent-foreground group-hover:ring-transparent">
                    <c.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <div className="text-right">
                    <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent-1">
                      {c.kicker}
                    </div>
                  </div>
                </header>
                <h3 className="mt-8 text-2xl font-bold leading-tight tracking-tight md:text-[1.6rem]">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                  {c.body}
                </p>
              </motion.article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* The Impact */}
      <section className="relative overflow-hidden border-t border-border/60 bg-foreground text-background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(0.72_0.18_45_/_0.25),transparent_55%),radial-gradient(circle_at_10%_90%,oklch(0.7_0.19_25_/_0.2),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <Reveal stagger={0.08}>
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-accent-1" />
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent-1">
                  03 — Outcome
                </span>
              </div>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
            >
              The{" "}
              <span className="font-serif italic font-normal text-accent-1">
                Impact
              </span>
              .
            </motion.h2>
          </Reveal>

          <Reveal className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative overflow-hidden rounded-[calc(var(--radius)+16px)] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors duration-500 hover:border-accent-1/40"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.18_45_/_0.28),transparent_65%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <m.icon className="h-6 w-6 text-accent-1" strokeWidth={1.6} />
                <div className="mt-8 font-display text-4xl font-bold tracking-tight md:text-5xl">
                  {m.value}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-background/70">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between md:px-10 md:py-24">
          <div>
            <SectionLabel>Next</SectionLabel>
            <h3 className="mt-4 max-w-xl text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl">
              Have a catalog that's outgrown its stack?
            </h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
              I architect Shopify environments that scale — without the app bloat.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-[var(--shadow-card)] transition-colors hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
