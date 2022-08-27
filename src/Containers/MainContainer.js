import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import BottomNavigationBar from '@/Components/BottomNavigationBar'
import SuggestionScreen from './SuggestionScreen'

const MainContainer = () => {
  const handleDiningSelect = () => {

  }

  const handleEventsSelect = () => {

  }

  return (
    <>
      <View style={styles.mainContainer}>
        <SuggestionScreen />
      </View>
      <BottomNavigationBar 
        onSelectDining={handleDiningSelect}
        onSelectEvents={handleEventsSelect}
      />
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})

export default MainContainer
