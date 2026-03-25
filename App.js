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
