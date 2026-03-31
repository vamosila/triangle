/*
* File: App.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-31
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { NavigationContainer } from '@react-navigation/native';
import RouteStack from './RouteStack';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <RouteStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
