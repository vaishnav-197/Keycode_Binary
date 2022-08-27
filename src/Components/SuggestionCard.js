import { useTheme } from '@/Hooks';
import React, { useEffect } from 'react'
import { Checkbox } from 'native-base';
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const SuggestionCard = ({
  name, 
  hotelName, 
  hotelId,
  itemsList,
  selectedList,
  onSelectItem
}) => {
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
          <View 
            key={item.id} 
            style={[Layout.row, { alignItems: 'center', marginLeft: 16, marginBottom: 8 }]}
          >
            <Checkbox
              isChecked={selectedList.includes(item.id)}
              style={styles.marginRight}
              accessibilityLabel="Select dish"
              onChange={() => onSelectItem(item.id, hotelId)}
            />
            <Text> 
              {item.name}
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
  itemsList: PropTypes.array,
  selectedList: PropTypes.array
}

SuggestionCard.defaultProps = {
  name: '',
  hotelName: '',
  itemsList: [],
  selectedList: []
}

const styles = StyleSheet.create({
  suggestionContainer: {
    margin: 14,
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
  marginRight: {
    marginRight: 8
  }
});

export default SuggestionCard