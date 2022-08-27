import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Button } from 'native-base'

{
  /*
  const dummySummary = [
    { title: 'Venue', cost: 4000},
    { title: 'Food', cost: 5000},
    { title: 'Add-on', cost: 2000}
  ];
*/
}

const Summary = ({ selectedItems = [] }) => {
  const totalCost = selectedItems
    .map(item => item.cost)
    .reduce((a, b) => a + b, 0)

  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        {/* TODO: adjust font,size,color */}
        <Text>Summary</Text>
      </View>
      <View style={styles.itemContainer}>
        {selectedItems.map(item => (
          <View key={item.title} style={styles.item}>
            <Text> {item.title} </Text>
            <Text> ₹{item.cost} </Text>
          </View>
        ))}
        <View style={[styles.item, styles.total]}>
          <Text> Total </Text>
          <Text> ₹{totalCost}</Text>
        </View>
      </View>
      <Button style={styles.submit}> Submit </Button>
    </View>
  )
}

Summary.propTypes = { selectedItems: PropTypes.array }
Summary.defaultProps = { selectedItems: [] }

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#4D80E4',
  },
  title: {
    alignItems: 'center',
    marginTop: 150,
    marginBottom: 16,
  },
  itemContainer: {
    backgroundColor: 'white',
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 8,
    padding: 16,
  },
  item: {
    backgroundColor: '#ACE5FF',
    marginTop: 4,
    marginBottom: 4,
    padding: 8,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    backgroundColor: 'white',
  },
  submit: {
    marginRight: 16,
    marginLeft: 16,
    marginTop: 32,
  },
})

export default Summary
