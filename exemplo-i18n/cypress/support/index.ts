declare namespace Cypress {
  interface Chainable {
    performSearch(term: string, apiResponse: any): Chainable<Element>;
  }
}
