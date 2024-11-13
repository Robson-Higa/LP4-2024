Cypress.Commands.add("performSearch", (term: string, apiResponse: any) => {
  cy.intercept("GET", `${Cypress.env("API_URL")}/${term}`, {
    body: apiResponse,
  });

  cy.get('[data-cy="search-input"]').type(term);
  cy.get('[data-cy="search-button"]').click();
});
