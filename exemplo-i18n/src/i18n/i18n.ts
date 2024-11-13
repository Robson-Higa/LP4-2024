import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { ptBR } from "./ptBR";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";

i18n.use(initReactI18next).init({
  lng: "ptBR",
  debug: true,
  resources: { ptBR, en, es, fr },
});

export default i18n;
