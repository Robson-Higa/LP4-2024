import { BackButton } from "../pages/Details/styles";
import { NoResultsFoundMessage, ResultsFoundMessage } from "../pages/Home/styles";

export const ptBR = {
    translation: {
        home: {
            searchButton: "Buscar",
            ResultsFoundMessage: "{{ numberOfResults }} resultado(s) encontrado(s)",
            NoResultsFoundMessage: "Nenhuma palavra encontrada",
            wordDetails: "{{ numberOfMeanings }} significado(s) e {{ numberOfAudios }} áudio(s) de pronúncia"
        },
        details: {
            detailsTitle: "Significados de  {{ word }}",
            meaningsPanelTitle: "Significados",
            audiosPanelTitle: "Áudios de Pronúncia",
            BackButton: "Voltar"
        },
    },
}