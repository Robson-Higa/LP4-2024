import { useLocation, useNavigate } from "react-router-dom";
import { Word } from "../../models/Word";
import {
  AudioPlayer,
  BackButton,
  DetailsContainer,
  DetailsList,
  DetailsMetadata,
  DetailsPanel,
  DetailsPanelTitle,
  DetailsTitle,
} from "./styles";
import { useTranslation } from "react-i18next";

type Location = {
  state: {
    word: Word;
  };
};

const Details = () => {
  const location: Location = useLocation();
  const { word } = location.state;
  const navigate = useNavigate();

  const { t } = useTranslation()

  return (
    <DetailsContainer>
      <DetailsTitle data-cy="details-title">
       {t("details.detailsTitle", { word: word.term })}
      </DetailsTitle>

      {word.meanings.length > 0 && (
        <DetailsPanel data-cy="meanings-panel">
          <DetailsPanelTitle>{t("details.meaningsPanelTitle")}</DetailsPanelTitle>
          <DetailsList data-cy="details-list">
            {word.meanings.map((m, index) => (
              <DetailsMetadata key={index}>{m}</DetailsMetadata>
            ))}
          </DetailsList>
        </DetailsPanel>
      )}

      {word.audioUrls.length > 0 && (
        <DetailsPanel data-cy="audios-panel">
          <DetailsPanelTitle>{t("details.audiosPanelTitle")}</DetailsPanelTitle>
          {word.audioUrls.map((a, index) => (
            <AudioPlayer key={index} controls data-cy="audio-player">
              <source src={a} type="audio/mpeg" />
            </AudioPlayer>
          ))}
        </DetailsPanel>
      )}

      <BackButton data-cy="back-button" onClick={() => navigate("/")}>
       {t("details.backButton")}
      </BackButton>
    </DetailsContainer>
  );
};

export default Details;
