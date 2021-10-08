import type {Config} from '@jest/types';


const config: Config.InitialOptions = {
  // Basic options
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  // Setup
  setupFilesAfterEnv: [
    './tests/fixtures.ts',
  ],
  // Coverage
  collectCoverageFrom: [
    // Source files
    './src/**/*.ts',
    // Node environment files
    '!**/node_modules/**',
    // Main file (server entry point)
    '!./src/main.ts',
    // Resource type definitions
    '!./src/types/resources/**',
    // Testing files
    '!./src/**/*.test.ts',
  ],
  coverageDirectory: '.',
  coverageReporters: [
    'clover',
  ],
};

// noinspection JSUnusedGlobalSymbols
export default config;
