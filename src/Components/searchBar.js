import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from '@/Theme/Variables'

const SearchBar = ({
  imageSource,
  title,
  caption,
  sideText,
  sideComponent,
  isSelected,
  onPressed,
  onLongPressed,
}) => {
  const { Fonts } = useTheme()

  return (
    <View style={styles.searchBarWrapper}>
        <View>

        </View>
      <TextInput style={styles.searchBar} />
    </View>
  )
}

SearchBar.propTypes = {}

SearchBar.defaultProps = {}

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
