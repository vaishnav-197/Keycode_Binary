import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import AppBar from '@/Components/AppBar'
import ListCard from '@/Components/ListCard'
import Icon from 'react-native-vector-icons/MaterialIcons'
import RatingIcon from '@/Components/RatingIcon'
import FloatingActionButton from '@/Components/FloatingActionButton'


const RestaurantSelection = () => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([
    {
      restaurantName: 'rest 1',
      restaurantId: 1,
      restaurantImage: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/the-rice-boat.jpg',
      restaurantRating: 4,
      location: 'Kochi',
      rating: 1
    },
    {
      restaurantName: 'rest 1',
      restaurantId: 2,
      restaurantImage: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/i/i/p59229-15639532785d38087e0ab48.jpg?tr=tr:n-xlarge',
      restaurantRating: 4,
      location: 'Kochi',
      rating: 2
    },
    {
      restaurantName: 'rest 1',
      restaurantId: 3,
      restaurantImage: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/sky-gril-400x281.jpg',
      restaurantRating: 4,
      location: 'Kochi',
      rating: 3
    },
    {
      restaurantName: 'rest 1',
      restaurantId: 4,
      restaurantImage: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/fort-house-restaurant-400x266.jpg',
      restaurantRating: 4,
      location: 'Kochi',
      rating: 4
    },
    {
      restaurantName: 'rest 1',
      restaurantId: 5,
      restaurantImage: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/asia-kitchen-400x199.jpg',
      restaurantRating: 4,
      location: 'Kochi',
      rating: 5
    }
  ])
  return (
    <>
      <AppBar title={'Select Restaurant'} />
      <ScrollView>
        <View style={styles.mainContainer}>
          {restaurants.map(restaurant => (
            <ListCard 
              title={restaurant.restaurantName}
              caption={restaurant.location}
              key={restaurant.restaurantId}
              imageSource={restaurant.restaurantImage}
              style={[styles.marginBottom]}
              sideComponent={
                <RatingIcon rating={restaurant.rating} />
              }
              onLongPressed={() => {
                setSelectedRestaurants([...selectedRestaurants, restaurant.restaurantId])
              }}
              onPressed={() => {
                setSelectedRestaurants(
                  (selectedRestaurants) => {
                    return selectedRestaurants.filter(
                      selectedRestaurant => selectedRestaurant != restaurant.restaurantId
                    )
                  }
                )
              }}
              isSelected={selectedRestaurants.includes(restaurant.restaurantId)}
            />
          ))}
        </View>
      </ScrollView>
      <FloatingActionButton
        icon={<Icon name="navigate-next" color={'#fff'} size={24} />}
      />
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 12,
    marginBottom: 50
  },
  marginBottom: {
    marginBottom: 12
  }
})

export default RestaurantSelection