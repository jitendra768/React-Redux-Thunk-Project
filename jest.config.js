export default {
    testEnvironment: "jsdom", // Use jsdom for browser-like environment
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Setup file for Jest
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest", // Use babel-jest to transform JS/JSX files
    },
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1", // Map @/ to src/ for module imports
    },
  };