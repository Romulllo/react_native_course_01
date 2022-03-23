import React from 'react';
import { Text, StyleSheet } from 'react-native';
 
const ComponentsScreen = () => {
  return <Text style={style.texStyle}>This is the components screen</Text>
};

const style = StyleSheet.create({
  texStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen