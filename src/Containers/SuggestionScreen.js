import AppBar from '@/Components/AppBar'
import FloatingActionButton from '@/Components/FloatingActionButton'
import SuggestionCard from '@/Components/SuggestionCard'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'

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
      <AppBar
        title={'Dish Suggestions'}
        actions={[<Icon name="refresh" key={'test'} color="#000" size={22} />]}
      />
      <ScrollView style={styles.scrollViewContainer}>
        {userSuggestions.map(userSuggestion => (
          <SuggestionCard
            name={userSuggestion.name}
            hotelName={userSuggestion.hotelName}
            itemsList={userSuggestion.dishes}
            selectedList={selectedDishes[userSuggestion.hotelId] ?? []}
            onSelectItem={handleSelect}
            hotelId={userSuggestion.hotelId}
            key={userSuggestion.name}
          />
        ))}
      </ScrollView>
      <FloatingActionButton icon={<Icon name="navigate-next"
          color={'#fff'}
          size={24}
          style={styles.marginRight} 
          />} 
      />
    </>
  )
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    zIndex: 5,
  },
})

export default SuggestionScreen
