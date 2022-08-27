import React from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import EntrypoIcon from 'react-native-vector-icons/Entypo'

const RatingIcon = ({ rating }) => {
  switch (rating) {
    case 1:
      return <FontAwesomeIcon name="sad-cry" color={'red'} size={24} />
    case 2:
      return <Ionicon name="sad" color={'#dc143c'} size={24} />
    case 3:
      return <MaterialIcon name="face" color={'orange'} size={24} />
    case 4:
      return <EntrypoIcon name="emoji-happy" color={'lightgreen'} size={24} />
    case 5:
      return <Ionicon name="happy-outline" color={'green'} size={24} />
  }
}

export default RatingIcon
