/*
* File: HomeScreen.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-31
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Háromszög területének számítása</Text>
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
    },
    title: {
        fontSize: 24,
        color: 'navy',
        textAlign: 'center',
    }
})