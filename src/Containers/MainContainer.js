import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, StyleSheet, ScrollView } from 'react-native'
import { add, remove } from '../Store/EventSlice'
import BottomNavigationBar from '@/Components/BottomNavigationBar'
import ListCard from '@/Components/ListCard'
import SearchBar from '@/Components/searchBar'
import AppBar from '@/Components/AppBar'
import Icon from 'react-native-vector-icons/MaterialIcons'
// Api
import { useGetEventTypeMutation, useGetNotificationMutation } from '@/Api/apiSlice'
import { GetApiHelper } from '@/Api/apiSlice'
import FloatingActionButton from '@/Components/FloatingActionButton'
import Storage from '@/Storage'

const MainContainer = ({ navigation }) => {
  const dispatch = useDispatch()
  const [getEventType, data] = useGetEventTypeMutation()
  const [ checkNotif, dta ] = useGetNotificationMutation()

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

  const checkNotification = async () => {
    const body = GetApiHelper('venue_poll', {
      "participants": await Storage._retrieveUserToken()
    })
    try {
      await checkNotif(body)
    } catch (error) {
      console.error('Failed to Fetch: ', error)
    }
  }

  let a 

  useEffect(() => {
    fetchApi()
    setInterval(async () => {
      checkNotification()
    }, 2000)
  }, [])

  useEffect(() => {
    clearInterval(a)
    if(dta?.data?.length > 0) {
      navigation.navigate('UpcomingEventScreen', {
        data: dta?.data
      })
    }
  }, [dta])


  return (
    <>
      <View style={styles.mainContainer}>
        <AppBar 
          title={'Events'} 
          color={'blue'} 
          showRefresh={true} 
        />
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
                        onPressed={() => {
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
        <FloatingActionButton
          icon={<Icon name="navigate-next" color={'#fff'} size={24} />}
          onPress={() => {
            navigation.navigate('VenueScreen')
          }}
        />
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
