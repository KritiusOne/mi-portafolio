export const languages = {
  es: "Español",
  en: "English"
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "es";

export const ui = {
  es: {
    "site.title": "Portafolio",
    "site.description": "Portafolio personal",
    "nav.home": "Inicio",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mi",
    "nav.contact": "Contacto",
    "lang.es": "Español",
    "lang.en": "Ingles"
  },
  en: {
    "site.title": "Portfolio",
    "site.description": "Personal portfolio",
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.about": "About me",
    "nav.contact": "Contact",
    "lang.es": "Spanish",
    "lang.en": "English"
  }
} as const;

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
