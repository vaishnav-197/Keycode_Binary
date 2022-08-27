import React from 'react'
import { Text, View } from 'react-native'

const getColor = rating => {
  if (rating <= 1) return 'red'
  if (rating <= 2) return '#dc143c'
  if (rating <= 3) return 'orange'
  if (rating <= 4) return 'lightgreen'
  if (rating <= 5) return 'green'
}

const Rating = ({ rating }) => {
  return (
    <View
      style={{
        backgroundColor: getColor(rating),
        paddingHorizontal: 8,
        paddingVertical: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          color: '#fff',
        }}
      >
        {rating}
      </Text>
    </View>
  )
}

export default Rating
