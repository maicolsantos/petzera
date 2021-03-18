import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import Home from '~/screens/Home'
import AddPet from '~/screens/AddPet'

export type RootStackParamList = {
  Home: undefined;
  AddPet: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="AddPet"
          options={{
            headerShown: false,
            stackPresentation: 'formSheet',
          }}
          component={AddPet}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
)

export default App
