import AppBar from '@/Components/AppBar'
import EventCard from '@/Components/EventCard'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const UpcomingEventScreen = (props) => {
  return (
    <>
      <AppBar title={'Upcoming Events'} />
      <ScrollView style={styles.scrollViewContainer}>
        {props?.query?.data.map(event => {
          return (
            <EventCard
              event={event}
              key={event._id}
            />
          )
        })}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    marginBottom: 50,
  },
})

export default UpcomingEventScreen
 