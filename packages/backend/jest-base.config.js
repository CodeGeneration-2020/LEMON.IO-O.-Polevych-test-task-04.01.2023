const tsconfig = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './',
  modulePaths: ['node_modules', './'],
  resetModules: true,
  setupFiles: ['dotenv/config'],
  verbose: false,
};
