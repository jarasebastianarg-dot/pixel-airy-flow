import { createFileRoute, Link } from "@tanstack/react-router";
import { LanguageToggle } from "@/components/LanguageToggle";
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
import { useTr } from "@/i18n/projectTranslate";
import { NextProject, useCaseLabel } from "@/components/case/NextProject";
import {
  ArrowLeft,
  Sparkles,
  Target,
  Video,
  Layers,
  Package,
  Globe2,
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
      { title: "Elevate Local: Visual identity for a medical marketing agency | Sebastián Jara" },
      {
        name: "description",
        content:
          "The visual identity I designed for a marketing agency that works with medical clinics in Europe: logo system, colors, type, brand guidelines and a logo animation, done fully remote.",
      },
      { property: "og:title", content: "Elevate Local: Visual identity for a medical marketing agency" },
      {
        property: "og:description",
        content:
          "Logo system, mineral color palette, typography and brand guidelines for a B2B agency in the European medical sector.",
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

const stack = [
  "Figma",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Loom",
];

const focus = ["B2B branding", "Medical sector", "Remote collaboration"];

const executionCards = [
  {
    icon: Target,
    kicker: "Audience",
    title: "Made for clinic directors",
    body: "I designed the logo and the visual language for the people the agency sells to: clinic directors and healthcare managers in Europe. I picked colors and type that feel trustworthy and precise.",
  },
  {
    icon: Video,
    kicker: "Async",
    title: "Recorded presentations",
    body: "I presented each round in a Loom video and explained the reasons behind every choice. The client watched on their own time and sent feedback, so we didn't need to match time zones for calls.",
  },
  {
    icon: Layers,
    kicker: "Iteration",
    title: "A few directions, then one",
    body: "I sketched several concepts with clinic directors and their patients in mind. We picked one together and I refined it over a few rounds of feedback.",
  },
  {
    icon: Package,
    kicker: "Delivery",
    title: "The brand kit",
    body: "I delivered the logo files, the color palette, the type and the usage guidelines. With that, the agency can apply the brand the same way on its website, decks, ads and materials for clinics.",
  },
];

const metrics = [
  {
    icon: Briefcase,
    value: "B2B",
    label: "An identity made for selling to clinic directors in Europe.",
  },
  {
    icon: Sparkles,
    value: "1",
    label: "One visual system for the website, decks and ads.",
  },
  {
    icon: Layers,
    value: "5",
    label: "Logo versions: horizontal, reversed, stacked, monogram and isotype.",
  },
  {
    icon: Globe2,
    value: "100%",
    label: "Remote, from the first brief to the final files, across time zones.",
  },
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
  const { tr } = useTr();
  const isDark = variant.theme === "dark";
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden rounded-[calc(var(--radius)+18px)] border shadow-[var(--shadow-card)] ${
        isDark
          ? "border-white/10 bg-[oklch(0.18_0.008_60)]"
          : "border-border bg-[oklch(0.96_0.004_90)]"
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center p-10 md:p-14">
        <img
          src={variant.src}
          alt={tr(variant.alt)}
          className="max-h-full max-w-full object-contain"
          loading="lazy" decoding="async"
        />
      </div>
      <div
        className={`absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${
          isDark
            ? "border-white/10 bg-black/30 text-white/70 backdrop-blur"
            : "border-border bg-background/70 text-muted-foreground backdrop-blur"
        }`}
      >
        <span className="font-mono">{tr(variant.label)}</span>
        <span className={`font-mono ${isDark ? "text-accent-1" : "text-accent-1"}`}>
          {tr(variant.kicker)}
        </span>
      </div>
    </div>
  );
}

function ExecutionCard({ card, index }: { card: ExecutionCardData; index: number }) {
  const { tr } = useTr();
  const Icon = card.icon;
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);
  const showBody = true; // always visible (no hover needed, works on touch)
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
            {tr(card.kicker)}
          </div>
        </div>
      </div>

      <h3 className="relative mt-auto text-lg font-bold leading-tight tracking-tight md:text-[1.05rem] lg:text-lg">
        {tr(card.title)}
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
              {tr(card.body)}
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
              {tr("Hover to expand")}
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
    caption: "Matte Obsidian on Limestone. The center dot works as a pause between the two words.",
    src: elHorizontalDark.url,
    alt: "Elevate Local horizontal logotype, dark on light",
    theme: "light",
  },
  {
    kicker: "Negative",
    label: "Horizontal · Reversed",
    caption: "Limestone on Matte Obsidian. Same weight and legibility in negative.",
    src: elHorizontalLight.url,
    alt: "Elevate Local horizontal logotype, light on dark",
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
    caption: "Compact mark for small formats. Minimum size 46px.",
    src: elMediaDark.url,
    alt: "Elevate Local E·L monogram",
    theme: "light",
  },
  {
    kicker: "Isotype",
    label: "The E",
    caption: "A wider E that stays easy to recognize at any size.",
    src: elIsoDark.url,
    alt: "Elevate Local isotype, the E",
    theme: "light",
  },
];

const palette = [
  {
    name: "Matte Obsidian",
    hex: "#1E1A17",
    rgb: "30 · 26 · 23",
    cmyk: "72 · 68 · 67 · 85",
    role: "Primary CTA · Authority",
  },
  {
    name: "Limestone",
    hex: "#F0EFEB",
    rgb: "240 · 239 · 235",
    cmyk: "5 · 4 · 6 · 0",
    role: "Canvas · Editorial paper",
  },
  {
    name: "Sand",
    hex: "#A39B92",
    rgb: "163 · 155 · 146",
    cmyk: "41 · 38 · 45 · 3",
    role: "Inactive states · Dividers",
  },
  {
    name: "Cement",
    hex: "#E3E1DC",
    rgb: "227 · 225 · 220",
    cmyk: "0 · 1 · 3 · 11",
    role: "Cards · Table structure",
  },
];

function HorizontalMockups() {
  const { tr } = useTr();
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    const measure = () => {
      if (trackRef.current && containerRef.current) {
        const track = trackRef.current;
        const last = track.lastElementChild as HTMLElement | null;
        const measured = last
          ? last.offsetLeft + last.offsetWidth
          : track.scrollWidth;
        setTrackWidth(Math.max(measured, track.scrollWidth));
        setViewportWidth(containerRef.current.clientWidth);
      }
    };
    measure();
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
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
              <h3 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight">
                {tr("The logo in")}{" "}
                <span className="">
                  {tr("five versions")}
                </span>
              </h3>
            </div>
          </div>
          <div className="mt-2 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {tr("Swipe to explore →")}
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
                {tr(m.kicker)}
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
              <h3 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                {tr("The logo in")}{" "}
                <span className="">
                  {tr("five versions")}
                </span>
              </h3>
            </div>
            <span className="hidden font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground md:inline">
              {tr("Scroll to explore →")}
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
                {tr(m.kicker)}
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
  const { tr } = useTr();
  const caseLabel = useCaseLabel("elevate-local");
  return (
    <main className="min-h-screen w-full [overflow-x:clip] bg-background text-foreground">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-accent-1"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {tr("Back to portfolio")}
          </Link>
          <div className="flex items-center gap-3">
          <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            {caseLabel}
          </span>
            <LanguageToggle />
          </div>
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
              <SectionLabel>{tr("Brand identity · B2B · Healthcare")}</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-5xl text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-[4.5rem]"
            >
              {tr("Elevate Local:")}{" "}
              <span className="text-gradient-accent">{tr("a visual identity")}</span>{" "}
              {tr("for an agency that markets")}{" "}
              <span className="font-serif italic font-normal text-accent-1">
                {tr("medical clinics")}
              </span>
              .
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {tr("Elevate Local is a marketing agency for medical clinics in Europe. I designed its visual identity from scratch: logo, colors, type, brand guidelines and a short logo animation. The whole project was done remotely.")}
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
                {tr("Role")}
              </div>
              <div className="mt-3 text-base font-semibold text-foreground transition-colors duration-300 md:text-lg md:group-hover:text-accent-1">
                {tr("Brand Identity Designer")}
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-colors duration-300 hover:border-accent-1/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {tr("Tools")}
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
                {tr("Focus")}
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
                    {tr(f)}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* The problem */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:grid md:grid-cols-12 md:gap-12 md:px-10 md:py-28">
          <Reveal className="md:col-span-4" stagger={0.08}>
            <motion.div variants={fadeUp}>
              <h2 className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                {tr("The")}{" "}
                <span className="">
                  {tr("problem")}
                </span>
              </h2>
            </motion.div>
          </Reveal>
          <Reveal className="mt-8 md:col-span-8 md:mt-0" stagger={0.08}>
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-foreground/85 md:text-xl"
            >
              {tr("Elevate Local helps")}{" "}
              <span className="font-semibold text-foreground">
                {tr("medical clinics across Europe")}
              </span>{" "}
              {tr("get more patients through marketing. Its clients are clinic directors, and in healthcare people need to trust you before they hire you. So the brand had to look calm and professional.")}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {tr("The agency had no visual identity yet. I had to design one from zero that clinic directors and patients would trust, and that still looked like a modern marketing team. We worked fully remote, in different time zones.")}
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
              <video
                src="/work/elevate/elevate-logo-reveal.mp4"
                poster="/work/elevate/elevate-logo-reveal-poster.webp"
                aria-label={tr("Elevate Local logo reveal animation")}
                className="aspect-video w-full object-cover"
                playsInline
                muted
                loop
                autoPlay
                controls
                preload="metadata"
              />
              <div className="relative flex items-center justify-between border-t border-white/10 bg-black/20 px-6 py-4 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/70 backdrop-blur">
                <span>{tr("Logo reveal · Motion designed by me")}</span>
                <span className="text-accent-1">{tr("Matte Obsidian")} #1E1A17</span>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* What I did */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Reveal className="flex max-w-3xl flex-col gap-6" stagger={0.1}>
            <motion.div variants={fadeUp} className="">
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                {tr("What I")}{" "}
                <span className="">
                  {tr("did")}
                </span>
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-muted-foreground max-w-[65ch] md:text-lg"
            >
              {tr("I started from who the agency talks to: clinic directors in Europe. I explored a few directions, chose one with the client and turned it into a full brand kit.")}
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
          <Reveal className="flex max-w-3xl flex-col gap-6" stagger={0.1}>
            <motion.div variants={fadeUp} className="">
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                {tr("A palette of")}{" "}
                <span className="">
                  {tr("mineral tones")}
                </span>
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-muted-foreground max-w-[65ch] md:text-lg"
            >
              {tr("Neutral tones inspired by stone and heavy paper. I chose them because they feel clean and calm, which suits a medical brand.")}
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
                  <div className="p-5">
                    <div className="text-base font-bold tracking-tight text-foreground">
                      {tr(c.name)}
                    </div>
                    <div className="mt-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent-1">
                      {tr(c.role)}
                    </div>
                    <dl className="mt-5 divide-y divide-border/70 border-t border-border/70 font-mono">
                      <div className="flex items-center justify-between gap-3 py-2.5">
                        <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                          HEX
                        </dt>
                        <dd className="whitespace-nowrap text-xs font-semibold tabular-nums text-foreground">
                          {c.hex}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-3 py-2.5">
                        <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                          RGB
                        </dt>
                        <dd className="whitespace-nowrap text-xs tabular-nums text-foreground/85">
                          {c.rgb}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-3 py-2.5">
                        <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                          CMYK
                        </dt>
                        <dd className="whitespace-nowrap text-xs tabular-nums text-foreground/85">
                          {c.cmyk}
                        </dd>
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
          <Reveal className="flex max-w-3xl flex-col gap-6" stagger={0.1}>
            <motion.div variants={fadeUp} className="">
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                {tr("One typeface:")}{" "}
                <span className="">
                  Geomanist
                </span>
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-muted-foreground max-w-[65ch] md:text-lg"
            >
              {tr("Geomanist is stable, clear and easy to read. That makes it a good fit for a brand that talks to clinic directors and doctors.")}
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
                <span className="text-accent-1">{tr("Headline")}</span>
              </div>
              <div className="mt-8 text-[3.5rem] font-black leading-[0.95] tracking-[-0.04em] text-foreground md:text-[5rem]">
                Aa
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-[0.95rem]">
                {tr("For big headlines, landing page titles and section openers. It's the heaviest weight in the family, so I use it sparingly.")}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="rounded-full border border-border bg-secondary px-2.5 py-1">{tr("Hero")}</span>
                <span className="rounded-full border border-border bg-secondary px-2.5 py-1">{tr("Section titles")}</span>
                <span className="rounded-full border border-border bg-secondary px-2.5 py-1">{tr("Pitch decks")}</span>
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
                <span className="text-accent-1">{tr("Body & subheads")}</span>
              </div>
              <div className="mt-8 text-[3.5rem] font-medium leading-[0.95] tracking-[-0.03em] text-foreground md:text-[5rem]">
                Aa
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-[0.95rem]">
                {tr("The everyday weight, for subheads, body copy, UI labels and documents. It reads well in long texts on screen.")}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="rounded-full border border-border bg-secondary px-2.5 py-1">{tr("Body copy")}</span>
                <span className="rounded-full border border-border bg-secondary px-2.5 py-1">{tr("Subheads")}</span>
                <span className="rounded-full border border-border bg-secondary px-2.5 py-1">{tr("UI & docs")}</span>
              </div>
            </motion.div>
          </Reveal>

        </div>
      </section>

      {/* Results */}
      <section className="relative overflow-hidden border-t border-border/60 bg-foreground text-background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(0.72_0.18_45_/_0.25),transparent_55%),radial-gradient(circle_at_10%_90%,oklch(0.7_0.19_25_/_0.2),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <Reveal stagger={0.08}>
            <motion.h2
              variants={fadeUp}
              className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
            >
              <span className="">
                {tr("Results")}
              </span>
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
                  {tr(m.label)}
                </div>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      <NextProject current="elevate-local" />
    </main>
  );
}