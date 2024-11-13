import { BackButton } from "../pages/Details/styles"
import {
  NoResultsFoundMessage,
  ResultsFoundMessage,
} from "../pages/Home/styles"

export const fr = {
  translation: {
    home: {
      searchButton: "Recherche",
      ResultsFoundMessage: "{{ numberOfResults }} resultát(s) trouvé(s)",
      NoResultsFoundMessage: "Aucun mot trouvé",
      wordDetails:
        "{{ numberOfMeanings }} signification(s) et {{ numberOfAudios }} audio(s) de pronunciation",
    },
    details: {
      detailsTitle: "Signification de {{ word }}",
      meaningsPanelTitle: "Significations",
      audiosPanelTitle: "Audios de Pronunciation",
      BackButton: "Revenir",
    },
  },
}
