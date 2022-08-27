import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { VenueScreen, SuggestionScreen, MainContainer, LoginScreen } from '../Containers/index'
import { navigationRef } from './utils'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={'light-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            animationEnabled: false,
          }}
        />
          <Stack.Screen
            name="VenueScreen"
            component={VenueScreen}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="SuggestionScreen"
            component={SuggestionScreen}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="MainContainer"
            component={MainContainer}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Dining"
            component={MainContainer}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
