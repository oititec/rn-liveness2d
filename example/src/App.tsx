import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Liveness2D from './screens/Liveness2D/Liveness2D';
import Documentscopy from './screens/Documentscopy/Documentscopy';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Liveness2D" component={Liveness2D} />
        <Stack.Screen name="Documentscopy" component={Documentscopy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
