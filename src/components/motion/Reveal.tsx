import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION, EASE_OUT, REVEAL_DISTANCE } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  /**
   * Stagger delay (seconds). Accepts either:
   *  - an index number: delay = index * staggerStep
   *  - an explicit number in seconds (use `delay` prop instead for that)
   */
  index?: number;
  /** Explicit delay in seconds (overrides index-based stagger). */
  delay?: number;
  /** Stagger step in seconds between siblings. Defaults to 0.08. */
  staggerStep?: number;
  /** Animation duration, clamped to the 0.4s–0.8s editorial range. */
  duration?: number;
  className?: string;
}

/**
 * Reusable scroll-reveal: fades in and translates up 24px when entering
 * the viewport. Respects prefers-reduced-motion by rendering instantly
 * (opacity-only, no transform, effectively no animation).
 */
export function Reveal({
  children,
  index = 0,
  delay,
  staggerStep = 0.08,
  duration = DURATION.base,
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const clamped = Math.min(Math.max(duration, DURATION.min), DURATION.max);
  const resolvedDelay = delay ?? index * staggerStep;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: REVEAL_DISTANCE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: clamped, ease: EASE_OUT, delay: resolvedDelay }}
    >
      {children}
    </motion.div>
  );
}
