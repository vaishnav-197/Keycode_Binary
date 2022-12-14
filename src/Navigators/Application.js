import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  VenueScreen,
  SuggestionScreen,
  MainContainer,
  LoginScreen,
  SummaryScreen,
  DishPollScreen,
} from '../Containers/index'
import { navigationRef } from './utils'
import Summary from '@/Components/Summary'
import AddParticpants from '@/Containers/AddParticipants'
import VenueFixPoll from '@/Containers/VenueFixResult'
import RestaurantSelection from '@/Containers/RestaurantSelection'
import DishSelectionScreen from '@/Containers/DishSelectionScreen'
import UpcomingEventScreen from '@/Containers/UpcomingEventScreen'
import VenueFixResult from '@/Containers/VenueFixResult'
import PaymentScreen from '@/Containers/PaymentScreen'

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
            name="MainContainer"
            component={MainContainer}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="RestaurantSelection"
            component={RestaurantSelection}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="UpcomingEventScreen"
            component={UpcomingEventScreen}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="DishSelectionScreen"
            component={DishSelectionScreen}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="AddParticpants"
            component={AddParticpants}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="DishPollScreen"
            component={DishPollScreen}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="SummaryPage"
            component={SummaryScreen}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="SummaryScreen"
            component={SummaryScreen}
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
            name="PaymentScreen"
            component={PaymentScreen}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="VenueFixPoll"
            component={VenueFixPoll}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="VenueFixResult"
            component={VenueFixResult}
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
            name="FoodPollScreen"
            component={SuggestionScreen}
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
