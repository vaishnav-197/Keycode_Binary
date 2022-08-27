import React, { useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput
} from 'react-native'
import AppBar from '@/Components/AppBar'
import ListCard from '@/Components/ListCard'
import Icon from 'react-native-vector-icons/MaterialIcons'
import RatingIcon from '@/Components/RatingIcon'
import FloatingActionButton from '@/Components/FloatingActionButton'
import SearchBar from '../Components/searchBar'

const RestaurantSelection = () => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([])
  const [locality, setLocality] = useState('Kochi')
  const [isFilter, setIsFilter] = useState(false)
  const [date, setDate] = useState('01-09-2022')
  const [time, setTime] = useState('09:30 am')
  const [duration, setDuration] = useState('5')
  const [budget, setBudget] = useState('2 lak')
  const [restaurants, setRestaurants] = useState([
    {
      restaurantName: 'rest 1',
      restaurantId: 1,
      restaurantImage:
        'https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/the-rice-boat.jpg',
      restaurantRating: 4,
      location: 'Kochi',
      rating: 1,
    },
    {
      restaurantName: 'rest 1',
      restaurantId: 2,
      restaurantImage:
        'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/i/i/p59229-15639532785d38087e0ab48.jpg?tr=tr:n-xlarge',
      restaurantRating: 4,
      location: 'Kochi',
      rating: 2,
    },
    {
      restaurantName: 'rest 1',
      restaurantId: 3,
      restaurantImage:
        'https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/sky-gril-400x281.jpg',
      restaurantRating: 4,
      location: 'Kochi',
      rating: 3,
    },
    {
      restaurantName: 'rest 1',
      restaurantId: 4,
      restaurantImage:
        'https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/fort-house-restaurant-400x266.jpg',
      restaurantRating: 4,
      location: 'Kochi',
      rating: 4,
    },
    {
      restaurantName: 'rest 1',
      restaurantId: 5,
      restaurantImage:
        'https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/asia-kitchen-400x199.jpg',
      restaurantRating: 4,
      location: 'Kochi',
      rating: 5,
    },
  ])

  const submitFilter = () =>{
    // call api
    setIsFilter(!isFilter)
  }

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
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.button} onPress={submitFilter}>
                <Text style={styles.submitButton}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {restaurants.map(restaurant => (
    <ListCard
      title={restaurant.restaurantName}
      caption={restaurant.location}
      key={restaurant.restaurantId}
      imageSource={restaurant.restaurantImage}
      style={[styles.marginBottom]}
      sideComponent={<RatingIcon rating={restaurant.rating} />}
      onLongPressed={() => {
        setSelectedRestaurants([
          ...selectedRestaurants,
          restaurant.restaurantId,
        ])
      }}
      onPressed={() => {
        setSelectedRestaurants(selectedRestaurants => {
          return selectedRestaurants.filter(
            selectedRestaurant =>
              selectedRestaurant != restaurant.restaurantId,
          )
        })
      }}
      isSelected={selectedRestaurants.includes(restaurant.restaurantId)}
    />
  ))}
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
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.5)'
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
  marginBottom: {
    marginBottom: 12
  }
})

export default RestaurantSelection
