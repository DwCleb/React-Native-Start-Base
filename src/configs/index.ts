import Config from 'react-native-config';

export default {
  i18n: {
    url: Config.I18N_URL,
  },
  privacyPolicy: Config.PRIVACY_POLICY,
  termsOfServices: Config.TERMS_OF_SERVICES,
  baseURL: Config.BASE_URL,
  geolocation: {
    mapsKey: Config.MAPS_KEY,
  },
  isProduction: Config.IS_PRODUCTION,
  version: Config.VERSION,
  versionEnv: Config.VERSION_ENV,
  sentryDns: Config.SENTRY_DNS,
  sentryEnv: Config.SENTRY_ENV,
};
