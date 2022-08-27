import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import ListCard from '@/Components/ListCard'
import SuggestionCard from '@/Components/SuggestionCard'

const ExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Images } = useTheme()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')
  const [isSelected, setIsSelected] = useState(false);
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchOneQuery()

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  return (
    <View>
      <ListCard 
        title="test" 
        caption='test' 
        imageSource={Images.logo} 
        sideText='side text'
        sideComponent={<Text>Ok</Text>}
        isSelected={isSelected}
        onLongPressed={() => {
          setIsSelected(true);
        }}
        onPressed={() => {
          if(isSelected) {
            setIsSelected(false);
          } else {
            // go to pressed item
          }
        }}
      />

      <SuggestionCard name='user1' hotelName='Test hotel' itemsList={['Biriyani', 'Porotta']} />
    </View>
  )
}

export default ExampleContainer
