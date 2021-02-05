import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/pages/Private/Home';

const AppStack = createStackNavigator();

export default function App(): JSX.Element {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </AppStack.Navigator>
  );
}
