/* eslint-disable @typescript-eslint/no-require-imports */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
});

const ignoreFolders = [
  '/build/',
  'node_modules/(?!(@tanstack)/)',
  '/.next',
  '/.open-next',
];

/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
  verbose: true,
  setupFiles: ['<rootDir>/config/jest/jest.setup.ts'],
  testPathIgnorePatterns: ignoreFolders,
  transformIgnorePatterns: ignoreFolders,
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
    '^.+\\.(css|less)$': '<rootDir>/config/jest/stubs/css.js',
    '^.+\\.(jpg|gif|webp|png)$': '<rootDir>/config/jest/stubs/image.js',
    '^.+\\.(js|jsx)$': [
      'babel-jest',
      { configFile: '<rootDir>/babel.config.js' },
    ],
  },
  modulePaths: ['<rootDir>'],
  roots: ['<rootDir>/src'],
  moduleNameMapper,
};
