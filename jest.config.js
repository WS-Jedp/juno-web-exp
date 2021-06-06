module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: ["<rootDir>/config/tests.ts"],
    transform: {
        "^.+\\.ts(x)?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/))(test|spec)\\.ts(x)?$"
}