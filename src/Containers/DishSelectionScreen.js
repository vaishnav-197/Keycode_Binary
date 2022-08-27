import React, { useState } from 'react'
import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native'
import FloatingActionButton from '@/Components/FloatingActionButton'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View } from 'native-base'
import { Layout } from '@/Theme/Layout'
import { Fonts } from '@/Theme/Fonts'
import { Colors } from '@/Theme/Variables'


const DishSelectionScreen = () => {
  const [restaurant, setRestaurant] = useState({
    restaurantName: 'rest 1',
    restaurantId: 1,
    restaurantImage:
      'https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/the-rice-boat.jpg',
    restaurantRating: 4,
    location: 'Kochi',
    rating: 1,
    dishes: [
      {
        id: 3,
        name: 'dish name 3',
        rate: 10.0,
      },
      {
        id: 4,
        name: 'dish name 4',
        rate: 20.0,
      },
    ],
  })
  const [selectedDishes, setSelectedDishes] = useState([])

  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            source={{ uri: restaurant.restaurantImage }}
            style={[Layout.fill, styles.header]}
            resizeMode="cover"
          >
            <View style={styles.overlay}>
              <Text style={[Fonts.titleSmall, styles.headerText]}>
                {restaurant.restaurantName}
              </Text>
            </View>
          </ImageBackground>
          <View style={styles.mainContainer}>
            <Text style={[Fonts.titleSmallBold]}>Dishes</Text>
            {restaurant.dishes.map(dish => (
              <View
                key={dish.id}
                style={[
                  Layout.row,
                  {
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    paddingVertical: 18,
                    borderBottomColor: '#bbb',
                    alignItems: 'center'
                  },
                ]}
              >
                <View>
                  <Text style={Fonts.textRegularBold}>{dish.name}</Text>
                  <Text>₹{dish.rate}</Text>
                </View>
                <View>
                  <Button 
                    title={selectedDishes.includes(dish.id)? "Remove": "Add" } 
                    color={selectedDishes.includes(dish.id)? Colors.error: Colors.primary} 
                    onPress={() => {
                      if(selectedDishes.includes(dish.id)) {
                        setSelectedDishes(selectedDishes => {
                          return selectedDishes.filter(selectedDish => selectedDish != dish.id)
                        })
                      } else {
                        setSelectedDishes([
                          ...selectedDishes,
                          dish.id
                        ])
                      }
                    }}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <FloatingActionButton
        icon={<Icon name="navigate-next" color={'#fff'} size={24} />}
      />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 200,
    flex: 1,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: 200,
  },
  headerText: {
    color: '#fff',
    position: 'absolute',
    left: 16,
    bottom: 8,
  },
  mainContainer: {
    padding: 16,
  },
})

export default DishSelectionScreen
