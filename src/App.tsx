import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '~/Home'

const Stack = createStackNavigator()

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
)

export default App
