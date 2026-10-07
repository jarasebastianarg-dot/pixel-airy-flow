import { createFileRoute, Link } from "@tanstack/react-router";
import { LanguageToggle } from "@/components/LanguageToggle";
import { AnimatePresence, motion, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTr } from "@/i18n/projectTranslate";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  LayoutTemplate,
  Megaphone,
  Handshake,
  Film,
  Bot,
  Users,
  Globe2,
  Timer,
  X,
  ZoomIn,
  Info,
} from "lucide-react";

const A = "/work/xtendo";

export const Route = createFileRoute("/projects/xtendo-global")({
  component: XtendoProject,
  head: () => ({
    meta: [
      { title: "Xtendo Global — Building the Brand System Behind a 1,500-Person Rebrand" },
      {
        name: "description",
        content:
          "Case study: supervising Xtendo Global's rebrand and building the system around it — a 45-page brand manual, 15+ templates, campaigns and motion for a B2B BPO & CX company with 1,500+ people in 9 countries.",
      },
      { property: "og:title", content: "Xtendo Global — Brand System Case Study" },
      {
        property: "og:description",
        content:
          "How I turned a new logo into a brand system a 1,500-person company can use: guidelines, templates, campaigns and motion.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects/xtendo-global" },
      { property: "og:image", content: `${A}/xtendo-manual-01.webp` },
    ],
    links: [{ rel: "canonical", href: "/projects/xtendo-global" }],
  }),
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({
  children,
  className,
  stagger = 0.06,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
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

function Lightbox({
  src,
  label,
  onClose,
}: {
  src: string | null;
  label?: string;
  onClose: () => void;
}) {
  const { tr } = useTr();
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-md md:p-10"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={label ?? tr("Image preview")}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground shadow-[var(--shadow-card)] md:right-6 md:top-6"
            aria-label={tr("Close preview")}
          >
            <X className="h-5 w-5" />
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="relative max-h-[90vh] w-[95vw] max-w-6xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={src} alt={label ?? ""} className="block h-auto w-full" draggable={false} />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

const stack = [
  "Rebrand supervision",
  "Brand guidelines",
  "Template library",
  "Campaign design",
  "Motion graphics",
  "AI design systems",
  "Team leadership",
];

const focus = ["1,500+ people · 9 countries", "Team of 2 designers", "Working with the CEO"];

const chapters = [
  {
    n: "01",
    icon: Handshake,
    kicker: "Direction",
    title: "Supervising the rebrand",
    body: "Joined mid-process and took ownership of the rollout: worked hand in hand with the CEO on logo decisions and brand messaging, and art-directed how the new identity would be applied everywhere.",
    tags: ["CEO partnership", "Art direction", "Rollout"],
  },
  {
    n: "02",
    icon: BookOpen,
    kicker: "Foundations",
    title: "A 45-page brand manual",
    body: "Logo construction and usage, color, typography, voice and tone, photography, iconography, web UI components, social media and co-branding rules — one source of truth for the whole company.",
    tags: ["45 pages", "Voice & tone", "Web UI", "Co-branding"],
  },
  {
    n: "03",
    icon: LayoutTemplate,
    kicker: "Scale",
    title: "A template library anyone can use",
    body: "15+ editable templates so any team can produce on-brand material without waiting for a designer: decks, letterhead, business cards, case studies, internal documents and comms, video-call backgrounds, webinar covers, LinkedIn banners, lead-gen and hiring posts — plus a LinkedIn guide and an AI prompt book.",
    tags: ["15+ templates", "LinkedIn guide", "AI prompt book"],
  },
  {
    n: "04",
    icon: Megaphone,
    kicker: "Activation",
    title: "Campaigns & motion",
    body: "Put the new brand to work: webinar campaigns with Frontline and the AEERC Contact Center Week in Spain, Conarec 2026 speaker posts, a WhatsApp-pricing e-book in Spanish and Portuguese, and motion pieces for LinkedIn.",
    tags: ["Webinars", "E-book ES · PT", "LinkedIn", "Motion"],
  },
];

type Shot = { src: string; label: string };

const manual: Shot[] = [
  { src: `${A}/xtendo-manual-04.webp`, label: "Logo · primary lockups" },
  { src: `${A}/xtendo-manual-06.webp`, label: "Authorized versions" },
  { src: `${A}/xtendo-manual-07.webp`, label: "Isotype" },
  { src: `${A}/xtendo-manual-13.webp`, label: "Color palette" },
  { src: `${A}/xtendo-manual-14.webp`, label: "Supporting colors" },
  { src: `${A}/xtendo-manual-18.webp`, label: "Typography · Manrope" },
  { src: `${A}/xtendo-manual-19.webp`, label: "Type hierarchy" },
  { src: `${A}/xtendo-manual-23.webp`, label: "Brand personality" },
  { src: `${A}/xtendo-manual-28.webp`, label: "Photography" },
  { src: `${A}/xtendo-manual-33.webp`, label: "Web UI components" },
  { src: `${A}/xtendo-manual-34.webp`, label: "Cards & layouts" },
  { src: `${A}/xtendo-manual-38.webp`, label: "Social profiles" },
  { src: `${A}/xtendo-manual-40.webp`, label: "Social templates" },
  { src: `${A}/xtendo-manual-43.webp`, label: "Co-branding" },
];

const templates: Shot[] = [
  { src: `${A}/xtendo-internal-anniversary.webp`, label: "Internal comms · Anniversary" },
  { src: `${A}/xtendo-card-front.webp`, label: "Business card · Front" },
  { src: `${A}/xtendo-tpl-carousel-1.webp`, label: "Lead-gen carousel · 1" },
  { src: `${A}/xtendo-case-study-1.webp`, label: "Case study · A4" },
  { src: `${A}/xtendo-tpl-webinar-cover.webp`, label: "Webinar cover" },
  { src: `${A}/xtendo-tpl-carousel-2.webp`, label: "Lead-gen carousel · 2" },
  { src: `${A}/xtendo-internal-birthday.webp`, label: "Internal comms · Birthday" },
  { src: `${A}/xtendo-card-dark.webp`, label: "Business card · Dark" },
  { src: `${A}/xtendo-tpl-story.webp`, label: "Lead magnet · Story" },
  { src: `${A}/xtendo-case-study-2.webp`, label: "Case study · Results" },
  { src: `${A}/xtendo-tpl-hiring.webp`, label: "Hiring post" },
  { src: `${A}/xtendo-internal-welcome.webp`, label: "Internal comms · Welcome" },
  { src: `${A}/xtendo-tpl-videocall.webp`, label: "Video-call background" },
  { src: `${A}/xtendo-tpl-carousel-3.webp`, label: "Lead-gen carousel · 3" },
  { src: `${A}/xtendo-card-back.webp`, label: "Business card · Back" },
  { src: `${A}/xtendo-internal-dark.webp`, label: "Internal comms · Dark" },
];

const campaigns: Shot[] = [
  { src: `${A}/xtendo-post-webinar-sales.webp`, label: "Webinar · Smart Sales & Automation" },
  { src: `${A}/xtendo-ebook-cover.webp`, label: "E-book · WhatsApp pricing" },
  { src: `${A}/xtendo-post-conarec.webp`, label: "Conarec 2026 · Speaker post" },
  { src: `${A}/xtendo-infographic.webp`, label: "LinkedIn infographic" },
  { src: `${A}/xtendo-ebook-slide1.webp`, label: "E-book carousel · 1/5" },
  { src: `${A}/xtendo-post-webinar-collections.webp`, label: "Webinar · Collections" },
  { src: `${A}/xtendo-team-presentation.webp`, label: "Team presentation" },
  { src: `${A}/xtendo-ebook-slide2.webp`, label: "E-book carousel · 2/5" },
  { src: `${A}/xtendo-post-frontline.webp`, label: "Frontline solution piece" },
  { src: `${A}/xtendo-blog-post.webp`, label: "Blog cover" },
  { src: `${A}/xtendo-ebook-slide3.webp`, label: "E-book carousel · 3/5" },
  { src: `${A}/xtendo-ebook-page-1.webp`, label: "E-book · Cover page" },
  { src: `${A}/xtendo-cover-ai.webp`, label: "Campaign key visual" },
  { src: `${A}/xtendo-ebook-slide4.webp`, label: "E-book carousel · 4/5" },
  { src: `${A}/xtendo-ebook-page-3.webp`, label: "E-book · Inside page" },
  { src: `${A}/xtendo-ebook-slide5.webp`, label: "E-book carousel · 5/5" },
];

const shorts = [
  { src: `${A}/xtendo-short-01.mp4`, poster: `${A}/xtendo-short-01-poster.webp`, title: "Webinar short · Response time" },
  { src: `${A}/xtendo-short-05.mp4`, poster: `${A}/xtendo-short-05-poster.webp`, title: "Webinar short · AI in sales" },
];

const metrics = [
  { icon: BookOpen, value: "45-page brand manual", label: "One source of truth for logo, color, type, voice, photography, web UI and social." },
  { icon: LayoutTemplate, value: "15+ templates", label: "Editable files built so any team can ship on-brand material without a designer." },
  { icon: Timer, value: "4–5 days → 1", label: "Landing page delivery after building AI-powered design systems in Claude." },
  { icon: Globe2, value: "ES · PT · 9 countries", label: "Campaigns for LATAM, Brazil and Spain under one consistent brand." },
];

function MasonryGrid({ shots, onOpen }: { shots: Shot[]; onOpen: (s: Shot) => void }) {
  const { tr } = useTr();
  return (
    <div className="mt-12 columns-2 gap-4 md:columns-3 md:gap-6 [&>*]:mb-4 md:[&>*]:mb-6">
      {shots.map((s) => (
        <button
          key={s.src}
          type="button"
          onClick={() => onOpen(s)}
          className="group relative block w-full break-inside-avoid overflow-hidden rounded-[calc(var(--radius)+10px)] border border-border bg-card text-left shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1/60"
          aria-label={`${tr("Open")} ${tr(s.label)}`}
        >
          <img
            src={s.src}
            alt={tr(s.label)}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
            draggable={false}
          />
          <div className="flex items-center justify-between gap-2 border-t border-border bg-card px-3 py-2">
            <span className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {tr(s.label)}
            </span>
            <ZoomIn className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent-1" />
          </div>
        </button>
      ))}
    </div>
  );
}

function SectionHeader({
  label,
  pre,
  em,
  post,
  body,
}: {
  label: string;
  pre: string;
  em: string;
  post?: string;
  body: string;
}) {
  const { tr } = useTr();
  return (
    <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
      <motion.div variants={fadeUp} className="md:col-span-7">
        <SectionLabel>{tr(label)}</SectionLabel>
        <h2 className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
          {tr(pre)}{" "}
          <span className="font-serif italic font-normal text-accent-1">{tr(em)}</span>
          {post ? ` ${tr(post)}` : ""}
        </h2>
      </motion.div>
      <motion.p
        variants={fadeUp}
        className="text-base leading-relaxed text-muted-foreground md:col-span-5 md:text-lg"
      >
        {tr(body)}
      </motion.p>
    </Reveal>
  );
}

function XtendoProject() {
  const { tr } = useTr();
  const [lightbox, setLightbox] = useState<Shot | null>(null);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Lightbox src={lightbox?.src ?? null} label={lightbox ? tr(lightbox.label) : undefined} onClose={() => setLightbox(null)} />

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
              {tr("Featured Case Study")}
            </span>
            <LanguageToggle />
          </div>
        </div>
      </div>

      {/* Hero — visible on first paint, no entrance animation */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_-10%,oklch(0.72_0.18_45_/_0.18),transparent_55%),radial-gradient(circle_at_90%_10%,oklch(0.55_0.2_265_/_0.14),transparent_60%)]"
        />
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
          <SectionLabel>{tr("Brand System · B2B BPO & CX")}</SectionLabel>
          <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-[4.25rem]">
            Xtendo Global: {tr("turning a new logo into a")}{" "}
            <span className="font-serif italic font-normal text-accent-1">{tr("brand system")}</span>{" "}
            {tr("for 1,500+ people.")}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {tr("I joined Xtendo Global as")}{" "}
            <span className="font-semibold text-foreground">{tr("Brand & Design Strategy Lead")}</span>{" "}
            {tr("in the middle of its rebrand. My job: supervise the rebrand and build everything around the new logo — the brand manual, the template library, the campaigns and the motion that put the identity to work across 9 countries.")}
          </p>

          <div className="mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-border bg-card/70 p-4 text-sm leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent-1" />
            <span>
              <span className="font-semibold text-foreground">{tr("Credits:")}</span>{" "}
              {tr("the logo was designed by an external studio. The brand manual, templates, campaigns and motion on this page were designed by me, leading a team of 2 designers.")}
            </span>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {tr("Role")}
              </div>
              <div className="mt-3 text-base font-semibold text-foreground md:text-lg">
                {tr("Brand & Design Strategy Lead")}
              </div>
              <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                {tr("Aug 2026 – Present · Remote")}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {tr("What I Actually Did")}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-foreground/80"
                  >
                    {tr(t)}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {tr("Scope")}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {focus.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-accent px-3 py-1 text-xs font-semibold text-accent-foreground"
                  >
                    <Sparkles className="h-3 w-3" />
                    {tr(f)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cover */}
        <div className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
          <button
            type="button"
            onClick={() => setLightbox({ src: `${A}/xtendo-manual-01.webp`, label: "Brand manual 2026 · Cover" })}
            className="group relative block w-full overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border bg-card text-left shadow-[var(--shadow-card-hover)]"
          >
            <img
              src={`${A}/xtendo-manual-01.webp`}
              alt={tr("Xtendo Global brand manual 2026 cover")}
              className="aspect-[16/9] w-full object-cover"
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/85">
                {tr("Brand manual 2026 · 45 pages")}
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* 01 — Context */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:grid md:grid-cols-12 md:gap-12 md:px-10 md:py-28">
          <Reveal className="md:col-span-4">
            <motion.div variants={fadeUp}>
              <SectionLabel>{tr("01 — Context")}</SectionLabel>
              <h2 className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                {tr("The")}{" "}
                <span className="font-serif italic font-normal text-accent-1">{tr("Friction")}</span>
              </h2>
            </motion.div>
          </Reveal>
          <Reveal className="mt-8 md:col-span-8 md:mt-0">
            <motion.p variants={fadeUp} className="text-lg leading-relaxed text-foreground/85 md:text-xl">
              {tr("Xtendo Global is a B2B BPO and customer-experience company with")}{" "}
              <span className="font-semibold text-foreground">{tr("1,500+ people across 9 countries")}</span>
              {tr(", serving clients like Microsoft, Dell and Cisco. When I joined, the new logo already existed — but nothing around it did.")}
            </motion.p>
            <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {tr("Legacy versions of the logo were still in use, and every team built its own slides, posts and documents. A new mark alone wasn't going to change how the company looked. It needed a system people could actually use.")}
            </motion.p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
          <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { src: `${A}/xtendo-logo-before.webp`, label: "Before · Legacy lockup", tone: "bg-white" },
              { src: `${A}/xtendo-logo-after.webp`, label: "After · New identity (logo by an external studio)", tone: "bg-white" },
            ].map((l) => (
              <motion.figure
                key={l.src}
                variants={fadeUp}
                className="overflow-hidden rounded-[calc(var(--radius)+14px)] border border-border bg-card shadow-[var(--shadow-card)]"
              >
                <div className={`flex aspect-[16/7] items-center justify-center ${l.tone} p-8 md:p-12`}>
                  <img src={l.src} alt={tr(l.label)} loading="lazy" decoding="async" className="max-h-full w-full object-contain" />
                </div>
                <figcaption className="border-t border-border px-5 py-3 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {tr(l.label)}
                </figcaption>
              </motion.figure>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 02 — What I built */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <SectionHeader
            label="02 — What I Built"
            pre="From one logo to a"
            em="whole system"
            body="Four layers, each one making the next possible: direction, foundations, scale and activation."
          />
          <Reveal className="mt-10 space-y-4 md:space-y-6">
            {chapters.map((c) => {
              const Icon = c.icon;
              return (
                <motion.article
                  key={c.n}
                  variants={fadeUp}
                  className="group relative grid grid-cols-1 gap-4 overflow-hidden rounded-[calc(var(--radius)+14px)] border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)] md:grid-cols-12 md:gap-6 md:p-7"
                >
                  <div className="relative md:col-span-3">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-accent-1 ring-1 ring-inset ring-border transition-colors duration-300 group-hover:bg-accent-1 group-hover:text-white">
                        <Icon className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <div className="font-display text-3xl font-bold tracking-tight text-accent-1 md:text-4xl">{c.n}</div>
                    </div>
                    <div className="mt-3 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      {tr(c.kicker)}
                    </div>
                  </div>
                  <div className="relative md:col-span-9">
                    <h3 className="text-xl font-bold tracking-tight md:text-2xl">{tr(c.title)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80 md:text-base">{tr(c.body)}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <span key={t} className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[0.7rem] font-semibold text-foreground/80">
                          {tr(t)}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* 02.5 — Brand manual */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionHeader
            label="02.5 — Brand Manual"
            pre="45 pages,"
            em="one source"
            post="of truth."
            body="Everything a designer, marketer or sales rep needs to use the brand correctly — from logo clear space to how we write on LinkedIn. Click any page to zoom."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {manual.map((m) => (
              <button
                key={m.src}
                type="button"
                onClick={() => setLightbox(m)}
                className="group overflow-hidden rounded-[calc(var(--radius)+10px)] border border-border bg-card text-left shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
              >
                <img src={m.src} alt={tr(m.label)} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="flex items-center justify-between border-t border-border px-3 py-2">
                  <span className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{tr(m.label)}</span>
                  <ZoomIn className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-accent-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 02.6 — Templates */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionHeader
            label="02.6 — Template Library"
            pre="Built so teams"
            em="don't wait"
            post="for design."
            body="15+ editable templates covering sales, marketing, HR and internal communication — plus a LinkedIn guide and an AI prompt book so non-designers stay on brand."
          />
          <MasonryGrid shots={templates} onOpen={setLightbox} />
        </div>
      </section>

      {/* 02.7 — Campaigns */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionHeader
            label="02.7 — Campaigns"
            pre="The brand,"
            em="at work."
            body="Webinar campaigns with Frontline and the AEERC Contact Center Week in Spain, Conarec 2026 speaker posts, LinkedIn infographics and a WhatsApp-pricing e-book launched in Spanish and Portuguese."
          />
          <MasonryGrid shots={campaigns} onOpen={setLightbox} />
        </div>
      </section>

      {/* 03 — Motion */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionHeader
            label="03 — Motion"
            pre="Brand in"
            em="motion."
            body="The XTENDO 3.0 piece and short-form clips cut from our webinars — animated with AI-assisted workflows to keep production fast and on brand."
          />
          <Reveal className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-12">
            <motion.figure variants={fadeUp} className="md:col-span-6">
              <div className="overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border bg-black shadow-[var(--shadow-card-hover)]">
                <video
                  src={`${A}/xtendo-motion.mp4`}
                  poster={`${A}/xtendo-motion-poster.webp`}
                  className="aspect-[4/5] w-full object-cover"
                  playsInline
                  muted
                  loop
                  autoPlay
                  controls
                  preload="metadata"
                />
              </div>
              <figcaption className="mt-3 inline-flex items-center gap-2 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                <Film className="h-3.5 w-3.5 text-accent-1" /> {tr("XTENDO 3.0 · Brand motion piece")}
              </figcaption>
            </motion.figure>
            <div className="grid grid-cols-2 gap-4 md:col-span-6 md:gap-6">
              {shorts.map((s) => (
                <motion.figure key={s.src} variants={fadeUp}>
                  <div className="overflow-hidden rounded-[calc(var(--radius)+14px)] border border-border bg-black shadow-[var(--shadow-card)]">
                    <video
                      src={s.src}
                      poster={s.poster}
                      className="aspect-[9/16] w-full object-cover"
                      playsInline
                      controls
                      preload="none"
                    />
                  </div>
                  <figcaption className="mt-3 font-mono text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {tr(s.title)}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03.5 — AI workflow */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <motion.div variants={fadeUp} className="md:col-span-5">
              <SectionLabel>{tr("03.5 — AI Workflow")}</SectionLabel>
              <h2 className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                {tr("A design team that ships")}{" "}
                <span className="font-serif italic font-normal text-accent-1">{tr("5× faster.")}</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-5 md:col-span-7">
              {[
                { icon: Bot, text: "Built AI-powered design systems in Claude that turn a brief into an on-brand landing page in 1 day instead of 4–5." },
                { icon: Users, text: "Trained the 2 designers on my team to use them, so the speed doesn't depend on me." },
                { icon: Megaphone, text: "Designed the HubSpot landing pages, invitation and follow-up emails behind each webinar campaign." },
              ].map((r) => (
                <div key={r.text} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-accent-1 ring-1 ring-inset ring-border">
                    <r.icon className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/85 md:text-base">{tr(r.text)}</p>
                </div>
              ))}
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Outcome */}
      <section className="relative overflow-hidden border-t border-border/60 bg-foreground text-background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(0.72_0.18_45_/_0.25),transparent_55%),radial-gradient(circle_at_10%_90%,oklch(0.55_0.2_265_/_0.25),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-accent-1" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent-1">
                {tr("04 — Outcome")}
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              {tr("A brand people")}{" "}
              <span className="font-serif italic font-normal text-accent-1">{tr("actually use.")}</span>
            </motion.h2>
          </Reveal>
          <Reveal className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {metrics.map((m) => (
              <motion.div
                key={m.value}
                variants={fadeUp}
                className="relative overflow-hidden rounded-[calc(var(--radius)+16px)] border border-white/10 bg-white/[0.04] p-8"
              >
                <m.icon className="h-6 w-6 text-accent-1" strokeWidth={1.6} />
                <div className="mt-6 font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">{tr(m.value)}</div>
                <div className="mt-3 text-sm leading-relaxed text-background/70">{tr(m.label)}</div>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between md:px-10 md:py-24">
          <div>
            <SectionLabel>{tr("Next")}</SectionLabel>
            <h3 className="mt-4 max-w-xl text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl">
              {tr("Rolling out a new brand across a whole company?")}
            </h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
              {tr("I turn a logo into a system people actually use — guidelines, templates, campaigns and motion.")}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-[var(--shadow-card)] transition-colors hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
              {tr("Back to portfolio")}
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
            >
              {tr("Get in touch")}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
