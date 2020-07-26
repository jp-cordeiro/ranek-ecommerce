module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  //   collectCoverage: true,
  //   collectCoverageFrom: ['src/components/*.{js,vue}', '!**/node_modules/**'],
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
