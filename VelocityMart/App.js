import { View, Text } from 'react-native'
import 'react-native-gesture-handler';
import React from 'react'
import AppNavigator from './AppNavigator'
import {store} from './Screens/redux/Store'
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  )
}

export default App
