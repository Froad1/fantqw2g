import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translation from './en/translation.json';
import translationUA from './ua/translation.json';
import translationCZ from './cz/translation.json';

i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
//   lng: 'en', // if you're using a language detector, do not define the lng option
  detection:{
    order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
    caches: ['cookie']
  },
  resources: {
    en: {
      translation,
    },
    uk: {
      translation: translationUA,
    },
    cz: {
        translation: translationCZ,
    },
  },
  // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
  // set returnNull to false (and also in the i18next.d.ts options)
  // returnNull: false,
});