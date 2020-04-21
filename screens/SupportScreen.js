// General Imports
import React from 'react';
import {
  Text,
  View,
  // StatusBar
} from 'react-native';

// Icon/Style Imports
// import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../constants/Style';

const SupportScreen = () => (
  <View style={styles.container}>
    <View style={styles.body}>
      <Text>This screen will display support options to the user</Text>
    </View>
  </View>
);

export default SupportScreen;
