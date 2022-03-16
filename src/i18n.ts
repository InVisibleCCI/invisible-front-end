import i18n from 'i18next';
import Backend from "i18next-xhr-backend";
import LngDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LngDetector)
  .use(initReactI18next)
  .init({
    supportedLngs:['fr', 'en'],
    fallbackLng: 'fr',
    backend: {
      loadPath: '/langs/{{lng}}.json',
      allowMultiLoading: false
    },

    interpolation: {
      escapeValue: false,
    }
  })

export default i18n;