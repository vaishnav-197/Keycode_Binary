import AppBar from '@/Components/AppBar'
import EventCard from '@/Components/EventCard'
import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const EventScreen = () => {
  const events = [
    {
      name: 'User1\'s Birthday',
      startTime: '2021-10-01 10:00AM',
      id: 1
    },
    {
      name: 'Team Dinner',
      startTime: '2021-10-01 10:00AM',
      id: 2
    }
  ]

  return (
    <>
      <AppBar title={'Upcoming Events'} />
      <ScrollView style={styles.scrollViewContainer}>
        {events.map(event => {
          return (
            <EventCard
              event={event}
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

export default EventScreen
 