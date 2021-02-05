module.exports = {
  preset: 'react-native',
  setupFiles: ['./jestSetupFile.js'],
  bail: 1,
  coverageThreshold: {
    global: {
      branches: 77.5,
      functions: 77.5,
      lines: 77.5,
      statements: 77.5,
    },
  },
  collectCoverage: true,
  notify: true,
  coverageReporters: ['lcov', 'text', 'json', 'text-summary'],
  forceCoverageMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  coverageDirectory: '<rootDir>/coverage',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/index.tsx',
    '!<rootDir>/src/theme/index.tsx',
    '!<rootDir>/src/components/index.tsx',
    '!<rootDir>/src/components/VerticalSlideAnimation/*',
    '!<rootDir>/src/routes/index.tsx',
    '!<rootDir>/node_modules/react-native-appearance',
  ],
  testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-navigation|@react-native-community)|@react-navigation/(.*)|react-native-safe-area-view/)',
  ],
  testResultsProcessor: 'jest-sonar-reporter',
};
