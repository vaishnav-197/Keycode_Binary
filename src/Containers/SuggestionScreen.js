import AppBar from '@/Components/AppBar'
import SuggestionCard from '@/Components/SuggestionCard'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const SuggestionScreen = () => {
  const [selectedDishes, setSelectedDishes] = useState({})

  const handleSelect = (dishId, hotelId) => {
    setSelectedDishes(selectedDishes => {
      const updatedSelectedDishes = { ...selectedDishes }

      if (selectedDishes[hotelId] && selectedDishes[hotelId].includes(dishId)) {
        updatedSelectedDishes[hotelId] = updatedSelectedDishes[hotelId].filter(
          id => id != dishId,
        )
      } else {
        if (updatedSelectedDishes[hotelId]) {
          updatedSelectedDishes[hotelId].push(dishId)
        } else {
          updatedSelectedDishes[hotelId] = [dishId]
        }
      }
      return updatedSelectedDishes
    })
  }

  const userSuggestions = [
    {
      name: 'test',
      hotelName: 'test',
      hotelId: 1,
      dishes: [
        {
          id: 1,
          name: 'test dish 1',
        },
        {
          id: 2,
          name: 'test dish 2',
        },
      ],
    },

    {
      name: 'test2',
      hotelName: 'test3',
      hotelId: 2,
      dishes: [
        {
          id: 3,
          name: 'test dish 3',
        },
        {
          id: 4,
          name: 'test dish 4',
        },
      ],
    },

    {
      name: 'test3',
      hotelName: 'test3',
      hotelId: 2,
      dishes: [
        {
          id: 3,
          name: 'test dish 3',
        },
        {
          id: 4,
          name: 'test dish 4',
        },
      ],
    },

    {
      name: 'test4',
      hotelName: 'test3',
      hotelId: 2,
      dishes: [
        {
          id: 3,
          name: 'test dish 3',
        },
        {
          id: 4,
          name: 'test dish 4',
        },
      ],
    },
  ]

  return (
    <>
      <AppBar title={'Dish Suggestions'} />
      <ScrollView style={styles.scrollViewContainer}>
        {userSuggestions.map(userSuggestion => {
          console.log("Test: " + userSuggestion.hotelId + JSON.stringify(selectedDishes))
          return (<SuggestionCard
            name={userSuggestion.name}
            hotelName={userSuggestion.hotelName}
            itemsList={userSuggestion.dishes}
            selectedList={selectedDishes[userSuggestion.hotelId] ?? []}
            onSelectItem={handleSelect}
            hotelId={userSuggestion.hotelId}
            key={userSuggestion.name}
          />)
        })}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollViewContainer: {
  },
})

export default SuggestionScreen
 