import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import ListCard from '@/Components/ListCard'
import BottomNavigationBar from '../Components/BottomNavigationBar'
import AppBar from '../Components/AppBar'
import SearchBar from '../Components/searchBar'

const VenueScreen = () => {
  const [isFilter, setIsFilter] = useState(false)
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [duration, setDuration] = useState('')
  const [locality, setLocality] = useState('')
  const [budget, setBudget] = useState('')
  const [participants, setParticipants] = useState(2)

  const submitFilter = () => {
    // call api
    setIsFilter(!isFilter)
  }

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <AppBar title={'Venue'} />
      <View style={styles.header}>
        <View style={styles.searchWrapper}>
          <SearchBar />
        </View>
        <View style={styles.iconWrapepr}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              setIsFilter(!isFilter)
            }}
          >
            <Icon name="filter-list" color={'black'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        {isFilter && (
          <View style={styles.body}>
            <View style={styles.row}>
              <Text style={styles.key}>Date</Text>
              <TextInput
                style={styles.input}
                onChangeText={setDate}
                value={date}
                placeholder="DD-MM-YYYY"
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.key}>Time</Text>
              <TextInput
                style={styles.input}
                onChangeText={setTime}
                value={time}
                placeholder="HH:MM Am/Pm"
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.key}>Duration</Text>
              <TextInput
                style={styles.input}
                onChangeText={setDuration}
                value={duration}
                placeholder="Duration in hour"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.key}>Location</Text>
              <TextInput
                style={styles.input}
                onChangeText={setLocality}
                value={locality}
                placeholder="Location"
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.key}>Budget</Text>
              <TextInput
                style={styles.input}
                onChangeText={setBudget}
                value={budget}
                placeholder="Budget"
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.key}>People Count</Text>
              <TextInput
                style={styles.input}
                onChangeText={setParticipants}
                value={participants}
                placeholder="Count"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.button} onPress={submitFilter}>
                <Text style={styles.submitButton}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  topBanner: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  iconWrapepr: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchWrapper: {
    flex: 1,
  },
  buttonStyle: {},
  body: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  input: {
    height: 50,
  },
  button: {
    height: 50,
    width: 200,
    borderRadius: 20,
    backgroundColor: '#2E279D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    color: 'white',
    fontSize: 30,
    fontWeight: '100',
  },
  buttonWrapper: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  key: {
    width: 150,
    color: '#4D80E4',
  },
})

export default VenueScreen
