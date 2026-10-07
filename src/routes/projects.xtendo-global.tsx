import { createFileRoute, Link } from "@tanstack/react-router";
import { LanguageToggle } from "@/components/LanguageToggle";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTr } from "@/i18n/projectTranslate";
import { ArrowLeft, ChevronLeft, ChevronRight, Play, Volume2, VolumeX, X } from "lucide-react";

const A = "/work/xtendo";

/* Xtendo's own palette, taken from the brand manual */
const NAVY = "#0C1737";
const BLUE = "#2647E5";
const MAGENTA = "#FF00FE";
const CYAN = "#00B2F3";

export const Route = createFileRoute("/projects/xtendo-global")({
  component: XtendoProject,
  head: () => ({
    meta: [
      { title: "Xtendo Global — Brand manual, sub-brand, templates and AI | Sebastián Jara" },
      {
        name: "description",
        content:
          "Case study: after an outside studio designed Xtendo Global's new logo, I wrote the 45-page brand manual, created the Talent Solutions sub-brand, built templates for each team, made the launch video with Claude and trained the design team in AI.",
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
  { src: "manual-p01.webp", page: 1, title: "The cover", body: "The 2026 edition, with every brand rule in one place." },
  { src: "manual-p04.webp", page: 4, title: "The logo", body: "Which logo version to use on light and dark backgrounds." },
  { src: "manual-p11.webp", page: 11, title: "What not to do", body: "Common mistakes with the logo, each one shown with an example." },
  { src: "manual-p13.webp", page: 13, title: "Color", body: "The five brand colors, with exact values for screen and print." },
  { src: "manual-p18.webp", page: 18, title: "Typography", body: "Manrope for everything, with set sizes for titles and body text." },
  { src: "manual-p23.webp", page: 23, title: "Voice and tone", body: "How Xtendo writes: expert, close, concrete and global." },
  { src: "manual-p28.webp", page: 28, title: "Photography", body: "Which photos to use, and which ones to avoid." },
  { src: "manual-p34.webp", page: 34, title: "Web and UI", body: "Cards, buttons and forms for the website, in the same style as the slides." },
  { src: "manual-p40.webp", page: 40, title: "Social media", body: "Post layouts for data, content and success stories." },
  { src: "manual-p43.webp", page: 43, title: "Co-branding", body: "How to place the logo next to partners like Frontline." },
];

/* Lines rails up with the page container (max-w-7xl + px-10) */
const RAIL_PAD = "max(min(2.5rem, 5vw), calc((100vw - 80rem) / 2 + 2.5rem))";

const talentPages = Array.from({ length: 9 }, (_, i) => `talent-p${i + 1}.webp`);

type Piece = { src: string; label: string };
const teams: { id: string; label: string; line: string; pieces: Piece[] }[] = [
  {
    id: "sales",
    label: "Sales",
    line: "Success stories and ebooks the sales team sends to clients.",
    pieces: [
      { src: "xtendo-case-study-1.webp", label: "One-page success story" },
      { src: "xtendo-ebook-cover.webp", label: "LinkedIn ebook cover" },
      { src: "xtendo-ebook-page-1.webp", label: "Ebook inside page" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    line: "Webinar posts, infographics and a campaign with Frontline.",
    pieces: [
      { src: "xtendo-post-webinar-sales.webp", label: "Webinar announcement" },
      { src: "xtendo-infographic.webp", label: "Infographic" },
      { src: "xtendo-post-frontline.webp", label: "Campaign with Frontline" },
    ],
  },
  {
    id: "people",
    label: "People",
    line: "Job posts, welcome messages and team presentations.",
    pieces: [
      { src: "xtendo-tpl-hiring.webp", label: "Hiring post" },
      { src: "xtendo-internal-welcome.webp", label: "Welcome message" },
      { src: "xtendo-team-presentation.webp", label: "Team presentation" },
    ],
  },
  {
    id: "everyone",
    label: "Everyone",
    line: "Business cards and backgrounds for video calls.",
    pieces: [
      { src: "xtendo-card-front.webp", label: "Business card, front" },
      { src: "xtendo-card-back.webp", label: "Business card, back" },
      { src: "xtendo-tpl-videocall.webp", label: "Video call background" },
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

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function Chapter({
  n,
  title,
  tone = "light",
  accent = BLUE,
}: {
  n: number;
  title: string;
  tone?: "light" | "dark";
  accent?: string;
}) {
  const { tr } = useTr();
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-display text-sm font-semibold tabular-nums" style={{ color: accent }}>
        {String(n).padStart(2, "0")}
      </span>
      <span className={`text-sm font-medium ${tone === "dark" ? "text-white/60" : "text-foreground/55"}`}>
        {tr(title)}
      </span>
    </div>
  );
}

function Lightbox({ src, alt, onClose }: { src: string | null; alt: string; onClose: () => void }) {
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          style={{ background: "rgba(12,23,55,.92)" }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label={tr("Close preview")}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0C1737]"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.img
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            src={src}
            alt={alt}
            className="max-h-[88vh] max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
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
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] select-none">
        {/* After (full) */}
        <div className="absolute inset-0 flex items-center justify-center p-[10%]" style={{ background: NAVY }}>
          <img src={`${A}/logo-new-color.webp`} alt={tr("New Xtendo Global logo")} className="h-auto w-[76%] object-contain" draggable={false} />
        </div>
        {/* Before (clipped) */}
        <div
          className="absolute inset-0 flex items-center justify-center p-[10%]"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, background: "#05091A" }}
        >
          <img src={`${A}/logo-old.webp`} alt={tr("Previous Xtendo logo")} className="h-auto w-[76%] object-contain" draggable={false} />
        </div>
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 -translate-x-1/2 w-[2px] bg-white" />
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0C1737] shadow-lg">
            <ChevronLeft className="h-4 w-4" />
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">{tr("Before")}</span>
        <span className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">{tr("After")}</span>
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
      <figcaption className="mt-3 text-sm text-foreground/60">
        {tr("Drag to compare the old and new logo. The new logo was designed by an outside studio.")}
      </figcaption>
    </figure>
  );
}

/* Desktop: the manual turns its pages as you scroll */
function ManualScroller({ onOpen }: { onOpen: (src: string, alt: string) => void }) {
  const { tr } = useTr();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const n = manualPages.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.max(0, Math.min(n - 1, Math.floor(v * n))));
  });
  const jump = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + ((i + 0.5) / n) * span, behavior: "smooth" });
  };
  const p = manualPages[active];

  return (
    <div ref={ref} className="relative hidden lg:block" style={{ height: `${n * 55}vh` }}>
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,0.8fr)_minmax(0,2.2fr)] items-center gap-12 px-10">
          <ol className="space-y-1">
            {manualPages.map((m, i) => (
              <li key={m.src}>
                <button
                  type="button"
                  onClick={() => jump(i)}
                  aria-current={i === active}
                  className={`group w-full rounded-xl px-4 py-2 text-left transition-colors ${i === active ? "bg-white/[0.07]" : "hover:bg-white/[0.04]"}`}
                >
                  <span className={`font-display text-lg font-semibold transition-colors ${i === active ? "text-white" : "text-white/40 group-hover:text-white/70"}`}>
                    {tr(m.title)}
                  </span>
                  <AnimatePresence initial={false}>
                    {i === active ? (
                      <motion.span
                        key="b"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="block overflow-hidden text-[0.95rem] leading-relaxed text-white/70"
                      >
                        <span className="block pt-1">{tr(m.body)}</span>
                      </motion.span>
                    ) : null}
                  </AnimatePresence>
                </button>
              </li>
            ))}
          </ol>

          <div>
            <div className="relative aspect-[16/9] w-full [perspective:1600px]">
              {/* stacked pages behind, to read as a book */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-white/10" />
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-white/20" />
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.button
                  type="button"
                  key={p.src}
                  onClick={() => onOpen(`${A}/${p.src}`, tr(p.title))}
                  initial={{ rotateY: -28, x: 80, opacity: 0 }}
                  animate={{ rotateY: 0, x: 0, opacity: 1 }}
                  exit={{ rotateY: 22, x: -80, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "left center" }}
                  className="absolute inset-0 overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  aria-label={`${tr("Open page")} ${p.page}: ${tr(p.title)}`}
                >
                  <img src={`${A}/${p.src}`} alt="" className="h-full w-full object-cover" />
                </motion.button>
              </AnimatePresence>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/60">
              <span className="tabular-nums">
                {active + 1} / {n}
              </span>
              <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: BLUE }}
                  animate={{ width: `${((active + 1) / n) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Mobile/tablet: swipe through the same pages */
function ManualSwipe({ onOpen }: { onOpen: (src: string, alt: string) => void }) {
  const { tr } = useTr();
  return (
    <div className="lg:hidden">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:px-10">
        {manualPages.map((m) => (
          <figure key={m.src} className="w-[85%] shrink-0 snap-center md:w-[70%]">
            <button
              type="button"
              onClick={() => onOpen(`${A}/${m.src}`, tr(m.title))}
              className="block w-full overflow-hidden rounded-xl bg-white"
              aria-label={`${tr("Open page")} ${m.page}: ${tr(m.title)}`}
            >
              <img src={`${A}/${m.src}`} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
            </button>
            <figcaption className="mt-3">
              <span className="font-display text-base font-semibold text-white">{tr(m.title)}</span>
              <span className="mt-1 block text-sm leading-relaxed text-white/65">{tr(m.body)}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="px-5 text-sm text-white/45 md:px-10">{tr("Swipe to turn the pages")}</p>
    </div>
  );
}

/* Talent Solutions page rail */
function TalentRail({ onOpen }: { onOpen: (src: string, alt: string) => void }) {
  const { tr } = useTr();
  const rail = useRef<HTMLDivElement>(null);
  const move = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };
  return (
    <div>
      <div
        ref={rail}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pt-2 [scrollbar-width:none]"
        style={{ paddingInline: RAIL_PAD, scrollPaddingInline: RAIL_PAD }}
      >
        {talentPages.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => onOpen(`${A}/${src}`, `Talent Solutions ${tr("page")} ${i + 1}`)}
            className="w-[82%] shrink-0 snap-start overflow-hidden rounded-xl border border-black/5 bg-white shadow-[0_20px_50px_-25px_rgba(12,23,55,.35)] transition-transform hover:-translate-y-1 sm:w-[55%] lg:w-[38%]"
            aria-label={`${tr("Open")} Talent Solutions ${tr("page")} ${i + 1}`}
          >
            <img src={`${A}/${src}`} alt="" loading="lazy" className="aspect-[1600/1131] w-full object-cover" />
          </button>
        ))}
      </div>
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between px-5 md:px-10">
        <p className="text-sm text-foreground/55">{tr("9 pages. Tap any page to open it.")}</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => move(-1)} aria-label={tr("Previous pages")} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 hover:bg-foreground/5">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => move(1)} aria-label={tr("Next pages")} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 hover:bg-foreground/5">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
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
    <p ref={ref} className="min-h-[6.5rem] font-mono text-[0.82rem] leading-relaxed text-white/85" aria-label={PROMPT}>
      <span aria-hidden="true">
        {PROMPT.slice(0, count)}
        {count < PROMPT.length ? <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-white" /> : null}
      </span>
    </p>
  );
}

/* The real rules from the team's prompt book, laid out as a card */
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

function PromptBookCard() {
  const { tr } = useTr();
  return (
    <div className="overflow-hidden rounded-[24px] bg-white text-[#101522] shadow-[0_40px_90px_-40px_rgba(0,0,0,.7)]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-[#E3E7EF] px-6 py-5 md:px-8">
        <p className="font-display text-xl font-semibold" style={{ color: "#1531D7" }}>Prompt Book</p>
        <p className="text-sm text-[#4A5470]">Xtendo Global, 2026</p>
      </div>
      <div className="px-6 py-6 md:px-8">
        <p className="text-sm font-semibold">{tr("Palette")}</p>
        <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {promptSwatches.map((c) => (
            <li key={c.hex}>
              <span className="block h-12 rounded-lg ring-1 ring-black/10" style={{ background: c.hex }} />
              <span className="mt-2 block text-xs font-medium">{tr(c.name)}</span>
              <span className="block text-xs tabular-nums text-[#4A5470]">{c.hex}</span>
            </li>
          ))}
        </ul>
        <dl className="mt-6 divide-y divide-[#E3E7EF] border-t border-[#E3E7EF]">
          {promptRules.map(([k, v]) => (
            <div key={k} className="grid gap-1 py-3 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
              <dt className="text-sm font-semibold">{tr(k)}</dt>
              <dd className="text-sm leading-relaxed text-[#4A5470]">{tr(v)}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="px-6 pb-6 md:px-8 md:pb-8">
        <div className="rounded-2xl p-5" style={{ background: NAVY }}>
          <p className="text-xs font-medium text-white/55">{tr("Master prompt 1: presentation hero image")}</p>
          <div className="mt-3">
            <TypedPrompt />
          </div>
        </div>
      </div>
    </div>
  );
}

/* The 4–5 days → 1 day comparison */
function SpeedBars() {
  const { tr } = useTr();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="space-y-6">
      <div>
        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium text-foreground/70">{tr("Before")}</span>
          <span className="font-display font-semibold tabular-nums">{tr("4–5 days")}</span>
        </div>
        <div className="h-12 overflow-hidden rounded-full bg-foreground/[0.06]">
          <motion.div
            className="h-full rounded-full bg-foreground/25"
            initial={{ width: "0%" }}
            animate={{ width: inView ? "100%" : "0%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
      <div>
        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium text-foreground/70">{tr("Now, with AI")}</span>
          <span className="font-display font-semibold tabular-nums" style={{ color: BLUE }}>{tr("1 day")}</span>
        </div>
        <div className="h-12 overflow-hidden rounded-full bg-foreground/[0.06]">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${BLUE}, ${MAGENTA})` }}
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
  const [team, setTeam] = useState(teams[0].id);
  const [box, setBox] = useState<{ src: string; alt: string } | null>(null);
  const open = useCallback((src: string, alt: string) => setBox({ src, alt }), []);
  const close = useCallback(() => setBox(null), []);

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

  const activeTeam = teams.find((t) => t.id === team) ?? teams[0];

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen w-full overflow-x-clip bg-background text-foreground">
        <Lightbox src={box?.src ?? null} alt={box?.alt ?? ""} onClose={close} />

        {/* Top bar */}
        <div className="sticky top-0 z-40 border-b border-white/10 backdrop-blur-xl" style={{ background: "rgba(12,23,55,.82)" }}>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
            <Link to="/" className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {tr("Back to portfolio")}
            </Link>
            <LanguageToggle />
          </div>
        </div>

        {/* ------------------------------------------------ HERO */}
        <section className="relative overflow-hidden text-white" style={{ background: NAVY }}>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-10 h-[640px] w-[640px] rounded-full opacity-40 blur-3xl"
            style={{ background: `radial-gradient(circle, ${BLUE} 0%, transparent 65%)` }}
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28 lg:pt-20">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium text-white/60"
              >
                {tr("Brand & Design Strategy Lead at Xtendo Global")}
              </motion.p>
              <h1 className="mt-5 font-display text-[clamp(2.6rem,6.4vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {tr("Xtendo had a new logo.")}
                </motion.span>
                <motion.span
                  className="block text-white/45"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {tr("I made it work in 9 countries.")}
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 max-w-xl text-lg leading-relaxed text-white/75"
              >
                {tr(
                  "I joined in August 2026, halfway through the rebrand. An outside studio had designed the logo. I took on the rest: the brand manual, the Talent Solutions sub-brand, templates for each team, the launch video, and bringing AI into the design team's work.",
                )}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="mt-10 flex max-w-xl flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-6 text-sm"
              >
                <div>
                  <p className="text-white/50">{tr("My role")}</p>
                  <p className="mt-1 font-medium">{tr("Brand lead, 2 designers")}</p>
                </div>
                <div>
                  <p className="text-white/50">{tr("Company")}</p>
                  <p className="mt-1 font-medium">{tr("B2B services, 1,500+ people")}</p>
                </div>
                <div>
                  <p className="text-white/50">{tr("Logo")}</p>
                  <p className="mt-1 font-medium">{tr("Outside studio")}</p>
                </div>
              </motion.div>
            </div>

            <motion.figure
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[440px]"
            >
              <div className="relative overflow-hidden rounded-[28px] shadow-[0_40px_100px_-30px_rgba(38,71,229,.7)] ring-1 ring-white/10">
                <video
                  ref={videoRef}
                  src={`${A}/xtendo-motion.mp4`}
                  poster={`${A}/xtendo-motion-poster.webp`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="aspect-[4/5] w-full object-cover"
                  aria-label={tr("Xtendo 3.0 launch video")}
                />
                <button
                  type="button"
                  onClick={toggleSound}
                  className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#0C1737] shadow-lg transition-transform hover:scale-[1.03]"
                >
                  {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  {muted ? tr("Play with sound") : tr("Mute")}
                </button>
              </div>
              <figcaption className="mt-4 text-sm leading-relaxed text-white/60">
                {tr("Xtendo 3.0 launch video. I wrote the script, designed the scenes and animated it with Claude.")}
              </figcaption>
            </motion.figure>
          </div>
        </section>

        {/* ------------------------------------------------ 1. WHERE I STARTED */}
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <Chapter n={1} title="Where I started" />
          <div className="mt-8 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                {tr("There was a logo, but no rules for using it.")}
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/70">
                {tr(
                  "Each team made its own slides, posts and documents, so Xtendo looked different from one country to the next.",
                )}
              </p>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-foreground/70">
                {tr("My first job was to write those rules down and make them easy to follow.")}
              </p>
            </div>
            <BeforeAfter />
          </div>
        </section>

        {/* ------------------------------------------------ 2. THE MANUAL */}
        <section className="text-white" style={{ background: NAVY }}>
          <div className="mx-auto max-w-7xl px-5 pt-24 md:px-10 md:pt-32">
            <Chapter n={2} title="The brand manual" tone="dark" accent="#7B93F5" />
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <h2 className="font-display text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1.03] tracking-[-0.03em]">
                {tr("A 45-page brand manual, written with the CEO")}
              </h2>
              <p className="text-lg leading-relaxed text-white/70">
                {tr("It covers the logo, color, type, tone of voice, photography, web, social media and co-branding. Keep scrolling to flip through ten of its pages.")}
              </p>
            </div>
          </div>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-0 lg:pt-0">
            <ManualScroller onOpen={open} />
            <ManualSwipe onOpen={open} />
          </div>
        </section>

        {/* ------------------------------------------------ 3. TALENT SOLUTIONS */}
        <section className="relative overflow-hidden py-24 md:py-32" style={{ background: "#F3FAFE" }}>
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <Chapter n={3} title="A new sub-brand" accent={CYAN} />
            <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                  {tr("Talent Solutions, a sub-brand I designed from scratch")}
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/70">
                  {tr(
                    "Talent Solutions is Xtendo's recruiting service. It needed its own identity, separate from the main brand. I designed the logo and wrote a 9-page manual for it.",
                  )}
                </p>
                <blockquote className="mt-8 max-w-lg border-l-[3px] pl-5 text-base leading-relaxed text-foreground/80" style={{ borderColor: CYAN }}>
                  {tr("One rule from the manual: the Talent Solutions logo never appears next to another company's brand in the same piece.")}
                </blockquote>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[5/4] overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_-40px_rgba(0,178,243,.6)]"
              >
                <div className="absolute inset-y-0 left-0 right-[28%] flex items-center justify-center">
                  <img src={`${A}/talent-logo.webp`} alt={tr("Talent Solutions logo, designed by me")} className="w-[78%]" />
                </div>
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-y-0 right-0 flex items-center justify-center overflow-hidden"
                  style={{ background: CYAN }}
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
          <div className="mt-16">
            <TalentRail onOpen={open} />
          </div>
        </section>

        {/* ------------------------------------------------ 4. ONE BRAND, EVERY TEAM */}
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <Chapter n={4} title="Templates" />
          <div className="mt-8 max-w-2xl">
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              {tr("Templates for each team")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              {tr("With my two designers I built more than 15 templates and campaigns. Choose a team to see some of them.")}
            </p>
          </div>

          <div role="tablist" aria-label={tr("Teams")} className="mt-10 inline-flex flex-wrap gap-2 rounded-full bg-foreground/[0.05] p-1.5">
            {teams.map((t) => (
              <button
                key={t.id}
                role="tab"
                type="button"
                aria-selected={team === t.id}
                onClick={() => setTeam(t.id)}
                className="relative rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                {team === t.id ? (
                  <motion.span layoutId="team-pill" className="absolute inset-0 rounded-full" style={{ background: NAVY }} transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                ) : null}
                <span className={`relative ${team === t.id ? "text-white" : "text-foreground/65"}`}>{tr(t.label)}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTeam.id}
              role="tabpanel"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <p className="max-w-2xl text-lg text-foreground/75">{tr(activeTeam.line)}</p>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {activeTeam.pieces.map((pc, i) => (
                  <motion.figure
                    key={pc.src}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 * i }}
                  >
                    <button
                      type="button"
                      onClick={() => open(`${A}/${pc.src}`, tr(pc.label))}
                      className="group flex aspect-[5/4] w-full items-center justify-center rounded-2xl p-[9%] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{ background: "#E9EDF5", outlineColor: BLUE }}
                      aria-label={`${tr("Open")} ${tr(pc.label)}`}
                    >
                      <img
                        src={`${A}/${pc.src}`}
                        alt=""
                        loading="lazy"
                        className="max-h-full max-w-full rounded-md object-contain shadow-[0_18px_40px_-18px_rgba(12,23,55,.5)] transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </button>
                    <figcaption className="mt-3 text-sm text-foreground/60">{tr(pc.label)}</figcaption>
                  </motion.figure>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ------------------------------------------------ 5. AI */}
        <section className="text-white" style={{ background: NAVY }}>
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
            <Chapter n={5} title="How I work with AI" tone="dark" accent="#7B93F5" />
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <h2 className="font-display text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1.03] tracking-[-0.03em]">
                {tr("I made the launch video with Claude")}
              </h2>
              <p className="text-lg leading-relaxed text-white/70">
                {tr("I wrote the script, designed each scene and animated it with Claude. It runs 23 seconds and asks one question: are you paying for capacity or for results?")}
              </p>
            </div>

            <div className="-mx-5 mt-12 flex snap-x gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-6 md:overflow-visible md:px-0">
              {storyboard.map((s, i) => (
                <motion.figure
                  key={s.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="w-[42%] shrink-0 snap-start md:w-auto"
                >
                  <img src={`${A}/${s.src}`} alt={`${tr("Scene")} ${i + 1}: ${tr(s.label)}`} loading="lazy" className="aspect-[4/5] w-full rounded-xl object-cover ring-1 ring-white/10" />
                  <figcaption className="mt-2 text-sm text-white/60">
                    <span className="tabular-nums text-white/40">{i + 1}</span> {tr(s.label)}
                  </figcaption>
                </motion.figure>
              ))}
              <span aria-hidden="true" className="w-2 shrink-0 md:hidden" />
            </div>
            <button
              type="button"
              onClick={watchAgain}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              <Play className="h-4 w-4" />
              {tr("Watch it with sound")}
            </button>

            {/* Prompt book */}
            <div className="mt-24 grid gap-10 border-t border-white/10 pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <h3 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
                  {tr("A prompt book for the team")}
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-white/70">
                  {tr("I wrote a guide with the visual rules and ready-to-use prompts for AI images, so whatever the team generates stays on brand. I also trained my two designers to use AI in their everyday work.")}
                </p>
              </div>
              <PromptBookCard />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ 6. RESULTS */}
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <Chapter n={6} title="Results" />
          <div className="mt-8 grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                {tr("Landing pages now take 1 day instead of 4 or 5")}
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/70">
                {tr("The team starts from the templates and uses AI for the first draft.")}
              </p>
            </div>
            <SpeedBars />
          </div>

          <ul className="mt-20 grid gap-10 border-t border-foreground/10 pt-10 md:grid-cols-3 md:gap-12">
            {[
              ["One brand in 9 countries", "1,500+ people use the same logo, colors and templates."],
              ["2 designers trained in AI", "I trained both designers on my team to work with AI tools."],
              ["More clicks and sign-ups", "Click-through rate and webinar registrations went up after the new campaigns."],
            ].map(([h, b]) => (
              <li key={h}>
                <p className="font-display text-xl font-semibold">{tr(h)}</p>
                <p className="mt-2 leading-relaxed text-foreground/65">{tr(b)}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ------------------------------------------------ CTA */}
        <section className="text-white" style={{ background: NAVY }}>
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-10">
            <h2 className="max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
              {tr("Want to talk about your brand or your team's design workflow?")}
            </h2>
            <div className="flex flex-wrap gap-3">
              <a href="/#contact" className="inline-flex items-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0C1737] hover:bg-white/90">
                {tr("Contact me")}
              </a>
              <Link to="/" className="inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold hover:bg-white/10">
                {tr("See more projects")}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}
