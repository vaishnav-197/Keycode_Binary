import AppBar from '@/Components/AppBar'
import EventCard from '@/Components/EventCard'
import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const UpcomingEventScreen = () => {
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
              key={event.id}
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
 