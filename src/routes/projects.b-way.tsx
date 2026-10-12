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
  X,
  ZoomIn,
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
import barberWeekBr from "@/assets/bway/bway-barber-week-br.mp4.asset.json";
// New high-fidelity packaging + e-commerce screenshots
import sonicAdentro from "@/assets/bway/bway-sonic-adentro.jpg.asset.json";
import sonicNegro from "@/assets/bway/bway-sonic-negro.jpg.asset.json";
import b10kAdentro from "@/assets/bway/bway-b10k-adentro.jpg.asset.json";
import compactFrente from "@/assets/bway/bway-compact-frente.jpg.asset.json";
import diecutUrban from "@/assets/bway/bway-diecut-urban.jpg.asset.json";
const ecomBrHome = { url: "https://raw.githubusercontent.com/jarasebastianarg-dot/Portfolio-Photos/main/Bway-brasil-Home.png" };
const ecomArHome = { url: "https://raw.githubusercontent.com/jarasebastianarg-dot/Portfolio-Photos/main/Bway%20Ecom%20arg.png" };
const ecomUsHome = { url: "https://raw.githubusercontent.com/jarasebastianarg-dot/Portfolio-Photos/main/Bway-USA-Ecom.png" };

export const Route = createFileRoute("/projects/b-way")({
  component: BWayProject,
  head: () => ({
    meta: [
      { title: "B-WAY: From packaging designer to brand manager | Sebastián Jara" },
      {
        name: "description",
        content:
          "Two years at B-WAY, a barber tools brand. I started on packaging, became Brand Manager and led a 5-person team across the US, Brazil and Argentina.",
      },
      { property: "og:title", content: "B-WAY: From packaging designer to brand manager" },
      {
        property: "og:description",
        content:
          "Packaging made with the factory in China, Shopify stores for three countries, Meta Ads, email and event stands at Barber Week.",
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

const focus = ["Product Designer → Brand Manager", "3 Markets · US / BR / AR", "5-person team"];

// The Growth Story — 4 chapters covering the promotion arc
const chapters = [
  {
    n: "01",
    icon: Package,
    kicker: "Where I Started",
    title: "Packaging & Social Media",
    body: "I started with the packaging for the full product line and the brand's social media posts. I worked directly with the factory in China, from die-cut approval to the final print.",
    tags: ["Packaging", "Social Media", "China Production"],
  },
  {
    n: "02",
    icon: ShoppingBag,
    kicker: "Going Digital",
    title: "E-Commerce",
    body: "Then I took over e-commerce. I built and ran the Shopify stores for Brazil, Argentina and the US.",
    tags: ["Shopify BR", "Shopify AR", "Shopify US"],
  },
  {
    n: "03",
    icon: Megaphone,
    kicker: "Growing the Brand",
    title: "Marketing Campaigns",
    body: "I ran the marketing in all three markets: Meta Ads, email and content for each product launch.",
    tags: ["Meta Ads", "Email", "Launches"],
  },
  {
    n: "04",
    icon: Calendar,
    kicker: "At the Events",
    title: "Events & Trade Shows",
    body: "I designed and organized our stands at Barber Week in Buenos Aires and in Brazil, and trained the brand educators who worked them.",
    tags: ["Stand Design", "AR · BR", "Educators"],
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
  { url: diecutUrban.url, label: "Urban · Retail Packaging", kicker: "Urban" },
  { url: b10kAdentro.url, label: "B10K · Box & Interior Print", kicker: "B10K" },
  { url: sonicNegro.url, label: "Sonic · Black Edition Packaging", kicker: "Sonic" },
  { url: sonicAdentro.url, label: "Sonic · Interior Layout", kicker: "Interior" },
  { url: compactFrente.url, label: "Compact · Retail Packaging", kicker: "Compact" },
  { url: b10kMockup.url, label: "B10K · Product Mockup", kicker: "Mockup" },
  { url: urbanDiecut.url, label: "Urban · Die-cut Technical Drawing", kicker: "Die-cut" },
  { url: urbanBack.url, label: "Urban · Back Packaging Details", kicker: "Urban" },
  { url: b10kAccessories.url, label: "B10K · Accessories Packaging", kicker: "Accessories" },
  { url: sonicBlack.url, label: "Sonic · Alt Edition", kicker: "Sonic" },
  { url: sonicInside.url, label: "Sonic · Interior Detail", kicker: "Interior" },
  { url: compactFront.url, label: "Compact · Front View", kicker: "Compact" },
  { url: compactBack.url, label: "Compact · Back Packaging", kicker: "Compact" },
];

const reels = [
  {
    url: reel1.url,
    country: "Argentina",
    title: "Barber Week · Buenos Aires",
    body: "Our stand, with live product demos run by the brand educators.",
  },
  {
    url: barberWeekBr.url,
    country: "Brasil",
    title: "Barber Week · Brasil",
    body: "I traveled to Brazil to design the stand, make the graphics, sort out the logistics and build it on site. Then I worked the stand for the brand.",
  },
];

const ecomShots = [
  { url: ecomUsHome.url, label: "Shopify USA · Homepage", country: "US" },
  { url: ecomBrHome.url, label: "Shopify Brasil · Homepage", country: "BR" },
  { url: ecomArHome.url, label: "Shopify Argentina · Homepage", country: "AR" },
];

// Packaging spotlight — curated mockups for the dedicated section
const packagingSpotlight = [
  { url: brandCover.url, label: "B-WAY · Full Product Line System", kicker: "Line-up" },
  { url: b10kAdentro.url, label: "B10K · Retail Box", kicker: "B10K" },
  { url: b10kAccessories.url, label: "B10K · Accessories", kicker: "Accessories" },
  { url: sonicBlack.url, label: "Sonic · Black Edition", kicker: "Sonic" },
  { url: diecutUrban.url, label: "Urban · Retail Box", kicker: "Urban" },
  { url: compactFrente.url, label: "Compact · Retail Box", kicker: "Compact" },
];

// Lightbox — clickable image zoom with spring animation
function Lightbox({
  open,
  src,
  label,
  onClose,
}: {
  open: boolean;
  src: string | null;
  label?: string;
  onClose: () => void;
}) {
  const { tr } = useTr();
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && src ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-md md:p-10"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={label ?? tr("Image preview")}
        >
          <motion.button
            type="button"
            onClick={onClose}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground shadow-[var(--shadow-card)] transition-colors hover:bg-background md:right-6 md:top-6"
            aria-label={tr("Close preview")}
          >
            <X className="h-5 w-5" />
          </motion.button>
          {label ? (
            <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-background/90 px-4 py-1.5 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-foreground shadow-[var(--shadow-card)] md:top-6">
              {label}
            </div>
          ) : null}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: "spring", stiffness: 240, damping: 26 }}
            className="relative w-[95vw] max-w-7xl max-h-[90vh] overflow-y-auto overflow-x-hidden bg-white rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={label ?? ""}
              className="w-full h-auto block"
              decoding="async"
              style={{ transform: "translateZ(0)" }}
              draggable={false}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

const metrics = [
  { icon: TrendingUp, value: "Product Designer → Brand Manager", label: "Promoted after 9 months, in August 2024. I went from designing boxes to running the brand." },
  { icon: Layers, value: "5 areas in one role", label: "Packaging, social media, e-commerce, campaigns and events." },
  { icon: Globe2, value: "3 markets", label: "Argentina, Brazil and the US, each with its own Shopify store and campaigns." },
  { icon: GraduationCap, value: "Team of 5", label: "I led the marketing team and trained the brand educators for our events." },
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

const mockups = packaging;

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
              <h3 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight">
                {tr("Brand Guidelines & Logo Variations")}{" "}
                <span className="">
                  {tr("Overlap")}
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
                {tr(m.kicker)}
              </div>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border bg-card shadow-[var(--shadow-card)]">
                <img src={m.url} alt={tr(m.label)} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-white/85">{tr(m.label)}</div>
                </div>
              </div>
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
                {tr("Brand Guidelines & Logo Variations")}{" "}
                <span className="">
                  {tr("Overlap")}
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
          {mockups.map((m, i) => (
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
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border bg-card shadow-[var(--shadow-card)]">
                <img src={m.url} alt={tr(m.label)} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/85">{tr(m.label)}</div>
                </div>
              </div>
            </div>
          ))}
          <div className="w-20 shrink-0" />
        </motion.div>
      </div>
    </div>
  );
}

function BWayProject() {
  const { tr } = useTr();
  const caseLabel = useCaseLabel("b-way");
  const [lightbox, setLightbox] = useState<{ src: string; label?: string } | null>(null);
  const openLightbox = (src: string, label?: string) => setLightbox({ src, label });
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Lightbox
        open={lightbox !== null}
        src={lightbox?.src ?? null}
        label={lightbox?.label}
        onClose={() => setLightbox(null)}
      />
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
              <SectionLabel>{tr("Packaging · E-commerce · Events")}</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-5xl text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-[4.5rem]"
            >
              {tr("From")}{" "}
              <span className="text-gradient-accent">{tr("Packaging Designer")}</span>{" "}
              {tr("to")}{" "}
              <span className="font-serif italic font-normal text-accent-1">
                {tr("Brand Manager")}
              </span>
              . {tr("Two years at B-WAY, in three countries.")}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {tr("I joined as a")}{" "}
              <span className="font-semibold text-foreground">{tr("Product Designer")}</span>{" "}
              {tr("doing packaging and die-cuts. Nine months later I was Brand Manager, leading a")}{" "}
              <span className="font-semibold text-foreground">{tr("5-person team")}</span>{" "}
              {tr("for the US, Brazil and Argentina. I built the Shopify stores, ran Meta Ads and email, trained the brand educators and designed our stands for Barber Week.")}
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
                {tr("Product Designer → Brand Manager")}
              </div>
              <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                {tr("Nov 2023 - Dec 2025 · Promoted after 9 months")}
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-colors duration-300 hover:border-accent-1/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {tr("What I worked on")}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="cursor-default rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-foreground/80 transition-colors duration-200 hover:border-accent-1/50 hover:bg-background hover:text-foreground"
                  >
                    {tr(t)}
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
            <motion.h3
              variants={fadeUp}
              className="mb-6 text-2xl font-bold tracking-tight md:text-3xl"
            >
              {tr("One brand, three countries")}
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-foreground/85 md:text-xl"
            >
              {tr("B-WAY makes tools for barbers. The brand needed")}{" "}
              <span className="font-semibold text-foreground">{tr("packaging, online stores, campaigns and events")}</span>.{" "}
              {tr("And all of it had to work in")}{" "}
              <span className="font-semibold text-accent-1">{tr("the US, Brazil and Argentina")}</span>.{" "}
              {tr("I started on the packaging. Every few months I took on something new: social media, e-commerce, campaigns, educators, events. Nine months in, I was promoted to Brand Manager.")}
            </motion.p>
          </Reveal>
        </div>

        {/* Packaging Cover */}
        <div className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
          <Reveal>
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border bg-card shadow-[var(--shadow-card)]"
            >
              <img
                src={brandCover.url}
                alt={tr("B-WAY full product line")}
                loading="lazy" decoding="async"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6">
                <div className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/85">
                  {tr("Where it started: the full B-WAY packaging line")}
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* The Growth Story */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <Reveal className="flex max-w-3xl flex-col gap-6" stagger={0.1}>
            <motion.div variants={fadeUp} className="">
              <h2 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                {tr("Four")}{" "}
                <span className="">
                  {tr("stages")}
                </span>{" "}
                {tr("in two years.")}
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-sm leading-relaxed text-muted-foreground max-w-[65ch] md:text-base"
            >
              {tr("Each stage added new work on top of the last one. First packaging, then the online stores, then campaigns, then events and the team. By the end I was leading the team that handled all of it.")}
            </motion.p>
          </Reveal>

          <Reveal className="mt-10 space-y-4 md:space-y-6" stagger={0.08}>
            {chapters.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.article
                  key={c.n}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className="group relative grid grid-cols-1 gap-4 overflow-hidden rounded-[calc(var(--radius)+14px)] border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)] md:grid-cols-12 md:gap-6 md:p-7"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.18_45_/_0.14),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative md:col-span-3">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-accent-1 ring-1 ring-inset ring-border transition-colors duration-300 group-hover:bg-accent-1 group-hover:text-white">
                        <Icon className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <div className="font-display text-3xl font-bold tracking-tight text-accent-1 md:text-4xl">
                        {c.n}
                      </div>
                    </div>
                    <div className="mt-3 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      {tr(c.kicker)}
                    </div>
                  </div>
                  <div className="relative md:col-span-9">
                    <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                      {tr(c.title)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80 md:text-base">
                      {tr(c.body)}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[0.7rem] font-semibold text-foreground/80"
                        >
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

        {/* Packaging Work */}
        <div className="border-t border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <Reveal className="flex max-w-3xl flex-col gap-6" stagger={0.08}>
              <motion.div variants={fadeUp} className="">
                <h2 className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                  {tr("Every box the brand")}{" "}
                  <span className="">
                    {tr("shipped")}
                  </span>
                  .
                </h2>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="text-base leading-relaxed text-muted-foreground max-w-[65ch] md:text-lg"
              >
                {tr("I designed the packaging for every B-WAY product line: die-cuts, inside prints and retail boxes.")}{" "}
                <span className="font-semibold text-foreground">
                  {tr("I worked directly with the factory in China")}
                </span>{" "}
                {tr("from die-cut approval to the final print run.")}{" "}
                <span className="font-semibold text-foreground">
                  {tr("I also oversaw every product launch")}
                </span>{" "}
                {tr("from my first day until I left at the end of")}{" "}
                <span className="font-semibold text-accent-1">2025</span>
                {tr(", so the whole line looked like one brand in all three markets.")}
              </motion.p>
            </Reveal>

            <Reveal
              className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6"
              stagger={0.06}
            >
              {packagingSpotlight.map((p, i) => (
                <motion.button
                  key={p.url}
                  type="button"
                  onClick={() => openLightbox(p.url, p.label)}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group relative block w-full rounded-[calc(var(--radius)+14px)] border border-border bg-card text-left shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1/60"
                  aria-label={`${tr("Open")} ${tr(p.label)} ${tr("preview")}`}
                >
                  <div className="absolute -top-3 left-3 z-10 inline-flex items-center gap-2 rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground shadow-[var(--shadow-card)]">
                    <span className="text-accent-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {tr(p.kicker)}
                  </div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[calc(var(--radius)+14px)] bg-background">
                    <img
                      src={p.url}
                      alt={tr(p.label)}
                      loading="lazy" decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                      draggable={false}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3">
                      <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/90">
                        {tr(p.label)}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 font-mono text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-foreground opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
                        <ZoomIn className="h-3 w-3" />
                        {tr("Zoom")}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </Reveal>

            <Reveal className="mt-10 flex flex-wrap gap-2" stagger={0.03}>
              {[
                "Die-cuts",
                "Interior print",
                "Retail boxes",
                "Factory coordination · China",
                "Launch supervision · 2023 - 2025",
              ].map((t) => (
                <motion.span
                  key={t}
                  variants={fadeUp}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-foreground/80"
                >
                  {tr(t)}
                </motion.span>
              ))}
            </Reveal>
          </div>
        </div>

        {/* E-Commerce Storefronts */}
        <div className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <Reveal className="flex max-w-3xl flex-col gap-6" stagger={0.08}>
              <motion.div variants={fadeUp} className="">
                <h2 className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                  {tr("Three Shopify stores,")}{" "}
                  <span className="">
                    {tr("one per market")}
                  </span>
                  .
                </h2>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="text-base leading-relaxed text-muted-foreground max-w-[65ch] md:text-lg"
              >
                {tr("I built and ran the stores for the US, Brazil and Argentina: catalog, checkout, local copy and payments. Hover over a preview to scroll the homepage, or click to zoom in.")}
              </motion.p>
            </Reveal>
            <Reveal className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {ecomShots.map((s) => (
                <motion.button
                  key={s.url}
                  type="button"
                  onClick={() => openLightbox(s.url, s.label)}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group relative block w-full overflow-hidden rounded-[calc(var(--radius)+14px)] border border-border bg-card text-left shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1/60"
                  aria-label={`${tr("Open")} ${tr(s.label)} ${tr("preview")}`}
                >
                  <div className="flex items-center justify-between border-b border-border bg-secondary/60 px-4 py-2.5">
                    <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      {tr(s.label)}
                    </span>
                    <span className="rounded-full bg-gradient-accent px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-accent-foreground">
                      {s.country}
                    </span>
                  </div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-background">
                    <img
                      src={s.url}
                      alt={tr(s.label)}
                      loading="lazy" decoding="async"
                      className="block h-auto w-full select-none transition-transform duration-[7000ms] ease-linear group-hover:-translate-y-[70%]"
                      draggable={false}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-foreground/85 px-2.5 py-1 font-mono text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-background opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
                      <ZoomIn className="h-3 w-3" />
                      {tr("Click to zoom")}
                    </div>
                  </div>
                </motion.button>
              ))}
            </Reveal>
          </div>
        </div>

        {/* Events & Reels */}
        <div className="border-t border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <Reveal className="max-w-4xl" stagger={0.08}>
              <motion.div variants={fadeUp}>
                <h2 className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                  {tr("Events I")}{" "}
                  <span className="">
                    {tr("organized")}
                  </span>{" "}
                  {tr("and designed.")}
                </h2>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {tr("I handled the")}{" "}
                <span className="font-semibold text-foreground">
                  {tr("stand design, graphics, logistics and setup")}
                </span>{" "}
                {tr("for our events, from Barber Week in Buenos Aires to Barber Week in Brazil.")}{" "}
                <span className="font-semibold text-accent-1">
                  {tr("I traveled to Brazil to build the stand and represent the brand")}
                </span>{" "}
                {tr("with the educator team.")}
              </motion.p>
            </Reveal>
            <Reveal
              className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:[grid-template-rows:auto_auto_1fr]"
              stagger={0.1}
            >
              {reels.map((r) => (
                <motion.div
                  key={r.url}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group relative flex flex-col sm:grid sm:[grid-template-rows:subgrid] sm:row-span-3"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-gradient-accent px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-[0.22em] text-accent-foreground shadow-[var(--shadow-accent)]">
                      {tr("Event")} · {r.country}
                    </span>
                    <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      {tr("Stand design · graphics · build · organized by me")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                      {tr(r.title)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {tr(r.body)}
                    </p>
                  </div>
                  <div className="mt-5 self-end overflow-hidden rounded-[calc(var(--radius)+18px)] border border-border bg-black shadow-[var(--shadow-card)]">
                    <video
                      src={r.url}
                      className="pointer-events-none aspect-[9/16] w-full object-cover"
                      playsInline
                      muted
                      loop
                      autoPlay
                      preload="metadata"
                      disablePictureInPicture
                      disableRemotePlayback
                      controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
                    />
                  </div>
                </motion.div>
              ))}
            </Reveal>
          </div>
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
              {tr("How I")}{" "}
              <span className="">
                {tr("grew")}
              </span>{" "}
              {tr("in this role.")}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-relaxed text-background/70 md:text-lg"
            >
              {tr(
                "I joined as a Product Designer and left as Brand Manager, in charge of packaging, e-commerce, marketing and events in three countries.",
              )}
            </motion.p>
          </Reveal>

          <Reveal className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.08}>
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative overflow-hidden rounded-[calc(var(--radius)+16px)] border border-white/10 bg-white/[0.04] p-8 text-left backdrop-blur-sm transition-colors duration-500 hover:border-accent-1/40"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.18_45_/_0.28),transparent_65%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <m.icon className="h-6 w-6 text-accent-1" strokeWidth={1.6} />
                <div className="mt-6 font-display text-xl font-bold leading-tight tracking-tight md:text-2xl">
                  {tr(m.value)}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-background/70">
                  {tr(m.label)}
                </div>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      <NextProject current="b-way" />
    </main>
  );
}