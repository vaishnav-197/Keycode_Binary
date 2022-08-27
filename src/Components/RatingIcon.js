import React from 'react'
import { Text } from 'react-native'

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
    <Text>{ rating }</Text>
  )
}

export default RatingIcon
