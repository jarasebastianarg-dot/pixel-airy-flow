import { useState, useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg.asset.json";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useInView,
  type Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  ShoppingBag,
  Mail,
  Palette,
  Bot,
  Sparkles,
  Linkedin,
  Globe,
  ArrowRight,
  Code2,
  Zap,
  Boxes,
  Download,
  GraduationCap,
  Briefcase,
  MousePointerClick,
  ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ─────────────────────────── data ─────────────────────────── */

const capabilities = [
  {
    icon: ShoppingBag,
    number: "01",
    kicker: "Commerce",
    title: "Shopify & Custom E-commerce",
    desc: "I architect scalable storefronts using custom Liquid, HTML, and CSS. No bloated themes, just high-converting, performance-driven environments.",
    tags: ["Shopify 2.0", "Liquid", "Headless"],
  },
  {
    icon: Zap,
    number: "02",
    kicker: "Retention",
    title: "Retention & Email Marketing",
    desc: "Designing automated Klaviyo CRM flows and targeted campaigns that turn one-time buyers into loyal brand advocates and maximize LTV.",
    tags: ["Klaviyo", "Lifecycle", "LTV"],
  },
  {
    icon: Palette,
    number: "03",
    kicker: "Identity",
    title: "Brand Identity & UI/UX",
    desc: "Crafting cohesive visual systems. From packaging to digital interfaces, I build scalable brands grounded in academic design principles.",
    tags: ["Systems", "UI/UX", "Packaging"],
  },
  {
    icon: Bot,
    number: "04",
    kicker: "Automation",
    title: "AI & Workflow Automation",
    desc: "Connecting the dots between Make, Claude, and Gemini to streamline operations, reduce lead times, and scale businesses efficiently.",
    tags: ["Make", "Claude", "Gemini"],
  },
];

const works = [
  {
    tag: "Shopify Expert",
    client: "Folkways",
    headline: "The Technical Scale",
    body: "Migrated 2000+ products to Shopify 2.0 without losing a single drop of performance.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    href: "/projects/folkways",
  },
  {
    tag: "Lead Developer & Designer",
    client: "Paw Royalty",
    headline: "Full-Stack Launch",
    body: "End-to-end creation for a US market entry. Brand identity, UI/UX and Klaviyo integration.",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",
    href: "/projects/paw-royalty",
  },
  {
    tag: "Brand Manager",
    client: "B-WAY",
    headline: "Global Expansion",
    body: "Steered a 6-person team to scale operations across the US and Brazil, driving digital and 300+ attendee physical events.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "Branding Designer",
    client: "Elevate Local",
    headline: "Clinical Aesthetics",
    body: "Complete visual identity for a European medical marketing agency.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
];

const ecosystemClusters = [
  {
    id: "design",
    group: "Design & UX",
    kicker: "01",
    icon: Palette,
    blurb: "Brand systems, editorial layouts and interface craft.",
    tools: [
      { label: "Photoshop", color: "#31A8FF", use: "Photo retouching and campaign visuals" },
      { label: "Illustrator", color: "#FF9A00", use: "Logo systems and vector creative assets" },
      { label: "InDesign", color: "#FF3366", use: "Editorial layouts and brand guidelines" },
      { label: "After Effects", color: "#9999FF", use: "Motion graphics for social and product" },
      { label: "Figma", color: "#F24E1E", use: "Product UI, prototypes and design systems" },
      { label: "Canva", color: "#00C4CC", use: "Fast-turn social decks and pitch material" },
      { label: "Claude Design", color: "#D97757", use: "AI-assisted concept exploration and iteration" },
    ],
  },
  {
    id: "build",
    group: "Build & Code",
    kicker: "02",
    icon: Code2,
    blurb: "Storefronts and marketing sites shipped end-to-end.",
    tools: [
      { label: "Shopify", color: "#95BF47", use: "Custom theme development and headless architecture" },
      { label: "Shopify Liquid", color: "#008080", use: "Bespoke sections built to each merchant's flow" },
      { label: "HTML / CSS", color: "#E34F26", use: "Responsive, accessible, pixel-accurate markup" },
      { label: "Webflow", color: "#146EF5", use: "High-fidelity marketing sites for brand teams" },
    ],
  },
  {
    id: "scale",
    group: "Scale & Automate",
    kicker: "03",
    icon: Zap,
    blurb: "Retention, paid media and lifecycle automation.",
    tools: [
      { label: "Klaviyo", color: "#20E2C8", use: "CRM flows, segmentation and A/B testing" },
      { label: "HubSpot", color: "#FF7A59", use: "Pipelines, lead scoring and sales enablement" },
      { label: "Email Automation", color: "#F5A623", use: "Lifecycle campaigns end-to-end" },
      { label: "Meta Ads", color: "#0668E1", use: "Paid social: creative, testing and reporting" },
      { label: "Make", color: "#8848AB", use: "No-code pipelines connecting the whole stack" },
    ],
  },
  {
    id: "ai",
    group: "AI Models",
    kicker: "04",
    icon: Bot,
    blurb: "AI leveraged across design, code and growth.",
    tools: [
      { label: "Claude", color: "#D97757", use: "Engineering co-pilot and long-form copywriting" },
      { label: "Claude Co-Work", color: "#B85A3E", use: "Async pair-programming and workflow acceleration" },
      { label: "Gemini", color: "#1A73E8", use: "Research, data analysis and multimodal tasks" },
    ],
  },
];

const experience = [
  {
    role: "Branding & UI/UX Designer",
    company: "Freelance — Remote",
    period: "Oct 2025 — Present",
    highlights: [
      "Lead brand identity and UI/UX for a US + Argentina client portfolio, shipping web and app platforms engineered around the buyer journey.",
      "Build scalable design systems and high-converting landing pages that turn paid social traffic into measurable e-commerce revenue.",
    ],
  },
  {
    role: "Brand Manager",
    company: "B-WAY — Buenos Aires, AR",
    period: "Aug 2024 — Dec 2025",
    highlights: [
      "Directed a 6-person interdisciplinary marketing team running 360° campaigns aligned to commercial KPIs.",
      "Deployed AI-driven analytics workflows that cut production lead times by 30% and sharpened targeting precision.",
      "Owned e-commerce and paid media strategy across 3 international markets (US, BR, AR), improving ROAS on core SKUs.",
      "Orchestrated flagship events (B-WAY Experience, Barber Week) driving qualified lead generation at scale.",
    ],
  },
  {
    role: "Product Designer",
    company: "B-WAY — Buenos Aires, AR",
    period: "Nov 2023 — Aug 2024",
    highlights: [
      "Produced high-impact e-commerce visuals and paid social assets that lifted CTR and engagement across the funnel.",
      "Optimized digital storefront UX to reduce friction and support product conversion and brand trust.",
      "Designed international trade-show stands optimized for visitor flow and on-site lead capture.",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Freelance — Remote",
    period: "2021 — 2023",
    highlights: [
      "Delivered end-to-end brand identities and UI/UX systems for clients across multiple industries.",
      "Ran editorial and social content strategy focused on brand voice consistency and audience retention.",
    ],
  },
];

const credentials = [
  {
    title: "Bachelor's Degree in\u00a0Graphic Design",
    institution: "UADE (Universidad Argentina de la Empresa)",
    period: "2019 — 2024",
  },
  {
    title: "Bachelor's Degree in Multimedia & Interaction Design",
    institution: "UADE (Universidad Argentina de la Empresa)",
    period: "2020 — 2024",
  },
  {
    title: "Digital Marketing & Growth Hacking with GenAI",
    institution: "IBM — Professional Certificate",
    period: "Expected Apr 2026",
  },
  {
    title: "Foundations of Digital Marketing & E-commerce",
    institution: "Google - Professional Certificate",
    period: "2026",
  },
  {
    title: "OPI 2.0 — Public Speaking",
    institution: "Franco Pisso - Professional Certificate",
    period: "2026",
  },
  {
    title: "CAE - Certificate in Advanced English C1",
    institution: "Cambridge",
    period: "2018",
  },
];

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

function MagneticButton({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
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
  const [lang, setLang] = useState<"EN" | "ES">("EN");

  return (
    <div className="min-h-screen bg-background text-foreground md:cursor-none">
      <CustomCursor />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
          <a
            href="#top"
            onClick={smoothScrollTo("top")}
            aria-label="SJ — home"
            className="mr-auto flex items-center gap-2 font-display text-lg font-bold tracking-tight"
          >
            <SJMonogram />
            <span className="sr-only">Sebastián</span>
          </a>

          {/* Tertiary: section links */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 md:flex"
          >
            {[
              { href: "#works", label: "Work" },
              { href: "#capabilities", label: "Capabilities" },
              { href: "#stack", label: "Stack" },
              { href: "#about", label: "About" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={smoothScrollTo(l.href.slice(1))}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Secondary: language toggle */}
            <div className="flex items-center rounded-full border border-border bg-card p-1 text-[0.7rem] font-semibold">
              {(["EN", "ES"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full px-2.5 py-0.5 transition-colors ${
                    lang === l
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Primary CTA */}
            <a
              href="#works"
              onClick={smoothScrollTo("works")}
              className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-accent px-4 py-2 text-xs font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <Reveal className="py-20 md:py-28" stagger={0.12}>
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
            Creative Developer &amp; Growth Partner
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl"
          >
            I build{" "}
            <span className="font-serif italic font-normal text-accent-1">brands</span> that stand
            out and{" "}
            <span className="font-serif italic font-normal text-accent-1">systems</span> that sell.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            High-end visual design and technical e-commerce execution focused on converting.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#works"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Get in touch
            </MagneticButton>
          </motion.div>
        </Reveal>

        {/* Selected Works */}
        <section id="works" className="scroll-mt-24 pt-8">
          <SectionLabel>Selected Works</SectionLabel>
          <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.12}>
            {works.map((w) => (
              <WorkCard key={w.client} {...w} />
            ))}
          </Reveal>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="scroll-mt-24 pt-24">
          <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end" stagger={0.1}>
            <motion.div variants={fadeUp} className="md:col-span-7">
              <SectionLabel>Core Capabilities</SectionLabel>
              <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                Four disciplines,{" "}
                <span className="font-serif italic font-normal text-accent-1">one</span> operator.
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="md:col-span-5 text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              I don&apos;t hand off between design, code, and growth. Every capability below is
              executed by the same hands — so strategy, aesthetics and performance stay in sync.
            </motion.p>
          </Reveal>

          <Reveal className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.08}>
            {capabilities.map((c) => (
              <motion.article
                key={c.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative isolate flex h-full flex-col overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)] md:p-10"
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
                  <div className="text-right">
                    <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground">
                      {c.number}
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
                  {c.desc}
                </p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
                  <ul className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-[0.7rem] font-medium text-muted-foreground transition-colors duration-300 group-hover:border-accent-1/40 group-hover:text-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span
                    aria-hidden
                    className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-500 group-hover:-rotate-45 group-hover:border-transparent group-hover:bg-gradient-accent group-hover:text-accent-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </Reveal>
        </section>

        {/* Methodology & Tech */}
        <section id="stack" className="scroll-mt-24 pt-16">
          <SectionLabel>Methodology &amp; Stack</SectionLabel>
          <MethodologyStack />
        </section>

        {/* The Architect */}
        <section id="about" className="scroll-mt-24 py-16">
          <Reveal className="bento-card overflow-hidden p-10 md:p-14" stagger={0.12}>
            <motion.div variants={fadeUp}>
              <SectionLabel>The Architect</SectionLabel>
            </motion.div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-center">
              <motion.div variants={fadeUp} className="md:col-span-1">
                <img
                  src={portrait.url}
                  alt="Portrait of Sebastián"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              </motion.div>
              <motion.div variants={fadeUp} className="md:col-span-2">
                <h3 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                  Systemic Logic.{" "}
                  <span className="font-serif italic font-normal text-accent-1">
                    Relentless Discipline.
                  </span>
                </h3>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  I'm Sebastián. My background merges academic graphic design with deep technical
                  execution. I build complex automation workflows and highly customized E-commerce
                  architectures because I understand that beautiful design is useless if it doesn't
                  perform. I bring endurance and precision to every brand I scale.
                </p>
              </motion.div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Experience */}
              <motion.div variants={fadeUp} className="md:col-span-2">
                <div className="mb-8 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-accent-1" />
                  <h4 className="text-lg font-bold tracking-tight">Experience</h4>
                </div>
                <ol className="relative border-l border-border pl-8">
                  {experience.map((item) => (
                    <li key={item.role + item.period} className="relative mb-10 last:mb-0">
                      <span className="absolute -left-[2.6rem] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-background bg-gradient-accent" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-accent-1">
                        {item.period}
                      </span>
                      <h5 className="mt-1 text-lg font-bold tracking-tight">{item.role}</h5>
                      <p className="mt-0.5 text-sm font-medium text-foreground/80">
                        {item.company}
                      </p>
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

              {/* Credentials */}
              <motion.div variants={fadeUp} className="md:col-span-1">
                <div className="mb-8 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-accent-1" />
                  <h4 className="text-lg font-bold tracking-tight">Credentials</h4>
                </div>
                <ul className="flex flex-col gap-3">
                  {credentials.map((c) => (
                    <li
                      key={c.title + c.period}
                      className="rounded-2xl border border-border bg-secondary/60 px-5 py-4 leading-snug"
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
              className="mt-12 flex flex-col gap-3 border-t border-border pt-10 sm:flex-row sm:items-center"
            >
              <MagneticButton
                href="/resume.pdf"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)]"
              >
                <Download className="h-4 w-4" />
                Download Résumé
              </MagneticButton>
              <div className="flex gap-3">
                <SocialLink icon={Linkedin} label="LinkedIn" />
                <SocialLink icon={Globe} label="Behance" />
                <SocialLink icon={Mail} label="Email" />
              </div>
            </motion.div>
          </Reveal>
          <p className="pb-10 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Crafted in Buenos Aires.
          </p>
        </section>
      </main>
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
}: {
  tag: string;
  client: string;
  headline: string;
  body: string;
  image: string;
  href?: string;
}) {
  return (
    <motion.a
      href={href ?? "#"}
      data-cursor-view
      variants={fadeUp}
      className="group relative block h-[24rem] overflow-hidden rounded-[calc(var(--radius)+16px)] border border-border shadow-[var(--shadow-card)]"
    >
      <img
        src={image}
        alt={`${client} — ${headline}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
      />
      {/* dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

      {/* tag top-left */}
      <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
        <Boxes className="h-3.5 w-3.5" />
        {tag}
      </span>
      <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-white/80 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />

      {/* text emerging from bottom */}
      <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
        <p className="translate-y-2 text-sm font-semibold text-white/70 opacity-90 transition-all duration-500 group-hover:translate-y-0">
          {client}
        </p>
        <h3 className="mt-1 translate-y-3 text-2xl font-bold tracking-tight text-white transition-all duration-500 group-hover:translate-y-0 md:text-3xl">
          {headline}
        </h3>
        <p className="mt-3 max-w-md translate-y-4 text-sm leading-relaxed text-white/0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-white/80">
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

function MethodologyStack() {
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
    <Reveal
      className="grid grid-cols-1 gap-6 md:grid-cols-3"
      stagger={0.12}
    >
      <motion.div
        variants={fadeUp}
        className="md:col-span-2"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <CodeApproach index={active} />
      </motion.div>
      <motion.div
        variants={fadeUp}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Ecosystem active={active} onSelect={setActive} />
      </motion.div>
    </Reveal>
  );
}

function CodeApproach({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [text, setText] = useState("");

  // typewriter effect for the current snippet
  useEffect(() => {
    if (!inView) return;
    const full = CODE_SNIPPETS[index].code;
    setText("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, [inView, index]);

  return (
    <div
      ref={ref}
      className="flex h-full flex-col overflow-hidden rounded-[calc(var(--radius)+16px)] border border-white/10 bg-[oklch(0.16_0.02_265)] shadow-[var(--shadow-card)]"
    >
      {/* window bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-[oklch(0.65_0.2_25)]" />
        <span className="h-3 w-3 rounded-full bg-[oklch(0.8_0.16_85)]" />
        <span className="h-3 w-3 rounded-full bg-[oklch(0.7_0.17_145)]" />
        <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-white/40">
          <Code2 className="h-3.5 w-3.5" />
          {CODE_SNIPPETS[index].label}
        </span>
      </div>
      {/* code body */}
      <div className="min-h-[6rem] flex-1 px-6 py-6">
        <AnimatePresence mode="wait">
          <motion.pre
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-[oklch(0.85_0.12_150)]"
          >
            {text}
            <span
              className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent-1"
              style={{ animation: "caret-blink 1s step-end infinite" }}
            />
          </motion.pre>
        </AnimatePresence>
      </div>
      {/* copy */}
      <div className="border-t border-white/10 px-6 py-7">
        <p className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          Execution{" "}
          <span className="font-serif italic font-normal text-accent-1">&gt;</span> Wireframes.
        </p>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60">
          I bypass static mockups. Designing and iterating directly over Shopify Liquid and code
          allows for faster time-to-market and absolute functional realism from day one.
        </p>
      </div>
    </div>
  );
}

function Ecosystem({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius)+16px)] border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl font-normal leading-tight tracking-tight md:text-3xl">
            The <span className="italic text-accent-1">ecosystem</span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Four disciplines, orchestrated as one system.
          </p>
        </div>
        <span className="rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {String(active + 1).padStart(2, "0")} / {String(ecosystemClusters.length).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-4 flex items-center gap-2 text-xs font-medium text-accent-1">
        <MousePointerClick className="h-3.5 w-3.5" />
        Click any discipline to explore its stack
      </p>

      <div className="mt-4 flex flex-1 flex-col gap-3">
        {ecosystemClusters.map((cluster, i) => {
          const isActive = active === i;
          const Icon = cluster.icon;
          return (
            <button
              key={cluster.id}
              type="button"
              onClick={() => onSelect(i)}
              className={`group relative overflow-hidden rounded-2xl border text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                isActive
                  ? "border-accent-1/40 bg-secondary shadow-[var(--shadow-card)]"
                  : "cursor-pointer border-border bg-transparent shadow-none hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-secondary/60 hover:shadow-[var(--shadow-card)]"
              }`}
            >
              <div className="flex items-center gap-3 px-4 py-3.5">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "border-foreground/20 bg-background text-accent-1 shadow-sm"
                      : "border-border bg-card text-muted-foreground group-hover:border-foreground/15 group-hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {cluster.kicker}
                    </span>
                    <p className="truncate text-sm font-semibold tracking-tight">
                      {cluster.group}
                    </p>
                  </div>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">
                    {cluster.tools.length} tools · {cluster.blurb}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="hidden text-[10px] font-semibold uppercase tracking-widest text-accent-1 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:block">
                    {isActive ? "Active" : "Open"}
                  </span>
                  <motion.span
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className={`grid h-7 w-7 place-items-center rounded-full border transition-colors duration-300 ${
                      isActive
                        ? "border-accent-1/40 bg-accent-1/10 text-accent-1"
                        : "border-border bg-card text-muted-foreground group-hover:border-foreground/20 group-hover:text-foreground"
                    }`}
                  >
                    <ChevronDown className="h-3.5 w-3.5" />
                  </motion.span>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="divide-y divide-border/60 border-t border-border/60">
                      {cluster.tools.map((tool, ti) => (
                        <motion.li
                          key={tool.label}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 + ti * 0.04, duration: 0.25 }}
                          className="flex items-start gap-3 px-4 py-2.5"
                        >
                          <span
                            className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                            style={{
                              background: tool.color,
                              boxShadow: `0 0 10px -2px ${tool.color}`,
                            }}
                          />
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold tracking-tight">{tool.label}</p>
                            <p className="text-xs leading-relaxed text-muted-foreground">
                              {tool.use}
                            </p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {isActive && (
                <motion.span
                  layoutId="ecosystem-active-bar"
                  className="absolute inset-y-0 left-0 w-[3px] bg-gradient-accent"
                />
              )}
            </button>
          );
        })}
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
