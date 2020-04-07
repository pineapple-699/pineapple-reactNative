import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import styles from '../constants/Style';

const PaymentMethodsScreen = () => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text>This screen will allow the user to edit payment information</Text>
  </View>
);

export default PaymentMethodsScreen;