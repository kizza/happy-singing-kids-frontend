/// <reference types="cypress" />

context("Navigation", () => {
  // beforeEach(() => {
  //   cy.visit('http://localhost:8080')
  //   cy.get('.navbar-nav').contains('Commands').click()
  //   cy.get('.dropdown-menu').contains('Navigation').click()
  // })

  it("cy.go() - go back or forward in the browser's history", () => {
    // cy.exec("bin/create-checkout-session", e => {
    //   console.log("Getting back", e);

    // });

    let result;
    const foo = cy.exec("bin/create-checkout-session").then(e => {
      console.log("e", e.stdout);
      const token = e.stdout.split("\n").pop().replace(/"/g, "");
      console.log("Token is", token);
      const success = `http://localhost:8080/purchase/success?session_id=${token}`;
      console.log(success);
      cy.visit(success);
    });
    console.log("Then", foo);
    // .its("stdout")
    // .should("contain", "cs_test");

    console.log("Resul", result);
  });

  xit("cy.go() - go back or forward in the browser's history", () => {
    cy.visit("http://localhost:8080");

    // cy.location('pathname').should('include', 'test')

    // cy.intercept({host: 'stripe'}, (e) => {
    //   console.log("Here", e)
    // }).as('stripe');

    // cy.intercept('/todos').as('todos')
    // cy.visit('/')

    // cy.contains('$ TEST').click()
    // cy.contains('$AUD').click()
    // cy.contains('Test').click()
    cy.contains("Get the Happy Pack A$16.99"); //.click()
    // cy.contains('Get the Happy Pack A$16.99').click()

    // cy.wait('@todos')
    //     cy.location('host').should('include', 'checkout.stripe.com/pay/cs_test_')

    //     cy.getWithinIframe('[name="cardnumber"]').type('4242424242424242');
    //     cy.getWithinIframe('[name="exp-date"]').type('1232');
    //     cy.getWithinIframe('[name="cvc"]').type('987');
    //     cy.getWithinIframe('[name="postal"]').type('12345');

    //     cy.location('host').should('include', 'foo')
  });
});

//   it('cy.reload() - reload the page', () => {
//     // https://on.cypress.io/reload
//     cy.reload()

//     // reload the page without using the cache
//     cy.reload(true)
//   })

//   it('cy.visit() - visit a remote url', () => {
//     // https://on.cypress.io/visit

//     // Visit any sub-domain of your current domain

//     // Pass options to the visit
//     cy.visit('https://example.cypress.io/commands/navigation', {
//       timeout: 50000, // increase total time for the visit to resolve
//       onBeforeLoad(contentWindow) {
//         // contentWindow is the remote page's window object
//         expect(typeof contentWindow === 'object').to.be.true
//       },
//       onLoad(contentWindow) {
//         // contentWindow is the remote page's window object
//         expect(typeof contentWindow === 'object').to.be.true
//       },
//     })
//   })
