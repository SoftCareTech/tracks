import React from 'react'
import ResoveAuthScreen from './src/screens/ResolveAuthScreen'
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { setNavigator } from './src/navigationRef'


import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailsScreen from './src/screens/TrackDetailsScreen'
import TrackListScreen from './src/screens/TrackListScreen'

import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as LocationProvider } from './src/context/LocationContext'




const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    ResolveAuth: ResoveAuthScreen,
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen
      , TrackDetails: TrackDetailsScreen
    }),

    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  })
})

const App = createAppContainer(switchNavigator)
export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App ref={(navigator) => { setNavigator(navigator) }} />
      </AuthProvider>
    </LocationProvider>
  )
}
