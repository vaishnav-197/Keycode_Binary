import React from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import BottomNavigationBar from '@/Components/BottomNavigationBar'
import ListCard from '@/Components/ListCard'
import SearchBar from '@/Components/searchBar'
import AppBar from '@/Components/AppBar'

const MainContainer = ({ navigation }) => {
  const handleDiningSelect = () => {}

  const handleEventsSelect = () => {}

  return (
    <>
      <View style={styles.mainContainer}>
        <AppBar title={'Events'} />
        <View style={styles.searchBarWrapper}>
          <SearchBar />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.cardWrapper}>
            <ListCard title="Tech Event" />
          </View>
          <View style={styles.cardWrapper}>
            <ListCard title="Tech Event" />
          </View>
          <View style={styles.cardWrapper}>
            <ListCard title="Tech Event" />
          </View>
        </ScrollView>
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
    flex: 1,
  },
  searchBarWrapper: {
    marginTop: 15,
    marginHorizontal: 12,
    marginBottom: 10,
  },
  cardWrapper: {
    marginHorizontal: 12,
    marginVertical: 3,
  },
})

export default MainContainer
