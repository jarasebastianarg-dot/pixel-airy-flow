import { useState, useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import portrait from "@/assets/portrait.jpg.asset.json";
import cvAsset from "@/assets/JaraSebastian_CV.pdf.asset.json";
import bwayThumb from "@/assets/bway/bway-brand.jpg.asset.json";
import elevateThumb from "@/assets/elevate-local/el-thumb.jpg.asset.json";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { EASE_OUT } from "@/lib/motion";
import {
  ArrowUpRight,
  ShoppingBag,
  Mail,
  Palette,
  Bot,
  Sparkles,
  Linkedin,
  ArrowRight,
  Code2,
  Zap,
  Boxes,
  Download,
  GraduationCap,
  Briefcase,
  Copy,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ─────────────────────────── data ─────────────────────────── */

/** Visual/structural metadata — all copy lives in the language dictionary. */
const capabilityMeta = [
  { icon: ShoppingBag, number: "01" },
  { icon: Zap, number: "02" },
  { icon: Palette, number: "03" },
  { icon: Bot, number: "04" },
] as const;

const workMeta = [
  {
    slug: "folkways",
    client: "Folkways",
    image:
      "https://raw.githubusercontent.com/jarasebastianarg-dot/Portfolio-Photos/main/Folkways%20Thumbnail.webp",
    href: "/projects/folkways",
  },
  {
    slug: "paw-royalty",
    client: "Paw Royalty",
    image:
      "https://raw.githubusercontent.com/jarasebastianarg-dot/Portfolio-Photos/main/Paw%20Royalty%20thumbnail.png",
    href: "/projects/paw-royalty",
  },
  { slug: "b-way", client: "B-WAY", image: bwayThumb.url, href: "/projects/b-way" },
  {
    slug: "elevate-local",
    client: "Elevate Local",
    image: elevateThumb.url,
    href: "/projects/elevate-local",
    fit: "contain" as const,
  },
] as const;

const ecosystemClusters = [
  {
    id: "design",
    icon: Palette,
    tools: [
      { label: "Photoshop", color: "#31A8FF" },
      { label: "Illustrator", color: "#FF9A00" },
      { label: "InDesign", color: "#FF3366" },
      { label: "After Effects", color: "#9999FF" },
      { label: "Figma", color: "#F24E1E" },
      { label: "Canva", color: "#00C4CC" },
      { label: "Claude Design", color: "#D97757" },
    ],
  },
  {
    id: "build",
    icon: Code2,
    tools: [
      { label: "Shopify", color: "#95BF47" },
      { label: "Shopify Liquid", color: "#008080" },
      { label: "HTML / CSS", color: "#E34F26" },
    ],
  },
  {
    id: "scale",
    icon: Zap,
    tools: [
      { label: "Klaviyo", color: "#20E2C8" },
      { label: "Email Automation", color: "#F5A623" },
      { label: "Meta Ads", color: "#0668E1" },
      { label: "Make", color: "#8848AB" },
    ],
  },
  {
    id: "ai",
    icon: Bot,
    tools: [
      { label: "Claude", color: "#D97757" },
      { label: "Claude Co-Work", color: "#B85A3E" },
      { label: "Gemini", color: "#1A73E8" },
    ],
  },
] as const;



/* ─────────────────────── motion helpers ─────────────────────── */

function animateScrollTo(targetY: number, duration = 1100) {
  const startY = window.scrollY;
  const delta = targetY - startY;
  if (Math.abs(delta) < 2) return;
  const startTime = performance.now();
  // easeInOutQuart — slow start, fast middle, gentle landing
  const ease = (t: number) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

  let cancelled = false;
  const cancel = () => {
    cancelled = true;
  };
  window.addEventListener("wheel", cancel, { passive: true, once: true });
  window.addEventListener("touchstart", cancel, { passive: true, once: true });

  function step(now: number) {
    if (cancelled) return;
    const elapsed = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, startY + delta * ease(elapsed));
    if (elapsed < 1) requestAnimationFrame(step);
    else {
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
    }
  }
  requestAnimationFrame(step);
}

function smoothScrollTo(id: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;
    const target =
      id === "top" ? document.body : document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const y =
      id === "top"
        ? 0
        : target.getBoundingClientRect().top + window.scrollY - 72;
    const distance = Math.abs(y - window.scrollY);
    // duration scales with distance for a natural feel (clamped 700–1400ms)
    const duration = Math.min(1400, Math.max(700, distance * 0.6));
    animateScrollTo(y, duration);
    if (history.replaceState) {
      history.replaceState(null, "", id === "top" ? " " : `#${id}`);
    }
  };
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function Reveal({
  children,
  className,
  stagger = 0.08,
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
      variants={{ show: { transition: { staggerChildren: stagger } } }}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────── hero entrance choreography ─────────────────────── */

/** Fade-up 16px entrance on page load with an explicit delay. */
function Entrance({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word headline reveal: each word fades up 16px, staggered 40ms. */
function WordReveal({
  segments,
  baseDelay = 0,
  className,
}: {
  segments: { text: string; accent?: boolean }[];
  baseDelay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  let wordIndex = 0;
  return (
    <h1 className={className}>
      {segments.map((seg, si) =>
        seg.text.split(/\s+/).filter(Boolean).map((word, wi) => {
          const i = wordIndex++;
          const wordEl = (
            <span key={`${si}-${wi}`} className="inline-block overflow-visible">
              {reduceMotion ? (
                word
              ) : (
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: EASE_OUT,
                    delay: baseDelay + i * 0.04,
                  }}
                >
                  {word}
                </motion.span>
              )}
            </span>
          );
          return (
            <span key={`${si}-${wi}-w`} className={seg.accent ? "font-serif italic font-normal text-accent-1" : undefined}>
              {wordEl}{" "}
            </span>
          );
        })
      )}
    </h1>
  );
}

function MagneticButton({
  children,
  href,
  className,
  download,
  target,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  download?: string | boolean;
  target?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    // Follow the cursor but clamp the pull to a 15px radius
    const clamp = (v: number) => Math.max(-15, Math.min(15, v * 0.35));
    x.set(clamp(e.clientX - (r.left + r.width / 2)));
    y.set(clamp(e.clientY - (r.top + r.height / 2)));
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

/* ─────────────────────── custom cursor ─────────────────────── */

function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("[data-cursor-view]"));
    }
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{
          width: hovering ? 72 : 12,
          height: hovering ? 72 : 12,
          backgroundColor: hovering
            ? "oklch(0.7 0.19 40)"
            : "oklch(0.21 0.02 265)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="flex items-center justify-center rounded-full"
      >
        <motion.span
          animate={{ opacity: hovering ? 1 : 0 }}
          className="text-[10px] font-bold uppercase tracking-widest text-accent-foreground"
        >
          View
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────── page ─────────────────────────── */

function Index() {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground md:cursor-none">
      <CustomCursor />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
          <Entrance delay={0} className="mr-auto">
            <a
              href="#top"
              onClick={smoothScrollTo("top")}
              aria-label="SJ — home"
              className="flex min-h-[44px] min-w-[44px] items-center gap-2 font-display text-lg font-bold tracking-tight"
            >
              <SJMonogram />
              <span className="sr-only">Sebastián</span>
            </a>
          </Entrance>

          {/* Tertiary: section links */}
          <Entrance delay={0.1} className="hidden md:block">
            <nav
              aria-label="Primary"
              className="flex items-center gap-1"
            >
              {[
                { href: "#works", label: t.nav.work },
                { href: "#capabilities", label: t.nav.capabilities },
                { href: "#stack", label: t.nav.stack },
                { href: "#about", label: t.nav.about },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={smoothScrollTo(l.href.slice(1))}
                  className="inline-flex min-h-[44px] min-w-0 items-center break-words rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </Entrance>

          <div className="flex min-w-0 flex-wrap items-center justify-end gap-2">
            {/* Secondary: language toggle */}
            <Entrance delay={0.2}>
              <LanguageToggle />
            </Entrance>

            {/* Primary CTA */}
            <a
              href="#works"
              onClick={smoothScrollTo("works")}
              className="group inline-flex min-w-0 items-center gap-1.5 rounded-full bg-gradient-accent px-3.5 py-2.5 text-center text-xs sm:px-4 sm:py-2 font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              <span className="break-words">{t.nav.viewProjects}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </header>

      <motion.main
        key={lang}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-6"
      >
        {/* Hero */}
        <Reveal className="py-20 md:py-28" stagger={0.12}>
          <motion.span
            variants={fadeUp}
            className="inline-flex max-w-full flex-wrap items-center gap-2 break-words rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
            {t.hero.badge}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-4xl break-words text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl"
          >
            {t.hero.headline.pre}
            <span className="font-serif italic font-normal text-accent-1">
              {t.hero.headline.em1}
            </span>
            {t.hero.headline.mid}
            <span className="font-serif italic font-normal text-accent-1">
              {t.hero.headline.em2}
            </span>
            {t.hero.headline.post}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl break-words text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#works"
              className="group inline-flex min-w-0 items-center gap-2 break-words rounded-full bg-gradient-accent px-5 py-3 sm:px-7 sm:py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform duration-200 active:scale-95"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href="#about"
              className="inline-flex min-w-0 items-center gap-2 break-words rounded-full border border-border bg-card px-5 py-3 sm:px-7 sm:py-3.5 text-sm font-semibold transition-transform duration-200 hover:bg-secondary active:scale-95"
            >
              {t.hero.ctaSecondary}
            </MagneticButton>
          </motion.div>
        </Reveal>

        {/* Selected Works */}
        <section id="works" className="scroll-mt-24 pt-8">
          <SectionLabel>{t.sections.works}</SectionLabel>
          <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.12}>
            {workMeta.map((w) => {
              const copy = t.works[w.slug as keyof typeof t.works];
              return (
                <WorkCard
                  key={w.slug}
                  client={w.client}
                  image={w.image}
                  href={w.href}
                  fit={"fit" in w ? w.fit : undefined}
                  tag={copy.tag}
                  headline={copy.headline}
                  body={copy.body}
                />
              );
            })}
          </Reveal>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="scroll-mt-24 pt-24">
          <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end" stagger={0.1}>
            <motion.div variants={fadeUp} className="md:col-span-7">
              <SectionLabel>{t.sections.capabilities}</SectionLabel>
              <h2 className="mt-4 break-words text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                {t.capabilities.heading.pre}
                <span className="font-serif italic font-normal text-accent-1">
                  {t.capabilities.heading.em}
                </span>
                {t.capabilities.heading.post}
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="min-w-0 break-words md:col-span-5 text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {t.capabilities.intro}
            </motion.p>
          </Reveal>

          <Reveal className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.08}>
            {capabilityMeta.map((meta, i) => {
              const c = { ...meta, ...t.capabilities.items[i] };
              return (
              <motion.article
                key={c.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)] md:p-10"
              >
                {/* animated accent bar */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                />
                {/* soft radial glow on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.18_45_/_0.28),transparent_65%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />

                <header className="flex items-start justify-between gap-6">
                  <motion.span
                    whileHover={{ rotate: -6, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-accent-1 ring-1 ring-inset ring-border transition-colors duration-500 group-hover:bg-gradient-accent group-hover:text-accent-foreground group-hover:ring-transparent"
                  >
                    <c.icon className="h-6 w-6" strokeWidth={1.6} />
                  </motion.span>
                  <div className="min-w-0 text-right">
                    <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground">
                      {c.number}
                    </span>
                    <div className="mt-1 break-words text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent-1">
                      {c.kicker}
                    </div>
                  </div>
                </header>

                <h3 className="mt-8 break-words text-2xl font-bold leading-tight tracking-tight md:text-[1.6rem]">
                  {c.title}
                </h3>
                <p className="mt-3 break-words text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                  {c.desc}
                </p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
                  <ul className="flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <li
                        key={tag}
                        className="max-w-full break-words rounded-full border border-border bg-background/60 px-3 py-1 text-[0.7rem] font-medium text-muted-foreground transition-colors duration-300 group-hover:border-accent-1/40 group-hover:text-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span
                    aria-hidden
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-500 group-hover:-rotate-45 group-hover:border-transparent group-hover:bg-gradient-accent group-hover:text-accent-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
              );
            })}
          </Reveal>
        </section>

        {/* Methodology & Tech */}
        <section id="stack" className="scroll-mt-24 pt-16">
          <SectionLabel>{t.sections.stack}</SectionLabel>
          <MethodologyStack />
        </section>

        {/* The Architect */}
        <section id="about" className="scroll-mt-24 py-16">
          <Reveal className="bento-card overflow-hidden p-10 md:p-14" stagger={0.12}>
            <motion.div variants={fadeUp}>
              <SectionLabel>{t.sections.about}</SectionLabel>
            </motion.div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-center">
              <motion.div variants={fadeUp} className="md:col-span-1">
                <img
                  src={portrait.url}
                  alt="Portrait of Sebastián Jara, e-commerce developer and UI/UX designer"
                  loading="lazy"
                  decoding="async"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              </motion.div>
              <motion.div variants={fadeUp} className="min-w-0 md:col-span-2">
                <h3 className="max-w-3xl break-words text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                  {t.about.heading.pre}
                  <span className="font-serif italic font-normal text-accent-1">
                    {t.about.heading.em}
                  </span>
                </h3>
                <p className="mt-6 max-w-2xl break-words text-base leading-relaxed text-muted-foreground md:text-lg">
                  {t.about.bio}
                </p>
              </motion.div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Experience */}
              <motion.div variants={fadeUp} className="min-w-0 md:col-span-2">
                <div className="mb-8 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 shrink-0 text-accent-1" />
                  <h4 className="min-w-0 break-words text-lg font-bold tracking-tight">
                    {t.sections.experience}
                  </h4>
                </div>
                <ol className="relative border-l border-border pl-8">
                  {t.experience.map((item) => (
                    <li key={item.role + item.period} className="relative mb-10 last:mb-0">
                      <span className="absolute -left-[2.6rem] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-background bg-gradient-accent" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-accent-1">
                        {item.period}
                      </span>
                      <h5 className="mt-1 break-words text-lg font-bold tracking-tight">
                        {item.role}
                      </h5>
                      <p className="mt-0.5 break-words text-sm font-medium text-foreground/80">
                        {item.company}
                      </p>
                      <ul className="mt-3 flex flex-col gap-2">
                        {item.highlights.map((h) => (
                          <li
                            key={h}
                            className="relative break-words pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55rem] before:h-1 before:w-1 before:rounded-full before:bg-accent-1"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </motion.div>

              {/* Credentials */}
              <motion.div variants={fadeUp} className="min-w-0 md:col-span-1">
                <div className="mb-8 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 shrink-0 text-accent-1" />
                  <h4 className="min-w-0 break-words text-lg font-bold tracking-tight">
                    {t.sections.credentials}
                  </h4>
                </div>
                <ul className="flex flex-col gap-3">
                  {t.credentials.map((c) => (
                    <li
                      key={c.title + c.period}
                      className="min-w-0 break-words rounded-2xl border border-border bg-secondary/60 px-5 py-4 leading-snug"
                    >
                      <p className="text-sm font-bold tracking-tight">{c.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{c.institution}</p>
                      <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-widest text-accent-1">
                        {c.period}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-col flex-wrap gap-3 border-t border-border pt-10 sm:flex-row sm:items-center"
            >
              <MagneticButton
                href={cvAsset.url}
                download="JaraSebastian_CV.pdf"
                className="group inline-flex min-w-0 items-center justify-center gap-2 break-words rounded-full bg-gradient-accent px-8 py-4 text-center text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform duration-200 active:scale-95"
              >
                <Download className="h-4 w-4 shrink-0" />
                {t.about.downloadCv}
              </MagneticButton>
              <div className="flex flex-wrap gap-3">
                <SocialLink
                  icon={Linkedin}
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/sebastian-jara-dsgn/"
                  target="_blank"
                />
                <SocialLink
                  icon={Mail}
                  label={t.about.email}
                  href="mailto:jarasebastian.arg@gmail.com"
                />
                <CopyEmailButton email="jarasebastian.arg@gmail.com" />
              </div>
            </motion.div>
          </Reveal>
          <p className="break-words pb-10 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} — {t.about.footer}
          </p>
        </section>
      </motion.main>
    </div>
  );
}

/* ─────────────────────── components ─────────────────────── */

function SJMonogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-accent text-accent-foreground shadow-[var(--shadow-accent)] ${className}`}
    >
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9"
        role="img"
      >
        <defs>
          <linearGradient id="sj-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.99 0.01 60)" />
            <stop offset="100%" stopColor="oklch(0.95 0.03 60)" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-serif)"
          fontStyle="italic"
          fontWeight="500"
          fontSize="22"
          fill="url(#sj-stroke)"
          letterSpacing="-1"
        >
          SJ
        </text>
      </svg>
    </span>
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
  tag,
  client,
  headline,
  body,
  image,
  href,
  fit,
}: {
  tag: string;
  client: string;
  headline: string;
  body: string;
  image: string;
  href?: string;
  fit?: "cover" | "contain";
}) {
  return (
    <motion.a
      href={href ?? "#"}
      data-cursor-view
      variants={fadeUp}
      className="group relative block h-[20rem] overflow-hidden rounded-[calc(var(--radius)+16px)] border border-border shadow-[var(--shadow-card)] sm:h-[24rem]"
    >
      {fit === "contain" && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full scale-125 object-cover blur-2xl"
        />
      )}
      <img
        src={image}
        alt={`${client} — ${headline}. Shopify e-commerce design, UI/UX and automation case study.`}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 ${
          fit === "contain" ? "object-contain p-6 sm:p-10" : "object-cover"
        }`}
      />
      {/* dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

      {/* tag top-left */}
      <span className="absolute left-6 right-16 top-6 inline-flex max-w-fit flex-wrap items-center gap-2 break-words rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
        <Boxes className="h-3.5 w-3.5 shrink-0" />
        {tag}
      </span>
      <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-white/80 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />

      {/* text emerging from bottom */}
      <div className="absolute inset-x-0 bottom-0 min-w-0 p-6 sm:p-8 md:p-10">
        <p className="break-words text-sm font-semibold text-white/70 opacity-90 transition-all duration-500 md:translate-y-2 md:group-hover:translate-y-0">
          {client}
        </p>
        <h3 className="mt-1 break-words text-xl font-bold tracking-tight text-white transition-all duration-500 sm:text-2xl md:translate-y-3 md:text-3xl md:group-hover:translate-y-0">
          {headline}
        </h3>
        <p className="mt-3 max-w-md break-words text-[0.8125rem] leading-relaxed text-white/80 transition-all duration-500 sm:text-sm md:translate-y-4 md:text-white/0 md:group-hover:translate-y-0 md:group-hover:text-white/80">
          {body}
        </p>
      </div>
    </motion.a>
  );
}

const CODE_SNIPPETS = [
  {
    label: "design.system.ts",
    code:
      "// design & ux — brand systems and interface craft\n" +
      "export const design = {\n" +
      "  photoshop:     'photo retouching & campaign visuals',\n" +
      "  illustrator:   'logo systems & vector assets',\n" +
      "  indesign:      'editorial layouts & guidelines',\n" +
      "  afterEffects:  'motion graphics & social reels',\n" +
      "  figma:         'product UI, prototypes, design systems',\n" +
      "  canva:         'fast-turn decks & social',\n" +
      "  claudeDesign:  'AI-assisted concept exploration',\n" +
      "};",
  },
  {
    label: "storefront.build.ts",
    code:
      "// build & code — shipping storefronts that convert\n" +
      "export const stack = {\n" +
      "  shopify:       'custom themes & headless architecture',\n" +
      "  shopifyLiquid: 'bespoke sections per merchant flow',\n" +
      "  htmlCss:       'responsive, accessible, pixel-accurate',\n" +
      "  webflow:       'high-fidelity marketing sites',\n" +
      "};",
  },
  {
    label: "growth.pipeline.ts",
    code:
      "// scale & automate — retention, paid, lifecycle\n" +
      "growth.klaviyo   = 'CRM flows, segmentation, A/B testing';\n" +
      "growth.hubspot   = 'pipelines & lead scoring';\n" +
      "growth.email     = 'lifecycle automations end-to-end';\n" +
      "growth.metaAds   = 'paid social: creative, testing, reporting';\n" +
      "growth.make      = 'no-code ops across the stack';",
  },
  {
    label: "ai.co-pilot.ts",
    code:
      "// ai — leveraged across every discipline\n" +
      "ai.claude        = 'engineering co-pilot & copywriting';\n" +
      "ai.claudeCoWork  = 'async pair-programming at scale';\n" +
      "ai.gemini        = 'research, data & multimodal analysis';",
  },
];

// All coral, matching the site's accent-1 (~oklch(0.72 0.18 45)).
// Only origin/spread/intensity vary so each card feels alive without breaking the palette.
const CLUSTER_GRADIENTS = [
  "radial-gradient(130% 100% at 100% 0%, oklch(0.78 0.19 45 / 0.55), transparent 62%)",
  "radial-gradient(120% 110% at 0% 100%, oklch(0.75 0.19 42 / 0.5), transparent 65%)",
  "radial-gradient(140% 100% at 100% 100%, oklch(0.8 0.17 48 / 0.5), transparent 62%)",
  "radial-gradient(120% 100% at 0% 0%, oklch(0.77 0.18 44 / 0.5), transparent 65%)",
];

function MethodologyStack() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % ecosystemClusters.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <Reveal className="flex flex-col gap-10" stagger={0.1}>
      {/* Section headline — matches Capabilities pattern */}
      <motion.div
        variants={fadeUp}
        className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end"
      >
        <div className="md:col-span-7">
          <h2 className="mt-4 break-words text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            {t.methodology.heading.pre}
            <span className="font-serif italic font-normal text-accent-1">
              {t.methodology.heading.em}
            </span>
            {t.methodology.heading.post}
          </h2>
        </div>
        <p className="min-w-0 break-words text-base leading-relaxed text-muted-foreground md:col-span-5 md:text-lg">
          {t.methodology.intro}
        </p>
      </motion.div>

      {/* Interactive grid */}
      <motion.div
        variants={fadeUp}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch"
      >
        {/* Cluster cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
          {ecosystemClusters.map((cluster, i) => {
            const isActive = active === i;
            const Icon = cluster.icon;
            const copy = t.methodology.clusters[cluster.id];
            const gradient = CLUSTER_GRADIENTS[i % CLUSTER_GRADIENTS.length];
            return (
              <motion.button
                key={cluster.id}
                type="button"
                onClick={() => setActive(i)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`group relative flex min-w-0 cursor-pointer flex-col gap-5 overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:p-7 ${
                  isActive
                    ? "border-accent-1/50 bg-card shadow-[var(--shadow-card-hover)]"
                    : "border-border bg-card/70 shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:border-accent-1/30 hover:bg-card hover:shadow-[var(--shadow-card-hover)]"
                }`}
                aria-pressed={isActive}
              >
                {/* Coral gradient — matches accent-1. Subtle when idle, alive when active. */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ background: gradient }}
                  initial={false}
                  animate={
                    isActive
                      ? {
                          opacity: [0.7, 1, 0.7],
                          scale: [1, 1.08, 1],
                        }
                      : { opacity: 0.18, scale: 1 }
                  }
                  transition={
                    isActive
                      ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
                      : { duration: 0.4 }
                  }
                />

                <div className="relative flex items-center justify-between">
                  <span
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ring-1 ring-inset transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-accent text-accent-foreground ring-transparent shadow-[var(--shadow-accent)]"
                        : "bg-secondary text-accent-1 ring-border group-hover:bg-gradient-accent group-hover:text-accent-foreground group-hover:ring-transparent"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="min-w-0 text-right">
                      <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="mt-1 break-words text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent-1">
                      {copy.kicker}
                      </div>
                    </div>
                    <span
                      aria-hidden
                      className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-accent-1/40 bg-accent-1/10 text-accent-1"
                          : "border-border bg-background/80 text-muted-foreground group-hover:-rotate-45 group-hover:border-accent-1/40 group-hover:text-accent-1"
                      }`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div className="relative min-w-0 space-y-3">
                  <h3 className="break-words text-2xl font-bold leading-tight tracking-tight md:text-[1.6rem]">
                    {copy.group}
                  </h3>
                  <p className="break-words text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                    {copy.blurb}
                  </p>
                </div>

                <div className="relative mt-auto flex flex-wrap gap-2 pt-2">
                  {cluster.tools.slice(0, 5).map((tool, ti) => (
                    <motion.span
                      key={tool.label}
                      initial={false}
                      animate={{
                        borderColor: isActive
                          ? "color-mix(in oklab, var(--accent-1) 35%, transparent)"
                          : "var(--border)",
                      }}
                      transition={{ delay: isActive ? ti * 0.03 : 0, duration: 0.2 }}
                      className="inline-flex max-w-full items-center gap-1.5 break-words rounded-full border bg-background/60 px-3 py-1 text-[0.7rem] font-medium text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: tool.color }}
                      />
                      {tool.label}
                    </motion.span>
                  ))}
                  {cluster.tools.length > 5 && (
                    <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-3 py-1 text-[0.7rem] font-medium text-muted-foreground/70">
                      +{cluster.tools.length - 5}
                    </span>
                  )}
                </div>

                {/* Bottom active bar — fades in place, no cross-card slide */}
                <motion.span
                  aria-hidden
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0, scaleX: isActive ? 1 : 0.6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "left" }}
                  className="pointer-events-none absolute inset-x-6 bottom-0 h-[2px] rounded-full bg-gradient-accent"
                />
              </motion.button>
            );
          })}
        </div>

        {/* Terminal */}
        <div className="lg:col-span-5">
          <StackTerminal index={active} />
        </div>
      </motion.div>
    </Reveal>
  );
}

function StackTerminal({ index }: { index: number }) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [text, setText] = useState("");

  useEffect(() => {
    if (!inView) return;
    const full = CODE_SNIPPETS[index].code;
    setText("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 14);
    return () => clearInterval(id);
  }, [inView, index]);

  const cluster = ecosystemClusters[index];

  return (
    <div
      ref={ref}
      className="sticky top-24 flex h-full min-h-[26rem] flex-col overflow-hidden rounded-[calc(var(--radius)+16px)] border border-white/10 bg-[oklch(0.16_0.02_265)] shadow-2xl"
    >
      {/* window bar */}
      <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-white/[0.02] px-5 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[oklch(0.65_0.2_25)]/70" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.8_0.16_85)]/70" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.7_0.17_145)]/70" />
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
          <Code2 className="h-3.5 w-3.5" />
          {CODE_SNIPPETS[index].label}
        </span>
        <span className="w-10" />
      </div>

      {/* code body */}
      <div className="relative min-h-[10rem] flex-1 overflow-hidden px-6 py-6">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-accent opacity-15 blur-3xl"
        />
        <AnimatePresence mode="wait">
          <motion.pre
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="relative whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-[oklch(0.9_0.03_120)]"
          >
            {text}
            <span
              className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent-1"
              style={{ animation: "caret-blink 1s step-end infinite" }}
            />
          </motion.pre>
        </AnimatePresence>
      </div>

      {/* footer status */}
      <div className="border-t border-white/10 bg-white/[0.02] px-6 py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-1 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-1" />
            </span>
            <span className="truncate font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
              {t.methodology.live} · {t.methodology.clusters[cluster.id].group}
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
            {String(index + 1).padStart(2, "0")} / {String(ecosystemClusters.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

function SocialLink({
  icon: Icon,
  label,
  href = "#",
  target,
}: {
  icon: typeof Linkedin;
  label: string;
  href?: string;
  target?: string;
}) {
  const isExternal = target === "_blank";
  return (
    <a
      href={href}
      target={target}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 break-words rounded-full border border-border bg-card px-6 py-4 text-sm font-semibold transition-transform duration-200 hover:bg-secondary active:scale-95"
    >
      <Icon className="h-4 w-4 shrink-0" />
      {label}
    </a>
  );
}

function CopyEmailButton({ email }: { email: string }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {
      // Fallback for restricted contexts: use a hidden textarea + execCommand
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        ok = document.execCommand("copy");
      } finally {
        document.body.removeChild(ta);
      }
    }
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={t.about.copyAria}
      className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 break-words rounded-full border border-border bg-card px-6 py-4 text-sm font-semibold transition-transform duration-200 hover:bg-secondary active:scale-95"
    >
      {copied ? (
        <Check className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
      ) : (
        <Copy className="h-4 w-4 shrink-0" aria-hidden />
      )}
      {copied ? t.about.copied : t.about.copy}
    </button>
  );
}
