/**
 * Case-study translation layer.
 * Pages keep their English copy inline; `tr()` swaps it for Spanish at render time.
 * Unknown strings fall through untouched (industry terms stay in English).
 */
import { useCallback } from "react";
import { useLanguage } from "./LanguageContext";
import { folkwaysEs } from "./es/folkways";
import { pawRoyaltyEs } from "./es/paw-royalty";
import { elevateLocalEs } from "./es/elevate-local";
import { bwayEs } from "./es/b-way";
import { xtendoGlobalEs } from "./es/xtendo-global";

export const caseStudyEs: Record<string, string> = {
  ...folkwaysEs,
  ...pawRoyaltyEs,
  ...elevateLocalEs,
  ...bwayEs,
  ...xtendoGlobalEs,
};

export type Translate = (value: string) => string;

export function useTr(): { tr: Translate; lang: "en" | "es" } {
  const { lang } = useLanguage();
  const tr = useCallback<Translate>(
    (value) => (lang === "es" ? (caseStudyEs[value] ?? value) : value),
    [lang],
  );
  return { tr, lang };
}
