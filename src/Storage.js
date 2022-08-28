import AsyncStorage from '@react-native-async-storage/async-storage'

export default class Storage {
  static _storeUserTokenAsync = async mobile => {
    try {
      await AsyncStorage.setItem('mobile', mobile)
      return true
    } catch (error) {
      return false
    }
  }

  static _retrieveUserToken = async () => {
    try {
      const value = await AsyncStorage.getItem('mobile')
      if (value !== null) {
        return value
      }
    } catch (error) {
      return null
    }
    return null
  }

  static _clearStorage = async () => {
    try {
      await AsyncStorage.removeItem('mobile');
      return true;
    } catch (error) {
      return false;
    }
  };
}
