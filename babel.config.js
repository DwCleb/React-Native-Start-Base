module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    '@babel/transform-flow-strip-types',
    '@babel/proposal-class-properties',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '~/assets': './src/assets',
          '~/components': './src/components',
          '~/pages': './src/pages',
          '~/routes': './src/routes',
          '~/theme': './src/theme',
          '~/i18n': './src/i18n',
          '~/services': './src/services',
          '~/helpers': './src/services/helpers',
          '~/configs': './src/configs',
        },
      },
    ],
  ],
};
