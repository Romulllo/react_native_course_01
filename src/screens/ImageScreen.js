import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDatail from '../components/ImageDatail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDatail title='Forest' />
      <ImageDatail title='Beach' />
      <ImageDatail title='Mountain' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;