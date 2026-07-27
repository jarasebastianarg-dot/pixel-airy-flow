import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AnimatePresence,
  motion,
  useInView,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  Sparkles,
  Layers,
  Gauge,
  TrendingUp,
  Repeat,
  ShoppingCart,
  Mail,
  MousePointerClick,
  Plus,
  X,
  ZoomIn,
  MousePointer2,
  Percent,
} from "lucide-react";
import folkwaysHomeRetina from "@/assets/folkways/folkways-home-retina.png.asset.json";
import folkwaysProductRetina from "@/assets/folkways/folkways-product-retina.png.asset.json";
import folkwaysEmailClubRetina from "@/assets/folkways/folkways-email-club-retina.png.asset.json";
import folkwaysEmailCashbackRetina from "@/assets/folkways/folkways-email-cashback-retina.png.asset.json";

const FW_HOME =
  "https://raw.githubusercontent.com/jarasebastianarg-dot/Portfolio-Assets/main/Folkways%20Home.png";
const FW_PRODUCT =
  "https://raw.githubusercontent.com/jarasebastianarg-dot/Portfolio-Assets/main/Folkways%20Product-page-wine.png";
const FW_EMAIL_CLUB =
  "https://raw.githubusercontent.com/jarasebastianarg-dot/Portfolio-Assets/main/Folkways%20email%20(1).png";
const FW_EMAIL_CASHBACK =
  "https://raw.githubusercontent.com/jarasebastianarg-dot/Portfolio-Assets/main/Folkways%20email%20(2).png";

export const Route = createFileRoute("/projects/folkways")({
  component: FolkwaysProject,
  head: () => ({
    meta: [
      { title: "Folkways — 2,000+ SKU Shopify Migration & Retention Ecosystem" },
      {
        name: "description",
        content:
          "Case study: architecting a 2,000+ SKU migration to Shopify 2.0 with a native cart, app consolidation, Klaviyo retention and conversion-driven Liquid.",
      },
      { property: "og:title", content: "Folkways — Shopify 2.0 Migration Case Study" },
      {
        property: "og:description",
        content:
          "How I migrated 2,000+ SKUs, cut app bloat, and rebuilt a native retention ecosystem in Shopify Liquid.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects/folkways" },
    ],
    links: [{ rel: "canonical", href: "/projects/folkways" }],
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
  "Shopify",
  "Shopify Liquid",
  "HTML / CSS",
  "Klaviyo",
  "Email Automations",
];

const focus = ["Shopify 2.0 Migration", "Email Marketing", "CRO & Retention"];

const executionCards = [
  {
    icon: ShoppingCart,
    kicker: "AOV",
    title: "Native Cart & AOV Optimization",
    body: "Replaced rigid, app-injected blocks with a 100% custom native architecture. Engineered cross-sell layouts (“You May Also Like”) and dynamic messaging for volume discounts and shipping tiers directly in Shopify Liquid to strategically increase Average Order Value and overall cart conversion.",
  },
  {
    icon: Layers,
    kicker: "Ops",
    title: "App Consolidation & Cost Reduction",
    body: "Simplified the client's operational workflow by auditing and stripping away single-use third-party apps. Consolidating utilities into fewer high-impact tools drastically reduced monthly software expenses and backend configuration time, empowering the team to focus on growth rather than maintenance.",
  },
  {
    icon: Mail,
    kicker: "Email",
    title: "Klaviyo CRM & Lifecycle Email Marketing",
    body: "Rebuilt Klaviyo from the ground up as the brand's retention engine — cashback recovery flows, wine club acquisition campaigns and segmented lifecycle emails coded in-house to convert one-time buyers into repeat cellar customers and compound recurring revenue.",
  },
  {
    icon: MousePointerClick,
    kicker: "CRO",
    title: "Conversion-Driven Frontend Architecture",
    body: "Engineered real-time scarcity triggers (“Only 9 left”) directly synced with the backend to drive urgency and accelerate purchasing decisions. Deployed pure CSS sticky media logic to keep the “Add to Cart” action always within the viewport — eliminating scroll fatigue and removing friction from the buying journey.",
  },
];

const metrics = [
  { icon: Boxes, value: "2,000+", label: "SKUs Migrated & Automated" },
  { icon: Gauge, value: "-40%", label: "Reduction in Page Load Time" },
  { icon: TrendingUp, value: "+28%", label: "Increase in Cart Conversion Rate" },
  { icon: Repeat, value: "+45%", label: "Boost in Recurring Revenue" },
  { icon: Mail, value: "42%", label: "Avg. Klaviyo Campaign Open Rate" },
  { icon: MousePointer2, value: "3.8%", label: "Email-to-Site CTR" },
  { icon: Percent, value: "22x", label: "ROI on Retention Automations" },
  { icon: TrendingUp, value: "+31%", label: "Wine Club Subscription Lift" },
];

type ExecutionCardData = (typeof executionCards)[number];

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

const mockups = [
  {
    kicker: "Home",
    title: "Homepage",
    focus: "Merchandising + Storytelling",
    body: "Editorial homepage engineered around the buyer journey — staff picks, category rails, curated cases and the wine club offer stacked to move cold traffic from browsing to checkout without a single third-party app.",
    image: folkwaysHomeRetina.url,
    sourceImage: FW_HOME,
    width: "wide" as const,
  },
  {
    kicker: "PDP",
    title: "Product Detail Page",
    focus: "Conversion + Trust",
    body: "High-density PDP hardcoded in Liquid — dynamic scarcity, sticky add-to-cart, cross-sell rail and maker notes designed to close the sale on natural, low-intervention bottles.",
    image: folkwaysProductRetina.url,
    sourceImage: FW_PRODUCT,
    width: "wide" as const,
  },
];

const emails = [
  {
    kicker: "Club",
    title: "Wine Club Acquisition Campaign",
    focus: "Acquisition + Recurring Revenue",
    body: "Curated Cases campaign pushing the monthly wine club — hero editorial, 10% off framing and dual-tier subscription cards (Essential 4-Pack and Voyager 6-Pack) designed to convert subscribers on the first send.",
    image: folkwaysEmailClubRetina.url,
    sourceImage: FW_EMAIL_CLUB,
  },
  {
    kicker: "Retention",
    title: "$22.30 Cashback Recovery",
    focus: "Winback + LTV",
    body: "Lifecycle recovery email built inside Klaviyo — personalized cashback balance, three curated next-buy angles and a single dark CTA. Rebuilt to reactivate dormant customers and lift second-order rate.",
    image: folkwaysEmailCashbackRetina.url,
    sourceImage: FW_EMAIL_CASHBACK,
  },
];

// Lightbox — clickable full-resolution zoom for any preview image
function Lightbox({
  open,
  src,
  label,
  width = "standard",
  onClose,
}: {
  open: boolean;
  src: string | null;
  label?: string;
  width?: "standard" | "wide";
  onClose: () => void;
}) {
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
          aria-label={label ?? "Image preview"}
        >
          <motion.button
            type="button"
            onClick={onClose}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground shadow-[var(--shadow-card)] transition-colors hover:bg-background md:right-6 md:top-6"
            aria-label="Close preview"
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

type GalleryItem = {
  kicker: string;
  title: string;
  focus: string;
  body: string;
  image: string;
  sourceImage?: string;
  width?: "standard" | "wide";
};

function ScrollPreviewCard({
  item,
  index,
  onOpen,
  scrollDurationMs = 7000,
}: {
  item: GalleryItem;
  index: number;
  onOpen: (src: string, label: string, width?: "standard" | "wide") => void;
  scrollDurationMs?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="relative mx-auto flex h-full w-full max-w-[420px] flex-col"
    >
      <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground shadow-[var(--shadow-card)]">
        <span className="text-accent-1">
          {String(index + 1).padStart(2, "0")}
        </span>
        {item.kicker}
      </div>
      <button
        type="button"
        onClick={() => onOpen(item.image, item.title, item.width)}
        className="group relative block w-full overflow-hidden rounded-[calc(var(--radius)+14px)] border border-border bg-secondary text-left shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1/60"
        aria-label={`Open ${item.title} preview`}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            decoding="async"
            style={{ transitionDuration: `${scrollDurationMs}ms`, transform: "translateZ(0)" }}
            className="block h-auto w-full select-none ease-linear group-hover:-translate-y-[70%]"
            draggable={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-foreground/85 px-2.5 py-1 font-mono text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-background opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
            <ZoomIn className="h-3 w-3" />
            Click to zoom
          </div>
        </div>
      </button>
      <div className="mt-5 space-y-2">
        <div className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-accent-1">
          {item.focus}
        </div>
        <div className="text-lg font-bold tracking-tight">{item.title}</div>
        <p className="text-[0.85rem] leading-relaxed text-muted-foreground">
          {item.body}
        </p>
      </div>
    </motion.div>
  );
}

function PreviewGallery({
  items,
  onOpen,
  scrollDurationMs,
}: {
  items: GalleryItem[];
  onOpen: (src: string, label: string, width?: "standard" | "wide") => void;
  scrollDurationMs?: number;
}) {
  return (
    <Reveal
      className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2"
      stagger={0.08}
    >
      {items.map((item, i) => (
        <ScrollPreviewCard
          key={item.title}
          item={item}
          index={i}
          onOpen={onOpen}
          scrollDurationMs={scrollDurationMs}
        />
      ))}
    </Reveal>
  );
}

function FolkwaysProject() {
  const [lightbox, setLightbox] = useState<{ src: string; label?: string; width?: "standard" | "wide" } | null>(null);
  const openLightbox = (src: string, label?: string, width?: "standard" | "wide") =>
    setLightbox({ src, label, width });
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Lightbox
        open={lightbox !== null}
        src={lightbox?.src ?? null}
        label={lightbox?.label}
        width={lightbox?.width}
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
            Back to portfolio
          </Link>
          <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Case Study / 01
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
              <SectionLabel>Shopify Expert · E-commerce</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-5xl text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-[4.5rem]"
            >
              Folkways: Architecting a{" "}
              <span className="text-gradient-accent">2,000+ SKU</span>{" "}
              Website Migration &{" "}
              <span className="font-serif italic font-normal text-accent-1">
                Native Retention
              </span>{" "}
              Ecosystem.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              A full Shopify 2.0 rebuild plus a native Klaviyo retention
              engine — from catalog migration to cashback recovery flows and
              wine club campaigns — engineered directly in Liquid and coded
              in-house, without a single bloated app.
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
                Lead E-commerce Developer & Designer
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
              Moving a massive, complex catalog to Shopify 2.0 required more
              than a simple theme update. The brand was leaking revenue on
              two fronts: a storefront suffering from severe{" "}
              <span className="font-semibold text-foreground">
                “app bloat,”
              </span>{" "}
              and a fragmented email stack that couldn't turn buyers into
              repeat customers — page load delays on one side, dead retention
              flows on the other.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              The team was juggling multiple single-use apps for cart, upsell
              and pop-ups while running Klaviyo at a fraction of its
              potential — draining resources and starving the wine club of
              the traffic it needed to grow.
            </motion.p>
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
              Rebuilding the storefront in Shopify Liquid and rewiring
              retention inside Klaviyo — one editorial system covering
              catalog, cart, campaigns and lifecycle email, without
              compromising the buyer journey or the backend workflow.
            </motion.p>
          </Reveal>

          <Reveal
            className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.06}
          >
            {executionCards.map((c, i) => (
              <ExecutionCard key={c.title} card={c} index={i} />
            ))}
          </Reveal>

          {/* Storefront preview gallery — scroll on hover, click to zoom */}
          <div className="mt-20">
            <Reveal className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between" stagger={0.08}>
              <motion.div variants={fadeUp}>
                <SectionLabel>02.5 — Gallery</SectionLabel>
                <h3 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl">
                  Storefront{" "}
                  <span className="font-serif italic font-normal text-accent-1">
                    in motion
                  </span>
                </h3>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                Hover any preview to scroll the full page. Click to open the
                full-resolution capture.
              </motion.p>
            </Reveal>
            <PreviewGallery items={mockups} onOpen={openLightbox} />
          </div>
        </div>
      </section>

      {/* Email Marketing */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end" stagger={0.1}>
            <motion.div variants={fadeUp} className="md:col-span-7">
              <SectionLabel>02.75 — Email Marketing</SectionLabel>
              <h2 className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                Retention wired into{" "}
                <span className="font-serif italic font-normal text-accent-1">
                  Klaviyo
                </span>
                .
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-muted-foreground md:col-span-5 md:text-lg"
            >
              A native retention system built inside Klaviyo — cashback recovery
              flows and wine club acquisition campaigns designed to turn
              one-time buyers into a repeat cellar and compound revenue on
              autopilot.
            </motion.p>
          </Reveal>
          <PreviewGallery items={emails} onOpen={openLightbox} scrollDurationMs={9000} />
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
              Have a catalog that's outgrown its stack?
            </h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
              I architect Shopify environments that scale — without the app bloat.
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
