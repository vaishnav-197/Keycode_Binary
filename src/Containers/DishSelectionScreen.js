import React, { useEffect, useState } from 'react'
import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import FloatingActionButton from '@/Components/FloatingActionButton'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View } from 'native-base'
import { Layout } from '@/Theme/Layout'
import { Fonts } from '@/Theme/Fonts'
import { Colors } from '@/Theme/Variables'
import { GetApiHelper, useGetEventTypeMutation } from '@/Api/apiSlice'
import { add, remove } from '../Store/MenuSlice'

const DishSelectionScreen = props => {
  const hotelsSelected = useSelector(state => state.hotel.value)
  const dishesSelected = useSelector(state => state.menu.menu)
  const dispatch = useDispatch()
  const [getEventType, data] = useGetEventTypeMutation()
  const [currentHotelIndex, setCurrentHotelIndex] = useState(0);

  const fetchApi = async () => {
    const body = GetApiHelper('hotel', {
      _id: hotelsSelected?.[currentHotelIndex].id,
    })
    try {
      await getEventType(body)
    } catch (error) {
      console.log('Failed to Fetch: ', error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [currentHotelIndex])

  return (
    <>
      <ScrollView>
        {data.isSuccess &&
          data?.data.map(restaurant => (
            <View key={restaurant._id}>
              <ImageBackground
                source={{ uri: restaurant.rest_image }}
                style={[Layout.fill, styles.header]}
                resizeMode="cover"
              >
                <View style={styles.overlay}>
                  <Text style={[Fonts.titleSmall, styles.headerText]}>
                    {restaurant.rest_name}
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
                        alignItems: 'center',
                      },
                    ]}
                  >
                    <View>
                      <Text style={Fonts.textRegularBold}>{dish.name}</Text>
                      <Text>₹{dish.rate}</Text>
                    </View>
                    <View>
                      <Button
                        title={
                          dishesSelected.find(
                            dishSelected => dish.id == dishSelected.id,
                          )
                            ? 'Remove'
                            : 'Add'
                        }
                        color={
                          dishesSelected.find(
                            dishSelected => dish.id == dishSelected.id,
                          )
                            ? Colors.error
                            : Colors.primary
                        }
                        onPress={() => {
                          const isSelected = dishesSelected.find(
                            dishSelected => dish.id == dishSelected.id,
                          )

                          if (isSelected) {
                            dispatch(remove(dish))
                          } else {
                            dispatch(add(dish))
                          }
                        }}
                      />
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}
      </ScrollView>
      <FloatingActionButton
        icon={<Icon name="navigate-next" color={'#fff'} size={24} />}
        onPress={() => {
          if (currentHotelIndex < hotelsSelected.length-1) {
            console.log(currentHotelIndex)
            setCurrentHotelIndex(currentHotelIndex+1)
          } else {
            props.navigation.navigate('VenueFixResult')
          }
        }}
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
