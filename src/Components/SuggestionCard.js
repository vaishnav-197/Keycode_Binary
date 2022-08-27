import { useTheme } from '@/Hooks';
import { Colors } from '@/Theme/Variables';
import { CircleIcon } from 'native-base';
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const SuggestionCard = ({name, hotelName, itemsList}) => {
  const { Layout, Fonts } = useTheme()

  return (
    <View style={styles.suggestionContainer}>
      <View style={[styles.suggestionHeader]}>
          <View style={Layout.row}>
            <Text style={[Fonts.caption, Fonts.whiteText]}>{name}</Text>
            <Text style={[Fonts.caption, Fonts.whiteText, { marginLeft: 2 }]}>suggests</Text>
          </View>
        <Text style={[Fonts.titleSmall, styles.hotelName, Fonts.whiteText]}>{hotelName}</Text>
      </View>
      <View style={styles.suggestionBody}>
        <Text style={[Fonts.caption, { marginBottom: 5 }]}>Items: </Text>
        {itemsList.map((item) => (
          <View style={[Layout.row, { alignItems: 'center', marginLeft: 16, marginBottom: 4 }]}>
            <CircleIcon size={'1'} style={{ marginRight: 5 }} />
            <Text> 
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

SuggestionCard.propTypes = {
  name: PropTypes.string,
  hotelName: PropTypes.string,
  itemsList: PropTypes.array
}

SuggestionCard.defaultProps = {
  name: '',
  hotelName: '',
  itemsList: []
}

const styles = StyleSheet.create({
  suggestionContainer: {
    margin: 14,
    borderRadius: 20,
    borderColor: 'red'
  },
  suggestionHeader: {
    backgroundColor: '#c04000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16
  },
  hotelName: {
    fontSize: 14
  },
  suggestionBody: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 16
  },
});

export default SuggestionCard