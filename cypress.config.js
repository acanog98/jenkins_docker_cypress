
//const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
//import installLogsPrinter from "cypress-terminal-report/src/installLogsPrinter";
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

/*
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

*/


module.exports = defineConfig({
  projectId: '8d25w5',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    reportDir: "cypress/mochawesome-report"
  },
  e2e: {
    async setupNodeEvents(on, config) {
/*
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });

      on('after:screenshot', (details) => {
        ...
    })
*/
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      });

      on('task', {downloadFile})
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config)

      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
      // implement node event listeners here
    },
    specPattern: ["cypress/e2e/features/*.feature", "cypress/e2e/pruebas_sin_cucumber/*.cy.js"],
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
  },
});

/*
  reporter: "mochawesome",
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: true,
    json: true,
    reportDir: "cypress/report/mochawesome-report"
  },
*/
