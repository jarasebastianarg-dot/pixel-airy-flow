import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import SplitType from "split-type";

const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";

/**
 * Section heading with a line-by-line mask reveal (split-type).
 *
 * React only ever owns the hidden source markup; the animated copy is a DOM
 * clone we manage ourselves, so re-renders (e.g. language switch) never fight
 * with split-type's DOM surgery. Falls back to plain text when the user
 * prefers reduced motion or JS hasn't run yet.
 */
export function SplitHeading({
  children,
  className,
  as: Tag = "h2",
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  stagger?: number;
}) {
  const srcRef = useRef<HTMLSpanElement>(null);
  const outRef = useRef<HTMLSpanElement>(null);
  const lastHtml = useRef<string>("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const src = srcRef.current;
    const out = outRef.current;
    if (!src || !out) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let observer: IntersectionObserver | null = null;
    let resizeTimer: number | undefined;

    const build = () => {
      if (cancelled || !outRef.current || !srcRef.current) return;
      const target = outRef.current;
      target.innerHTML = srcRef.current.innerHTML;
      const split = new SplitType(target, { types: "lines", tagName: "span" });
      const lines = split.lines ?? [];
      lines.forEach((line) => {
        line.style.display = "block";
        line.style.overflow = "hidden";
        line.style.paddingBottom = "0.14em";
        line.style.marginBottom = "-0.14em";
        const inner = document.createElement("span");
        inner.style.display = "block";
        inner.style.willChange = "transform, opacity";
        inner.style.transform = "translateY(110%)";
        inner.style.opacity = "0";
        while (line.firstChild) inner.appendChild(line.firstChild);
        line.appendChild(inner);
      });
      setActive(true);

      const reveal = () => {
        lines.forEach((line, i) => {
          const inner = line.firstElementChild as HTMLElement | null;
          if (!inner) return;
          inner.style.transition = `transform 0.7s ${EASE} ${i * stagger}s, opacity 0.7s ${EASE} ${i * stagger}s`;
          inner.style.transform = "translateY(0%)";
          inner.style.opacity = "1";
        });
      };

      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            reveal();
            observer?.disconnect();
            observer = null;
          }
        },
        { rootMargin: "-10% 0px -10% 0px" }
      );
      observer.observe(target);
    };

    if (src.innerHTML !== lastHtml.current) {
      lastHtml.current = src.innerHTML;
      if (document.fonts?.status === "loaded") build();
      else document.fonts?.ready.then(build).catch(build) ?? build();
    }

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        lastHtml.current = srcRef.current?.innerHTML ?? "";
        build();
        // re-split loses the observer state; show immediately after a resize
        const lines = outRef.current?.querySelectorAll<HTMLElement>(".line > span");
        lines?.forEach((inner) => {
          inner.style.transition = "none";
          inner.style.transform = "translateY(0%)";
          inner.style.opacity = "1";
        });
      }, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
    };
  });

  return (
    <Tag className={className}>
      <span ref={srcRef} className={active ? "sr-only" : undefined}>
        {children}
      </span>
      <span ref={outRef} aria-hidden={active ? true : undefined} />
    </Tag>
  );
}
