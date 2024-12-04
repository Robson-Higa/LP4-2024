import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"

import { pt } from "./ptBR";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  resources: { pt, en, es, fr },
});

export default i18n;
