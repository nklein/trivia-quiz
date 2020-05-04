module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx|tsx)$',

  coverageDirectory: './coverage',
  collectCoverageFrom: ['./src/**/{!(*.d),}.ts'],
  coverageReporters: ['text', 'html'],

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "\\.css": "<rootDir>/__tests__/cssMock.js",
  },
};
