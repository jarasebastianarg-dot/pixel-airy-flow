import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

export interface HeadlineSegment {
  text: string;
  accent?: boolean;
}

/**
 * Hero headline: character-level mask reveal. Each word is an
 * overflow-hidden inline block; characters slide up from y:120% while
 * fading in, staggered 15ms apart.
 */
export function CharReveal({
  segments,
  baseDelay = 0,
  className,
  as: Tag = "h1",
}: {
  segments: HeadlineSegment[];
  baseDelay?: number;
  className?: string;
  as?: "h1" | "h2";
}) {
  const reduceMotion = useReducedMotion();
  let charIndex = 0;

  const content: ReactNode[] = segments.map((seg, si) => (
    <span
      key={si}
      className={seg.accent ? "font-serif italic font-normal text-accent-1" : undefined}
    >
      {seg.text
        .split(/\s+/)
        .filter(Boolean)
        .map((word, wi) => (
          <span key={`${si}-${wi}`} className="inline-block overflow-hidden align-bottom">
            {word.split("").map((ch, ci) => {
              const i = charIndex++;
              return reduceMotion ? (
                <span key={ci} className="inline-block">
                  {ch}
                </span>
              ) : (
                <motion.span
                  key={ci}
                  className="inline-block will-change-transform"
                  initial={{ y: "120%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.6, ease: EASE, delay: baseDelay + i * 0.015 }}
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
        ))
        .flatMap((el, idx) => [el, <span key={`sp-${si}-${idx}`}> </span>])}
    </span>
  ));

  return <Tag className={className}>{content}</Tag>;
}
