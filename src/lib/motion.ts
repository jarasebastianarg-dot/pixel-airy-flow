/**
 * Shared motion tokens for the site's animation system.
 * Editorial/professional feel: quick, smooth ease-out, never bouncy.
 */

/** Custom ease-out cubic-bezier — the only easing used site-wide. */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** All scroll/reveal animations stay within 0.4s–0.8s. */
export const DURATION = {
  min: 0.4,
  base: 0.6,
  max: 0.8,
} as const;

export const REVEAL_DISTANCE = 24; // px translate-up on reveal
