import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Package,
  Palette,
  Layers,
  Globe2,
  Plus,
  Users,
  Megaphone,
  Calendar,
  ShoppingBag,
  UserCheck,
  Radar,
  Play,
  Pause,
  Volume2,
  VolumeX,
  TrendingUp,
  GraduationCap,
  Rocket,
  MousePointerClick,
  ArrowDown,
} from "lucide-react";

// Packaging references from previous portfolio
import brandCover from "@/assets/bway/bway-brand.jpg.asset.json";
import b10kMockup from "@/assets/bway/bway-b10k-mockup.jpg.asset.json";
import b10kInside from "@/assets/bway/bway-b10k-inside.jpg.asset.json";
import b10kAccessories from "@/assets/bway/bway-b10k-accessories.jpg.asset.json";
import urbanDiecut from "@/assets/bway/bway-urban-diecut.jpg.asset.json";
import urbanBack from "@/assets/bway/bway-urban-back.jpg.asset.json";
import sonicBlack from "@/assets/bway/bway-sonic-black.jpg.asset.json";
import sonicInside from "@/assets/bway/bway-sonic-inside.jpg.asset.json";
import compactFront from "@/assets/bway/bway-compact-front.jpg.asset.json";
import compactBack from "@/assets/bway/bway-compact-back.jpg.asset.json";
import reel1 from "@/assets/bway/bway-event-reel-1.mp4.asset.json";
import reel2 from "@/assets/bway/bway-event-reel-2.mp4.asset.json";

export const Route = createFileRoute("/projects/b-way")({
  component: BWayProject,
  head: () => ({
    meta: [
      { title: "B-WAY — Scaling an Omnichannel Brand Across 3 International Markets" },
      {
        name: "description",
        content:
          "Case study: architecting global e-commerce, leading a 6-person team, and orchestrating experiential events for B-WAY across the US, Brazil and Argentina.",
      },
      { property: "og:title", content: "B-WAY — Omnichannel Growth Case Study" },
      {
        property: "og:description",
        content:
          "How I scaled B-WAY across 3 international markets — bridging Shopify, Meta Ads, ambassador management and large-scale physical events.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects/b-way" },
    ],
    links: [{ rel: "canonical", href: "/projects/b-way" }],
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
  "Packaging Design",
  "Product Design",
  "Social Media Design",
  "Shopify",
  "Meta Ads",
  "Email Marketing",
  "Event Design",
  "Team Leadership",
  "Brand Education",
];

const focus = ["Product Designer → Brand Manager", "3 Markets · US / BR / AR", "2-Year Journey"];

// The Growth Story — 4 chapters covering the promotion arc
const chapters = [
  {
    n: "01",
    icon: Package,
    kicker: "Where I Started",
    title: "Packaging & Product Design",
    body: "I joined B-WAY as a Product Designer, focused on the physical craft. I designed the packaging system for four product lines — B10K, Urban, Sonic and Compact — building die-cuts, interior architecture and a bold visual language that broke away from the conservative codes of the barber industry.",
    tags: ["Die-cuts", "Print Production", "Product Renders", "Unboxing Experience"],
  },
  {
    n: "02",
    icon: Palette,
    kicker: "Growing the Scope",
    title: "Social Media & Brand Design",
    body: "The scope expanded fast. I started designing every social media asset, campaign key visual, and launch collateral across regions. Each product drop was translated into an editorial visual system that could travel from Instagram grids to trade-show print in a single sprint.",
    tags: ["Instagram Grids", "Campaign Key Visuals", "Launch Collateral", "Visual System"],
  },
  {
    n: "03",
    icon: ShoppingBag,
    kicker: "Going Digital",
    title: "E-Commerce, from Zero",
    body: "Then I built the digital layer. I architected and launched Shopify storefronts for Brazil and Argentina from scratch — catalog, checkout, localized copy and payment logic — while running Meta Ads and email flows that tied every campaign back to revenue.",
    tags: ["Shopify BR", "Shopify AR", "Meta Ads", "Email Automations"],
  },
  {
    n: "04",
    icon: Rocket,
    kicker: "The Promotion",
    title: "Brand Manager Across 3 Markets",
    body: "By the end of year two, I was promoted to Brand Manager. I led a 6-person interdisciplinary team across the US, Brazil and Argentina, coordinated brand educators on how to speak and demo the product, and designed the trade-show stands we activated at Barber Week and beyond.",
    tags: ["6-Person Team", "US · BR · AR", "Educators", "Trade-Show Stands", "Ambassadors"],
  },
];

// Kept for TS compat in original grid — mapped to chapters visually below
const executionCards = chapters.map((c) => ({
  icon: c.icon,
  kicker: c.kicker,
  title: c.title,
  body: c.body,
}));

const packaging = [
  { url: brandCover.url, label: "B-WAY · Full Product Line System", kicker: "Line-up" },
  { url: b10kMockup.url, label: "B10K · Packaging Mockup", kicker: "B10K" },
  { url: b10kInside.url, label: "B10K · Interior Architecture", kicker: "Interior" },
  { url: b10kAccessories.url, label: "B10K · Accessories Packaging", kicker: "Accessories" },
  { url: urbanDiecut.url, label: "Urban · Die-cut Technical Drawing", kicker: "Die-cut" },
  { url: urbanBack.url, label: "Urban · Back Packaging Details", kicker: "Urban" },
  { url: sonicBlack.url, label: "Sonic · Black Edition", kicker: "Sonic" },
  { url: sonicInside.url, label: "Sonic · Interior Packaging", kicker: "Interior" },
  { url: compactFront.url, label: "Compact · Front View", kicker: "Compact" },
  { url: compactBack.url, label: "Compact · Back Packaging", kicker: "Compact" },
];

const reels = [
  {
    url: reel1.url,
    title: "Barber Week · Live Event Reel",
    body: "Trade-show floor content — stand activation, product demos and brand educators on-site.",
  },
  {
    url: reel2.url,
    title: "Innovación · Visión · Identidad",
    body: "Announcement reel: the most anticipated barber event of the year, produced in-house with the brand educator team.",
  },
];

const metrics = [
  { icon: Globe2, value: "3", label: "International Markets (US, BR, AR)" },
  { icon: Radar, value: "360°", label: "Omnichannel Campaigns Executed" },
  { icon: Users, value: "6-Person", label: "Interdisciplinary Team Led" },
  { icon: Calendar, value: "300+", label: "Attendees at Experiential Events" },
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
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);
  const showBody = isMobile || hovered;
  const active = hovered && !isMobile;
  return (
    <motion.article
      variants={fadeUp}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      tabIndex={0}
      className="group relative isolate flex min-h-64 flex-col overflow-hidden rounded-[calc(var(--radius)+14px)] border border-border bg-card p-6 shadow-[var(--shadow-card)] outline-none transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)] focus-visible:ring-2 focus-visible:ring-accent-1/60 md:h-64"
    >
      <motion.span
        aria-hidden
        initial={false}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 top-0 h-[3px] origin-left bg-gradient-accent"
      />
      <motion.span
        aria-hidden
        initial={false}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.18_45_/_0.22),transparent_65%)]"
      />

      <div className="relative flex items-start justify-between gap-4">
        <motion.span
          initial={false}
          animate={{
            backgroundColor: active
              ? "oklch(0.72 0.18 45)"
              : "oklch(0.96 0.01 60)",
            color: active ? "oklch(1 0 0)" : "oklch(0.72 0.18 45)",
            scale: active ? 1.05 : 1,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="grid h-11 w-11 place-items-center rounded-2xl ring-1 ring-inset ring-border"
        >
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </motion.span>
        <div className="text-right">
          <span className="font-mono text-[0.65rem] font-semibold tracking-widest text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-accent-1">
            {card.kicker}
          </div>
        </div>
      </div>

      <h3 className="relative mt-auto text-lg font-bold leading-tight tracking-tight md:text-[1.05rem] lg:text-lg">
        {card.title}
      </h3>

      <div className="relative mt-3 min-h-[3.75rem]">
        <AnimatePresence mode="wait" initial={false}>
          {showBody ? (
            <motion.p
              key="body"
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0 text-[0.78rem] leading-relaxed text-muted-foreground"
            >
              {card.body}
            </motion.p>
          ) : (
            <motion.div
              key="hint"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0 inline-flex items-center gap-1.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            >
              <Plus className="h-3 w-3" />
              Hover to expand
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

const mockups = [
  { label: "Primary Logomark", icon: Sparkles, kicker: "Logo" },
  { label: "Color System", icon: Palette, kicker: "Palette" },
  { label: "Typography Scale", icon: Layers, kicker: "Type" },
  { label: "Usage Guidelines", icon: Package, kicker: "Guidelines" },
];

function HorizontalMockups() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    const measure = () => {
      if (trackRef.current && containerRef.current) {
        setTrackWidth(trackRef.current.scrollWidth);
        setViewportWidth(containerRef.current.clientWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isMobile]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const maxTranslate = Math.max(0, trackWidth - viewportWidth);
  const x = useTransform(scrollYProgress, (value) => -maxTranslate * value);

  if (isMobile) {
    return (
      <div className="relative">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <SectionLabel>02.5 — Gallery</SectionLabel>
              <h3 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight">
                Brand Guidelines &amp; Logo Variations{" "}
                <span className="font-serif italic font-normal text-accent-1">
                  Overlap
                </span>
              </h3>
            </div>
          </div>
          <div className="mt-2 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Swipe to explore →
          </div>
        </div>
        <div
          className="mt-10 flex gap-4 overflow-x-auto scroll-smooth px-6 pb-6 pt-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {mockups.map((m, i) => (
            <div
              key={m.label}
              className="relative w-[85vw] shrink-0"
              style={{ scrollSnapAlign: "center" }}
            >
              <div className="absolute -top-3 left-4 z-10 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground shadow-[var(--shadow-card)]">
                <span className="text-accent-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {m.kicker}
              </div>
              <MediaPlaceholder
                label={m.label}
                aspect="aspect-[3/4]"
                icon={m.icon}
              />
            </div>
          ))}
          <div className="w-2 shrink-0" />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <SectionLabel>02.5 — Gallery</SectionLabel>
              <h3 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                Brand Guidelines &amp; Logo Variations{" "}
                <span className="font-serif italic font-normal text-accent-1">
                  Overlap
                </span>
              </h3>
            </div>
            <span className="hidden font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground md:inline">
              Scroll to explore →
            </span>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="mt-10 flex gap-6 pl-6 md:pl-10 will-change-transform"
        >
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
          <div className="w-20 shrink-0" />
        </motion.div>
      </div>
    </div>
  );
}

function BWayProject() {
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
            Case Study / 04
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
              <SectionLabel>Omnichannel · Global Expansion</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-5xl text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-[4.5rem]"
            >
              B-WAY: Scaling an{" "}
              <span className="text-gradient-accent">Omnichannel Brand</span>{" "}
              Across{" "}
              <span className="font-serif italic font-normal text-accent-1">
                3 International Markets
              </span>
              .
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              A 360° commercial takeover — bridging{" "}
              <span className="font-semibold text-foreground">
                digital e-commerce
              </span>
              , large-scale{" "}
              <span className="font-semibold text-foreground">
                experiential events
              </span>{" "}
              and cross-market brand leadership across the US, Brazil and
              Argentina.
            </motion.p>
          </Reveal>

          {/* TL;DR bar */}
          <Reveal className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3" stagger={0.08}>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-colors duration-300 hover:border-accent-1/40 hover:shadow-[var(--shadow-elegant)] md:hover:bg-card"
            >
              <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Role
              </div>
              <div className="mt-3 text-base font-semibold text-foreground transition-colors duration-300 md:text-lg md:group-hover:text-accent-1">
                Brand Manager &amp; Product Designer
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-colors duration-300 hover:border-accent-1/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Tech Stack
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="cursor-default rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-foreground/80 transition-colors duration-200 hover:border-accent-1/50 hover:bg-background hover:text-foreground"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-colors duration-300 hover:border-accent-1/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Focus
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {focus.map((f) => (
                  <motion.span
                    key={f}
                    whileHover={{ y: -2, scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="group/tag inline-flex cursor-default items-center gap-1.5 rounded-full bg-gradient-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-[0_2px_8px_-2px_oklch(0.7_0.19_25_/_0.3)] transition-shadow duration-200 hover:shadow-[0_6px_18px_-4px_oklch(0.7_0.19_25_/_0.55)]"
                  >
                    <Sparkles className="h-3 w-3 transition-transform duration-300 group-hover/tag:rotate-12 group-hover/tag:scale-110" />
                    {f}
                  </motion.span>
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
            <motion.h3
              variants={fadeUp}
              className="mb-6 text-2xl font-bold tracking-tight md:text-3xl"
            >
              The Challenge
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-foreground/85 md:text-xl"
            >
              The brand was growing rapidly but{" "}
              <span className="font-semibold text-foreground">
                lacked the digital infrastructure
              </span>{" "}
              to scale internationally. The challenge was threefold: bridge
              physical products with a digital e-commerce ecosystem,
              successfully enter the{" "}
              <span className="font-semibold text-accent-1">
                US and Brazil markets
              </span>
              , and unify a fragmented brand voice across high-profile
              ambassadors and large-scale physical events.
            </motion.p>
          </Reveal>
        </div>

        {/* Hero Mockup Placeholder */}
        <div className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
          <Reveal>
            <motion.div variants={fadeUp}>
              <MediaPlaceholder
                label="Global E-Commerce Dashboards & Campaign Assets"
                aspect="aspect-[16/8]"
                icon={Globe2}
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
              A{" "}
              <span className="font-semibold text-foreground">
                360° operational takeover
              </span>
              . Promoted from Product Designer to Brand Manager to engineer
              the brand's commercial infrastructure across digital and physical
              touchpoints.
            </motion.p>
          </Reveal>

          <Reveal
            className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2"
            stagger={0.06}
          >
            {executionCards.map((c, i) => (
              <ExecutionCard key={c.title} card={c} index={i} />
            ))}
          </Reveal>
        </div>

        {/* Physical Event / Team Overlap */}
        <div className="mx-auto max-w-6xl px-6 pb-24 md:px-10 md:pb-32">
          <Reveal>
            <motion.div variants={fadeUp} className="relative">
              <div className="w-3/4">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[calc(var(--radius)+18px)] border border-white/10 bg-foreground text-background shadow-[var(--shadow-card)]">
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.72_0.18_45_/_0.22),transparent_55%),radial-gradient(circle_at_85%_80%,oklch(0.7_0.19_25_/_0.16),transparent_60%)]"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/[0.06] text-accent-1 ring-1 ring-inset ring-white/10">
                      <Calendar className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-background/70">
                      Physical Trade Show Stand / Barber Week Event Photo
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 right-10 hidden w-1/3 md:block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(var(--radius)+14px)] border border-border bg-card shadow-[var(--shadow-card-hover)]">
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.72_0.18_45_/_0.2),transparent_60%)]"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-accent-1 ring-1 ring-inset ring-border">
                      <Users className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      Brand Guidelines &amp; Team Management Assets
                    </span>
                  </div>
                </div>
              </div>
              {/* Mobile-only stacked foreground */}
              <div className="mt-6 w-2/3 md:hidden">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(var(--radius)+14px)] border border-border bg-card shadow-[var(--shadow-card)]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-accent-1 ring-1 ring-inset ring-border">
                      <Users className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      Brand Guidelines &amp; Team Management Assets
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
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
                className="group relative overflow-hidden rounded-[calc(var(--radius)+16px)] border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-sm transition-colors duration-500 hover:border-accent-1/40 sm:text-left"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.18_45_/_0.28),transparent_65%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <m.icon className="mx-auto h-6 w-6 text-accent-1 sm:mx-0" strokeWidth={1.6} />
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
              Scaling a brand across borders and channels?
            </h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
              I build omnichannel infrastructure — from Shopify storefronts to trade-show floors.
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