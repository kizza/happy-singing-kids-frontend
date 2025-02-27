// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on("uncaught:exception", (err, runnable) => {
  // Local hydration error
  if (err.message.match(/[Hh]ydrat(ing|ion)/)) {
    return false;
  }

  // Minified hydration errors
  // https://react.dev/errors/418
  // https://react.dev/errors/423
  if (err.message.match(/error #(418|423)/)) {
    return false;
  }

  // Minified root errors
  // https://react.dev/errors/329
  if (err.message.match(/error #(329)/)) {
    return false;
  }
  return true;
});
