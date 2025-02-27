/// <reference types="cypress" />

context(`Purchase ${Cypress.config().baseUrl}`, () => {
  it("creates a correct checkout session", () => {
    cy.visit('/buy/')

    // Select first option
    cy.get('input[type="radio"]').first().check({force: true});

    cy.intercept('POST', '/checkout/session').as('checkoutRequest');

    cy.contains('Buy now').click({force: true});

    cy.wait('@checkoutRequest').then((interception) => {
      const redirectUrl = interception.response.headers['location'];
      cy.wrap(redirectUrl).as('redirectUrl'); // Store for later use
    });

    // Extract the session_id from the Location URL
    cy.get('@redirectUrl').then((redirectUrl) => {
      const sessionId = redirectUrl.replace("https://checkout.stripe.com/c/pay/", "")
      cy.wrap(sessionId).as('checkoutSessionId'); // Save session_id
    });

    // Look up the session from Stripe API
    cy.get('@checkoutSessionId').then((sessionId) => {
      cy.request({
        method: 'GET',
        url: `https://api.stripe.com/v1/checkout/sessions/${sessionId}`,
        headers: {Authorization: `Bearer ${Cypress.env('STRIPE_SECRET_KEY')}`},
        qs: {
          'expand[]': 'line_items'
        }
      }).then((response) => {
        cy.wrap(response.body).as('checkoutSession'); // Save session details
      });
    });

    // Validate the properties of the checkout session
    cy.get('@checkoutSession').then((session) => {
      // Session
      expect(session).to.have.property('payment_status', 'unpaid');
      expect(session).to.have.property('status', 'open');
      expect(session.currency).to.equal('aud');
      expect(session.success_url).to.equal("https://dev.happysingingkids.com/buy/success/?session_id={CHECKOUT_SESSION_ID}");
      expect(session.cancel_url).to.equal("https://dev.happysingingkids.com/buy/");

      // Line items
      const lineItems = session.line_items.data;
      cy.task('log', lineItems);
      expect(lineItems).to.have.length(1);
      expect(lineItems[0]).to.deep.include({
        description: "Uh Oh Spaghetti-oh",
        quantity: 1,
        currency: 'aud',
        // amount_total:
      });
      expect(lineItems[0].price).to.deep.include({
        id: 'price_1QWsZ3FbHwwHDg3DgpkAcDqh',
        type: "one_time",
        // unit_amount: ""
        // amount_total:
      });
    });
  });
});
