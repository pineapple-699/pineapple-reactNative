import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import styles from '../constants/Style';

const SettingsScreen = () => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text>This is the settings screen!</Text>
  </View>
);

export default SettingsScreen;
