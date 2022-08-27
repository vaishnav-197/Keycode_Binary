import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Colors } from '@/Theme/Variables'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Layout } from '@/Theme/Layout'
import { Fonts } from '@/Theme/Fonts'

const BottomNavigationBar = ({ onSelectDining, onSelectEvents }) => {
  const [selected, setSelected] = useState(0)

  const handleDiningSelect = () => {
    setSelected(0)
    if (onSelectDining) {
      onSelectDining()
    }
  }

  const handleEventsSelect = () => {
    setSelected(1)
    if (onSelectEvents) {
      onSelectEvents()
    }
  }

  return (
    <View style={[styles.bottomNavigationBarContainer, Layout.row]}>
      <Pressable style={[styles.navigationItem, Layout.row]} onPress={handleDiningSelect}>
        <Icon
          name="lunch-dining"
          color={selected == 0 ? Colors.diningPrimary : '#000'}
          size={20}
          style={styles.marginRight}
        />
        <Text style={[Fonts.titleSmallBold, selected == 0 && styles.diningSelected]}>Dining</Text>
      </Pressable>
      <Pressable style={[styles.navigationItem, Layout.row]} onPress={handleEventsSelect}>
        <Icon
          name="event-seat"
          color={selected == 1 ? Colors.eventsPrimary : '#000'}
          size={20}
          style={styles.marginRight}
        />
        <Text style={[Fonts.titleSmallBold, selected == 1 && styles.eventsSelected]}>Events</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomNavigationBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },
  navigationItem: {
    borderRightWidth: 1,
    borderRightColor: '#eee',
    height: '100%',
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  diningSelected: {
    color: Colors.diningPrimary,
  },
  eventsSelected: {
    color: Colors.eventsPrimary,
  },
  marginRight: {
    marginRight: 5,
  },
})

export default BottomNavigationBar
