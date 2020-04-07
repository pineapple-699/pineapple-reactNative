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
    <View style={styles.header}>
      {/* <Icon
          name="ios-arrow-back"
          size={24}
          onPress={() => navigation.goBack()}
          style={{ color: '#fff', paddingRight: 30, marginTop: 20, marginRight: 122, }}
        /> */}
      <Text style={styles.headerText}>Support</Text>
    </View>
    <View style={styles.body}>
      <Text>This screen will display support options to the user</Text>
    </View>
  </View>
);

export default SupportScreen;
