import { createContext, useCallback, useContext, useMemo, type ReactNode } from "react";
import { useRouter, useRouterState } from "@tanstack/react-router";
import { dictionary, type Dict, type Lang } from "./dictionary";
import { langFromPath, localizePath } from "./locale";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
  /** Turns an English path into the same page in the current language */
  localize: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * The language comes from the URL (/es/... is Spanish), so the server renders
 * each language at its own address and search engines can index both.
 * Switching language navigates to the other address of the same page.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });
  const lang = langFromPath(pathname);

  const setLang = useCallback(
    (next: Lang) => {
      if (next === lang) return;
      const target = localizePath(hash ? `${pathname}#${hash}` : pathname, next);
      void router.navigate({ href: target });
    },
    [lang, pathname, hash, router],
  );

  const localize = useCallback((path: string) => localizePath(path, lang), [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: dictionary[lang] as Dict, localize }),
    [lang, setLang, localize],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe fallback so components can render outside the provider (e.g. tests).
    return { lang: "en", setLang: () => {}, t: dictionary.en as Dict, localize: (p) => p };
  }
  return ctx;
}

export type { Lang, Dict };
