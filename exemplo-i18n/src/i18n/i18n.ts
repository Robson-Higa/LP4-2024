import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { ptBR } from "./ptBR"
import { fr } from "./fr"
import { es } from "./es"
import { en } from "./en"

i18n.use(initReactI18next).init ({
  lng: "ptBR",
  debug: true,
  resouces: { ptBR, en, es, fr },
})

export default i18n
