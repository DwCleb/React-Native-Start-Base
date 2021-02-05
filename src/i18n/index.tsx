import i18n, { LanguageDetectorAsyncModule } from 'i18next';

import { initReactI18next } from 'react-i18next';
import * as Localize from 'react-native-localize';

import AsyncStorage from '@react-native-community/async-storage';
import { AsyncBackend } from './backend';

const LANGUAGE_TAG = '@DEVICE:languageTag';
const AVAILABLE_LOCALES = ['en', 'pt'];

const availableLanguage = Localize.findBestAvailableLanguage(AVAILABLE_LOCALES);
const bestUserLanguageMatch = availableLanguage ? availableLanguage.languageTag : 'en';

async function storeUserLanguage(language: string): Promise<void> {
  await AsyncStorage.setItem(LANGUAGE_TAG, language);
}

async function fetchUserLanguage(): Promise<string> {
  return (await AsyncStorage.getItem(LANGUAGE_TAG)) || bestUserLanguageMatch;
}

const languageDetector: LanguageDetectorAsyncModule = {
  init: async () => {
    const userLanguage = await fetchUserLanguage();
    storeUserLanguage(userLanguage);
  },
  type: 'languageDetector',
  async: true,
  detect: async (callback: (language: string) => void): Promise<void> => {
    const userLanguage = await fetchUserLanguage();
    storeUserLanguage(userLanguage);

    callback(userLanguage);
  },
  cacheUserLanguage: (language: string) => {
    storeUserLanguage(language);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .use(AsyncBackend)
  .init({
    whitelist: AVAILABLE_LOCALES,
    react: {
      useSuspense: false,
      wait: true,
    },
    interpolation: {
      escapeValue: false,
    },
    keySeparator: false,
  });

export function changeLanguage(language: string): void {
  if (i18n.language === language) {
    return;
  }

  storeUserLanguage(language);
  i18n.changeLanguage(language);
}
