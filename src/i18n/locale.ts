import type { Lang } from "./dictionary";

/**
 * The URL decides the language: everything under /es is Spanish, the rest is English.
 * Each page exists at both addresses so search engines can index both languages.
 */
export const ES_PREFIX = "/es";

export function langFromPath(pathname: string): Lang {
  return pathname === ES_PREFIX || pathname.startsWith(`${ES_PREFIX}/`) ? "es" : "en";
}

/** The English path of any path ("/es/projects/x" -> "/projects/x", "/es" -> "/") */
export function basePath(pathname: string): string {
  if (pathname === ES_PREFIX) return "/";
  if (pathname.startsWith(`${ES_PREFIX}/`)) return pathname.slice(ES_PREFIX.length);
  return pathname;
}

/** The same page in the given language ("/projects/x" + es -> "/es/projects/x") */
export function localizePath(path: string, lang: Lang): string {
  const [pathOnly, hash] = path.split("#");
  const base = basePath(pathOnly || "/");
  const localized = lang === "es" ? (base === "/" ? ES_PREFIX : `${ES_PREFIX}${base}`) : base;
  return hash !== undefined ? `${localized}#${hash}` : localized;
}
