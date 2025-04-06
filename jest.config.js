module.exports = {
  clearMocks: true,
  testEnvironment: "node",
  setupFilesAfterEnv: [ "./tests/jest.setup.js", ],
  testMatch: [ "<rootDir>/tests/**/*.test.js", ],
};
