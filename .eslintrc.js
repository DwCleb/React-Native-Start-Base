module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier', 'react-hooks', 'sonarjs'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    '@react-native-community',
    'plugin:sonarjs/recommended',
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'eslint-config-prettier',
    'prettier/@typescript-eslint',
  ],
  env: {
    'react-native/react-native': true,
    jest: true,
  },
  parserOptions: {
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2018,
    // Allows for the use of imports
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/ban-ts-ignore': ['warn'],
    'no-unused-expressions': ['error'],
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'no-undef': ['error'],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js', '.ts', '.tsx'],
      },
    ],
    'no-console': ['warn'],
    '@typescript-eslint/no-empty-function': ['warn'],
  },
};
