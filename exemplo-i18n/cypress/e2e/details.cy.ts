describe("e2e tests over details page", () => {
  beforeEach(() => {
    cy.visit("");
    cy.fixture("apiResponse").as("apiResponse");
    cy.fixture("meanings").as("meanings");
  });

  it("should show correct meanings about a word", function () {
    cy.performSearch("a", this.apiResponse);

    cy.get("[data-cy='word-details']").eq(2).click();
    const meaningsList = cy.get('[data-cy="details-list"] > li');
    meaningsList.should("have.length", this.meanings.length);

    meaningsList.then(($value) => {
      for (let i = 0; i < this.meanings.length; i++) {
        expect($value[i].innerText).to.equal(this.meanings[i]);
      }
    });
  });
});
