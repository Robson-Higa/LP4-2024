import { useTransition } from "react";
import { Word } from "../../models/Word";
import {
  WordCardPanel,
  WordDetailsLink,
  WordDetailsText,
  WordTitle,
} from "./styles";
import { useTranslation } from "react-i18next";

type Props = {
  order: number;
  word: Word;
};

const WordCard = ({ order, word }: Props) => {
  const { audioUrls, meanings, term } = word;

  const { t } = useTranslation();
  const details = t("home.wordDetails", { numeberOfMeanings: meanings.length, numberOfAudios: audioUrls.length,});  

  return (
    <WordCardPanel data-cy="word-card">
      <WordTitle data-cy="word-title">{`${order} - ${term}`}</WordTitle>
      <WordDetailsLink to="/details" state={{ word }}>
        <WordDetailsText data-cy="word-details">{details}</WordDetailsText>
      </WordDetailsLink>
    </WordCardPanel>
  );
};

export default WordCard;
