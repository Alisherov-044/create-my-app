import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents() {
            // takes (on, config)
            // implement node event listeners here
        },
    },
});
