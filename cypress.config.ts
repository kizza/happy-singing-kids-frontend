import { defineConfig } from 'cypress'
import { config } from "dotenv"

const getBaseUrl = () => {
  const variant = process.env.CYPRESS_VARIANT ? `_${process.env.CYPRESS_VARIANT.toUpperCase()}` : "";
  config({ path: `.env.test` })
  return process.env[`BASE_URL${variant}`]
}

export default defineConfig({
  e2e: {
    baseUrl: getBaseUrl(),
    chromeWebSecurity: false,
    video: false, // Optional, disable video recording
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    env: {
      STRIPE_SECRET_KEY: process.env.CYPRESS_STRIPE_SECRET_KEY
    }
  },
})
