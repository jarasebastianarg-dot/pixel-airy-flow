import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

/**
 * Route-change choreography: a full-viewport panel slides up over the page,
 * the new content fades in underneath, then the panel slides away.
 * Scroll position is restored manually per route so going back to the
 * homepage lands near the project card instead of jumping to top.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prev = useRef(pathname);
  const positions = useRef<Record<string, number>>({});
  const [covering, setCovering] = useState(false);

  // Track scroll per route (rAF-throttled, transform/opacity work only).
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        positions.current[window.location.pathname] = window.scrollY;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (prev.current === pathname) return;
    prev.current = pathname;
    const restore = positions.current[pathname] ?? 0;

    if (reduceMotion) {
      window.scrollTo(0, restore);
      return;
    }

    setCovering(true);
    // Minimum floor so fast loads never flicker.
    const mid = window.setTimeout(() => window.scrollTo(0, restore), 320);
    const end = window.setTimeout(() => setCovering(false), 420);
    return () => {
      window.clearTimeout(mid);
      window.clearTimeout(end);
    };
  }, [pathname, reduceMotion]);

  return (
    <>
      <AnimatePresence mode="wait">
        {covering && (
          <motion.div
            key="page-transition-panel"
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[130] bg-foreground"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: EASE }}
          />
        )}
      </AnimatePresence>

      {reduceMotion ? (
        children
      ) : (
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: EASE, delay: 0.1 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}

/** Swaps the tab title while the user is away on another tab. */
export function TabTitleSwap() {
  useEffect(() => {
    let original = document.title;
    const onChange = () => {
      if (document.hidden) {
        original = document.title;
        document.title = "Come back →";
      } else {
        document.title = original;
      }
    };
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);
  return null;
}
