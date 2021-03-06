const path = require('path');
const { defaults } = require('jest-config');

module.exports = {
  rootDir: path.join(__dirname),
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'vue'],
  testMatch: ['**/tests/**/*.js'],
  testPathIgnorePatterns: ['<rootDir>/tests/helpers', '<rootDir>/tests/helpers/setup.js'],
  collectCoverageFrom: ['**/lib/**/*.js'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  setupFilesAfterEnv: ['jest-extended'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  }
};