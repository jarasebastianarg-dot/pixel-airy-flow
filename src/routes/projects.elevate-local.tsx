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
  Target,
  Video,
  Layers,
  Package,
  Stethoscope,
  Globe2,
  Clock,
  Briefcase,
  Plus,
} from "lucide-react";

import elHorizontalDark from "@/assets/elevate-local/el-horizontal-dark.png.asset.json";
import elHorizontalLight from "@/assets/elevate-local/el-horizontal-light.png.asset.json";
import elStackedDark from "@/assets/elevate-local/el-stacked-dark.png.asset.json";
import elStackedLight from "@/assets/elevate-local/el-stacked-light.png.asset.json";
import elMediaDark from "@/assets/elevate-local/el-media-dark.png.asset.json";
import elMediaLight from "@/assets/elevate-local/el-media-light.png.asset.json";
import elIsoDark from "@/assets/elevate-local/el-iso-dark.png.asset.json";
import elIsoLight from "@/assets/elevate-local/el-iso-light.png.asset.json";

export const Route = createFileRoute("/projects/elevate-local")({
  component: ElevateLocalProject,
  head: () => ({
    meta: [
      { title: "Elevate Local — Clinical Authority & Strategic Brand Identity" },
      {
        name: "description",
        content:
          "Case study: building a B2B brand identity for a marketing agency serving European medical clinics — 100% remote, async, and clinically credible.",
      },
      { property: "og:title", content: "Elevate Local — Brand Identity Case Study" },
      {
        property: "og:description",
        content:
          "How I designed a clinical, high-trust B2B brand identity for the European medical sector — delivered fully async.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects/elevate-local" },
    ],
    links: [{ rel: "canonical", href: "/projects/elevate-local" }],
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

const stack = ["Adobe Illustrator", "Loom"];

const focus = ["B2B Visual Strategy", "Medical Sector", "Remote Collaboration"];

const executionCards = [
  {
    icon: Target,
    kicker: "Positioning",
    title: "Audience-Centric Positioning",
    body: "Engineered the core logomark and visual language specifically to resonate with the European medical sector. Every typographic and color choice was strategically selected to project clinical trust, precision, and modern marketing energy.",
  },
  {
    icon: Video,
    kicker: "Async",
    title: "Asynchronous Strategic Presentations",
    body: "Leveraged asynchronous Loom video presentations to guide European stakeholders through the design rationale remotely. This workflow solved timezone friction, allowing the client to digest strategic context before providing feedback, drastically reducing revision cycles.",
  },
  {
    icon: Layers,
    kicker: "Iteration",
    title: "Iterative Design Architecture",
    body: "Developed multiple conceptual directions based on specific client avatars. Refined the chosen path through strategic feedback loops, ensuring the final identity was perfectly aligned with their B2B market goals.",
  },
  {
    icon: Package,
    kicker: "Delivery",
    title: "Scalable Asset Delivery",
    body: "Delivered a robust and comprehensive brand package — including vector assets, color systems, and usage guidelines — ensuring the agency's new identity remains consistent and scalable across all digital platforms and pitch decks.",
  },
];

const metrics = [
  { icon: Globe2, value: "100%", label: "Asynchronous Remote Delivery" },
  { icon: Layers, value: "3", label: "Strategic Concept Directions" },
  { icon: Clock, value: "< 48h", label: "Average Revision Turnaround" },
  { icon: Briefcase, value: "B2B", label: "Clinical Market Positioning" },
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

function LogoPlate({
  variant,
  aspect,
}: {
  variant: LogoVariant;
  aspect: string;
}) {
  const isDark = variant.theme === "dark";
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden rounded-[calc(var(--radius)+18px)] border shadow-[var(--shadow-card)] ${
        isDark
          ? "border-white/10 bg-[oklch(0.18_0.008_60)]"
          : "border-border bg-[oklch(0.96_0.004_90)]"
      }`}
    >
      <span
        aria-hidden
        className={`absolute inset-0 ${
          isDark
            ? "bg-[radial-gradient(circle_at_20%_15%,oklch(0.72_0.18_45_/_0.16),transparent_60%)]"
            : "bg-[radial-gradient(circle_at_85%_85%,oklch(0.72_0.18_45_/_0.1),transparent_60%)]"
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center p-10 md:p-14">
        <img
          src={variant.src}
          alt={variant.alt}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>
      <div
        className={`absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${
          isDark
            ? "border-white/10 bg-black/30 text-white/70 backdrop-blur"
            : "border-border bg-background/70 text-muted-foreground backdrop-blur"
        }`}
      >
        <span className="font-mono">{variant.label}</span>
        <span className={`font-mono ${isDark ? "text-accent-1" : "text-accent-1"}`}>
          {variant.kicker}
        </span>
      </div>
    </div>
  );
}

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

type LogoVariant = {
  kicker: string;
  label: string;
  caption: string;
  src: string;
  alt: string;
  theme: "dark" | "light";
};

const logoVariants: LogoVariant[] = [
  {
    kicker: "Primary",
    label: "Horizontal Logotype",
    caption: "Obsidiana Mate on Piedra Caliza. Editorial pause anchored by the center dot.",
    src: elHorizontalDark.url,
    alt: "Elevate Local horizontal logotype — dark on light",
    theme: "light",
  },
  {
    kicker: "Negative",
    label: "Horizontal · Reversed",
    caption: "Piedra Caliza on Obsidiana Mate. Same weight and legibility in negative.",
    src: elHorizontalLight.url,
    alt: "Elevate Local horizontal logotype — light on dark",
    theme: "dark",
  },
  {
    kicker: "Stacked",
    label: "Vertical Lockup",
    caption: "Square-format lockup for social avatars, decks and merch.",
    src: elStackedDark.url,
    alt: "Elevate Local stacked logotype",
    theme: "light",
  },
  {
    kicker: "Monogram",
    label: "E·L Reduction",
    caption: "Compact editorial mark for tight formats — 46px minimum.",
    src: elMediaDark.url,
    alt: "Elevate Local E·L monogram",
    theme: "light",
  },
  {
    kicker: "Isotype",
    label: "The E",
    caption: "Widened cut for aggressive, commercial recognition at any scale.",
    src: elIsoDark.url,
    alt: "Elevate Local isotype — the E",
    theme: "light",
  },
];

const palette = [
  {
    name: "Obsidiana Mate",
    hex: "#1E1A17",
    rgb: "30 · 26 · 23",
    cmyk: "72 · 68 · 67 · 85",
    role: "Primary CTA · Authority",
  },
  {
    name: "Piedra Caliza",
    hex: "#F0EFEB",
    rgb: "240 · 239 · 235",
    cmyk: "5 · 4 · 6 · 0",
    role: "Canvas · Editorial paper",
  },
  {
    name: "Arena",
    hex: "#A39B92",
    rgb: "163 · 155 · 146",
    cmyk: "41 · 38 · 45 · 3",
    role: "Inactive states · Dividers",
  },
  {
    name: "Cemento",
    hex: "#E3E1DC",
    rgb: "227 · 225 · 220",
    cmyk: "0 · 1 · 3 · 11",
    role: "Cards · Table structure",
  },
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
          {logoVariants.map((m, i) => (
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
              <LogoPlate variant={m} aspect="aspect-[3/4]" />
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
          {logoVariants.map((m, i) => (
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
              <LogoPlate variant={m} aspect="aspect-[4/3]" />
            </div>
          ))}
          <div className="w-20 shrink-0" />
        </motion.div>
      </div>
    </div>
  );
}

function ElevateLocalProject() {
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
            Case Study / 03
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
              <SectionLabel>Brand Identity · B2B Medical</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-5xl text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-[4.5rem]"
            >
              Elevate Local:{" "}
              <span className="text-gradient-accent">Clinical Authority</span>{" "}
              &amp; Strategic{" "}
              <span className="font-serif italic font-normal text-accent-1">
                Brand Identity
              </span>
              .
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              A B2B visual identity engineered for the European medical sector —
              balancing clinical trust with modern marketing agility, delivered
              100% remotely.
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
                Brand Identity Designer
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
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-foreground/85 md:text-xl"
            >
              Elevate Local, a marketing agency targeting European medical
              clinics, needed to establish{" "}
              <span className="font-semibold text-foreground">
                immediate credibility
              </span>
              . The healthcare sector is highly conservative and demands
              authority, yet the agency needed to project agility, modern
              digital expertise, and growth.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              The challenge was building a visual identity from scratch that
              bridged this gap, appealing directly to high-end medical
              professionals while managing the entire strategic process 100%
              remotely.
            </motion.p>
          </Reveal>
        </div>

        {/* Hero Logo Showcase */}
        <div className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
          <Reveal>
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-[calc(var(--radius)+22px)] border border-white/10 bg-[oklch(0.18_0.008_60)] shadow-[var(--shadow-card-hover)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,oklch(0.72_0.18_45_/_0.18),transparent_55%),radial-gradient(circle_at_85%_85%,oklch(0.7_0.19_25_/_0.14),transparent_60%)]"
              />
              <div className="relative flex aspect-[16/8] items-center justify-center px-10 md:px-24">
                <img
                  src={elHorizontalLight.url}
                  alt="Elevate Local horizontal logotype on Obsidiana Mate"
                  className="max-h-[60%] w-full max-w-4xl object-contain"
                />
              </div>
              <div className="relative flex items-center justify-between border-t border-white/10 bg-black/20 px-6 py-4 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/70 backdrop-blur">
                <span>Elevate Local · Primary Lockup</span>
                <span className="text-accent-1">Obsidiana Mate #1E1A17</span>
              </div>
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
              Designing a cohesive visual identity grounded in target audience
              psychology and European market research, delivered through a
              highly optimized, asynchronous remote collaboration framework.
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

        {/* Horizontal scroll mockups */}
        <HorizontalMockups />
      </section>

      {/* Color System — Mineral Palette */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end" stagger={0.1}>
            <motion.div variants={fadeUp} className="md:col-span-7">
              <SectionLabel>02.6 — Color</SectionLabel>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                The{" "}
                <span className="font-serif italic font-normal text-accent-1">
                  Mineral
                </span>{" "}
                Palette
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-muted-foreground md:col-span-5 md:text-lg"
            >
              Neutral, mineral tones that simulate granite and high-gram paper —
              engineered for clinical trust, not startup noise.
            </motion.p>
          </Reveal>

          <Reveal className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {palette.map((c) => {
              const dark = c.hex === "#1E1A17";
              return (
                <motion.div
                  key={c.name}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group overflow-hidden rounded-[calc(var(--radius)+14px)] border border-border bg-card shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div
                    className="relative h-40"
                    style={{ backgroundColor: c.hex }}
                  >
                    <span
                      className={`absolute left-4 top-4 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] ${
                        dark ? "text-white/70" : "text-black/50"
                      }`}
                    >
                      {c.hex}
                    </span>
                  </div>
                  <div className="space-y-2 p-5">
                    <div className="text-base font-bold tracking-tight text-foreground">
                      {c.name}
                    </div>
                    <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent-1">
                      {c.role}
                    </div>
                    <dl className="mt-3 grid grid-cols-2 gap-2 font-mono text-[0.65rem] text-muted-foreground">
                      <div>
                        <dt className="uppercase tracking-[0.2em] text-foreground/50">RGB</dt>
                        <dd className="mt-1">{c.rgb}</dd>
                      </div>
                      <div>
                        <dt className="uppercase tracking-[0.2em] text-foreground/50">CMYK</dt>
                        <dd className="mt-1">{c.cmyk}</dd>
                      </div>
                    </dl>
                  </div>
                </motion.div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Typography — Geomanist */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end" stagger={0.1}>
            <motion.div variants={fadeUp} className="md:col-span-7">
              <SectionLabel>02.7 — Type</SectionLabel>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                Geomanist —{" "}
                <span className="font-serif italic font-normal text-accent-1">
                  Editorial
                </span>{" "}
                Authority
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-muted-foreground md:col-span-5 md:text-lg"
            >
              A voice engineered to speak eye-to-eye with clinic directors:
              stable, methodical, infallible. No generic startup type.
            </motion.p>
          </Reveal>

          <Reveal className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2" stagger={0.08}>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10"
            >
              <div className="flex items-center justify-between font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                <span>Geomanist · Ultra</span>
                <span className="text-accent-1">Headline</span>
              </div>
              <div className="mt-8 text-[3.5rem] font-black leading-[0.95] tracking-[-0.04em] text-foreground md:text-[5rem]">
                Aa
              </div>
              <div className="mt-4 text-2xl font-black leading-tight tracking-tight md:text-3xl">
                We don't just supply products,<br />
                but the total solution.
              </div>
              <div className="mt-6 border-t border-border pt-4 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                56 / 64 pt · Tracking −4%
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10"
            >
              <div className="flex items-center justify-between font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                <span>Geomanist · Medium</span>
                <span className="text-accent-1">Body &amp; Subhead</span>
              </div>
              <div className="mt-8 text-[3.5rem] font-medium leading-[0.95] tracking-[-0.03em] text-foreground md:text-[5rem]">
                Aa
              </div>
              <div className="mt-4 text-lg leading-relaxed text-foreground/85 md:text-xl">
                Building a data centre is a complex process that requires
                knowledge in various areas — legibility optimized for long
                digital reads and technical documents.
              </div>
              <div className="mt-6 border-t border-border pt-4 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                Regular · 24 / 32 pt · Tracking −4%
              </div>
            </motion.div>
          </Reveal>

          <Reveal className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3" stagger={0.06}>
            {[
              { label: "H1 · Medium", size: "56 / 64", sample: "Autoridad" },
              { label: "H2 · Regular", size: "40 / 48", sample: "Precisión" },
              { label: "H4 · Bold", size: "28 / 36", sample: "Sistema" },
            ].map((row) => (
              <motion.div
                key={row.label}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-secondary/40 p-5"
              >
                <div className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-accent-1">
                  {row.label}
                </div>
                <div className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                  {row.sample}
                </div>
                <div className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {row.size} pt
                </div>
              </motion.div>
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
              Building a brand that needs to earn instant trust?
            </h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
              I design B2B identities engineered for authority — delivered fully async.
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