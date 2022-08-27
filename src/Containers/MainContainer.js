import React from 'react'
import { View, StyleSheet } from 'react-native'
import BottomNavigationBar from '@/Components/BottomNavigationBar'

const MainContainer = () => {
  const handleDiningSelect = () => {}

  const handleEventsSelect = () => {}

  return (
    <>
      <View style={styles.mainContainer} />
      <BottomNavigationBar
        onSelectDining={handleDiningSelect}
        onSelectEvents={handleEventsSelect}
      />
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
})

export default MainContainer
