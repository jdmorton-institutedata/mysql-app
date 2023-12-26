module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 100,
      lines: 85,
    },
  },
  coverageReporters: ["lcov", "text"],
  coverageDirectory: "./coverage-report/",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/__tests__/fixtures/"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  testTimeout: 3000,
  globals: {
    globalVar: "a global variable",
  },
  setupFiles: ['<rootDir>/test/jest-setup.js'],
};
