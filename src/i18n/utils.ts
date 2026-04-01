import {
  defaultLang,
  languages,
  ui,
  type Language,
  type TranslationKey
} from "./ui";

function isLanguage(value: string): value is Language {
  return value in languages;
}

export function getLangFromUrl(url: URL): Language {
  const pathSegments = url.pathname.split("/");
  const maybeLang = pathSegments[1];

  if (isLanguage(maybeLang)) {
    return maybeLang;
  }

  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(pathname: string, lang: Language): string {
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (lang === defaultLang) {
    return cleanPath;
  }

  if (cleanPath === "/") {
    return `/${lang}/`;
  }

  return `/${lang}${cleanPath}`;
}

function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/");
  const maybeLang = segments[1];

  if (isLanguage(maybeLang)) {
    const normalized = `/${segments.slice(2).join("/")}`;
    return normalized === "/" ? "/" : normalized.replace(/\/+$/, "") || "/";
  }

  return pathname || "/";
}

export function getLocaleSwitchPath(url: URL, targetLang: Language): string {
  const basePath = stripLocaleFromPathname(url.pathname);
  const pathWithLocale = getLocalizedPath(basePath, targetLang);
  const hasHash = url.hash.length > 0;
  const hasSearch = url.search.length > 0;

  return `${pathWithLocale}${hasSearch ? url.search : ""}${hasHash ? url.hash : ""}`;
}
