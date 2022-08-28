import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, StyleSheet, ScrollView } from 'react-native'
import { add, remove } from '../Store/EventSlice'
import BottomNavigationBar from '@/Components/BottomNavigationBar'
import ListCard from '@/Components/ListCard'
import SearchBar from '@/Components/searchBar'
import AppBar from '@/Components/AppBar'

// Api
import { useGetEventTypeMutation } from '@/Api/apiSlice'
import { GetApiHelper } from '@/Api/apiSlice'

const MainContainer = ({ navigation }) => {
  const dispatch = useDispatch()
  const [getEventType, data] = useGetEventTypeMutation()

  const handleDiningSelect = () => {}
  const handleEventsSelect = () => {}
  const fetchApi = async () => {
    const body = GetApiHelper('eventType', {})
    try {
      await getEventType(body)
    } catch (error) {
      console.error('Failed to Fetch: ', error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
      <View style={styles.mainContainer}>
        <AppBar title={'Events'} color={'blue'} />
        <View style={styles.searchBarWrapper}>
          <SearchBar />
        </View>
        <View />
        <ScrollView style={styles.scrollView}>
          {data.isSuccess ? (
            <>
              {data?.data?.map(event => {
                return (
                  <>
                    <View style={styles.cardWrapper}>
                      <ListCard
                        title={event.name}
                        imageSource={event.image}
                        onLongPressed={() => {
                          dispatch(add(event.name))
                          navigation.navigate('VenueScreen')
                        }}
                      />
                    </View>
                  </>
                )
              })}
            </>
          ) : (
            <></>
          )}
        </ScrollView>
      </View>
      <BottomNavigationBar
        onSelectDining={handleDiningSelect}
        onSelectEvents={handleEventsSelect}
      />
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: 50,
  },
  searchBarWrapper: {
    marginTop: 15,
    marginHorizontal: 12,
    marginBottom: 10,
  },
  cardWrapper: {
    marginHorizontal: 12,
    marginVertical: 3,
  },
})

export default MainContainer
