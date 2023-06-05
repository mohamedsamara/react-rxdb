module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  testEnvironment: 'jest-environment-jsdom',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleDirectories: ['node_modules', './src'],
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
