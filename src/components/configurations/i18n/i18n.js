import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationPL from './locales/pl/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  pl: {
    translation: translationPL
  }
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    keySeparator: '',
    interpolation: {
      escapeValue: false
    }
});


export default i18n;