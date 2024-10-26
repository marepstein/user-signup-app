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
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/test/(.*)$': '<rootDir>/src/test/$1',
    '^@/features/(.*)$': '<rootDir>/src/features/$1',
    '^@/ffern-friends/modules/(.*)$':
      '<rootDir>/src/features/ffern-friends/modules/$1',
    '^@/ffern-friends/services/(.*)$':
      '<rootDir>/src/features/ffern-friends/services/$1',
    '^@/ffern-friends/provider/(.*)$':
      '<rootDir>/src/features/ffern-friends/provider/$1',
    '^@/ffern-friends/hooks/(.*)$':
      '<rootDir>/src/features/ffern-friends/hooks/$1',
  },
};
