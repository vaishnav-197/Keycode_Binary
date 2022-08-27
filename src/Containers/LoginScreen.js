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
  const [otp, setOtp] = useState('');

  const onPressLogin = () =>{

  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.loginCaption}>LOGIN</Text>
      <View style={styles.mobileWrapper}>
      <Text style={styles.phone}>Phone</Text>
      </View>
      {/* <Text style={styles.caption}>Phone:</Text>
      <View style={styles.textView}>
        <TextInput
          style={styles.mobile}
          onChangeText={setMobileNumber}
          value={mobileNumber}
          placeholder=""
        />
      </View>
      <Text style={styles.caption}>OTP:</Text>
      <View style={styles.textView}>
        <TextInput
          style={styles.mobile}
          onChangeText={setOtp}
          value={otp}
          placeholder=""
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={onPressLogin}>
          <Text style={styles.submitButton}>Login</Text>
        </TouchableOpacity>
      </View> */}
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  loginCaption: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: 20,
  },
  container: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 40,
    paddingTop: 60,
  },
  mobileWrapper:{
    marginTop: 20
  },
  phone:{
    color: 'rgba(0,0,0,0.8)',
    fontSize: 15,
  }
})

export default LoginScreen;