import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import portrait from "@/assets/portrait.jpg.asset.json";
import cvAsset from "@/assets/JaraSebastian_CV.pdf.asset.json";
import { caseStudies } from "@/lib/caseStudies";
import { motion, useMotionValue, useSpring, useInView, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  ShoppingBag,
  Mail,
  Palette,
  Bot,
  Linkedin,
  ArrowRight,
  Download,
  GraduationCap,
  Briefcase,
  Copy,
  Check,
  MousePointerClick,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ─────────────────────────── data ─────────────────────────── */

const serviceIcons = [Palette, MousePointerClick, ShoppingBag, Bot] as const;

/**
 * Latest CVs (Marketing & Design Lead, exported from Reactive Resume).
 * Flip HAS_NEW_CV to true once /public/cv/ has both PDFs; until then the old file stays.
 */
const HAS_NEW_CV = false;
const CV = {
  en: { href: "/cv/SebastianJara_CV_MarketingDesignLead_EN.pdf", file: "SebastianJara_CV_EN.pdf" },
  es: { href: "/cv/SebastianJara_CV_MarketingDesignLead_ES.pdf", file: "SebastianJara_CV_ES.pdf" },
};
function useCv() {
  const { lang } = useLanguage();
  if (!HAS_NEW_CV) return { href: cvAsset.url, file: "JaraSebastian_CV.pdf" };
  return CV[lang];
}

const EMAIL = "jarasebastian.arg@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/sebastian-jara-dsgn/";


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
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
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
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
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

  /* The native cursor stays visible; this bubble only appears over project cards. */
  return (
    <motion.div style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2">
      <motion.div
        initial={false}
        animate={{ scale: hovering ? 1 : 0, opacity: hovering ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-accent-1"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-accent-foreground">View</span>
      </motion.div>
    </motion.div>
  );
}


/* ─────────────────────────── page ─────────────────────────── */

function Index() {
  const { lang, t } = useLanguage();
  const cv = useCv();
  const [featured, ...rest] = caseStudies;

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <CustomCursor />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
          <a
            href="#top"
            onClick={smoothScrollTo("top")}
            aria-label="Sebastián Jara, home"
            className="mr-auto flex min-h-[44px] min-w-[44px] items-center gap-3 font-display text-lg font-bold tracking-tight"
          >
            <SJMonogram />
            <span className="hidden text-sm font-semibold sm:inline">Sebastián Jara</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {[
              { href: "#works", label: t.nav.work },
              { href: "#services", label: t.nav.services },
              { href: "#about", label: t.nav.about },
              { href: "#contact", label: t.nav.contact },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={smoothScrollTo(l.href.slice(1))}
                className="inline-flex min-h-[44px] items-center rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <a
              href="#contact"
              onClick={smoothScrollTo("contact")}
              className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-accent px-3.5 py-2.5 text-xs font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 sm:px-4 sm:py-2"
            >
              {t.nav.cta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </header>

      <motion.main
        key={lang}
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-6"
      >
        {/* Hero */}
        <div id="top" className="py-20 md:py-28">
          <span className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-1" />
            {t.hero.badge}
          </span>
          <h1 className="mt-6 max-w-5xl break-words text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            {t.hero.headline.pre}
            <span className="font-serif font-normal italic text-accent-1">{t.hero.headline.em1}</span>
            {t.hero.headline.mid}
            <span className="font-serif font-normal italic text-accent-1">{t.hero.headline.em2}</span>
            {t.hero.headline.post}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton
              href="#works"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform duration-200 active:scale-95 sm:px-7"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href={cv.href}
              download={cv.file}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors duration-200 hover:bg-secondary active:scale-95 sm:px-7"
            >
              <Download className="h-4 w-4" />
              {t.hero.ctaSecondary}
            </MagneticButton>
          </div>
        </div>

        {/* Selected work: one card anatomy for every project */}
        <section id="works" className="scroll-mt-24">
          <SectionLabel>{t.sections.works}</SectionLabel>
          <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.1}>
            <ProjectCard slug={featured.slug} wide />
            {rest.map((c) => (
              <ProjectCard key={c.slug} slug={c.slug} />
            ))}
          </Reveal>
        </section>

        {/* What I do (capabilities and tools, merged) */}
        <section id="services" className="scroll-mt-24 pt-28">
          <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end" stagger={0.1}>
            <motion.div variants={fadeUp} className="md:col-span-7">
              <SectionLabel>{t.sections.services}</SectionLabel>
              <h2 className="break-words text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                {t.services.heading.pre}
                <span className="font-serif font-normal italic text-accent-1">{t.services.heading.em}</span>
                {t.services.heading.post}
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-base leading-relaxed text-muted-foreground md:col-span-5 md:text-lg">
              {t.services.intro}
            </motion.p>
          </Reveal>

          <Reveal className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.08}>
            {t.services.items.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <motion.article
                  key={s.title}
                  variants={fadeUp}
                  className="group relative isolate flex h-full flex-col overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)] md:p-10"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />
                  <div className="flex items-center justify-between gap-6">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-accent-1 ring-1 ring-inset ring-border transition-colors duration-500 group-hover:bg-gradient-accent group-hover:text-accent-foreground group-hover:ring-transparent">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-bold leading-tight tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                    {s.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-[0.75rem] font-medium text-muted-foreground transition-colors duration-300 group-hover:border-accent-1/40 group-hover:text-foreground"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </Reveal>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 pt-28">
          <Reveal className="bento-card overflow-hidden p-8 md:p-14" stagger={0.12}>
            <motion.div variants={fadeUp}>
              <SectionLabel>{t.sections.about}</SectionLabel>
            </motion.div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-center">
              <motion.div variants={fadeUp} className="md:col-span-1">
                <img
                  src={portrait.url}
                  alt={t.about.portraitAlt}
                  loading="lazy"
                  decoding="async"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full rounded-2xl bg-secondary object-cover"
                />
              </motion.div>
              <motion.div variants={fadeUp} className="min-w-0 md:col-span-2">
                <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                  {t.about.heading.pre}
                  <span className="font-serif font-normal italic text-accent-1">{t.about.heading.em}</span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{t.about.bio}</p>
              </motion.div>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
              <motion.div variants={fadeUp} className="min-w-0 md:col-span-2">
                <div className="mb-8 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 shrink-0 text-accent-1" />
                  <h3 className="text-lg font-bold tracking-tight">{t.sections.experience}</h3>
                </div>
                <ol className="relative border-l border-border pl-8">
                  {t.experience.map((item) => (
                    <li key={item.role + item.period} className="relative mb-10 last:mb-0">
                      <span className="absolute -left-[2.6rem] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-background bg-gradient-accent" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-accent-1">{item.period}</span>
                      <h4 className="mt-1 text-lg font-bold tracking-tight">{item.role}</h4>
                      <p className="mt-0.5 text-sm font-medium text-foreground/80">{item.company}</p>
                      <ul className="mt-3 flex flex-col gap-2">
                        {item.highlights.map((h) => (
                          <li
                            key={h}
                            className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55rem] before:h-1 before:w-1 before:rounded-full before:bg-accent-1"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </motion.div>

              <motion.div variants={fadeUp} className="min-w-0 md:col-span-1">
                <div className="mb-8 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 shrink-0 text-accent-1" />
                  <h3 className="text-lg font-bold tracking-tight">{t.sections.credentials}</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {t.credentials.map((c) => (
                    <li key={c.title + c.period} className="rounded-2xl border border-border bg-secondary/60 px-5 py-4 leading-snug">
                      <p className="text-sm font-bold tracking-tight">{c.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{c.institution}</p>
                      <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-widest text-accent-1">{c.period}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 py-28">
          <Reveal className="relative overflow-hidden rounded-[calc(var(--radius)+18px)] bg-foreground p-8 text-background md:p-14" stagger={0.1}>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,oklch(0.72_0.18_45_/_0.3),transparent_55%),radial-gradient(circle_at_10%_100%,oklch(0.7_0.19_25_/_0.22),transparent_60%)]"
            />
            <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
              <motion.div variants={fadeUp} className="md:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-widest text-background/60">{t.sections.contact}</span>
                <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                  {t.contact.heading.pre}
                  <span className="font-serif font-normal italic text-accent-1">{t.contact.heading.em}</span>
                  {t.contact.heading.post}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-background/70 md:text-lg">{t.contact.body}</p>
                <a href={`mailto:${EMAIL}`} className="mt-6 inline-block break-all text-lg font-semibold underline decoration-accent-1/60 underline-offset-4 hover:decoration-accent-1 md:text-xl">
                  {EMAIL}
                </a>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col gap-3 md:col-span-5">
                <MagneticButton
                  href={cv.href}
                  download={cv.file}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform duration-200 active:scale-95"
                >
                  <Download className="h-4 w-4 shrink-0" />
                  {t.contact.downloadCv}
                  {HAS_NEW_CV ? <span className="font-normal opacity-80">· {t.contact.cvNote}</span> : null}
                </MagneticButton>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <SocialLink icon={Linkedin} label="LinkedIn" href={LINKEDIN} target="_blank" />
                  <SocialLink icon={Mail} label={t.contact.email} href={`mailto:${EMAIL}`} />
                  <CopyEmailButton email={EMAIL} />
                </div>
              </motion.div>
            </div>
          </Reveal>
          <p className="pt-10 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {t.contact.footer}
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
      <svg viewBox="0 0 40 40" className="h-9 w-9" role="img">
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
  return <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{children}</p>;
}

/** The one card used for every project: same image ratio, same text blocks, same hover. */
function ProjectCard({ slug, wide = false }: { slug: (typeof caseStudies)[number]["slug"]; wide?: boolean }) {
  const { t } = useLanguage();
  const c = caseStudies.find((x) => x.slug === slug)!;
  const copy = t.works.items[slug];
  return (
    <motion.div variants={fadeUp} className={`h-full ${wide ? "md:col-span-2" : ""}`}>
      <Link
        to={c.href}
        data-cursor-view
        className={`group grid h-full overflow-hidden rounded-[calc(var(--radius)+16px)] border border-border bg-card shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1 ${
          wide ? "md:grid-cols-12" : ""
        }`}
      >
        <div className={`relative aspect-[16/10] overflow-hidden bg-secondary ${wide ? "md:col-span-7 md:aspect-auto md:min-h-[24rem]" : ""}`}>
          <img
            src={c.cover}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
        </div>
        <div className={`flex flex-col gap-4 p-6 md:p-8 ${wide ? "md:col-span-5 md:justify-center md:p-10" : ""}`}>
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-foreground">
              {c.client} <span className="font-normal text-muted-foreground">· {c.year}</span>
            </p>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-1" />
          </div>
          <h3 className={`font-bold leading-tight tracking-tight ${wide ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>{copy.headline}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">{copy.body}</p>
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
            <span className="rounded-full bg-gradient-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{copy.tag}</span>
            {copy.disciplines.map((d) => (
              <span key={d} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                {d}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
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
      className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-secondary active:scale-95"
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
      aria-label={t.contact.copyAria}
      className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-secondary active:scale-95"
    >
      {copied ? (
        <Check className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
      ) : (
        <Copy className="h-4 w-4 shrink-0" aria-hidden />
      )}
      {copied ? t.contact.copied : t.contact.copy}
    </button>
  );
}
