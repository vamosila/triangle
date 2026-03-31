/*
* File: TriangleScreen.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-31
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Input from '../components/Input'
import CustomButton from '../components/CustomButton'
import { calcArea } from '../utils/triangle'

const TriangleScreen = ({ navigation }) => {
  const [aSide, setAside] = useState()
  const [bSide, setBside] = useState()
  const [cSide, setCside] = useState()
  const [area, setArea] = useState()

  function startCalc() {
    console.log('Számítás...')
    // console.log(aSide, bSide, cSide)

    const result = calcArea(
      Number(aSide), Number(bSide), Number(cSide)
    )

    console.log(result)
    setArea(result.toFixed(2))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TriangleScreen</Text>
      <Input 
        title="a oldal" 
        onChangeText={setAside} 
        value={aSide} 
      />
      <Input 
        title="b oldal" 
        onChangeText={setBside} 
        value={bSide} 
      />
      <Input 
        title="c oldal" 
        onChangeText={setCside} 
        value={cSide} 
      />

      <View style={styles.buttonBox}>
        <CustomButton 
          title="Számít"
          onPress={startCalc}
        />
      </View>

      <Input 
        title="Terület" 
        value={area} 
      />
    </View>
  )
}

export default TriangleScreen

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 15,
    backgroundColor: 'lightblue',
    borderRadius: 3,
  },
  title: {
    fontSize: 32,
    color: 'navy',
  },
})