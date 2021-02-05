import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

import { getToken } from '~/services/deviceStorage';

import { useSystemContext } from '~/services/context/reducers/system';
import { restoreSystemData } from '~/services/context/actions/system';

import Spinner from '~/components/UI/Spinner';

import { View, ViewEnum } from '~/components/Structure';

import AuthStack from './Auth';
import AppStack from './App';

function AppNavigator(): JSX.Element {
  const { systemState, dispatch } = useSystemContext();

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async (): Promise<void> => {
      let accessToken;

      try {
        accessToken = await getToken();
      } catch (e) {
        console.error(`Failure to get token:  ${e.message}`);
      }

      accessToken = accessToken !== undefined ? accessToken : null;

      dispatch(restoreSystemData(accessToken));
    };

    bootstrapAsync();
  }, []);

  if (systemState.loading) {
    return (
      <View flex={1} justifyContent={ViewEnum.CENTER} alignItems={ViewEnum.CENTER}>
        <Spinner />
      </View>
    );
  }

  if (systemState.accessToken !== null) {
    return <AppStack />;
  } else {
    return <AuthStack />;
  }
}

export default function Entry(): JSX.Element {
  const keyboardAvoidingStyle = { flex: 1 };

  useTranslation(['en', 'pt'], { useSuspense: true });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {Platform.OS === 'android' ? (
          <AppNavigator />
        ) : (
          <KeyboardAvoidingView behavior="padding" style={keyboardAvoidingStyle}>
            <AppNavigator />
          </KeyboardAvoidingView>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
