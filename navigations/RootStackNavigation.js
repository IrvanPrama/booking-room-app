import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainBottomTabsNavigation from './MainBottomTabsNavigation'

import useTheme from '../hooks/useTheme'
import LoginScreen from '../screens/Auth/LoginScreen'
import RegisterScreen from '../screens/Auth/RegisterScreen'
import RoomDetailScreen from '../screens/RootStack/RoomDetailScreen'
import CreateBookingScreen from '../screens/RootStack/CreateBookingScreen'

const { Navigator, Screen } = createStackNavigator()

const authScreens = [
  {
    name: 'login',
    component: LoginScreen,
    options: {}
  },
  {
    name: 'register',
    component: RegisterScreen,
    options: {}
  }
]

const rootStackScreens = [
  {
    name: 'main-bottom-tabs',
    component: MainBottomTabsNavigation,
    options: {}
  },
  {
    name: 'room-detail',
    component: RoomDetailScreen,
    options: {
      headerTitle: null,
      headerShown: true
    }
  },
  {
    name: 'create-booking',
    component: CreateBookingScreen,
    options: {
      headerTitle: null,
      headerShown: true
    }
  }
]

export default function RootStackNavigation() {
  const { colors } = useTheme()

  return (
    <Navigator
      initialRouteName="main-bottom-tabs"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          backgroundColor: colors.primary
        },
        headerTintColor: colors.surface
      }}
    >
      {authScreens.map(s => (
        <Screen
          key={s.name}
          name={s.name}
          component={s.component}
          options={s.options}
        />
      ))}
      {rootStackScreens.map(s => (
        <Screen
          key={s.name}
          name={s.name}
          component={s.component}
          options={s.options}
        />
      ))}
    </Navigator>
  )
}
