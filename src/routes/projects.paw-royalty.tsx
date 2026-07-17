import { createFileRoute, Link } from "@tanstack/react-router";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Layers,
  Repeat,
  ShoppingCart,
  Mail,
  MousePointerClick,
  Palette,
  Percent,
  TrendingUp,
  Boxes,
  Smartphone,
  Monitor,
  CreditCard,
  Send,
  Plus,
} from "lucide-react";

export const Route = createFileRoute("/projects/paw-royalty")({
  component: PawRoyaltyProject,
  head: () => ({
    meta: [
      { title: "Paw Royalty — Full-Stack E-Commerce Launch & High-Converting UX" },
      {
        name: "description",
        content:
          "Case study: launching Paw Royalty from zero with a fully custom Shopify Liquid storefront, native Subscribe & Save engine, and full-funnel Klaviyo retention.",
      },
      { property: "og:title", content: "Paw Royalty — E-Commerce Launch Case Study" },
      {
        property: "og:description",
        content:
          "How I launched a new pet care brand with a 100% native Shopify Liquid build and a retention system engineered for day-one recurring revenue.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects/paw-royalty" },
    ],
    links: [{ rel: "canonical", href: "/projects/paw-royalty" }],
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

const focus = ["Brand Incubation", "UI/UX Design", "Retention Strategy"];

const executionCards = [
  {
    icon: Layers,
    kicker: "PDP",
    title: "High-Density Product Architectures",
    body: "Designed information-dense, highly visual product pages (PDPs) that educate the buyer and build immediate trust. By hardcoding these intricate layouts directly in Shopify Liquid, the pages remain lightning-fast despite the heavy content load, maximizing conversion rates.",
  },
  {
    icon: ShoppingCart,
    kicker: "LTV",
    title: "Native Subscribe & Save Engine",
    body: "Engineered a seamless 'Subscribe & Save' purchasing flow integrated directly into the native cart experience. This strategic implementation captures recurring revenue from day one, transforming initial traffic into high Customer Lifetime Value (LTV).",
  },
  {
    icon: Mail,
    kicker: "Retention",
    title: "Full-Funnel Email Marketing",
    body: "Orchestrated the brand’s entire retention ecosystem. Designed and deployed comprehensive Klaviyo campaigns and automated flows (Welcome Series, Abandoned Cart, Post-Purchase) to nurture leads, drive continuous engagement, and maximize campaign ROI.",
  },
  {
    icon: MousePointerClick,
    kicker: "UX",
    title: "Liquid-Driven Creative Freedom",
    body: "Leveraged custom Shopify Liquid and CSS to translate the brand’s fresh identity into a highly interactive, fluid user interface. Every component, hover state, and layout was crafted through code to ensure a flawless and memorable shopping journey across all devices.",
  },
];

const metrics = [
  { icon: Boxes, value: "100%", label: "Custom Native Architecture" },
  { icon: Percent, value: "+4.2%", label: "Day-One Conversion Rate" },
  { icon: Repeat, value: "35%", label: "Subscription Opt-In Rate" },
  { icon: TrendingUp, value: "30x", label: "ROI on Klaviyo Automations" },
];

function MediaPlaceholder({
  label,
  aspect,
  icon: Icon,
}: {
  label: string;
  aspect: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border bg-card shadow-[var(--shadow-card)]`}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.72_0.18_45_/_0.18),transparent_55%),radial-gradient(circle_at_85%_80%,oklch(0.7_0.19_25_/_0.14),transparent_60%)]"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0,transparent_49.5%,oklch(0.85_0.02_60_/_0.6)_49.5%,oklch(0.85_0.02_60_/_0.6)_50.5%,transparent_50.5%)]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-accent-1 ring-1 ring-inset ring-border">
          <Icon className="h-6 w-6" strokeWidth={1.6} />
        </span>
        <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
}

type ExecutionCardData = (typeof executionCards)[number];

function ExecutionCard({ card, index }: { card: ExecutionCardData; index: number }) {
  const Icon = card.icon;
  return (
    <motion.article
      variants={fadeUp}
      className="group relative isolate flex h-64 flex-col justify-between overflow-hidden rounded-[calc(var(--radius)+14px)] border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)]"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.18_45_/_0.22),transparent_65%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      />

      {/* Default state */}
      <div className="relative flex items-start justify-between gap-4 transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-0">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-accent-1 ring-1 ring-inset ring-border">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </span>
        <div className="text-right">
          <span className="font-mono text-[0.65rem] font-semibold tracking-widest text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-accent-1">
            {card.kicker}
          </div>
        </div>
      </div>
      <div className="relative transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-0">
        <h3 className="text-lg font-bold leading-tight tracking-tight md:text-xl">
          {card.title}
        </h3>
        <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <Plus className="h-3 w-3" />
          Hover to expand
        </div>
      </div>

      {/* Hover state */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 opacity-0 transition-all duration-500 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-accent text-accent-foreground">
            <Icon className="h-4 w-4" strokeWidth={1.7} />
          </span>
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-accent-1">
            {card.kicker}
          </span>
        </div>
        <div>
          <h3 className="text-base font-bold leading-tight tracking-tight">
            {card.title}
          </h3>
          <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-foreground">
            {card.body}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

const mockups = [
  { label: "Homepage", icon: Monitor, kicker: "Storefront" },
  { label: "Product Detail Page", icon: Layers, kicker: "PDP" },
  { label: "Subscribe & Save Cart", icon: CreditCard, kicker: "Checkout" },
  { label: "Mobile Experience", icon: Smartphone, kicker: "Responsive" },
  { label: "Klaviyo Flow", icon: Send, kicker: "Retention" },
];

function HorizontalMockups() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // Move from 0% to translate the track fully across (5 cards, show ~1.2 at a time)
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-78%"]);

  return (
    <div ref={containerRef} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <SectionLabel>02.5 — Gallery</SectionLabel>
              <h3 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                Storefront{" "}
                <span className="font-serif italic font-normal text-accent-1">
                  in motion
                </span>
              </h3>
            </div>
            <span className="hidden font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground md:inline">
              Scroll to explore →
            </span>
          </div>
        </div>

        <motion.div style={{ x }} className="mt-10 flex gap-6 pl-6 md:pl-10 will-change-transform">
          {mockups.map((m, i) => (
            <div
              key={m.label}
              className="relative w-[78vw] shrink-0 sm:w-[60vw] md:w-[46vw] lg:w-[40vw]"
            >
              <div className="absolute -top-3 left-4 z-10 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground shadow-[var(--shadow-card)]">
                <span className="text-accent-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {m.kicker}
              </div>
              <MediaPlaceholder
                label={m.label}
                aspect="aspect-[4/3]"
                icon={m.icon}
              />
            </div>
          ))}
          <div className="w-10 shrink-0" />
        </motion.div>
      </div>
    </div>
  );
}

function PawRoyaltyProject() {
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
            Case Study / 02
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
              <SectionLabel>Shopify Launch · E-commerce</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-5xl text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-[4.5rem]"
            >
              Paw Royalty: Full-Stack{" "}
              <span className="text-gradient-accent">E-Commerce Launch</span>{" "}
              &{" "}
              <span className="font-serif italic font-normal text-accent-1">
                High-Converting UX
              </span>
              .
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              A brand incubated from zero — storefront, UX and retention system
              engineered directly in Shopify Liquid, tuned for day-one recurring
              revenue.
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
              Launching a new brand in the highly competitive pet care market
              requires more than just an aesthetic template. The challenge was
              building a digital presence from{" "}
              <span className="font-semibold text-foreground">absolute zero</span>{" "}
              that could immediately convey trust, educate the customer through
              information-dense product pages, and convert cold traffic into
              recurring revenue without relying on a pre-existing customer base.
            </motion.p>
          </Reveal>
        </div>

        {/* Hero Mockup Placeholder */}
        <div className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
          <Reveal>
            <motion.div variants={fadeUp}>
              <MediaPlaceholder
                label="Storefront Mockup"
                aspect="aspect-[16/8]"
                icon={Palette}
              />
            </motion.div>
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
              Bypassing rigid themes and static mockups to architect the entire
              digital storefront directly in Shopify Liquid. This provided
              absolute creative freedom and a high-performance foundation built
              specifically for scaling.
            </motion.p>
          </Reveal>

          <Reveal
            className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.06}
          >
            {executionCards.map((c, i) => (
              <ExecutionCard key={c.title} card={c} index={i} />
            ))}
          </Reveal>
        </div>

        {/* Horizontal scroll mockups */}
        <HorizontalMockups />
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
              Launching something new?
            </h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
              I incubate brands end-to-end — from identity to a storefront built
              for recurring revenue.
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