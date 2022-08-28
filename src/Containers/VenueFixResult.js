// In App.js in a new project

import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { useVenuePollMutation } from '@/Api/apiSlice'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FloatingActionButton from '@/Components/FloatingActionButton'
import { GetApiHelper } from '@/Api/apiSlice'
import ListCard from '@/Components/ListCard'
import AppBar from '@/Components/AppBar'
import { Fonts } from '@/Theme/Fonts'

const VenueFixPoll = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('SummaryScreen')
  }
  return (
    <>
      <AppBar title="Poll Results" />
    <View style={styles.appContainer}>
      <ScrollView>
        <View>
          <Text style={[Fonts.textRegularBold, { marginTop: 16 }]}>Selected Venue</Text>
          <ListCard 
            imageSource={'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/07/02/1033/Grand-Hyatt-Kochi-Bolgatty-P058-Hotel-Facade.jpg/Grand-Hyatt-Kochi-Bolgatty-P058-Hotel-Facade.16x9.jpg'}
            title={'Hyatt'}
            caption={'Kochi'}
          />
        </View>
      </ScrollView>
      <View>
        <FloatingActionButton
          onPress={onPress}
          icon={
            <Icon
              name="navigate-next"
              color={'#fff'}
              size={24}
              style={styles.marginRight}
            />
          }
        />
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 12,
    flex: 1,
  },
  pageHeading: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
    marginTop: 10,
  },
  pageHeadingText: {
    fontSize: 20,
    margin: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#999',
    marginVertical: 12,
    textAlign: 'center',
    borderRadius: 10,
  },
  goalsContainer: {
    flex: 5,
    backgroundCOlor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goals: {
    backgroundColor: '#5e0acc',
    borderRadius: 6,
    margin: 8,
    padding: 8,
    color: 'white',
  },
  goalsHeading: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  addParticipants: {
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 20,
  },
})

export default VenueFixPoll
