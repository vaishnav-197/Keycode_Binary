import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import AppBar from '../Components/AppBar'

const LoginScreen = () => {

  const [mobileNumber, setMobileNumber] = useState(false);

  const onPressLogin = () =>{

  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.caption}>Enter Your Mobile No:</Text>
      <View style={styles.textView}>
        <TextInput
          style={styles.mobile}
          onChangeText={setMobileNumber}
          value={mobileNumber}
          placeholder=""
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={onPressLogin}>
          <Text style={styles.submitButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  caption:{
    fontWeight: '400',
    fontSize: 20
  },
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mobile: {
    width: '100%',
  },
  buttonWrapper: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView:{
    width: 200,
    height: 50,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  button: {
    height: 50,
    width: 200,
    borderRadius: 20,
    backgroundColor: '#2E279D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    color: 'white',
    fontSize: 30,
    fontWeight: '100',
  },
})

export default LoginScreen;