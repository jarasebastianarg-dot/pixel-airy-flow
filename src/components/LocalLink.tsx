import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

type Props = Omit<ComponentProps<typeof Link>, "to" | "params" | "hash"> & {
  /** English path, optionally with a #hash ("/projects/folkways", "/#works") */
  to: string;
};

/**
 * An internal link that stays in the current language: on /es pages it points
 * to the Spanish address of the same page.
 */
export function LocalLink({ to, ...rest }: Props) {
  const { localize } = useLanguage();
  const [path, hash] = localize(to).split("#");
  // The target is built at runtime, so it is cast to a known route for the typed Link
  return <Link {...rest} to={path as "/"} hash={hash} />;
}
