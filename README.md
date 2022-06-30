# Introduction
Demo plugin that outputs Cloudflight logo to the console before any tests are started

# Installation

run `npm install cypress-cloudflight`

In your `cypress.config.js`, add `async` and the following two lines to the `setupNodeEvents` function, like this:
```
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      const {cloudflightPower} = await import('cypress-cloudflight');
      cloudflightPower(on);
    },
  },
});
```

Run the Cypress tests and watch the magic happen.