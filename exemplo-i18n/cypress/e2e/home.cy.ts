describe("e2e tests over home page", () => {
  beforeEach(() => {
    cy.visit("");
    cy.fixture("apiResponse").as("apiResponse");
  });

  it("should render correct number of word cards when search is performed", function () {
    cy.performSearch("a", this.apiResponse);

    cy.get("[data-cy='word-card']").should(
      "have.length",
      this.apiResponse.length
    );
  });
});
