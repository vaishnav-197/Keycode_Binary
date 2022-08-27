// In App.js in a new project

import React, { useState } from 'react'
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

const AddParticpants = ({ navigation }) => {
  const [participants, setParticipants] = useState([])
  const [currentParticipant, setcurrentParticipant] = useState('')

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
    setcurrentParticipant('')
  }

  const deleteParticipantHandler = id => {
    setParticipants(particpants => {
      return participants.filter(goal => goal.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <AppBar title="Add Decision Makers" />
      <ScrollView>
        <View style={styles.pageHeading}>
          <Text style={styles.pageHeadingText}>Add Participants to Poll</Text>
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
    paddingTop: 10,
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
