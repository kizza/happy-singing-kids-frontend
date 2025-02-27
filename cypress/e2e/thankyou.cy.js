/// <reference types="cypress" />

context(`Success redirect ${Cypress.config().baseUrl}`, () => {
  context("happy path", () => {
    it("responds to success redirect correctly", () => {
      cy.intercept('POST', '/checkout/session/*', {
        statusCode: 200,
        body: {customer_details: { email: "test@email.com" }},
      }).as('checkoutFulfillment');

      cy.visit('/buy/success/?session_id=FOO')
      cy.wait('@checkoutFulfillment')

      cy.contains("A confirmation email");
      cy.contains("test@email.com");
    })
  })

  context("sad path", () => {
    it("handles the absence of an email address correctly", () => {
      cy.intercept('POST', '/checkout/session/*', {
        statusCode: 200,
        body: {},
      }).as('checkoutFulfillment');

      cy.visit('/buy/success/?session_id=FOO')
      cy.wait('@checkoutFulfillment')

      cy.contains("we weren't able to retrieve your order");
    })

    it("handles the absence of a session_id", () => {
      cy.visit('/buy/success/')
      cy.contains("we weren't able to retrieve your order");
    })

    it("responds to errored redirect correctly", () => {
      cy.intercept('POST', '/checkout/session/*', {
        statusCode: 500,
        body: {message: "Oops"},
      }).as('checkoutFulfillment');

      cy.visit('/buy/success/?session_id=FOO')
      cy.wait('@checkoutFulfillment')

      cy.contains("we weren't able to retrieve your order");
    })
  })
});
