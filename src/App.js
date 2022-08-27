import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Store/store'
import ApplicationNavigator from '@/Navigators/Application'
import './Translations'
import { NativeBaseProvider } from 'native-base'

const App = () => (
  <NativeBaseProvider>
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  </NativeBaseProvider>
)

export default App
