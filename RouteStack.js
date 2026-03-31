/*
* File: RouteStack.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-31
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import TriangleScreen from './screens/TriangleScreen'
import AboutScreen from './screens/AboutScreen'
import { StyleSheet } from 'react-native'

const Stack = createNativeStackNavigator()

const RouteStack = () => {
  return (
    <Stack.Navigator style={{ pointerEvents: 'none',}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Triangle" component={TriangleScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  )
}

export default RouteStack

const styles = StyleSheet.create({})