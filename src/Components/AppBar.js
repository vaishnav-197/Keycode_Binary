import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AppBar = ({ title }) => {
  return (
    <View style={styles.appBarContainer}>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  appBarContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    top: 0,
    left: 0,
    paddingLeft: 16,
    justifyContent: 'center',
  },
})

export default AppBar
