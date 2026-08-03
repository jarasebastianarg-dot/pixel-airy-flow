import { Switch } from "@/components/animate-ui/components/radix/switch";
import { useLanguage } from "@/i18n/LanguageContext";

/** Shared EN/ES switch — keeps the same animation everywhere on the site. */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();
  const isEs = lang === "es";

  return (
    <div
      className={`flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-[0.7rem] font-semibold uppercase ${className}`}
    >
      <span
        className={`transition-colors duration-200 ${isEs ? "text-muted-foreground" : "text-foreground"}`}
      >
        en
      </span>
      <Switch
        aria-label={t.nav.langLabel}
        checked={isEs}
        onCheckedChange={(checked) => setLang(checked ? "es" : "en")}
        pressedWidth={22}
        className="h-6 w-10 data-[state=unchecked]:bg-secondary data-[state=checked]:bg-foreground"
      />
      <span
        className={`transition-colors duration-200 ${isEs ? "text-foreground" : "text-muted-foreground"}`}
      >
        es
      </span>
    </div>
  );
}
