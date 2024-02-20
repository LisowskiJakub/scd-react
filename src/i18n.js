
import i18n from 'i18next';
import translationEN from '../public/locales/en/translation.json';
import translationPL from '../public/locales/pl/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    pl: { translation: translationPL }
};

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: true,
    });

export default i18n;