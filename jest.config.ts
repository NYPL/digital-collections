import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while
  // executing the test
  collectCoverage: true,
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    "__tests__/data/*",
    "__tests__/__mocks__/*",
    "__tests__/api/*",
    "\\.spec\\.ts$", // ignores playwright tests
  ],
  moduleNameMapper: {
    "^appConfig$": "<rootDir>/__tests__/data/appConfig.ts", // Adjust the path as needed
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
