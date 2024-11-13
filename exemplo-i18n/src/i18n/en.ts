import { BackButton } from "../pages/Details/styles"
import {
  NoResultsFoundMessage,
  ResultsFoundMessage,
} from "../pages/Home/styles"

export const en = {
  translation: {
    home: {
      searchButton: "Search",
      ResultsFoundMessage: "{{ numberOfResults }} result(s) found",
      NoResultsFoundMessage: "No words found",
      wordDetails:
        "{{ numberOfMeanings }} meaning(s) and {{ numberOfAudios }} pronuciation audio(s)",
    },
    details: {
      detailsTitle: "Meanings of  {{ word }}",
      meaningsPanelTitle: "Meanings",
      audiosPanelTitle: "Pronunciation audios",
      BackButton: "Back",
    },
  },
}
