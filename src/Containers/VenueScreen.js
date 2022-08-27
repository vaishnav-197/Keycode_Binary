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

  const [isFilter, setIsFilter] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState('01-09-2022');
  const [time, setTime] = useState('09:30 am');
  const [duration, setDuration] = useState('5');
  const [locality, setLocality] = useState('Kochi');
  const [budget, setBudget] = useState('2 lak');
  const [participants, setParticipants] = useState('2');

  const submitFilter = () =>{
    // call api
    setIsFilter(!isFilter)
  }

  const venueSuggestion = [
    {
      name: "Marriot",
      rating: 4.5,
    },
    {
      name: "Grand Hyatt",
      rating: 4.4,
    },
    {
      name: "Crown Plaza",
      rating: 4.3,
    },
    {
      name: "Four Points",
      rating: 4.2,
    },
    {
      name: "Holiday Inn",
      rating: 4.1,
    },
  ]

  return (
    <>
    <AppBar title={'Venue'}/>
    <View style={styles.header}>
      <View style={styles.searchWrapper}>
        <SearchBar />
      </View>
      <View style={styles.iconWrapepr}>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
          const currentFilter= isFilter;
          setIsFilter(!currentFilter);
        }}>
        <Icon 
          name="filter-list" 
          color={'black'} 
          size={20} 
        />
      </TouchableOpacity>
      </View>
    </View>
    <TouchableOpacity style={styles.filterComponent} onPress={()=>{
          const currentFilter= isFilter;
          setIsFilter(!currentFilter);
        }}>
      <View style={styles.iconRow}>
      <Icon
          name="location-on"
          color={'#2E279D'}
          size={20}
          style={styles.marginRight}
        />
        <Text style={styles.filterText}>{locality}</Text>
      </View>
      <View style={styles.iconRow}>
      <Icon
          name="supervised-user-circle"
          color={'#2E279D'}
          size={20}
          style={styles.marginRight}
        />
        <Text style={styles.filterText}>{participants}</Text>
      </View>
      <View style={styles.iconRow}>
      <Icon
          name="date-range"
          color={'#2E279D'}
          size={20}
          style={styles.marginRight}
        />
        <Text style={styles.filterText}>{date}</Text>
      </View>
    </TouchableOpacity>
    <ScrollView style={styles.scrollView}
      contentContainerStyle={styles.contentContainerStyle}>
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
                placeholder="Participants"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.button} onPress={submitFilter}>
                <Text style={styles.submitButton}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {venueSuggestion.map(venue => {
          return (<ListCard
            name={venue.name}
            sideComponent={venue.rating}
            caption={'abcd'}
          />)
        })}
      </View>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  topBanner: {},
  filterText: {
    color: '#2E279D',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  filterComponent:{
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    flexDirection: 'row'
  },
  iconWrapepr: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRow:{
    alignItems: 'center',
    justifyContent: 'center'
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
