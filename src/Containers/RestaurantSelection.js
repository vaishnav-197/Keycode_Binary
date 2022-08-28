import React, { useEffect, useReducer, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native'
import AppBar from '@/Components/AppBar'
import ListCard from '@/Components/ListCard'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Rating from '@/Components/Rating'
import FloatingActionButton from '@/Components/FloatingActionButton'
import SearchBar from '../Components/searchBar'
import { GetApiHelper, useGetEventTypeMutation } from '@/Api/apiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../Store/HotelSlice'

const RestaurantSelection = ({ navigation }) => {
  const hotelsSelected = useSelector(state => state.hotel.value)

  useEffect(() => {
    console.log(hotelsSelected)
  }, [hotelsSelected])

  const dispatch = useDispatch()
  const [getEventType, data] = useGetEventTypeMutation()
  const [selectedRestaurants, setSelectedRestaurants] = useState([])
  const [locality, setLocality] = useState('Kochi')
  const [isFilter, setIsFilter] = useState(false)
  const [date, setDate] = useState('01-09-2022')
  const [time, setTime] = useState('09:30 am')
  const [duration, setDuration] = useState('5')
  const [budget, setBudget] = useState('2 lak')

  const fetchApi = async () => {
    const body = GetApiHelper('hotel', {})
    try {
      await getEventType(body)
    } catch (error) {
      console.log('Failed to Fetch: ', error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  const submitFilter = () => {
    setIsFilter(!isFilter)
  }

  return (
    <>
      <AppBar title={'Select Restaurant'} />
      <View style={styles.header}>
        <View style={styles.searchWrapper}>
          <SearchBar />
        </View>
        <View style={styles.iconWrapepr}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              const currentFilter = isFilter
              setIsFilter(!currentFilter)
            }}
          >
            <Icon name="filter-list" color={'black'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.filterComponent}
        onPress={() => {
          const currentFilter = isFilter
          setIsFilter(!currentFilter)
        }}
      >
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
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainerStyle}
      >
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
          {data.isSuccess &&
            data?.data?.map(restaurant => (
              <View style={styles.marginBottom}>
                <ListCard
                  title={restaurant.rest_name}
                  caption={restaurant.location}
                  key={restaurant._id}
                  imageSource={restaurant.rest_image}
                  sideComponent={<Rating rating={restaurant.rating} />}
                  onLongPressed={() => {
                    dispatch(
                      add({
                        name: restaurant.rest_name,
                        id: restaurant._id,
                      }),
                    )
                  }}
                  onPressed={() => {
                    const isSelected = hotelsSelected.find(
                      hotel => hotel.id == restaurant._id,
                    )

                    if (isSelected) {
                      dispatch(
                        remove({
                          name: restaurant.rest_name,
                          id: restaurant._id,
                        }),
                      )
                    } else {
                      dispatch(
                        add({
                          name: restaurant.rest_name,
                          id: restaurant._id,
                        }),
                      )
                      navigation.navigate('DishSelectionScreen')
                    }
                  }}
                  isSelected={
                    !!hotelsSelected.find(hotel => hotel.id == restaurant._id)
                  }
                />
              </View>
            ))}
        </View>
      </ScrollView>
      <FloatingActionButton
        icon={<Icon name="navigate-next" color={'#fff'} size={24} />}
        onPress={() => {
          navigation.navigate('DishSelectionScreen')
        }}
      />
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
  filterComponent: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.5)',
    backgroundColor: '#fff',
  },
  iconWrapepr: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRow: {
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
  marginBottom: {
    marginBottom: 16,
  },
})

export default RestaurantSelection
