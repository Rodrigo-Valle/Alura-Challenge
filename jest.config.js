module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["lcov", "html", "text"],
    collectCoverageFrom: ["<rootDir>/src/controller/*.ts", "<rootDir>/src/service/*.ts"],
    preset: "ts-jest",
    testEnvironment: "node",
    modulePathIgnorePatterns: ["dist", "node_modules", "coverage"],
    testMatch: ["**/?(*.)+(spec|test).(js|ts|tsx)"],
};

process.env = Object.assign(process.env, {
    JWT_SECRET: "testsecret",
    JWT_EXPIRES: "1d",
});
