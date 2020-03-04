import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import styles from '../constants/Style';

const ProfileScreen = () => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text>This is your user profile!</Text>
  </View>
);

export default ProfileScreen;
