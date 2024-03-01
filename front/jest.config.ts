import {  JestConfigWithTsJest } from "ts-jest";
const { compilerOptions } = require('./tsconfig');


// let paths = pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>' } */) || {};
// paths["\\.(gif|ttf|eot|svg|png)$"] = "<rootDir>/test/__ mocks __/fileMock.js";
// paths['^@/(.*)$']='<rootDir>/$1';
const jestConfig: JestConfigWithTsJest = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.ts?$": "ts-jest"
        // process `*.tsx` files with `ts-jest`
    },
    // moduleNameMapper: {
    //     "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.js",
    //     "@assets/*": ["./src/assets/*"],
    //     "@components/*": ["./src/components/*"],
    //     "@core/*": ["./src/core/*"],
    //     "@pages/*": ["./src/pages/*"],
    //     "@styles/*": ["./src/styles/*"],
    //   },

    roots: ['<rootDir>'],
    modulePaths: [compilerOptions.baseUrl],
    moduleDirectories: ['node_modules', __dirname],

    moduleNameMapper: {
        "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/$1",
        "^@/(.*)$": "<rootDir>/test/__ mocks __/fileMock.js",
        '^@assets/(.*)$': '<rootDir>/src/assets/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@core/(.*)$': '<rootDir>/src/core/$1',
        '^@pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@styles/(.*)$': '<rootDir>/src/styles/$1',
      },
    // moduleNameMapper: paths,
    
    reporters: [ "default", "jest-junit" ]
};

export default jestConfig;