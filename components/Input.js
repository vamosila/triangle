/*
* File: Input.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-31
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from 'react-native'

const Input = ({title, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput 
        style={styles.input}
        title={title}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'navy',
  },
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: 'white',
    fontSize: 24,
  },
})