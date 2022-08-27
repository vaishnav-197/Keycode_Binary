import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from '@/Theme/Variables'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Row } from 'native-base'

const SearchBar = () => {
  const { Fonts } = useTheme()

  return (
    <View style={styles.searchBarWrapper}>
      <View>
        <Icon name="search" size={30} style={styles.searchIcon} />
      </View>
      <TextInput style={styles.searchBar} />
    </View>
  )
}

// SearchBar.propTypes = {}

// SearchBar.defaultProps = {}

const styles = StyleSheet.create({
  searchBarWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchIcon: {
    padding: 10,
  },
})

export default SearchBar
