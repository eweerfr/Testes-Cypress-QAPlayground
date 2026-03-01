const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
   video: true,

  e2e: {
    baseUrl: 'https://carlosfelixpenha-create.github.io/QAPlayground/',
    setupNodeEvents(on, config) {
    },
  },
});
