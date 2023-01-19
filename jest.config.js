const config = {
    coverageDirectory: 'coverage',
    cacheDirectory: '.jestcache',
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts,tsx}'],
    maxWorkers: 2,
    moduleDirectories: ['node_modules', '<rootDir>/src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node'],
    reporters: ['default', ['jest-junit', { outputDirectory: './coverage' }]],
    transformIgnorePatterns: ['node_modules'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom'
};

module.exports = config;
