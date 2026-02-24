module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/test"],
  moduleFileExtensions: ["ts", "js", "json"],
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  testMatch: ["**/?(*.)+(test).ts"],
  clearMocks: true,
};