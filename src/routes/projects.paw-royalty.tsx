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
  Sparkles,
  Layers,
  Repeat,
  ShoppingCart,
  Mail,
  MousePointerClick,
  Percent,
  TrendingUp,
  Boxes,
  Plus,
  X,
  ZoomIn,
} from "lucide-react";
import prHome from "@/assets/paw-royalty/pr-home.png.asset.json";
import prProduct from "@/assets/paw-royalty/pr-product.png.asset.json";
import prSubscribe from "@/assets/paw-royalty/pr-subscribe.png.asset.json";
import prQuiz from "@/assets/paw-royalty/pr-quiz.png.asset.json";
import prEmailSubscribe from "@/assets/paw-royalty/pr-email-subscribe.png.asset.json";
import prEmailCalming from "@/assets/paw-royalty/pr-email-calming.png.asset.json";
import prEmailCampaign from "@/assets/paw-royalty/pr-email-campaign.png.asset.json";

export const Route = createFileRoute("/projects/paw-royalty")({
  component: PawRoyaltyProject,
  head: () => ({
    meta: [
      { title: "Paw Royalty — Full-Stack E-Commerce Launch & High-Converting UX" },
      {
        name: "description",
        content:
          "Case study: launching Paw Royalty from zero with a fully custom Shopify Liquid storefront, native Subscribe & Save engine, and full-funnel Klaviyo retention.",
      },
      { property: "og:title", content: "Paw Royalty — E-Commerce Launch Case Study" },
      {
        property: "og:description",
        content:
          "How I launched a new pet care brand with a 100% native Shopify Liquid build and a retention system engineered for day-one recurring revenue.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects/paw-royalty" },
    ],
    links: [{ rel: "canonical", href: "/projects/paw-royalty" }],
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

const focus = ["Brand Incubation", "UI/UX Design", "Retention Strategy"];

const executionCards = [
  {
    icon: Layers,
    kicker: "PDP",
    title: "High-Density Product Architectures",
    body: "Information-dense PDPs hardcoded in Liquid — visual, fast, and engineered to build trust and drive conversion.",
  },
  {
    icon: ShoppingCart,
    kicker: "LTV",
    title: "Native Subscribe & Save Engine",
    body: "Seamless subscription flow wired into the native cart — capturing recurring revenue from day one.",
  },
  {
    icon: Mail,
    kicker: "Retention",
    title: "Full-Funnel Email Marketing",
    body: "Klaviyo flows — welcome, abandoned cart, post-purchase — nurturing leads and maximizing ROI on autopilot.",
  },
  {
    icon: MousePointerClick,
    kicker: "UX",
    title: "Liquid-Driven Creative Freedom",
    body: "Custom Liquid and CSS translate the brand into a fluid, interactive UI — hand-crafted across every device.",
  },
];

const metrics = [
  { icon: Boxes, value: "100%", label: "Custom Native Architecture" },
  { icon: Percent, value: "+4.2%", label: "Day-One Conversion Rate" },
  { icon: Repeat, value: "35%", label: "Subscription Opt-In Rate" },
  { icon: TrendingUp, value: "30x", label: "ROI on Klaviyo Automations" },
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
  const Icon = card.icon;
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);
  // On mobile: always show body copy but keep the accent visuals in resting state.
  // Reserve the accent bar / glow / icon-swap treatment for real hover on desktop.
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
      {/* Accent top bar */}
      <motion.span
        aria-hidden
        initial={false}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 top-0 h-[3px] origin-left bg-gradient-accent"
      />
      {/* Radial glow */}
      <motion.span
        aria-hidden
        initial={false}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.18_45_/_0.22),transparent_65%)]"
      />

      {/* Header row */}
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

      {/* Title always visible */}
      <h3 className="relative mt-auto text-lg font-bold leading-tight tracking-tight md:text-[1.05rem] lg:text-lg">
        {card.title}
      </h3>

      {/* Swap: helper vs body */}
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
    focus: "Conversion + Education",
    body: "Designed to convert and inform in equal measure — hero storytelling, best-sellers, benefits, customer proof and press credibility guide cold clicks to considered add-to-carts.",
    image: prHome.url,
  },
  {
    kicker: "PDP",
    title: "Product Detail Page",
    focus: "Conversion + Trust",
    body: "A high-density PDP built to close the sale. Native Subscribe & Save 15% wired into the cart, plus ingredients, certifications, FAQs and behavioral wellness copy stack the trust pet parents need to check out.",
    image: prProduct.url,
  },
  {
    kicker: "S&S",
    title: "Subscribe & Save",
    focus: "Recurring Revenue",
    body: "A dedicated page that turns subscription into the offer — choose formula, pick cadence, save 15% every order — reframing recurrence as clinical benefit, not a lock-in.",
    image: prSubscribe.url,
  },
  {
    kicker: "Quiz",
    title: "Wellness Quiz",
    focus: "Personalization + Discount",
    body: "An interactive quiz that recommends a supplement stack by breed, age and health goals and unlocks a first-order discount — feeding Klaviyo with segmented, high-intent data.",
    image: prQuiz.url,
  },
];

const emails = [
  {
    kicker: "Campaign",
    title: "Royal Treatment — Flagship Campaign",
    focus: "Brand + Conversion",
    body: "Editorial hero campaign email — bestseller grid with vet-driven copy, science badges and a limited-time 15% first-order code. Designed to sell the brand and the product at once.",
    image: prEmailCampaign.url,
  },
  {
    kicker: "Retention",
    title: "Subscribe & Save 15% Off",
    focus: "Recurring Revenue",
    body: "Full routine grid pushing every SKU into the subscription funnel — dark cards, single CTA per formula, and social proof close to lift subscribers-per-send.",
    image: prEmailSubscribe.url,
  },
  {
    kicker: "Welcome",
    title: "Calming — 20% OFF Welcome Flow",
    focus: "Acquisition + Trust",
    body: "Welcome-series drop for the Calming SKU: veterinarian-formulated badge, ingredient breakdown, verified reviews and a single ROYAL-SUB code to convert first-time subscribers.",
    image: prEmailCalming.url,
  },
];

// Lightbox — clickable full-resolution zoom for any preview image
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
            className="relative flex max-h-[88vh] max-w-[92vw] items-start justify-center overflow-y-auto rounded-3xl border border-white/10 bg-background shadow-2xl md:max-w-[80vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={label ?? ""}
              className="block h-auto w-auto max-w-full select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

type GalleryItem = (typeof mockups)[number];

function ScrollPreviewCard({
  item,
  index,
  onOpen,
  scrollDurationMs = 7000,
}: {
  item: GalleryItem;
  index: number;
  onOpen: (src: string, label: string) => void;
  scrollDurationMs?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="relative flex h-full flex-col"
    >
      <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground shadow-[var(--shadow-card)]">
        <span className="text-accent-1">
          {String(index + 1).padStart(2, "0")}
        </span>
        {item.kicker}
      </div>
      <button
        type="button"
        onClick={() => onOpen(item.image, item.title)}
        className="group relative block w-full overflow-hidden rounded-[calc(var(--radius)+14px)] border border-border bg-[#E4EDF7] text-left shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1/60"
        aria-label={`Open ${item.title} preview`}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            style={{ transitionDuration: `${scrollDurationMs}ms` }}
            className="block h-auto w-full select-none ease-linear [image-rendering:auto] group-hover:-translate-y-[70%]"
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
  onOpen: (src: string, label: string) => void;
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

function PawRoyaltyProject() {
  const [lightbox, setLightbox] = useState<{ src: string; label?: string } | null>(null);
  const openLightbox = (src: string, label?: string) => setLightbox({ src, label });
  return (
    <main className="min-h-screen bg-background text-foreground">
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
            Back to portfolio
          </Link>
          <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Case Study / 02
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
              <SectionLabel>Shopify Launch · E-commerce</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-5xl text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-[4.5rem]"
            >
              Paw Royalty: Full-Stack{" "}
              <span className="text-gradient-accent">E-Commerce Launch</span>{" "}
              &{" "}
              <span className="font-serif italic font-normal text-accent-1">
                High-Converting UX
              </span>
              .
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              A brand incubated from zero — storefront, UX and retention system
              engineered directly in Shopify Liquid, tuned for day-one recurring
              revenue.
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
              Launching a new brand in the highly competitive pet care market
              requires more than just an aesthetic template. The challenge was
              building a digital presence from{" "}
              <span className="font-semibold text-foreground">absolute zero</span>{" "}
              that could immediately convey trust, educate the customer through
              information-dense product pages, and convert cold traffic into
              recurring revenue without relying on a pre-existing customer base.
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
              Bypassing rigid themes and static mockups to architect the entire
              digital storefront directly in Shopify Liquid. This provided
              absolute creative freedom and a high-performance foundation built
              specifically for scaling.
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
              A full-funnel email system — welcome, subscribe-and-save
              retention, and flagship product campaigns — designed and coded
              inside Klaviyo to compound revenue on autopilot.
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
              Launching something new?
            </h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
              I incubate brands end-to-end — from identity to a storefront built
              for recurring revenue.
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