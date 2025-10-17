import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "esbuild-jest",
      {
        sourcemap: true,
        loaders: {
          ".spec.ts": "tsx",
        },
      },
    ],
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  testPathIgnorePatterns: ["src/welcome.ts", "src/types.ts"],
  watchPathIgnorePatterns: ["src/welcome.ts", "src/types.ts"],
  coveragePathIgnorePatterns: ["src/welcome.ts", "src/types.ts"],
};

export default config;
