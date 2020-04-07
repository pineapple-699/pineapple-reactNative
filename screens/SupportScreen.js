import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import styles from '../constants/Style';

const SupportScreen = () => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text>This screen will give users support options</Text>
  </View>
);

export default SupportScreen;