import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../constants/Style';

const PaymentScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>This is the homescreen!</Text>
      <Button
        title="Place Order"
        onPress={() => navigation.navigate('Confirmation')}
      />
    </View>
  );
};

export default PaymentScreen;
