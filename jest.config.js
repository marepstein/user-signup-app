/* eslint-disable @typescript-eslint/no-require-imports */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

const ignoreFolders = [
  '/build/',
  'node_modules/(?!(@tanstack)/)',
  '/.next',
  '/.open-next',
];

/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  setupFiles: ['<rootDir>/config/jest/jest.setup.ts'],
  testPathIgnorePatterns: ignoreFolders,
  transformIgnorePatterns: ignoreFolders,
  transform: {
    '^.+.tsx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.test.json' }],
    '^.+\\.(css|less)$': '<rootDir>/config/jest/stubs/css.js',
    '^.+\\.(jpg|gif|webp|png)$': '<rootDir>/config/jest/stubs/image.js',
  },
  modulePaths: ['<rootDir>'],
  roots: ['<rootDir>'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths),
  },
};
