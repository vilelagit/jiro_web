module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'react/require-default-props': 'off',
    'global-require': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-mixed-operators': 'off',
    'no-alert': 'off',
    'no-unsafe-optional-chaining': 'off',
    'arrow-body-style': 'off',
    camelcase: 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
  },
};
