import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionary, type Dict, type Lang } from "./dictionary";

const STORAGE_KEY = "sj-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  defaultLang = "en",
}: {
  children: ReactNode;
  defaultLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(defaultLang);

  // Restore the persisted preference after hydration (avoids SSR mismatch).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "es") {
        setLangState(stored);
        document.documentElement.lang = stored;
      }
    } catch {
      /* storage unavailable — keep default */
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: dictionary[lang] as Dict }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe fallback so components can render outside the provider (e.g. tests).
    return { lang: "en", setLang: () => {}, t: dictionary.en as Dict };
  }
  return ctx;
}

export type { Lang, Dict };