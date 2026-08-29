import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Desktop-only custom cursor: an 8px dot that tracks the pointer with
 * near-zero lag, plus a 32px ring trailing on spring physics.
 * Falls back to the native cursor on touch devices and reduced motion.
 */
export function PremiumCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 300, damping: 30, mass: 0.4 });
  const ringY = useSpring(dotY, { stiffness: 300, damping: 30, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    function move(e: MouseEvent) {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHovering(
        !!target?.closest?.('a, button, [role="button"], [data-cursor="hover"]')
      );
    }
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[120] hidden md:block"
      >
        <span className="block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground" />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[119] hidden md:block"
      >
        <motion.span
          className="block h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/40"
          animate={{ scale: hovering ? 1.5 : 1, opacity: hovering ? 1 : 0.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </motion.div>
    </>
  );
}

/** Fixed full-viewport SVG noise generated with feTurbulence — no image asset. */
export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[110]"
      style={{ mixBlendMode: "overlay", opacity: 0.035 }}
    >
      <svg width="100%" height="100%">
        <filter id="premium-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#premium-grain)" />
      </svg>
    </div>
  );
}
