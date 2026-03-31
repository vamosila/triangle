/*
* File: AboutScreen.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-31
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Szerző: Vámosi László Ádám</Text>
      <Text style={styles.title}>Csoport: II-N</Text>
      <Text style={styles.title}>Készült: 2026-03-25</Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'navy',
  }
})
