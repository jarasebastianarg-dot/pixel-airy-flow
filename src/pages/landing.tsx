import { useParams } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Linkedin, Mail } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { LocalLink } from "@/components/LocalLink";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/dictionary";
import { caseStudies } from "@/lib/caseStudies";
import { getService } from "@/lib/services";
import { landingByPath, type Landing } from "@/lib/landings";
import { EMAIL, LINKEDIN, absoluteUrl, jsonLd, pageMeta, personSchema } from "@/lib/seo";

/** Finds the landing for a route param in one language ("b2b-branding" + en) */
export function findLanding(param: string, lang: Lang): Landing | undefined {
  const path = lang === "es" ? `/es/${param}` : `/${param}`;
  const l = landingByPath(path);
  return l && l[lang].path === path ? l : undefined;
}

/** <head> for a keyword landing page in one language */
export function landingHead(param: string, lang: Lang) {
  const l = findLanding(param, lang);
  if (!l) return {};
  const c = l[lang];
  const url = absoluteUrl(c.path);
  const home = absoluteUrl(lang === "es" ? "/es" : "/");
  return {
    ...pageMeta({
      title: c.title,
      description: c.description,
      path: l.en.path,
      lang,
      socialTitle: c.headline,
      imageAlt: lang === "es" ? `${c.keyword}, por Sebastián Jara` : `${c.keyword} by Sebastián Jara`,
    }),
    scripts: [
      jsonLd({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "@id": `${url}#service`,
            url,
            name: c.keyword,
            description: c.description,
            inLanguage: lang,
            provider: { "@id": personSchema["@id"] },
            areaServed: ["Argentina", "United States", "Latin America", "Europe"],
            availableLanguage: ["English", "Spanish"],
          },
          {
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            inLanguage: lang,
            mainEntity: c.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: lang === "es" ? "Inicio" : "Home", item: home },
              { "@type": "ListItem", position: 2, name: c.keyword, item: url },
            ],
          },
          personSchema,
        ],
      }),
    ],
  };
}

const ui = {
  en: { back: "Back to portfolio", include: "What's included", faq: "Questions", service: "See the full service", view: "View case study", contactBody: "Send me an email or a LinkedIn message with what you need and your timeline.", email: "Send an email" },
  es: { back: "Volver al portfolio", include: "Qué incluye", faq: "Preguntas", service: "Ver el servicio completo", view: "Ver caso", contactBody: "Mandame un email o un mensaje por LinkedIn con lo que necesitás y tus plazos.", email: "Mandar un email" },
};

export function LandingPage() {
  const { landing } = useParams({ strict: false }) as { landing: string };
  const { lang } = useLanguage();
  const l = findLanding(landing, lang)!;
  const c = l[lang];
  const t = ui[lang];
  const service = getService(l.service)!;
  const cases = l.cases.map((slug) => caseStudies.find((x) => x.slug === slug)!);

  return (
    <main className="min-h-screen w-full overflow-x-clip bg-background text-foreground">
      <div className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <LocalLink to="/" className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-accent-1">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t.back}
          </LocalLink>
          <LanguageToggle />
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-6 pb-24 pt-14 md:pt-20">
        <p className="inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent-1">
          <span className="h-px w-8 bg-accent-1" />
          {c.keyword}
        </p>
        <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight [text-wrap:balance] md:text-5xl">{c.headline}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.answer}</p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)]"
        >
          {c.cta}
          <ArrowRight className="h-4 w-4" />
        </a>

        <h2 className="mt-16 text-2xl font-bold tracking-tight md:text-3xl">{t.include}</h2>
        <ul className="mt-6 grid gap-3">
          {c.points.map((p) => (
            <li key={p} className="flex gap-3 rounded-2xl border border-border bg-card p-4 text-base leading-relaxed shadow-[var(--shadow-card)]">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-1" strokeWidth={2} />
              {p}
            </li>
          ))}
        </ul>

        <h2 className="mt-16 text-2xl font-bold tracking-tight md:text-3xl">{c.proofTitle}</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{c.proof}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {cases.map((cs) => (
            <LocalLink
              key={cs.slug}
              to={cs.href}
              className="group flex items-center gap-4 overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
            >
              <img src={cs.cover} alt={`${cs.client}`} loading="lazy" className="h-16 w-24 shrink-0 rounded-xl object-cover" />
              <span className="min-w-0 flex-1">
                <span className="block font-bold tracking-tight">{cs.client}</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-1">
                  {t.view}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </span>
            </LocalLink>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-bold tracking-tight md:text-3xl">{t.faq}</h2>
        <div className="mt-4 divide-y divide-border border-y border-border">
          {c.faq.map((f) => (
            <div key={f.q} className="py-5">
              <h3 className="text-lg font-semibold tracking-tight">{f.q}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <LocalLink
          to={`/services/${service.slug}`}
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent-1 hover:underline"
        >
          {t.service}: {service[lang].name}
          <ArrowRight className="h-4 w-4" />
        </LocalLink>

        <section id="contact" className="mt-16 scroll-mt-24 rounded-[calc(var(--radius)+18px)] bg-foreground p-8 text-background md:p-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{c.cta}.</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-background/70">{t.contactBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(c.keyword)}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground"
            >
              <Mail className="h-4 w-4" />
              {t.email}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-background/20 px-6 py-3.5 text-sm font-semibold hover:bg-background/10"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
          <p className="mt-5 break-all text-sm text-background/70">{EMAIL}</p>
        </section>
      </article>
    </main>
  );
}
