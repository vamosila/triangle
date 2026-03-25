
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TriangleScreen = ({ navigation }) => {
  const [base, setBase] = useState()
  const [height, setHeight] = useState()
  const [area, setArea] = useState()

  function startCalc() {}

  return (
    <View>
      <Text>TriangleScreen</Text>
    </View>
  )
}

export default TriangleScreen

const styles = StyleSheet.create({})