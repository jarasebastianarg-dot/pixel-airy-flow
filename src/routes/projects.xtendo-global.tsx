import { createFileRoute, Link } from "@tanstack/react-router";
import { LanguageToggle } from "@/components/LanguageToggle";
import { AnimatePresence, MotionConfig, motion, useInView, type Variants } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTr } from "@/i18n/projectTranslate";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Download,
  Files,
  Mail,
  MousePointerClick,
  Pause,
  Play,
  Send,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

const A = "/work/xtendo";
/* Full-page captures of the landing and the email. Flip to true once landing-full.webp and email-full.webp are in /public/work/xtendo. */
const HAS_HUBSPOT_CAPTURES = false;
const LANDING_URL = "https://recursos.xtendo.global/es-es/webinar-ventas-inteligentes-y-automatizacion-aeerc-espana";

export const Route = createFileRoute("/projects/xtendo-global")({
  component: XtendoProject,
  head: () => ({
    meta: [
      { title: "Xtendo Global — Brand system, HubSpot landings and AI | Sebastián Jara" },
      {
        name: "description",
        content:
          "Case study: after an outside studio designed Xtendo Global's new logo, I wrote the 45-page brand manual, created the Talent Solutions sub-brand, built HubSpot landing pages and emails, designed the brand's templates and made the launch video with Claude.",
      },
      { property: "og:title", content: "Xtendo Global — Brand & Design Strategy case study" },
      {
        property: "og:description",
        content: "How I turned Xtendo Global's new logo into a brand system for 1,500+ people in 9 countries.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects/xtendo-global" },
      { property: "og:image", content: `${A}/manual-p01.webp` },
    ],
    links: [{ rel: "canonical", href: "/projects/xtendo-global" }],
  }),
});

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const manualPages = [
  { src: "manual-p01.webp", title: "The cover", body: "The 2026 edition, with every brand rule in one place." },
  { src: "manual-p04.webp", title: "The logo", body: "Which logo version to use on light and dark backgrounds." },
  { src: "manual-p11.webp", title: "What not to do", body: "Common mistakes with the logo, each one shown with an example." },
  { src: "manual-p13.webp", title: "Color", body: "The five brand colors, with exact values for screen and print." },
  { src: "manual-p18.webp", title: "Typography", body: "Manrope for everything, with set sizes for titles and body text." },
  { src: "manual-p23.webp", title: "Voice and tone", body: "How Xtendo writes: expert, close, concrete and global." },
  { src: "manual-p28.webp", title: "Photography", body: "Which photos to use, and which ones to avoid." },
  { src: "manual-p34.webp", title: "Web and UI", body: "Cards, buttons and forms for the website, in the same style as the slides." },
  { src: "manual-p40.webp", title: "Social media", body: "Post layouts for data, content and success stories." },
  { src: "manual-p43.webp", title: "Co-branding", body: "How to place the logo next to partners like Frontline." },
];

const talentPages = Array.from({ length: 9 }, (_, i) => `talent-p${i + 1}.webp`);

type Piece = { cover: string; label: string; note: string; pages?: string[]; pdf?: string };
const pieceGroups: { id: string; label: string; line: string; pieces: Piece[] }[] = [
  {
    id: "sales",
    label: "Sales",
    line: "Long-form pieces the sales team sends to prospects. Same grid, type and color logic as the manual.",
    pieces: [
      {
        cover: "ebook-p1.webp",
        label: "Ebook: The real bill isn't Meta's",
        note: "6-page guide for LinkedIn lead generation",
        pages: Array.from({ length: 6 }, (_, i) => `ebook-p${i + 1}.webp`),
        pdf: "xtendo-ebook.pdf",
      },
      {
        cover: "case-p1.webp",
        label: "Success story template",
        note: "Two A4 pages, ready to fill in for each client",
        pages: ["case-p1.webp", "case-p2.webp"],
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    line: "Event and webinar posts. Each one changes the message, never the system.",
    pieces: [
      { cover: "post-conarec.webp", label: "Conarec 2026", note: "Speaker announcement, Portuguese" },
      { cover: "post-frontline.webp", label: "Frontline partnership", note: "Co-branded solution piece" },
      { cover: "post-webinar-collections.webp", label: "Collections webinar", note: "AEERC Contact Center Week" },
    ],
  },
  {
    id: "identity",
    label: "Identity",
    line: "The pieces people carry with them: cards, internal announcements and video call backgrounds.",
    pieces: [
      { cover: "business-cards.webp", label: "Business cards", note: "Light and dark versions, front and back" },
      { cover: "internal-anniversary.webp", label: "Company anniversary", note: "Internal communication, 16:9" },
      { cover: "xtendo-tpl-videocall.webp", label: "Video call background", note: "Used by every team in meetings" },
    ],
  },
];

const storyboard = [
  { src: "story-1.webp", label: "The question" },
  { src: "story-2.webp", label: "The numbers" },
  { src: "story-3.webp", label: "Global reach" },
  { src: "story-4.webp", label: "The method" },
  { src: "story-5.webp", label: "The model" },
  { src: "story-6.webp", label: "The close" },
];

const PROMPT =
  "Wide corporate tech illustration, abstract geometric shapes in deep blue (#1531D7) and graphite (#101522) on a clean white or graphite background, cool blue lighting, subtle 3D gradient accents, minimal and modern aesthetic, lots of negative space, no text, no people, high resolution, corporate B2B SaaS style";

const promptSwatches = [
  { hex: "#1531D7", name: "Xtendo blue" },
  { hex: "#101522", name: "Graphite" },
  { hex: "#FFFFFF", name: "White" },
  { hex: "#FF00FE", name: "Magenta, max 10%" },
];
const promptRules = [
  ["Light", "Cool, bluish and high-contrast. Never warm or orange."],
  ["Style", "Minimal corporate tech, clean geometry, plenty of empty space."],
  ["Framing", "Subject on one third of the frame, centered only for icons."],
  ["Avoid", "Generic office stock, off-palette colors, cartoon illustrations."],
];

/* ------------------------------------------------------------------ */
/* Shared building blocks (same language as the other case studies)    */
/* ------------------------------------------------------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({ children, className, stagger = 0.08 }: { children: React.ReactNode; className?: string; stagger?: number }) {
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

function SectionLabel({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-px w-8 bg-accent-1" />
      <span className={`font-mono text-xs font-semibold uppercase tracking-[0.24em] ${tone === "dark" ? "text-accent-1" : "text-accent-1"}`}>
        {children}
      </span>
    </div>
  );
}

function Accent({ children }: { children: React.ReactNode }) {
  return <span className="font-serif font-normal italic text-accent-1">{children}</span>;
}

/* Section header used by every chapter: label, title, intro */
function Header({
  label,
  title,
  intro,
  tone = "light",
}: {
  label: string;
  title: React.ReactNode;
  intro?: string;
  tone?: "light" | "dark";
}) {
  const { tr } = useTr();
  return (
    <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
      <motion.div variants={fadeUp} className="md:col-span-7">
        <SectionLabel tone={tone}>{tr(label)}</SectionLabel>
        <h2 className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">{title}</h2>
      </motion.div>
      {intro ? (
        <motion.p
          variants={fadeUp}
          className={`text-base leading-relaxed md:col-span-5 md:text-lg ${tone === "dark" ? "text-background/70" : "text-muted-foreground"}`}
        >
          {tr(intro)}
        </motion.p>
      ) : null}
    </Reveal>
  );
}

/* Lightbox that can show one image or a multi-page document */
function Viewer({
  pages,
  title,
  pdf,
  start = 0,
  onClose,
}: {
  pages: string[] | null;
  title: string;
  pdf?: string;
  start?: number;
  onClose: () => void;
}) {
  const { tr } = useTr();
  const [i, setI] = useState(start);
  useEffect(() => setI(start), [pages, start]);
  const n = pages?.length ?? 0;
  const go = useCallback((d: number) => setI((v) => (n ? (v + d + n) % n : 0)), [n]);
  useEffect(() => {
    if (!pages) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [pages, onClose, go]);

  return (
    <AnimatePresence>
      {pages ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col bg-foreground/90 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-4 text-background md:px-8" onClick={(e) => e.stopPropagation()}>
            <p className="min-w-0 truncate text-sm font-semibold">
              {title}
              {n > 1 ? <span className="ml-3 font-normal tabular-nums text-background/60">{i + 1} / {n}</span> : null}
            </p>
            <div className="flex shrink-0 items-center gap-2">
              {pdf ? (
                <a
                  href={`${A}/${pdf}`}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)]"
                >
                  <Download className="h-4 w-4" />
                  {tr("Download PDF")}
                </a>
              ) : null}
              <button
                type="button"
                onClick={onClose}
                aria-label={tr("Close preview")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-background text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 md:px-20" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={pages[i]}
                src={`${A}/${pages[i]}`}
                alt={`${title}${n > 1 ? `, ${tr("page")} ${i + 1}` : ""}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25 }}
                className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
              />
            </AnimatePresence>
            {n > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={tr("Previous page")}
                  className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground md:left-6"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={tr("Next page")}
                  className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground md:right-6"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            ) : null}
          </div>
          {n > 1 ? (
            <div className="flex justify-center gap-2 overflow-x-auto px-4 pb-6" onClick={(e) => e.stopPropagation()}>
              {pages.map((p, k) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setI(k)}
                  aria-label={`${tr("Go to page")} ${k + 1}`}
                  className={`h-14 shrink-0 overflow-hidden rounded-md ring-2 transition ${k === i ? "ring-accent-1" : "ring-transparent opacity-60 hover:opacity-100"}`}
                >
                  <img src={`${A}/${p}`} alt="" className="h-full w-auto" />
                </button>
              ))}
            </div>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/* Drag-to-compare logos */
function BeforeAfter() {
  const { tr } = useTr();
  const [pos, setPos] = useState(50);
  return (
    <figure>
      <div className="relative aspect-[16/9] w-full select-none overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
        <div className="absolute inset-0 flex items-center justify-center bg-[#0C1737] p-[8%]">
          <img src={`${A}/logo-new-color.webp`} alt={tr("New Xtendo Global logo")} className="h-auto w-[76%] object-contain" draggable={false} />
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center bg-[#05091A] p-[8%]"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img src={`${A}/logo-old.webp`} alt={tr("Previous Xtendo logo")} className="h-auto w-[76%] object-contain" draggable={false} />
        </div>
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 w-[2px] -translate-x-1/2 bg-white" />
          <div className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-foreground shadow-lg">
            <ChevronLeft className="h-4 w-4" />
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
          {tr("Before")}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
          {tr("After")}
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={tr("Drag to compare the old and new logo")}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        {tr("Drag to compare the old and new logo. The new logo was designed by an outside studio.")}
      </figcaption>
    </figure>
  );
}

/* Brand manual viewer: plays by itself while visible, never locks the scroll */
function ManualViewer({ onOpen }: { onOpen: (pages: string[], title: string, start: number) => void }) {
  const { tr } = useTr();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const [playing, setPlaying] = useState(true);
  const [hover, setHover] = useState(false);
  const n = manualPages.length;
  const DURATION = 4.5;

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  const running = playing && inView && !hover;
  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => {
      setDir(1);
      setActive((a) => (a + 1) % n);
    }, DURATION * 1000);
    return () => window.clearTimeout(id);
  }, [running, active, n]);

  const select = (i: number) => {
    setDir(i >= active ? 1 : -1);
    setActive(i);
  };
  const step = (d: number) => select((active + d + n) % n);
  const p = manualPages[active];
  const allPages = manualPages.map((m) => m.src);

  return (
    <div ref={ref} className="grid gap-8 lg:grid-cols-12 lg:items-center" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {/* chapter list (desktop) */}
      <ol className="hidden space-y-1 lg:col-span-4 lg:block">
        {manualPages.map((m, i) => (
          <li key={m.src}>
            <button
              type="button"
              onClick={() => select(i)}
              aria-current={i === active}
              className={`relative w-full overflow-hidden rounded-2xl px-4 py-2.5 text-left transition-colors ${
                i === active ? "bg-card shadow-[var(--shadow-card)]" : "hover:bg-card/60"
              }`}
            >
              <span className="flex items-baseline gap-3">
                <span className={`font-mono text-[0.65rem] font-semibold tabular-nums ${i === active ? "text-accent-1" : "text-muted-foreground/70"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`text-[0.95rem] font-semibold ${i === active ? "text-foreground" : "text-muted-foreground"}`}>{tr(m.title)}</span>
              </span>
              <AnimatePresence initial={false}>
                {i === active ? (
                  <motion.span
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="block overflow-hidden pl-8 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="block pt-1">{tr(m.body)}</span>
                  </motion.span>
                ) : null}
              </AnimatePresence>
              {i === active ? (
                <motion.span
                  key={`bar-${active}-${running}`}
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: running ? 1 : 0 }}
                  transition={{ duration: running ? DURATION : 0.2, ease: "linear" }}
                />
              ) : null}
            </button>
          </li>
        ))}
      </ol>

      {/* the page itself */}
      <div className="lg:col-span-8">
        <div className="relative aspect-[16/9] w-full [perspective:1800px]">
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-border bg-card/60" />
          <div aria-hidden className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl border border-border bg-card" />
          <AnimatePresence mode="popLayout" initial={false} custom={dir}>
            <motion.button
              type="button"
              key={p.src}
              custom={dir}
              onClick={() => onOpen(allPages, tr("Brand manual"), active)}
              variants={{
                enter: (d: number) => ({ rotateY: d > 0 ? -24 : 24, x: d > 0 ? 60 : -60, opacity: 0 }),
                center: { rotateY: 0, x: 0, opacity: 1 },
                exit: (d: number) => ({ rotateY: d > 0 ? 18 : -18, x: d > 0 ? -60 : 60, opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: dir > 0 ? "left center" : "right center" }}
              className="absolute inset-0 overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1"
              aria-label={`${tr("Open")} ${tr(p.title)}`}
            >
              <img src={`${A}/${p.src}`} alt="" className="h-full w-full object-cover" />
            </motion.button>
          </AnimatePresence>
        </div>

        {/* controls */}
        <div className="mt-6 flex items-center gap-3">
          <button type="button" onClick={() => step(-1)} aria-label={tr("Previous page")} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card shadow-[var(--shadow-card)] hover:bg-secondary">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => step(1)} aria-label={tr("Next page")} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card shadow-[var(--shadow-card)] hover:bg-secondary">
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setPlaying((v) => !v)}
            aria-label={playing ? tr("Pause") : tr("Play")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card shadow-[var(--shadow-card)] hover:bg-secondary"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <div className="ml-2 min-w-0 flex-1 lg:hidden">
            <p className="truncate text-sm font-semibold">{tr(p.title)}</p>
            <p className="text-sm leading-snug text-muted-foreground">{tr(p.body)}</p>
          </div>
          <span className="ml-auto hidden font-mono text-xs tabular-nums text-muted-foreground lg:inline">
            {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

/* Horizontal rail of the Talent Solutions manual */
const RAIL_PAD = "max(1.5rem, calc((100vw - 72rem) / 2 + 2.5rem))";
function TalentRail({ onOpen }: { onOpen: (pages: string[], title: string, start: number) => void }) {
  const { tr } = useTr();
  const rail = useRef<HTMLDivElement>(null);
  const move = (d: 1 | -1) => rail.current?.scrollBy({ left: d * rail.current.clientWidth * 0.7, behavior: "smooth" });
  return (
    <div>
      <div
        ref={rail}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pt-2 [scrollbar-width:none]"
        style={{ paddingInline: RAIL_PAD, scrollPaddingInline: RAIL_PAD }}
      >
        {talentPages.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => onOpen(talentPages, "Talent Solutions", i)}
            className="w-[82%] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] sm:w-[55%] lg:w-[38%]"
            aria-label={`${tr("Open")} Talent Solutions, ${tr("page")} ${i + 1}`}
          >
            <img src={`${A}/${src}`} alt="" loading="lazy" className="aspect-[1600/1131] w-full object-cover" />
          </button>
        ))}
        <span aria-hidden className="w-1 shrink-0" />
      </div>
      <div className="mx-auto mt-2 flex max-w-6xl items-center justify-between px-6 md:px-10">
        <p className="text-sm text-muted-foreground">{tr("9 pages. Tap any page to open it.")}</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => move(-1)} aria-label={tr("Previous pages")} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card shadow-[var(--shadow-card)] hover:bg-secondary">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => move(1)} aria-label={tr("Next pages")} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card shadow-[var(--shadow-card)] hover:bg-secondary">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* A frame that scrolls a long screenshot: on hover it scrolls by itself, on touch you scroll it */
function ScrollShot({
  src,
  alt,
  className,
  chrome,
}: {
  src: string;
  alt: string;
  className?: string;
  chrome: React.ReactNode;
}) {
  const box = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);
  const stop = () => {
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = null;
  };
  const start = () => {
    const el = box.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    stop();
    const tick = () => {
      if (!box.current) return;
      const max = box.current.scrollHeight - box.current.clientHeight;
      if (box.current.scrollTop >= max - 1) return stop();
      box.current.scrollTop += 2.2;
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  };
  useEffect(() => stop, []);
  return (
    <div
      className={`overflow-hidden rounded-[1.4rem] border border-border bg-card shadow-[var(--shadow-card-hover)] ${className ?? ""}`}
      onMouseEnter={start}
      onMouseLeave={stop}
    >
      {chrome}
      <div ref={box} className="relative h-full overflow-y-auto overscroll-contain [scrollbar-width:thin]" onWheel={stop} onTouchStart={stop} tabIndex={0} aria-label={alt}>
        <img src={src} alt={alt} loading="lazy" className="block w-full" />
      </div>
    </div>
  );
}

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-border bg-secondary/60 px-4 py-3">
      <span className="flex gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
      </span>
      <span className="min-w-0 flex-1 truncate rounded-full bg-background px-3 py-1 font-mono text-[0.65rem] text-muted-foreground">{url}</span>
    </div>
  );
}

function MailChrome({ subject }: { subject: string }) {
  const { tr } = useTr();
  return (
    <div className="border-b border-border bg-secondary/60 px-4 py-3">
      <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{tr("Inbox")}</p>
      <p className="mt-1 truncate text-sm font-semibold">{subject}</p>
    </div>
  );
}

/* Types the real prompt out once it scrolls into view */
function TypedPrompt() {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(PROMPT.length);
      return;
    }
    const id = window.setInterval(() => {
      setCount((c) => {
        if (c >= PROMPT.length) {
          window.clearInterval(id);
          return c;
        }
        return c + 2;
      });
    }, 18);
    return () => window.clearInterval(id);
  }, [inView]);
  return (
    <p ref={ref} className="min-h-[6.5rem] font-mono text-[0.8rem] leading-relaxed text-background/85" aria-label={PROMPT}>
      <span aria-hidden="true">
        {PROMPT.slice(0, count)}
        {count < PROMPT.length ? <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-accent-1" /> : null}
      </span>
    </p>
  );
}

function PromptBookCard() {
  const { tr } = useTr();
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card-hover)]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border px-6 py-5 md:px-8">
        <p className="text-xl font-bold tracking-tight">Prompt Book</p>
        <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Xtendo Global, 2026</p>
      </div>
      <div className="px-6 py-6 md:px-8">
        <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent-1">{tr("Palette")}</p>
        <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {promptSwatches.map((c) => (
            <li key={c.hex}>
              <span className="block h-12 rounded-xl ring-1 ring-foreground/10" style={{ background: c.hex }} />
              <span className="mt-2 block text-xs font-semibold">{tr(c.name)}</span>
              <span className="block font-mono text-[0.65rem] text-muted-foreground">{c.hex}</span>
            </li>
          ))}
        </ul>
        <dl className="mt-6 divide-y divide-border border-t border-border">
          {promptRules.map(([k, v]) => (
            <div key={k} className="grid gap-1 py-3 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
              <dt className="text-sm font-semibold">{tr(k)}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">{tr(v)}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="px-6 pb-6 md:px-8 md:pb-8">
        <div className="rounded-2xl bg-foreground p-5">
          <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-background/55">{tr("Master prompt 1: presentation hero image")}</p>
          <div className="mt-3">
            <TypedPrompt />
          </div>
        </div>
      </div>
    </div>
  );
}

/* 4–5 days → 1 day, on the dark impact section */
function SpeedBars() {
  const { tr } = useTr();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="space-y-6">
      <div>
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-background/65">{tr("Before")}</span>
          <span className="font-semibold tabular-nums">{tr("4–5 days")}</span>
        </div>
        <div className="h-11 overflow-hidden rounded-full bg-background/10">
          <motion.div
            className="h-full rounded-full bg-background/30"
            initial={{ width: "0%" }}
            animate={{ width: inView ? "100%" : "0%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
      <div>
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-background/65">{tr("Now, with AI")}</span>
          <span className="font-semibold tabular-nums text-accent-1">{tr("1 day")}</span>
        </div>
        <div className="h-11 overflow-hidden rounded-full bg-background/10">
          <motion.div
            className="h-full rounded-full bg-gradient-accent"
            initial={{ width: "0%" }}
            animate={{ width: inView ? "22%" : "0%" }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function XtendoProject() {
  const { tr } = useTr();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [group, setGroup] = useState(pieceGroups[0].id);
  const [view, setView] = useState<{ pages: string[]; title: string; pdf?: string; start: number } | null>(null);
  const open = useCallback((pages: string[], title: string, start = 0, pdf?: string) => setView({ pages, title, start, pdf }), []);
  const close = useCallback(() => setView(null), []);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) {
      v.currentTime = 0;
      void v.play();
    }
    setMuted(v.muted);
  };
  const watchAgain = () => {
    const v = videoRef.current;
    if (!v) return;
    v.scrollIntoView({ behavior: "smooth", block: "center" });
    v.currentTime = 0;
    v.muted = false;
    setMuted(false);
    void v.play();
  };

  const activeGroup = pieceGroups.find((g) => g.id === group) ?? pieceGroups[0];

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen w-full overflow-x-clip bg-background text-foreground">
        <Viewer pages={view?.pages ?? null} title={view?.title ?? ""} pdf={view?.pdf} start={view?.start ?? 0} onClose={close} />

        {/* Top bar */}
        <div className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
            <Link to="/" className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-accent-1">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {tr("Back to portfolio")}
            </Link>
            <div className="flex items-center gap-3">
              <span className="hidden font-mono text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground sm:inline">
                {tr("Featured case study")}
              </span>
              <LanguageToggle />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ HERO */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_-10%,oklch(0.72_0.18_45_/_0.18),transparent_55%),radial-gradient(circle_at_90%_10%,oklch(0.7_0.19_25_/_0.15),transparent_60%)]"
          />
          <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionLabel>{tr("Brand & Design Strategy Lead · Xtendo Global")}</SectionLabel>
              <h1 className="mt-6 text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl">
                {tr("Xtendo had a new logo. I made it work in")} <Accent>{tr("9 countries")}</Accent>.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {tr(
                  "I joined in August 2026, halfway through the rebrand. An outside studio had designed the logo. I took on the rest: the brand manual, the Talent Solutions sub-brand, HubSpot landing pages and emails, templates for each team, the launch video, and bringing AI into the design team's work.",
                )}
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">{tr("Role")}</p>
                  <p className="mt-2 text-sm font-bold leading-snug">{tr("Brand lead, 2 designers")}</p>
                </div>
                <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">{tr("Tools")}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {["HubSpot", "Claude", "Monday"].map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">{tr("Company")}</p>
                  <p className="mt-2 text-sm font-bold leading-snug">{tr("B2B services, 1,500+ people")}</p>
                </div>
              </div>
            </div>

            <figure className="relative mx-auto w-full max-w-[400px] lg:col-span-5">
              <div aria-hidden className="float-orb absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(circle,oklch(0.72_0.18_45_/_0.3),transparent_70%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-[var(--shadow-card-hover)]">
                <video
                  ref={videoRef}
                  src={`${A}/xtendo-motion.mp4`}
                  poster={`${A}/xtendo-motion-poster.webp`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                  aria-label={tr("Xtendo 3.0 launch video")}
                />
                <button
                  type="button"
                  onClick={toggleSound}
                  className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
                >
                  {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  {muted ? tr("Play with sound") : tr("Mute")}
                </button>
              </div>
              <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {tr("Xtendo 3.0 launch video. I wrote the script, designed the scenes and animated it with Claude.")}
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ------------------------------------------------ 01 CONTEXT */}
        <section className="border-t border-border/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-5">
              <motion.div variants={fadeUp}>
                <SectionLabel>{tr("01 — Context")}</SectionLabel>
              </motion.div>
              <motion.h2 variants={fadeUp} className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                {tr("There was a logo, but")} <Accent>{tr("no rules")}</Accent> {tr("for using it.")}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {tr("Each team made its own slides, posts and documents, so Xtendo looked different from one country to the next.")}
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {tr("My first job was to write those rules down and make them easy to follow.")}
              </motion.p>
            </Reveal>
            <div className="lg:col-span-7">
              <BeforeAfter />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ 02 MANUAL */}
        <section className="border-t border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <Header
              label="02 — Brand manual"
              title={
                <>
                  {tr("A 45-page")} <Accent>{tr("brand manual")}</Accent>, {tr("written with the CEO.")}
                </>
              }
              intro="It covers the logo, color, type, tone of voice, photography, web, social media and co-branding. Ten of its pages, below."
            />
            <div className="mt-14">
              <ManualViewer onOpen={(pages, title, start) => open(pages, title, start)} />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ 03 TALENT SOLUTIONS */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-6 pt-20 md:px-10 md:pt-28">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <Reveal className="lg:col-span-6">
                <motion.div variants={fadeUp}>
                  <SectionLabel>{tr("03 — Sub-brand")}</SectionLabel>
                </motion.div>
                <motion.h2 variants={fadeUp} className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                  {tr("Talent Solutions, a sub-brand I designed")} <Accent>{tr("from scratch")}</Accent>.
                </motion.h2>
                <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {tr("Talent Solutions is Xtendo's recruiting service. It needed its own identity, separate from the main brand. I designed the logo and wrote a 9-page manual for it.")}
                </motion.p>
                <motion.blockquote variants={fadeUp} className="mt-8 border-l-2 border-accent-1 pl-5 text-base leading-relaxed text-foreground/85">
                  {tr("One rule from the manual: the Talent Solutions logo never appears next to another company's brand in the same piece.")}
                </motion.blockquote>
              </Reveal>
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-border bg-white shadow-[var(--shadow-card-hover)] lg:col-span-6"
              >
                <div className="absolute inset-y-0 left-0 right-[28%] flex items-center justify-center">
                  <img src={`${A}/talent-logo.webp`} alt={tr("Talent Solutions logo, designed by me")} className="w-[78%]" />
                </div>
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-y-0 right-0 flex items-center justify-center overflow-hidden bg-[#00B2F3]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "28%" }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img src={`${A}/talent-isotype.webp`} alt="" className="w-[38%] min-w-[44px]" />
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="pb-20 pt-14 md:pb-28">
            <TalentRail onOpen={(pages, title, start) => open(pages, title, start)} />
          </div>
        </section>

        {/* ------------------------------------------------ 04 HUBSPOT */}
        <section className="border-t border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <Header
              label="04 — HubSpot"
              title={
                <>
                  {tr("Landing pages and email automation in")} <Accent>HubSpot</Accent>.
                </>
              }
              intro="For a webinar during the AEERC Contact Center Week in Spain, I designed and built the whole registration funnel in HubSpot, on the new brand system."
            />

            {/* the funnel, step by step */}
            <Reveal className="mt-14 grid gap-4 md:grid-cols-3" stagger={0.12}>
              {[
                { icon: Send, t: "Social post", b: "Announces the webinar and sends people to the landing page.", img: "post-webinar-sales.webp" },
                { icon: MousePointerClick, t: "Landing page + form", b: "Explains the session, the agenda and the speaker. The form saves each sign-up as a contact in HubSpot." },
                { icon: Mail, t: "Invitation email", b: "The date, the time and one clear button to register, in the same visual language as the landing." },
              ].map((s, i) => (
                <motion.div key={s.t} variants={fadeUp} className="relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-accent text-accent-foreground">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs font-semibold text-muted-foreground">0{i + 1}</span>
                  </div>
                  <p className="mt-5 text-lg font-bold tracking-tight">{tr(s.t)}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tr(s.b)}</p>
                  {"img" in s && s.img ? (
                    <button
                      type="button"
                      onClick={() => open([s.img as string], tr(s.t), 0)}
                      className="mt-4 block w-24 overflow-hidden rounded-xl border border-border shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
                      aria-label={`${tr("Open")} ${tr(s.t)}`}
                    >
                      <img src={`${A}/${s.img}`} alt="" loading="lazy" className="aspect-square w-full object-cover" />
                    </button>
                  ) : null}
                  {i < 2 ? (
                    <span aria-hidden className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-muted-foreground md:flex">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  ) : null}
                </motion.div>
              ))}
            </Reveal>

            {/* the actual pieces */}
            {HAS_HUBSPOT_CAPTURES ? (
            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <ScrollShot
                  src={`${A}/landing-full.webp`}
                  alt={tr("Webinar landing page built in HubSpot")}
                  className="flex h-[30rem] flex-col md:h-[38rem]"
                  chrome={<BrowserChrome url="recursos.xtendo.global/es-es/webinar-ventas-inteligentes…" />}
                />
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm text-muted-foreground">{tr("Landing page. Hover to scroll through it.")}</p>
                  <a
                    href={LANDING_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent-1"
                  >
                    {tr("Open the live page")}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
                <div>
                  <ScrollShot
                    src={`${A}/email-full.webp`}
                    alt={tr("Invitation email built in HubSpot")}
                    className="flex h-[30rem] flex-col md:h-[38rem]"
                    chrome={<MailChrome subject="Cómo duplicar tu conversión y decirle adiós al telemarketing frío" />}
                  />
                  <p className="mt-4 text-sm text-muted-foreground">{tr("Invitation email. Hover to scroll through it.")}</p>
                </div>
              </div>
            </div>
            ) : (
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <p className="text-sm text-muted-foreground">recursos.xtendo.global</p>
                <a
                  href={LANDING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)]"
                >
                  {tr("Open the live page")}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            )}

            <Reveal className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Built in", "HubSpot CMS and marketing email"],
                ["My part", "Design and build"],
                ["Speed", "One day per landing page, with AI"],
              ].map(([k, v]) => (
                <motion.div key={k} variants={fadeUp} className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">{tr(k)}</p>
                  <p className="mt-2 text-sm font-bold">{tr(v)}</p>
                </motion.div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------------------ 05 PIECES */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <Header
              label="05 — Pieces"
              title={
                <>
                  {tr("Different messages,")} <Accent>{tr("one system")}</Accent>.
                </>
              }
              intro="With my two designers I made more than 15 templates and campaigns. These are the ones that best show how the system holds up."
            />

            <div role="tablist" aria-label={tr("Piece types")} className="mt-12 inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-border bg-card p-1.5 shadow-[var(--shadow-card)] [scrollbar-width:none]">
              {pieceGroups.map((g) => (
                <button
                  key={g.id}
                  role="tab"
                  type="button"
                  aria-selected={group === g.id}
                  onClick={() => setGroup(g.id)}
                  className="relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold"
                >
                  {group === g.id ? (
                    <motion.span layoutId="piece-pill" className="absolute inset-0 rounded-full bg-gradient-accent" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                  ) : null}
                  <span className={`relative ${group === g.id ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}>{tr(g.label)}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup.id}
                role="tabpanel"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="mt-8"
              >
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{tr(activeGroup.line)}</p>
                <div className={`mt-8 grid gap-6 ${activeGroup.pieces.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                  {activeGroup.pieces.map((pc, i) => {
                    const pages = pc.pages ?? [pc.cover];
                    return (
                      <motion.figure key={pc.cover} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.08 * i }}>
                        <button
                          type="button"
                          onClick={() => open(pages, tr(pc.label), 0, pc.pdf)}
                          className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-secondary/50 p-[8%] shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1"
                          aria-label={`${tr("Open")} ${tr(pc.label)}`}
                        >
                          {/* a hint of the pages behind, for documents */}
                          {pages.length > 1 ? (
                            <img
                              src={`${A}/${pages[1]}`}
                              alt=""
                              aria-hidden
                              className="absolute max-h-[74%] max-w-[74%] translate-x-[6%] translate-y-[-4%] rotate-[4deg] rounded-md object-contain opacity-70 shadow-[0_18px_40px_-18px_rgba(0,0,0,.45)] transition-transform duration-500 group-hover:translate-x-[12%] group-hover:rotate-[7deg]"
                            />
                          ) : null}
                          <img
                            src={`${A}/${pc.cover}`}
                            alt=""
                            loading="lazy"
                            className="relative max-h-full max-w-full rounded-md object-contain shadow-[0_22px_48px_-20px_rgba(0,0,0,.5)] transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                          {pages.length > 1 ? (
                            <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-foreground/85 px-3 py-1.5 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-background">
                              <Files className="h-3 w-3" />
                              {pages.length} {tr("pages")}
                            </span>
                          ) : null}
                        </button>
                        <figcaption className="mt-4">
                          <p className="text-base font-bold tracking-tight">{tr(pc.label)}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{tr(pc.note)}</p>
                          {pc.pdf ? (
                            <button
                              type="button"
                              onClick={() => open(pages, tr(pc.label), 0, pc.pdf)}
                              className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-1 hover:underline"
                            >
                              {tr("Read the full ebook")}
                              <ArrowUpRight className="h-4 w-4" />
                            </button>
                          ) : null}
                        </figcaption>
                      </motion.figure>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ------------------------------------------------ 06 AI */}
        <section className="border-t border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <Header
              label="06 — AI workflow"
              title={
                <>
                  {tr("I made the launch video")} <Accent>{tr("with Claude")}</Accent>.
                </>
              }
              intro="I wrote the script, designed each scene and animated it with Claude. It runs 23 seconds and asks one question: are you paying for capacity or for results?"
            />

            <div className="-mx-6 mt-12 flex snap-x gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-6 md:overflow-visible md:px-0">
              {storyboard.map((s, i) => (
                <motion.figure
                  key={s.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="w-[42%] shrink-0 snap-start md:w-auto"
                >
                  <img
                    src={`${A}/${s.src}`}
                    alt={`${tr("Scene")} ${i + 1}: ${tr(s.label)}`}
                    loading="lazy"
                    className="aspect-[4/5] w-full rounded-2xl border border-border object-cover shadow-[var(--shadow-card)]"
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground">
                    <span className="font-mono text-xs text-accent-1">0{i + 1}</span> {tr(s.label)}
                  </figcaption>
                </motion.figure>
              ))}
              <span aria-hidden className="w-2 shrink-0 md:hidden" />
            </div>
            <button
              type="button"
              onClick={watchAgain}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold shadow-[var(--shadow-card)] hover:bg-secondary"
            >
              <Play className="h-4 w-4" />
              {tr("Watch it with sound")}
            </button>

            <div className="mt-20 grid gap-10 border-t border-border/60 pt-16 lg:grid-cols-12 lg:items-start">
              <Reveal className="lg:sticky lg:top-28 lg:col-span-5">
                <motion.h3 variants={fadeUp} className="text-2xl font-bold leading-[1.1] tracking-tight md:text-4xl">
                  {tr("A prompt book for the")} <Accent>{tr("team")}</Accent>.
                </motion.h3>
                <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {tr("I wrote a guide with the visual rules and ready-to-use prompts for AI images, so whatever the team generates stays on brand. I also trained my two designers to use AI in their everyday work.")}
                </motion.p>
              </Reveal>
              <div className="lg:col-span-7">
                <PromptBookCard />
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ 07 IMPACT */}
        <section className="relative overflow-hidden border-t border-border/60 bg-foreground text-background">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(0.72_0.18_45_/_0.25),transparent_55%),radial-gradient(circle_at_10%_90%,oklch(0.7_0.19_25_/_0.2),transparent_60%)]"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
              <Reveal className="lg:col-span-6">
                <motion.div variants={fadeUp}>
                  <SectionLabel tone="dark">{tr("07 — Impact")}</SectionLabel>
                </motion.div>
                <motion.h2 variants={fadeUp} className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                  {tr("Landing pages now take")} <Accent>{tr("1 day")}</Accent> {tr("instead of 4 or 5.")}
                </motion.h2>
                <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-background/70 md:text-lg">
                  {tr("The team starts from the templates and uses AI for the first draft.")}
                </motion.p>
              </Reveal>
              <div className="lg:col-span-6">
                <SpeedBars />
              </div>
            </div>

            <Reveal className="mt-16 grid gap-4 md:grid-cols-3">
              {[
                ["One brand in 9 countries", "1,500+ people use the same logo, colors and templates."],
                ["2 designers trained in AI", "I trained both designers on my team to work with AI tools."],
                ["More clicks and sign-ups", "Click-through rate and webinar registrations went up after the new campaigns."],
              ].map(([h, b]) => (
                <motion.div key={h} variants={fadeUp} className="rounded-3xl border border-background/10 bg-background/[0.04] p-6 backdrop-blur">
                  <p className="text-lg font-bold tracking-tight">{tr(h)}</p>
                  <p className="mt-2 text-sm leading-relaxed text-background/65">{tr(b)}</p>
                </motion.div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------------------ CTA */}
        <section className="border-t border-border/60">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between md:px-10 md:py-24">
            <div>
              <SectionLabel>{tr("Next")}</SectionLabel>
              <h3 className="mt-4 max-w-xl text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl">
                {tr("Want to talk about your brand or your team's design workflow?")}
              </h3>
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
    </MotionConfig>
  );
}
