import { AnimatePresence, motion } from "framer-motion";
import { useLanguage, type Lang } from "@/i18n/LanguageContext";

/** Shared EN/ES switch — keeps the same animation everywhere on the site. */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.langLabel}
      className={`relative flex shrink-0 items-center rounded-full border border-border bg-card p-1 text-[0.7rem] font-semibold ${className}`}
    >
      {(["en", "es"] as Lang[]).map((l) => (
        <motion.button
          key={l}
          type="button"
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
          whileTap={{ scale: 0.88 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={`relative z-10 inline-flex min-h-[36px] min-w-[44px] items-center justify-center rounded-full px-2.5 py-0.5 uppercase transition-colors duration-200 ${
            lang === l ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={lang === l ? `${l}-active` : `${l}-inactive`}
              initial={{ opacity: 0, y: lang === l ? 4 : -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: lang === l ? -4 : 4 }}
              transition={{ duration: 0.18 }}
            >
              {l}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      ))}
      <motion.div
        layout
        layoutDependency={lang}
        className="absolute z-0 h-[calc(100%-8px)] rounded-full bg-secondary"
        initial={false}
        animate={{
          left: lang === "en" ? "4px" : "calc(50% + 2px)",
          width: "calc(50% - 6px)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </div>
  );
}
