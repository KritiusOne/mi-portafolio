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
