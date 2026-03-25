import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import TriangleScreen from './screens/TriangleScreen'
import AboutScreen from './screens/AboutScreen'
import { StyleSheet } from 'react-native'

const Stack = createNativeStackNavigator()

const RouteStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Triangle" component={TriangleScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  )
}

export default RouteStack

const styles = StyleSheet.create({})