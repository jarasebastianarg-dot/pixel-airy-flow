import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import SplitType from "split-type";

const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";

/** Stable text key so the split only re-runs when the copy actually changes. */
function textOf(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    return Children.toArray(props.children).map(textOf).join("");
  }
  return "";
}

/**
 * Section heading with a line-by-line mask reveal (split-type).
 *
 * Progressive enhancement: React owns a plain, fully visible copy of the text.
 * Only once the animated clone has been built successfully do we swap the
 * plain copy for the screen-reader-only source. If JS fails, fonts never
 * resolve, or the user prefers reduced motion, the heading renders as normal
 * static text.
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
  const [active, setActive] = useState(false);
  const textKey = textOf(children);

  useEffect(() => {
    const src = srcRef.current;
    const out = outRef.current;
    if (!src || !out) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let observer: IntersectionObserver | null = null;
    let split: SplitType | null = null;
    let resizeTimer: number | undefined;
    let revealed = false;

    const clear = () => {
      observer?.disconnect();
      observer = null;
      try {
        split?.revert();
      } catch {
        /* element already gone */
      }
      split = null;
      if (outRef.current) outRef.current.innerHTML = "";
    };

    const build = (revealImmediately = false) => {
      if (cancelled || !outRef.current || !srcRef.current) return;
      clear();
      const target = outRef.current;
      target.innerHTML = srcRef.current.innerHTML;
      split = new SplitType(target, { types: "lines", tagName: "span" });
      const lines = split.lines ?? [];
      if (lines.length === 0) return; // keep the plain copy visible

      const inners: HTMLElement[] = [];
      lines.forEach((line) => {
        line.style.display = "block";
        line.style.overflow = "hidden";
        line.style.paddingBottom = "0.14em";
        line.style.marginBottom = "-0.14em";
        const inner = document.createElement("span");
        inner.style.display = "block";
        inner.style.willChange = "transform, opacity";
        if (!revealImmediately) {
          inner.style.transform = "translateY(110%)";
          inner.style.opacity = "0";
        }
        while (line.firstChild) inner.appendChild(line.firstChild);
        line.appendChild(inner);
        inners.push(inner);
      });

      setActive(true);

      if (revealImmediately || revealed) return;

      const reveal = () => {
        revealed = true;
        inners.forEach((inner, i) => {
          inner.style.transition = `transform 0.7s ${EASE} ${i * stagger}s, opacity 0.7s ${EASE} ${i * stagger}s`;
          inner.style.transform = "translateY(0%)";
          inner.style.opacity = "1";
        });
      };

      // Safety net: never let text stay hidden if the observer never fires.
      const failsafe = window.setTimeout(() => {
        if (!revealed) reveal();
      }, 3000);

      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            window.clearTimeout(failsafe);
            reveal();
            observer?.disconnect();
            observer = null;
          }
        },
        { rootMargin: "0px 0px -10% 0px" }
      );
      // Fires on mount for elements already in view.
      observer.observe(target);
    };

    const start = () => {
      if (cancelled) return;
      build();
    };

    if (document.fonts?.status === "loaded") start();
    else if (document.fonts?.ready) document.fonts.ready.then(start).catch(start);
    else start();

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => build(revealed), 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      clear();
      setActive(false);
    };
  }, [textKey, stagger]);

  return (
    <Tag className={className}>
      <span ref={srcRef} className={active ? "sr-only" : undefined}>
        {children}
      </span>
      <span ref={outRef} aria-hidden={active ? true : undefined} />
    </Tag>
  );
}
