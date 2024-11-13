import { BrowserRouter } from "react-router-dom";
import { Word } from "../../models/Word";
import WordCard from ".";

describe("<WordCard />", () => {
  it("should render word info correctly", () => {
    cy.fixture("word").then((wordJson) => {
      const word: Word = wordJson as Word;
      const order = 1;

      cy.mount(
        <BrowserRouter>
          <WordCard order={order} word={word} />
        </BrowserRouter>
      );

      const { term, meanings, audioUrls } = word;

      const title = `${order} - ${term}`;
      const details = `${meanings.length} significado(s) e ${audioUrls.length} áudio(s) de pronúncia`;

      cy.get('[data-cy="word-title"]').should("have.text", title);
      cy.get('[data-cy="word-details"]').should("have.text", details);
    });
  });
});
