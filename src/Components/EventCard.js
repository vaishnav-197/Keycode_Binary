import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const EventCard = ({ event }) => {
  return (
    <View style={styles.eventCardContainer}>
      <Text style={styles.textBold}>{event.name} </Text>
      <Text>will start on </Text>
      <Text style={styles.textBold}>{event.startTime}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  eventCardContainer: {
    backgroundColor: '#fff',
    padding: 12,
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  textBold: {
    fontWeight: 'bold'
  }
})

export default EventCard

