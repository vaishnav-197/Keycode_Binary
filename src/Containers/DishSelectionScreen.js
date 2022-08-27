import React, { useEffect, useState } from 'react'
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
import { GetApiHelper, useGetEventTypeMutation } from '@/Api/apiSlice'

const DishSelectionScreen = (props) => {
  const restaurants = props?.route?.params?.id
  const selectedItems = props?.route?.params?.items

  const [getEventType, data] = useGetEventTypeMutation()
  const [selectedDishes, setSelectedDishes] = useState([])

  const fetchApi = async () => {
    const body = GetApiHelper('hotel', {
      _id: restaurants?.[0],
    })
    try {
      await getEventType(body)
    } catch (error) {
      console.log('Failed to Fetch: ', error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

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
                          selectedDishes.includes(dish.id) ? 'Remove' : 'Add'
                        }
                        color={
                          selectedDishes.includes(dish.id)
                            ? Colors.error
                            : Colors.primary
                        }
                        onPress={() => {
                          if (selectedDishes.includes(dish.id)) {
                            setSelectedDishes(selectedDishes => {
                              return selectedDishes.filter(
                                selectedDish => selectedDish != dish.id,
                              )
                            })
                          } else {
                            setSelectedDishes([...selectedDishes, dish.id])
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
