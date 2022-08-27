import React from 'react'
import { Text, View } from 'react-native'

const getColor = (rating) => {
  switch(rating) {
    case 1:
      return 'red'
    case 2:
      return '#dc143c'
    case 3:
      return 'orange'
    case 4:
      return 'lightgreen'
    case 5:
      return 'green'
  }
}

const RatingIcon = ({ rating }) => {
  return (
    <View style={{
      backgroundColor: getColor(rating),
      paddingHorizontal: 8,
      paddingVertical: 4,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
    }}>
      <Text style={{
        color: '#fff'
      }}>{ rating }.0</Text>
    </View>
  )
}

export default RatingIcon
