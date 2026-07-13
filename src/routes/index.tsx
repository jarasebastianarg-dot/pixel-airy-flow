import { useState, useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
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
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ─────────────────────────── data ─────────────────────────── */

const capabilities = [
  {
    icon: ShoppingBag,
    title: "Shopify & Custom E-commerce",
    desc: "I architect scalable storefronts using custom Liquid, HTML, and CSS. No bloated themes, just high-converting, performance-driven environments.",
  },
  {
    icon: Zap,
    title: "Retention & Email Marketing",
    desc: "Designing automated Klaviyo CRM flows and targeted campaigns that turn one-time buyers into loyal brand advocates and maximize LTV.",
  },
  {
    icon: Palette,
    title: "Brand Identity & UI/UX",
    desc: "Crafting cohesive visual systems. From packaging to digital interfaces, I build scalable brands grounded in academic design principles.",
  },
  {
    icon: Bot,
    title: "AI & Workflow Automation",
    desc: "Connecting the dots between Make, Claude, and Gemini to streamline operations, reduce lead times, and scale businesses efficiently.",
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
  },
  {
    tag: "Lead Developer & Designer",
    client: "Paw Royalty",
    headline: "Full-Stack Launch",
    body: "End-to-end creation for a US market entry. Brand identity, UI/UX and Klaviyo integration.",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",
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
    group: "Design & UX",
    tools: [
      { label: "Photoshop", color: "#31A8FF" },
      { label: "Illustrator", color: "#FF9A00" },
      { label: "InDesign", color: "#FF3366" },
      { label: "After Effects", color: "#9999FF" },
    ],
  },
  {
    group: "Build & Code",
    tools: [
      { label: "Shopify", color: "#95BF47" },
      { label: "Liquid", color: "#008080" },
    ],
  },
  {
    group: "Scale & Automate",
    tools: [
      { label: "Klaviyo (CRM)", color: "#20E2C8" },
      { label: "Meta Ads", color: "#0668E1" },
      { label: "Make Automations", color: "#8848AB" },
    ],
  },
  {
    group: "AI Models",
    tools: [
      { label: "Claude", color: "#D97757" },
      { label: "Gemini", color: "#1A73E8" },
    ],
  },
];

const experience = [
  {
    role: "Freelance UI/UX & E-commerce Developer",
    period: "2025 — Present",
    desc: "Leading custom ecosystems for US/LATAM.",
  },
  {
    role: "Brand Manager @ B-WAY",
    period: "2024 — 2025",
    desc: "Scaled operations across 3 international markets, led a 6-person team.",
  },
  {
    role: "Product Designer @ B-WAY",
    period: "2023 — 2024",
    desc: "E-commerce visuals and CRO.",
  },
];

const credentials = [
  "B.A. Graphic Design (UADE, 2019-2024)",
  "B.A. Multimedia & Interaction Design (UADE, 2020-2024)",
  "Digital Marketing & GenAI (IBM/Google)",
  "C1 Advanced English (Cambridge)",
];

/* ─────────────────────── motion helpers ─────────────────────── */

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
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="flex items-center gap-2 font-display text-lg font-bold tracking-tight"
          >
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
            We build{" "}
            <span className="font-serif italic font-normal text-accent-1">brands</span> that stand
            out and{" "}
            <span className="font-serif italic font-normal text-accent-1">systems</span> that sell.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Bridging the gap between high-end visual design and technical e-commerce execution.
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
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Get in touch
            </MagneticButton>
          </motion.div>
        </Reveal>

        {/* Selected Works */}
        <section id="works" className="pt-8">
          <SectionLabel>Selected Works</SectionLabel>
          <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.12}>
            {works.map((w) => (
              <WorkCard key={w.client} {...w} />
            ))}
          </Reveal>
        </section>

        {/* Capabilities */}
        <section className="pt-16">
          <SectionLabel>Core Capabilities</SectionLabel>
          <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {capabilities.map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                className="group relative flex flex-col rounded-[calc(var(--radius)+16px)] p-[1px] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[calc(var(--radius)+16px)] bg-gradient-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="relative flex h-full flex-col rounded-[calc(var(--radius)+15px)] border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-colors duration-300">
                  <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-accent-1 transition-colors duration-300 group-hover:bg-gradient-accent group-hover:text-accent-foreground">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </Reveal>
        </section>

        {/* Methodology & Tech */}
        <section className="pt-16">
          <SectionLabel>Methodology &amp; Stack</SectionLabel>
          <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.12}>
            <motion.div variants={fadeUp} className="md:col-span-2">
              <CodeApproach />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Ecosystem />
            </motion.div>
          </Reveal>
        </section>

        {/* The Architect */}
        <section id="contact" className="py-16">
          <Reveal className="bento-card overflow-hidden p-10 md:p-14" stagger={0.12}>
            <motion.div variants={fadeUp}>
              <SectionLabel>The Architect</SectionLabel>
            </motion.div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-center">
              <motion.div variants={fadeUp} className="md:col-span-1">
                <img
                  src={portrait}
                  alt="Portrait of Sebastián"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full rounded-2xl object-cover grayscale"
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
                    <li key={item.role} className="relative mb-10 last:mb-0">
                      <span className="absolute -left-[2.6rem] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-background bg-gradient-accent" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-accent-1">
                        {item.period}
                      </span>
                      <h5 className="mt-1 text-lg font-bold tracking-tight">{item.role}</h5>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
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
                <ul className="flex flex-col gap-4">
                  {credentials.map((c) => (
                    <li
                      key={c}
                      className="rounded-2xl border border-border bg-secondary/60 px-5 py-4 text-sm font-semibold leading-snug"
                    >
                      {c}
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
}: {
  tag: string;
  client: string;
  headline: string;
  body: string;
  image: string;
}) {
  return (
    <motion.a
      href="#"
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
    label: "theme.liquid",
    code: "{% assign conversion = 'maximized' %}\n{% render 'ui', mode: 'ruthless' %}",
  },
  {
    label: "brand.system.ts",
    code: "import { Ps, Ai, Ae } from '@adobe/cc';\nconst system = new BrandIdentity();",
  },
  {
    label: "pipeline.flow",
    code: "webhook.listen(Klaviyo)\n  .pipe(Make)\n  .process(Claude)\n  .output(Growth);",
  },
];

function CodeApproach() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  // rotate snippets every 4s once in view
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % CODE_SNIPPETS.length);
    }, 4000);
    return () => clearInterval(id);
  }, [inView]);

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
    }, 32);
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

function Ecosystem() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius)+16px)] border border-border bg-card p-8 shadow-[var(--shadow-card)]">
      <h3 className="text-lg font-bold tracking-tight">The Ecosystem</h3>
      <p className="mt-1 text-sm text-muted-foreground">Tools I orchestrate as one system.</p>
      <div className="mt-8 flex flex-1 flex-col gap-6">
        {ecosystemClusters.map((cluster) => (
          <div key={cluster.group}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {cluster.group}
            </p>
            <div className="flex flex-wrap gap-2">
              {cluster.tools.map((tool) => (
                <span
                  key={tool.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-semibold"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      background: tool.color,
                      boxShadow: `0 0 10px -2px ${tool.color}`,
                    }}
                  />
                  {tool.label}
                </span>
              ))}
            </div>
          </div>
        ))}
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
