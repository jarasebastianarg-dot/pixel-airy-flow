import { motion } from "framer-motion";
import { Switch } from "@/components/animate-ui/components/radix/switch";
import { useLanguage, type Lang } from "@/i18n/LanguageContext";

/** Shared EN/ES switch — keeps the same animation everywhere on the site. */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();
  const isEs = lang === "es";

  const Label = ({ value }: { value: Lang }) => {
    const active = lang === value;
    return (
      <button
        type="button"
        onClick={() => setLang(value)}
        aria-pressed={active}
        aria-label={`${t.nav.langLabel}: ${value.toUpperCase()}`}
        className="relative inline-flex min-h-[36px] items-center px-1 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-md"
      >
        <motion.span
          animate={{ opacity: active ? 1 : 0.45 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`text-[0.72rem] uppercase tracking-[0.18em] transition-[font-weight,color] duration-200 ${
            active ? "font-bold text-foreground" : "font-medium text-muted-foreground"
          }`}
        >
          {value}
        </motion.span>
        {active && (
          <motion.span
            layoutId="lang-underline"
            className="absolute -bottom-0.5 left-1 right-1 h-[2px] rounded-full bg-foreground"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </button>
    );
  };

  return (
    <div
      className={`flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 ${className}`}
    >
      <Label value="en" />
      <Switch
        aria-label={t.nav.langLabel}
        checked={isEs}
        onCheckedChange={(checked) => setLang(checked ? "es" : "en")}
        pressedWidth={24}
        className="h-6 w-11 bg-foreground data-[state=unchecked]:bg-foreground data-[state=checked]:bg-foreground"
      />
      <Label value="es" />
    </div>
  );
}
