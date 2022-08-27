import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import AppBar from '../Components/AppBar'

const LoginScreen = () => {

  const [mobileNumber, setMobileNumber] = useState(false);
  const [otp, setOtp] = useState('');
  const [isMobCompleted, setMobCompleted] = useState(false);



  const onPressLogin = () =>{
    //navigate here
  }

  const setMobOnPress = () =>{
    setMobCompleted(true)
  }

  return (
    <>
    <View style={styles.container}>
      <View style={styles.containerWrapper}>
      <View style={styles.logoWrapper}>
      <Image
        style={styles.tinyLogo}
        source={require('@/Assets/Images/due.png')}
      />
      </View>
      {!isMobCompleted ? <>
      <View style={styles.mobileWrapper}>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.input} value={mobileNumber} placeholder={'Phone'} onChangeText={setMobileNumber}/>
        <Icon
          name="phone-enabled"
          color={'#000'}
          size={20}
          style={styles.marginRight}
        />
      </View>
      </View>
      <View style={styles.mobileWrapper}>
      <View style={styles.button}>
        <TouchableOpacity onPress={setMobOnPress}>
        <Text style={styles.buttonText}>
          Next
        </Text>
        </TouchableOpacity>
      </View>
      </View>
      </>: <>
      <View style={styles.mobileWrapper}>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.input} placeholder={'OTP'}  value={otp}  onChangeText={setOtp}/>
        <Icon
          name="message"
          color={'#000'}
          size={20}
          style={styles.marginRight}
        />
      </View>
      </View>
      <View style={styles.mobileWrapper}>
      <View style={styles.button}>
      <TouchableOpacity onPress={onPressLogin}>
        <Text style={styles.buttonText}>
          Login
        </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tryAgain}>
      <TouchableOpacity><Text>Didn't recieve OTP?</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.sendAgain}>Send again</Text></TouchableOpacity>
      </View>
      </View>
      </>}
    </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  loginCaption: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: 20,
  },
  sendAgain: {
    color: 'rgb(91,120,213)',
  },
  containerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrapper:{
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 50,
    width: 300,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: 'rgb(91,120,213)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tryAgain: {
    marginTop: 10,
    height: 50,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 40,
    paddingTop: 60,
    alignItems: 'center',
    marginTop: '20%'
    // justifyContent: 'center'
  },
  mobileWrapper:{
    marginTop: 20
  },
  phone:{
    color: 'rgba(0,0,0,0.8)',
    fontSize: 15,
  },
  inputWrapper:{
    height: 50,
    width: 300,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input:{
    flex: 1,
  },
  tinyLogo: {
    height: 120,
    aspectRatio: 93/80
  },
  buttonText:{
    color: 'white',
    fontSize: 20,
    fontWeight: '500'
  }
})

export default LoginScreen;