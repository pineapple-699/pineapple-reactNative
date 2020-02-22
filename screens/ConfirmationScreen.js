import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../constants/Style';

const ConfirmationScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>Your Order is Confirmed!</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default ConfirmationScreen;
