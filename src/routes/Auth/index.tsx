import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '~/pages/Public/Welcome';

const AuthStack = createStackNavigator();

export default function AuthRoutes(): JSX.Element {
  return (
    <AuthStack.Navigator initialRouteName="Welcome">
      <AuthStack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
}
