import React from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

const DetailsCard = ({ iconName, title, details}) => {
  return (
    <View style={styles.detailCard}>
      <View style={{ width: 30 }}>
        <Icon name={iconName} size={20} style={styles.detailsIcon}/>
      </View>
      <View>
        <Text> {title} </Text>
        <Text> {details} </Text>
      </View>
    </View>
  )
}

{
  /*
  TODO
    1. Replace View with image
    2. Set font size and color

  const dummyProps = {
    date: '27-Aug-2022, 8PM-9PM',
    location: 'Near Infopark Road, kochi',
    count: 300,
    cost: '$2000 - $50000',
  }
*/
}

const VenueConfirm = ({ name, date, location, count, cost }) => {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.title}>
          <Text> {name} </Text>
        </View>
        <View style={styles.image} />
        <View style={styles.details}>
          <DetailsCard iconName="clock-o" title="Timing" details={date} />
          <DetailsCard
            iconName="location-arrow"
            title="Location"
            details={location}
          />
          <DetailsCard iconName="rupee" title="Cost" details={cost} />
          <DetailsCard
            iconName="users"
            title="People"
            details={`Total count - ${count}`}
          />
        </View>
      </View>
    </ScrollView>
  )
}

VenueConfirm.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  count: PropTypes.number,
  cost: PropTypes.string,
}

VenueConfirm.defaultProps = {
  name: '',
  date: '',
  location: '',
  cost: '',
  count: 0,
}

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 8,
    marginLeft: 8,
  },
  title: {
    marginBottom: 16,
  },
  image: {
    width: 350,
    height: 150,
    backgroundColor: 'lightblue',
    borderRadius: 12,
    alignItem: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  details: {
    marginTop: 24,
  },
  detailCard: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 12,
  },
  detailsIcon: {
    marginRight: 8,
  },
})

export default VenueConfirm
