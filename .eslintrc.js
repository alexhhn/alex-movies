module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', 'stories/**'],
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        comments: 150,
        ignoreStrings: true,
        ignoreUrls: true,
      },
    ],
    'react/prop-types': 'off', // Use typescript interface for proptypes
    'no-underscore-dangle': 'off', // allow using _methodName as private methods
    'object-curly-newline': 'off', // conflicts with prettier
    'implicit-arrow-linebreak': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ], // nextjs-link
    'arrow-parens': 'off',
    'operator-linebreak': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'radix':'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off'
  },
  ignorePatterns: ['_app.tsx', '_document.js','cypress'], //Next.js root files
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },
};
