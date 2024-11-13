import { BackButton } from "../pages/Details/styles"
import {
  NoResultsFoundMessage,
  ResultsFoundMessage,
} from "../pages/Home/styles"

export const es = {
  translation: {
    home: {
      searchButton: "Buscar",
      ResultsFoundMessage: "{{ numberOfResults }} resultado(s) encontrado(s)",
      NoResultsFoundMessage: "No se encontraron palabras",
      wordDetails:
        "{{ numberOfMeanings }} significado(s) y {{ numberOfAudios }} audio(s) de pronunciación",
    },
    details: {
      detailsTitle: "Significados de  {{ word }}",
      meaningsPanelTitle: "Significados",
      audiosPanelTitle: "Audios de Pronunciación",
      BackButton: "Volver",
    },
  },
}
