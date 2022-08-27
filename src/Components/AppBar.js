import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Fonts } from '@/Theme/Fonts'
import PropTypes from 'prop-types'
import { Layout } from '@/Theme/Layout'

const AppBar = ({ title, actions }) => {
  return (
    <View style={[styles.appBarContainer, Layout.row]}>
      <Text style={[Fonts.titleSmallBold, styles.appBarTitle]}>{title}</Text>
      <View>
        {actions.map(action => action)}
      </View>
    </View>
  )
}

AppBar.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.array
}

AppBar.defaultProps = {
  actions: []
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
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})

export default AppBar
