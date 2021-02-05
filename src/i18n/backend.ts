import AsyncStorage from '@react-native-community/async-storage';

import { configs } from '~/configs';
import { BackendModule, CallbackError } from 'i18next';

export const AsyncBackend: BackendModule = {
  type: 'backend',
  init: () => null,
  create: () => null,
  read: async function (
    language: string,
    _: string,
    callback: (err: CallbackError, translations: { [key: string]: string }) => void
  ) {
    let asyncStoreTranslations = null;
    const asyncStoreTranslationsRequest = await AsyncStorage.getItem(`stored_${language}_translation`);
    asyncStoreTranslations = asyncStoreTranslationsRequest && JSON.parse(asyncStoreTranslationsRequest);

    try {
      const translationRequest = await fetch(`${configs.i18n.url}/translation/${language}/app`, {
        method: 'get',
      });

      if (translationRequest.ok) {
        const translations = await translationRequest.json();
        if (!asyncStoreTranslations || asyncStoreTranslations !== translations) {
          AsyncStorage.setItem(`stored_${language}_translation`, JSON.stringify(translations));
        }

        callback(null, translations);
      } else {
        callback(null, asyncStoreTranslations);
      }
    } catch {
      callback(null, asyncStoreTranslations);
    }
  },
};
