import { defineConfig } from 'cypress';

// eslint-disable-next-line import/no-unused-modules
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
});
