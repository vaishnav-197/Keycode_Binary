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

const VenueFixPoll = ({ navigation, route }) => {
  const { phoneNumbers } = route.params
  const [venuePoll, data] = useVenuePollMutation()
  const dispatch = useDispatch()
  const eventSelected = useSelector(state => state.event.value)

  const sendPoll = async () => {
    const body = {}
    try {
      await venuePoll(body)
    } catch (error) {
      console.error('Failed to Fetch: ', error)
    }
  }
  return (
    <View style={styles.appContainer}>
      <AppBar title="Poll Results" />
      <ScrollView>
        <View />
      </ScrollView>
      <View>
        <FloatingActionButton
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
