const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
   video: true,

  e2e: {
    setupNodeEvents(on, config) {
      // listeners do Node (se precisar)
    },
  },
});
