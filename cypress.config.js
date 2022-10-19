const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '95bch4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter:"mochawesome",
    overwrite: "cypress/report/mochawesome-report",
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss"
  },
});
