import { defineConfig } from 'cypress'
import { config } from "dotenv"

config({ path: `.env.test` });

const getStageEnv = (key) => {
  const stage = process.env.CYPRESS_VARIANT ? `_${process.env.CYPRESS_VARIANT.toUpperCase()}` : "";
  if (process.env[`${key}${stage}`]) {
    return process.env[`${key}${stage}`] // Specific stage variant
  } else {
    return process.env[key] // Fallback (no staged variant)
  }
}

// Returns BASE_URL_${VARIANT} for different stages
const getBaseUrl = () => {
  return getStageEnv('BASE_URL');
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
      STRIPE_SECRET_KEY: getStageEnv('STRIPE_SECRET_KEY'),
      SPAGHETTIO_ONE_BOOK: getStageEnv('SPAGHETTIO_ONE_BOOK'),
      SPAGHETTIO_MANY_BOOK: getStageEnv('SPAGHETTIO_MANY_BOOK'),
      SHIPPING_RATE: getStageEnv('SHIPPING_RATE'),
      SESSION_URL: getStageEnv('SESSION_URL'),
    }
  },
})
