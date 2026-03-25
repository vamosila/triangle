
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Háromszög területének számítása</Text>
      <View style={styles.buttonBox}>
        <Button 
            title="Háromszög"
            onPress={() => navigation.navigate('Triangle')}
        />
      </View>
      <View style={styles.buttonBox}>
        <Button 
            title="Névjegy"
            onPress={() => navigation.navigate('About')}
        />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    buttonBox: {
        margin: 5,
    }
})