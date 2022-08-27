import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import ListCard from '@/Components/ListCard'
import SuggestionCard from '@/Components/SuggestionCard'
import BottomNavigationBar from '../Components/BottomNavigationBar'
import AppBar from '../Components/AppBar'
import SearchBar from '../Components/SearchBar'

const VenueScreen = () => {
  return (
    <View>
      <AppBar title={'Venue'}/>
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({
  topBanner:{},
})

export default VenueScreen;
