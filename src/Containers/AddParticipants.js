// In App.js in a new project

import React, { useEffect, useState } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import FloatingActionButton from '@/Components/FloatingActionButton'
import AppBar from '@/Components/AppBar'
import { AddVenueHelper, useAddVenuePollMutation } from '@/Api/apiSlice'
import Storage from '@/Storage'
import { useDispatch, useSelector } from 'react-redux'


const AddParticpants = ({ navigation }) => {
  const [addVenuePoll, data] = useAddVenuePollMutation()
  const venuesSelected = useSelector(state => state. venue.value)
  const [participants, setParticipants] = useState([])
  const [currentParticipant, setcurrentParticipant] = useState('')

  const fetchApi = async (updateBody) => {
    const body = AddVenueHelper('venue_poll', updateBody)
    try {
      await addVenuePoll(body)
    } catch (error) {
      console.log('Failed to Fetch: ', error)
    }
  }

  const participantInputHandler = text => {
    setcurrentParticipant(text)
  }

  const addparticipantHandler = () => {
    setParticipants(list => [
      ...list,
      {
        id: Math.floor(Math.random() * 10).toString(),
        item: currentParticipant,
      },
    ])
    setcurrentParticipant('');
  }

  const deleteParticipantHandler = id => {
    setParticipants(particpants => {
      return participants.filter(goal => goal.id !== id)
    })
  }

  const getMobile = async () =>{
    const mobile = await Storage._retrieveUserToken()
    console.log(mobile)
    fetchApi({
      "createdBy": mobile,
      "participants": participants.map(p => p.item),
      "venues": venuesSelected
    })
    navigation.navigate('RestaurantSelection')
  }

  return (
    <View style={styles.appContainer}>
      <AppBar title="Add Decision Makers" color={'blue'}/>
      <ScrollView>
        <View style={styles.pageHeading}>
          <Text style={styles.pageHeadingText}>Add Collaborators</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Mobile Number"
            onChangeText={participantInputHandler}
          />
          <Button
            style={styles.addParticipants}
            title="Add Participants"
            onPress={addparticipantHandler}
          />
        </View>

        <View style={styles.goalsContainer}>
          <View>
            <Text style={styles.goalsHeading}>Participants</Text>
          </View>
          <FlatList
            data={participants}
            renderItem={itemData => {
              return (
                <TouchableOpacity
                  onPress={deleteParticipantHandler.bind(
                    this,
                    itemData.item.id,
                  )}
                >
                  <View>
                    <Text style={styles.goals}>{itemData.item.item} </Text>
                  </View>
                </TouchableOpacity>
              )
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
      <View>
        <FloatingActionButton
          onPress={getMobile}
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
    paddingBottom: 20,
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
    paddingHorizontal: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#999',
    marginVertical: 12,
    textAlign: 'center',
    borderRadius: 10,
    height: 40
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

export default AddParticpants
