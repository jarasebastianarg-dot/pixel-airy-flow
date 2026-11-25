import { useParams } from "@tanstack/react-router";
import { LocalLink } from "@/components/LocalLink";
import type { Lang } from "@/i18n/dictionary";
import { localizePath } from "@/i18n/locale";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Linkedin, Mail } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";
import { caseStudies } from "@/lib/caseStudies";
import { getService, process, services } from "@/lib/services";
import { landings } from "@/lib/landings";
import { EMAIL, LINKEDIN, absoluteUrl, jsonLd, pageMeta, personSchema } from "@/lib/seo";

export function serviceHead(slug: string, lang: Lang) {
    const s = getService(slug);
    if (!s) return {};
    const c = s[lang];
    const path = `/services/${s.slug}`;
    const url = absoluteUrl(localizePath(path, lang));
    const home = absoluteUrl(localizePath("/", lang));
    return {
      ...pageMeta({
        title: c.title,
        description: c.description,
        path,
        lang,
        socialTitle: `${c.name} | Sebastián Jara`,
        imageAlt: lang === "es" ? `${c.name}, por Sebastián Jara` : `${c.name} by Sebastián Jara`,
      }),
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${url}#service`,
              url,
              name: c.name,
              inLanguage: lang,
              serviceType: s.serviceType,
              description: c.description,
              provider: { "@id": personSchema["@id"] },
              areaServed: ["Argentina", "United States", "Latin America", "Europe"],
              availableLanguage: ["English", "Spanish"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: c.name,
                itemListElement: c.deliverables.map((d) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: d },
                })),
              },
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
                { "@type": "ListItem", position: 2, name: lang === "es" ? "Servicios" : "Services", item: `${home}#services` },
                { "@type": "ListItem", position: 3, name: c.name, item: url },
              ],
            },
            personSchema,
          ],
        }),
      ],
    };
  }

const ui = {
  en: {
    back: "Back to portfolio",
    start: "Start a project",
    label: "Service",
    forWho: "Who it's for",
    deliverables: "What you get",
    proof: "Proof from real projects",
    related: "Related case studies",
    process: "How we work",
    faq: "Frequently asked questions",
    ctaTitle: "Tell me about your project.",
    ctaBody: "Send me an email or a LinkedIn message with what you need and your timeline. I work remotely from Buenos Aires, in English and Spanish.",
    email: "Send an email",
    other: "Other services",
    topics: "Related topics",
    view: "View case study",
  },
  es: {
    back: "Volver al portfolio",
    start: "Empezar un proyecto",
    label: "Servicio",
    forWho: "Para quién es",
    deliverables: "Qué recibís",
    proof: "Resultados en proyectos reales",
    related: "Casos relacionados",
    process: "Cómo trabajamos",
    faq: "Preguntas frecuentes",
    ctaTitle: "Contame sobre tu proyecto.",
    ctaBody: "Mandame un email o un mensaje por LinkedIn con lo que necesitás y tus plazos. Trabajo a distancia desde Buenos Aires, en español e inglés.",
    email: "Mandar un email",
    other: "Otros servicios",
    topics: "Temas relacionados",
    view: "Ver caso",
  },
};

export function ServicePage() {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const { lang } = useLanguage();
  const s = getService(slug)!;
  const c = s[lang];
  const t = ui[lang];
  const steps = process[lang];
  const related = s.related.map((r) => caseStudies.find((x) => x.slug === r)!);
  const others = services.filter((x) => x.slug !== s.slug);
  const topics = landings.filter((l) => l.service === s.slug);

  return (
    <main className="min-h-screen w-full overflow-x-clip bg-background text-foreground">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <LocalLink to="/" className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-accent-1">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t.back}
          </LocalLink>
          <LanguageToggle />
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_-10%,oklch(0.72_0.18_45_/_0.18),transparent_55%),radial-gradient(circle_at_90%_10%,oklch(0.7_0.19_25_/_0.15),transparent_60%)]"
        />
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:px-10 md:pb-20 md:pt-20">
          <nav aria-label="Breadcrumb" className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent-1">
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-accent-1" />
              {t.label} · {c.name}
            </span>
          </nav>
          <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-[1.04] tracking-tight [text-wrap:balance] md:text-6xl">{c.headline}</h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{c.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
            >
              {t.start}
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-sm text-muted-foreground">{s.tools.join(" · ")}</p>
          </div>
        </div>
      </section>

      {/* For who + deliverables */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl">{t.forWho}</h2>
            <ul className="mt-8 space-y-4">
              {c.forWho.map((f) => (
                <li key={f} className="flex gap-3 text-base leading-relaxed text-foreground/85">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl">{t.deliverables}</h2>
            <ul className="mt-8 grid gap-3">
              {c.deliverables.map((d) => (
                <li key={d} className="flex gap-3 rounded-2xl border border-border bg-card p-4 text-sm leading-relaxed shadow-[var(--shadow-card)] md:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-1" strokeWidth={2} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Proof + related cases */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <h2 className="text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl">{t.proof}</h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{c.proof}</p>
          <h3 className="mt-14 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{t.related}</h3>
          <div className={`mt-6 grid gap-6 ${related.length > 1 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {related.map((r) => (
              <LocalLink
                key={r.slug}
                to={r.href}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={r.cover}
                    alt={`${r.client} case study`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="text-lg font-bold tracking-tight">{r.client}</p>
                    <p className="text-sm text-muted-foreground">{r.year}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-1">
                    {t.view}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </LocalLink>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <h2 className="text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl">{t.process}</h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((st, i) => (
              <li key={st.t} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <span className="font-mono text-xs font-semibold text-accent-1">0{i + 1}</span>
                <p className="mt-3 text-lg font-bold tracking-tight">{st.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{st.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <h2 className="text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl">{t.faq}</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {c.faq.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="text-lg font-semibold tracking-tight md:text-xl">{f.q}</h3>
                <p className="mt-2 max-w-[70ch] text-base leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="relative overflow-hidden rounded-[calc(var(--radius)+18px)] bg-foreground p-8 text-background md:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,oklch(0.72_0.18_45_/_0.3),transparent_55%),radial-gradient(circle_at_10%_100%,oklch(0.7_0.19_25_/_0.22),transparent_60%)]"
            />
            <div className="relative grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">{t.ctaTitle}</h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-background/70 md:text-lg">{t.ctaBody}</p>
                <a href={`mailto:${EMAIL}`} className="mt-6 inline-block break-all text-lg font-semibold underline decoration-accent-1/60 underline-offset-4 hover:decoration-accent-1">
                  {EMAIL}
                </a>
              </div>
              <div className="flex flex-col gap-3 md:col-span-5">
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(c.name)}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)]"
                >
                  <Mail className="h-4 w-4" />
                  {t.email}
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-background/20 px-8 py-4 text-sm font-semibold text-background hover:bg-background/10"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {topics.length ? (
            <>
              <h2 className="mt-16 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{t.topics}</h2>
              <ul className="mt-5 flex flex-wrap gap-3">
                {topics.map((l) => (
                  <li key={l.id}>
                    <LocalLink
                      to={l.en.path}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold shadow-[var(--shadow-card)] transition-colors hover:border-accent-1/40"
                    >
                      {l[lang].keyword}
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </LocalLink>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <h2 className="mt-16 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{t.other}</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <LocalLink
                  to={`/services/${o.slug}`}
                  className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 text-base font-semibold shadow-[var(--shadow-card)] transition-colors hover:border-accent-1/40"
                >
                  {o[lang].name}
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent-1" />
                </LocalLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
