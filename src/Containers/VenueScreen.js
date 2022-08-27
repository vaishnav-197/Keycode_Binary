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
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import ListCard from '@/Components/ListCard'
import SuggestionCard from '@/Components/SuggestionCard'
import BottomNavigationBar from '../Components/BottomNavigationBar'
import AppBar from '../Components/AppBar'
import SearchBar from '../Components/searchBar'

const VenueScreen = () => {
  return (
    <View>
      <AppBar title={'Venue'}/>
      <View style={styles.header}>
        <View style={styles.searchWrapper}>
        <SearchBar />
        </View>
        <View style={styles.iconWrapepr}>
        <Icon 
          name="filter-list" 
          color={'black'} 
          size={20} 
        />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topBanner:{},
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconWrapepr: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchWrapper: {
    flex: 1
  }
})

export default VenueScreen;
