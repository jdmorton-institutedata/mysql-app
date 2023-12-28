module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 90,
      lines: 80,
    },
  },
  coverageReporters: ["lcov", "text"],
  coverageDirectory: "./coverage-report/",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/__tests__/fixtures/"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  testTimeout: 30000,
  globals: {
    globalVar: "a global variable",
  },
  globalSetup: "<rootDir>/test/setup.js",
  globalTeardown: "<rootDir>/test/teardown.js",
  setupFiles: ["<rootDir>/test/jest-setup.js"],
  // setupFilesAfterEnv: ["<rootDir>/test/jest-after-env.js"],
};
