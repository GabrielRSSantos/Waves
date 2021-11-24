import React from 'react';
import { StyleSheet } from 'react-native';
import Context from './src/Context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Paginas from './src/Paginas';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Context>
        <Paginas />
      </Context>
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
