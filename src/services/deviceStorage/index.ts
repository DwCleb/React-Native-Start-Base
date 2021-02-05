import AsyncStorage from '@react-native-community/async-storage';
// user storage const
export const KEY = {
  AUTHENTICATION: '@DEVICE:isLogged',
  TOKEN: '@DEVICE:token',
  LANGUAGE_TAG: '@DEVICE:languageTag',
  CURRENCY_TAG: '@DEVICE:currencyTag',
};

const errorMessage = 'Error save in storage';
// Setters
export const setLogged = (auth: boolean): object => AsyncStorage.setItem(KEY.AUTHENTICATION, JSON.stringify(`${auth}`));

export const setToken = async (token: string | null | undefined): Promise<object | void> => {
  try {
    await AsyncStorage.setItem(KEY.TOKEN, JSON.stringify(`${token}`));
  } catch (error) {
    // Error saving data
    console.warn(errorMessage);
  }
};

export const setLanguageTag = async (languageTag: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(KEY.LANGUAGE_TAG, languageTag);
  } catch (error) {
    // Error saving data
    console.warn(errorMessage);
  }
};

export const setCurrencyTag = async (currencyTag: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(KEY.CURRENCY_TAG, currencyTag);
  } catch (error) {
    // Error saving data
    console.warn(errorMessage);
  }
};

// Getters
export const isLogged = async (): Promise<boolean> => {
  const isAuthenticated = await AsyncStorage.getItem(KEY.AUTHENTICATION);
  return isAuthenticated !== undefined;
};

export const getToken = async (): Promise<string | null> => await AsyncStorage.getItem(KEY.TOKEN);

export const getLanguageTag = async (): Promise<string | null | undefined | void> => {
  try {
    const value = await AsyncStorage.getItem(KEY.LANGUAGE_TAG);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    // Error retrieving data
    return '';
  }
};
export const getCurrencyTag = async (): Promise<string | null | undefined | void> => {
  try {
    const value = await AsyncStorage.getItem(KEY.CURRENCY_TAG);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    // Error retrieving data
    return '';
  }
};

// Clear localStorage
export const logoutApp = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(KEY.TOKEN);
    await AsyncStorage.removeItem(KEY.AUTHENTICATION);
    await AsyncStorage.clear();
  } catch (error) {}
};
