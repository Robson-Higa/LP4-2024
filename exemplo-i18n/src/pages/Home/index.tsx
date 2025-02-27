import { CSSProperties, useCallback, useContext, useState } from "react";
import { ClockLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

import WordCard from "../../components/WordCard";
import { setWords } from "../../context/Actions";
import UserContext from "../../context/UserContext";
import { Word, isInstanceOfWordNotFound } from "../../models/Word";
import { WordService } from "../../services/WordService";
import {
  HomeContainer,
  NoResultsFoundMessage,
  ResultsFoundMessage,
  SearchButton,
  SearchInput,
  SearchPanel,
} from "./styles";

const wordService = new WordService();
const loadingCssOverride: CSSProperties = {
  margin: "10px auto",
};
const loadingColor = "#392e4a";

const Home = () => {
  const [filter, setFilter] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [noWordFound, setNoWordFound] = useState(false);

  const { state, dispatch } = useContext(UserContext);
  const { words } = state;

  const searchWords = useCallback(async () => {
    if (filter) {
      setIsSearching(true);
      setNoWordFound(false);
      const response = await wordService.findWords(filter);
      if (isInstanceOfWordNotFound(response)) {
        setNoWordFound(true);
        setWords(dispatch, []);
      } else {
        const words = response as Word[];
        setWords(dispatch, words);
        setFilter("");
      }

      setIsSearching(false);
    }
  }, [filter, dispatch]);

  const { t } = useTranslation();

  return (
    <HomeContainer>
      <SearchPanel>
        <SearchInput
          data-cy="search-input"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <SearchButton
          data-cy="search-button"
          value={t("home.searchButton")}
          disabled={isSearching}
          onClick={searchWords}
        />
      </SearchPanel>

      {isSearching && (
        <ClockLoader color={loadingColor} cssOverride={loadingCssOverride} />
      )}

      {!isSearching && words.length > 0 && (
        <>
          <ResultsFoundMessage>
            {t("home.resultsFoundMessage", {numberOfResults, }}
          </ResultsFoundMessage>

          {words.map((w, index) => (
            <WordCard key={index} order={index + 1} word={w} />
          ))}
        </>
      )}

      {!isSearching && noWordFound && (
        <NoResultsFoundMessage>
          {t("home.noResultsFoundMessage")}
        </NoResultsFoundMessage>
      )}
    </HomeContainer>
  );
};

export default Home;
