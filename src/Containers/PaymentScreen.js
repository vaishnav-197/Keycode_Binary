import Storage from '@/Storage'
import { CheckIcon } from 'native-base'
import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const PaymentScreen = () => {
  useEffect(() => {
    clearStorage()
  }, [])

  const clearStorage = async () => {
    await Storage._clearStorage()
  }
  return (
    <View style={styles.wrapper}>
      <Icon name="done" size={70} color={'green'} />
      <Text>Success</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default PaymentScreen
