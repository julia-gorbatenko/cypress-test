import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    pageLoadTimeout: 30000,
    responseTimeout: 25000,
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
