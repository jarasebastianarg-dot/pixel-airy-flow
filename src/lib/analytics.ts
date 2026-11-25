/**
 * Google Analytics 4 events for the actions that matter most: someone trying
 * to contact Sebastián. GA4 already counts page views and PDF downloads (CV)
 * on its own; these events add contact intent so it can be marked as a key event.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: Record<string, string> = {}) {
  try {
    window.gtag?.("event", event, params);
  } catch {
    /* analytics must never break the page */
  }
}

/** One listener for the whole site: email and LinkedIn links, plus anything marked data-track */
export function listenForContactClicks(): () => void {
  const onClick = (e: MouseEvent) => {
    const target = e.target instanceof Element ? e.target : null;
    if (!target) return;
    const page = window.location.pathname;
    const tagged = target.closest<HTMLElement>("[data-track]");
    if (tagged?.dataset.track) {
      track("contact_click", { method: tagged.dataset.track, page });
      return;
    }
    const link = target.closest<HTMLAnchorElement>("a[href]");
    if (!link) return;
    const href = link.getAttribute("href") ?? "";
    if (href.startsWith("mailto:")) track("contact_click", { method: "email", page });
    else if (href.includes("linkedin.com/")) track("contact_click", { method: "linkedin", page });
  };
  document.addEventListener("click", onClick, { capture: true });
  return () => document.removeEventListener("click", onClick, { capture: true });
}
