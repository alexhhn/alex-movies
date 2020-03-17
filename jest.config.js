// https://github.com/testing-library/react-testing-library/issues/422
// https://github.com/zeit/next.js/issues/8663

module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ['<rootDir>'],
  
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
  
    globals: {
      // we must specify a custom tsconfig for tests because we need the typescript transform
      // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
      // can see this setting in tsconfig.jest.json -> "jsx": "react"
      'ts-jest': {
        tsConfig: 'tsconfig.jest.json',
      },
    },
  
    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },

    moduleDirectories: ['node_modules','./'],

  
    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  
    // // Test spec file resolution pattern
    // // Matches parent folder `__tests__` and filename
    // // should contain `test` or `spec`.
    // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  
    // Module file extensions for importing
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  
  };
  