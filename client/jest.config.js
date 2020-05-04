module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx|tsx)$',

  coverageDirectory: './coverage',
  collectCoverageFrom: ['./src/**/{!(index|*.d),}.ts'],
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "\\.css": "<rootDir>/__tests__/cssMock.js",
  },

  setupFilesAfterEnv: [ "./__tests__/jestSetup.ts" ],
};
