import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { MainContainer } from '../Containers/index'
import { VenueScreen } from '../Containers/index'
import { navigationRef } from './utils'
import SuggestionScreen from '@/Containers/SuggestionScreen'
import Summary from '@/Components/Summary'
import AddParticpants from '@/Containers/AddParticipants'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={'light-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="AddParticpants"
            component={AddParticpants}
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
            name="VenueScreen"
            component={VenueScreen}
            options={{
              animationEnabled: false,
            }}
          />

          <Stack.Screen
            name="FoodPollScreen"
            component={SuggestionScreen}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="SummaryPage"
            component={Summary}
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
