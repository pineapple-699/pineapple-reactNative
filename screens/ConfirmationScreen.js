import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../constants/Style';

const ConfirmationScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.cartList}>
        <Icon
          name="ios-checkmark-circle"
          size={75}
          style={styles.confirmationIcon}
        />
        <Text style={styles.orderNumText}>Order Number: 0000000001</Text>
        <Text style={styles.thankYouText}>Thank you for shopping with Pineapple!</Text>
        <Text style={styles.confirmationText}>
          A confirmation email has been sent to chancem@umich.edu
        </Text>
      </View>
      <View style={styles.cartButtons}>
        <TouchableOpacity
          style={styles.largeButton}
          onPress={() => navigation.navigate('Activity')}
          underlayColor="#fff"
        >
          <Text style={styles.largeButtonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmationScreen;
