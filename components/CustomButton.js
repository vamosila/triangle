/*
* File: CustomButton.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-31
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const CustomButton = ({onPress, title}) => {
  return (
    <TouchableHighlight 
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007aff',
        marginTop: 5,
        padding: 5,
        borderRadius: 5,
        boxShadow: '5px 5px 5px navy'
    },
    title: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
})