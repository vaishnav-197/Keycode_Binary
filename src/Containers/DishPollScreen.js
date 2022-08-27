import AppBar from '@/Components/AppBar'
import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, TextInput } from 'react-native'
import { Checkbox } from 'native-base'
import { Layout } from '@/Theme/Layout'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FloatingActionButton from '@/Components/FloatingActionButton'
import { Fonts } from '@/Theme/Fonts'
import { Colors } from '@/Theme/Variables'

const DishPollScreen = () => {
  const [restaurantDishes, setRestaurantDishes] = useState([
    {
      restaurantId: 1,
      restaurantName: 'test1',
      dishes: [
        {
          id: 1,
          name: 'dish name 1',
        },
        {
          id: 2,
          name: 'dish name 2',
        },
      ],
    },
    {
      restaurantId: 2,
      restaurantName: 'test2',
      dishes: [
        {
          id: 3,
          name: 'dish name 3',
        },
      ],
    },
  ])
  const [selectedDishes, setSelectedDishes] = useState([])

  const handleSelect = dish => {
    const isPresent = selectedDishes.find(
      selectedDish => selectedDish.id == dish.id,
    )

    if (isPresent) {
      setSelectedDishes(selectedDishes => {
        const updatedSelectedDishes = selectedDishes.filter(
          selectedDish => selectedDish.id != dish.id,
        )
        return updatedSelectedDishes
      })
    } else {
      setSelectedDishes(selectedDishes => [
        ...selectedDishes,
        Object.assign(dish, { quantity: 0 }),
      ])
    }
  }

  return (
    <>
      <AppBar title="Choose Dish" />
      <ScrollView style={styles.scrollViewContainer}>
        {restaurantDishes.map(restaurantDish => (
          <View key={restaurantDish.restaurantId}>
            <Text
              style={[
                Fonts.titleSmallBold,
                { marginTop: 20, marginBottom: 10 },
              ]}
            >
              {restaurantDish.restaurantName}
            </Text>
            {restaurantDish.dishes.map(dish => {
              const isSelected = selectedDishes.find(
                selectedDish => selectedDish.id == dish.id,
              )

              return (
                <View
                  key={dish.id}
                  style={[
                    Layout.row,
                    { marginBottom: 8, alignItems: 'center', height: 60 },
                  ]}
                >
                  <View style={[Layout.row, { flex: 1 }]}>
                    <Checkbox
                      isChecked={isSelected ?? false}
                      style={styles.marginRight}
                      accessibilityLabel="Select dish"
                      onChange={() => handleSelect(dish)}
                    />
                    <Text style={Fonts.textRegular}>{dish.name}</Text>
                  </View>
                  {isSelected && (
                    <View style={[styles.quantityContainer, Layout.row]}>
                      <Text style={Fonts.textRegular}>quantity: </Text>
                      <TextInput style={styles.textInput} maxLength={3} />
                    </View>
                  )}
                </View>
              )
            })}
          </View>
        ))}
      </ScrollView>
      <FloatingActionButton
        icon={<Icon name="navigate-next" color={'#fff'} size={24} />}
      />
    </>
  )
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    padding: 16,
  },
  marginRight: {
    marginRight: 8,
  },
  quantityContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 120,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.eventsPrimary,
  },
})

export default DishPollScreen
