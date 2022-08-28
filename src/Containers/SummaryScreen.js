import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Touchable, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'
import { Button } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

  const dummySummary = [
    { id: 1, title: 'Venue', cost: 4000},
    { id: 2, title: 'Food', cost: 5000},
    { id: 3, title: 'Add-on', cost: 2000}
  ];

const SummaryScreen = ({ navigation, selectedItems = [] }) => {

  // change data here
  const [summary, setSummary] = useState([]);
  const [total, setTotal] = useState(0);

  const onPress = () => {
    navigation.navigate('PaymentScreen')
  }

    useEffect(()=>{
      setSummary(dummySummary);
    },[]);

    useEffect(()=>{
      const totalCost = summary
      .map(item => item.cost)
      .reduce((a, b) => a + b, 0)
      setTotal(totalCost)
    },[summary])

    const onPressEdit = (id) =>{
      // console.log(id);
    }

  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        <Text style={styles.heading}>Summary</Text>
      </View>
      <View style={styles.itemContainer}>
        {summary.map(item => (
          <View key={item.title} style={styles.item}>
            <Text style={styles.titleText}> {item.title} </Text>
            <Text style={styles.titleText}> ₹{item.cost} </Text>
            {/* <TouchableOpacity onPress={()=>onPressEdit(item.id)}>
            <Icon
              name="edit"
              color={'black'}
              size={20}
              style={styles.marginRight}
            />
            </TouchableOpacity> */}
          </View>
        ))}
        <View style={[styles.item, styles.total]}>
          <Text> Total </Text>
          <Text> ₹{total}</Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
      <Button onPress={onPress} style={styles.submit}>Payment</Button>
      </View>
    </View>
  )
}

SummaryScreen.propTypes = { selectedItems: PropTypes.array }
SummaryScreen.defaultProps = { selectedItems: [] }

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading:{
    fontSize: 30,
    color: 'rgba(0,0,0,0.9)'
    },
  titleText:{
    color: 'rgba(0,0,0,0.9)'
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
    backgroundColor: 'rgba(149,87,155,0.1)',
    borderColor: 'rgba(149,87,155,0.9)',
    borderWidth: 0.2,
    marginTop: 4,
    marginBottom: 4,
    padding: 8,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  submit: {
    width: 200,
    backgroundColor: 'rgba(149,87,155,1)',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    marginTop: 32,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default SummaryScreen
