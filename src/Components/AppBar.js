import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Fonts } from '@/Theme/Fonts'
import PropTypes from 'prop-types'
import { Layout } from '@/Theme/Layout'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AppBar = ({ title, actions, color, onPress, showRefresh=false }) => {
  return (
    <View style={[styles.appBarContainer, Layout.row, color === 'blue' ? {backgroundColor: 'white'}:{backgroundColor: 'white'}]}>
      {/* <Text style={[Fonts.titleSmallBold, styles.appBarTitle, {color: 'white'}]}>{title}</Text> */}
      {/* <View>{actions.map(action => action)}</View> */}
      <Image
        style={styles.tinyLogo}
        source={require('@/Assets/Images/due.png')}
      />
      {showRefresh ? <TouchableOpacity onPress={onPress}>
        <Icon
          name="refresh"
          color={'rgba(0,0,0,0.7)'}
          size={25}
          style={styles.marginRight}
        />
        </TouchableOpacity>: 
        <></>}
    </View>
  )
}

AppBar.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.array,
}

AppBar.defaultProps = {
  actions: [],
}

const styles = StyleSheet.create({
  appBarContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    top: 0,
    left: 0,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBarContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    top: 0,
    left: 0,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tinyLogo:{

  }
})

export default AppBar
