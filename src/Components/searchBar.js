import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from '@/Theme/Variables'
import { Icon } from 'react-native-vector-icons/Feather'

const SearchBar = () => {
  const { Fonts } = useTheme()

  return (
    <View style={styles.searchBarWrapper}>
      <View>
        <Icon name="search" />
      </View>
      <TextInput style={styles.searchBar} />
    </View>
  )
}

// SearchBar.propTypes = {}

// SearchBar.defaultProps = {}

const styles = StyleSheet.create({
  searchBarWrapper: {
    paddingHorizontal: 12,
  },
  searchBar: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 40,
  },
})

export default SearchBar
