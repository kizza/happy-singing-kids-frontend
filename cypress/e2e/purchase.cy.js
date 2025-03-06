/// <reference types="cypress" />

const intercepRedirectToStripe = () => {
  cy.wait('@checkoutRequest', { timeout: 10000 }).then((interception) => {
    const redirectUrl = interception.response.headers['location'];
    cy.wrap(redirectUrl).as('redirectUrl'); // Store for later use
  });

  // Extract the session_id from the Location URL
  cy.get('@redirectUrl').then((redirectUrl) => {
    const sessionId = redirectUrl.replace("https://checkout.stripe.com/c/pay/", "")
    cy.wrap(sessionId).as('checkoutSessionId'); // Save session_id
  });
}

// Look up the session from Stripe API
const fetchStripeSession = () => {
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
}

context(`Purchase ${Cypress.config().baseUrl}`, () => {
  it("creates a correct checkout session", () => {
    cy.visit('/buy/uh-oh-spaghetti-oh/')

    // Select first option
    cy.get('input[type="radio"]').first().check({force: true});

    cy.intercept('POST', '/checkout/session').as('checkoutRequest');

    cy.contains('Buy now').click({force: true});

    intercepRedirectToStripe();
    fetchStripeSession();

    // Validate the properties of the checkout session
    cy.get('@checkoutSession').then((session) => {
      // Session
      expect(session).to.have.property('payment_status', 'unpaid');
      expect(session).to.have.property('status', 'open');
      expect(session).to.have.property('amount_subtotal', 2000);
      expect(session).to.have.property('amount_total', 2000);
      expect(session).to.have.property('billing_address_collection', 'required');
      expect(session.currency).to.equal('aud');
      expect(session.success_url).to.equal(`${Cypress.env('SESSION_URL')}/buy/success/?session_id={CHECKOUT_SESSION_ID}`);
      expect(session.cancel_url).to.equal(`${Cypress.env('SESSION_URL')}/buy/`);

      // total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },

      // Line items
      const lineItems = session.line_items.data;
      // cy.task('log', session);
      expect(lineItems).to.have.length(1);
      expect(lineItems[0]).to.deep.include({
        description: "Uh Oh Spaghetti-oh",
        quantity: 1,
        currency: 'aud',
      });
      expect(lineItems[0].price).to.deep.include({
        id: Cypress.env('SPAGHETTIO_ONE_BOOK'),
        type: "one_time",
      });

      // Shipping rate
      const shippingOptions = session.shipping_options;
      expect(shippingOptions).to.have.length(1);
      expect(shippingOptions[0]).to.deep.include({
        shipping_amount: 0,
        shipping_rate: Cypress.env('SHIPPING_RATE'),
      });
    });
  });

  context('with two books', () => {
    it("creates a correct checkout session", () => {
      cy.visit('/buy/uh-oh-spaghetti-oh/')

      // Select first option
      cy.get('input[type="radio"]').eq(1).check({force: true});

      cy.intercept('POST', '/checkout/session').as('checkoutRequest');

      cy.contains('Buy now').click({force: true});

      intercepRedirectToStripe();
      fetchStripeSession();

      // Validate the properties of the checkout session
      cy.get('@checkoutSession').then((session) => {
        cy.task('log', session);

        // Session
        expect(session).to.have.property('payment_status', 'unpaid');
        expect(session).to.have.property('status', 'open');
        expect(session).to.have.property('amount_subtotal', 4000); // Without discount
        expect(session).to.have.property('amount_total', 3500); // With discount
        expect(session).to.have.property('billing_address_collection', 'required');
        expect(session.currency).to.equal('aud');
        expect(session.success_url).to.equal(`${Cypress.env('SESSION_URL')}/buy/success/?session_id={CHECKOUT_SESSION_ID}`);
        expect(session.cancel_url).to.equal(`${Cypress.env('SESSION_URL')}/buy/`);

        // total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },

        // Line items
        const lineItems = session.line_items.data;
        expect(lineItems).to.have.length(1);
        expect(lineItems[0]).to.deep.include({
          description: "Uh Oh Spaghetti-oh",
          quantity: 2,
          currency: 'aud',
        });
        expect(lineItems[0].price).to.deep.include({
          id: Cypress.env('SPAGHETTIO_ONE_BOOK'),
          type: "one_time",
        });

        // Shipping rate
        const shippingOptions = session.shipping_options;
        expect(shippingOptions).to.have.length(1);
        expect(shippingOptions[0]).to.deep.include({
          shipping_amount: 0,
          shipping_rate: Cypress.env('SHIPPING_RATE'),
        });
      });
    });
  });

  context('with 3 books', () => {
    it("creates a correct checkout session", () => {
      cy.visit('/buy/uh-oh-spaghetti-oh/')

      // Select first option
      cy.get('input[type="radio"]').eq(2).check({force: true});

      cy.intercept('POST', '/checkout/session').as('checkoutRequest');

      cy.contains('Buy now').click({force: true});

      intercepRedirectToStripe();
      fetchStripeSession();

      // Validate the properties of the checkout session
      cy.get('@checkoutSession').then((session) => {
        cy.task('log', session);

        // Session
        expect(session).to.have.property('payment_status', 'unpaid');
        expect(session).to.have.property('status', 'open');
        expect(session).to.have.property('amount_subtotal', 4500);
        expect(session).to.have.property('amount_total', 4500);
        expect(session).to.have.property('billing_address_collection', 'required');
        expect(session.currency).to.equal('aud');
        expect(session.success_url).to.equal(`${Cypress.env('SESSION_URL')}/buy/success/?session_id={CHECKOUT_SESSION_ID}`);
        expect(session.cancel_url).to.equal(`${Cypress.env('SESSION_URL')}/buy/`);

        // Line items
        const lineItems = session.line_items.data;
        expect(lineItems).to.have.length(1);
        expect(lineItems[0]).to.deep.include({
          description: "Uh Oh Spaghetti-oh",
          quantity: 3,
          currency: 'aud',
        });
        expect(lineItems[0].price).to.deep.include({
          id: Cypress.env('SPAGHETTIO_MANY_BOOK'),
          type: "one_time",
        });

        // Shipping rate
        const shippingOptions = session.shipping_options;
        expect(shippingOptions).to.have.length(1);
        expect(shippingOptions[0]).to.deep.include({
          shipping_amount: 0,
          shipping_rate: Cypress.env('SHIPPING_RATE'),
        });
      });
    });
  });
});
