import React from 'react';
import { Text, View, TouchableOpacity, } from 'react-native';
import styles from '../constants/Style';

const CartScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.cartList}>
        <View style={styles.cartItem}>
          <View style={styles.cartImage}>
            <Text>Product Image(s)</Text>
          </View>
          <View style={styles.cartInfo}>
            <Text style={styles.cartSectionHeader}>1185411455</Text>
            <Text style={styles.linkText}>Desciption: Jordan Unisex Maize Limited Jersey</Text>
            <Text style={styles.linkText}>Size: L</Text>
            <Text style={styles.linkText}>Color: Yellow</Text>
            <Text style={styles.linkText}>Quantity: 1</Text>
            <Text style={styles.linkText}>Price: $135</Text>
          </View>
        </View>
        <View style={styles.cartEmpty} />
      </View>
      <View style={styles.cartButtons}>
        <TouchableOpacity
          style={styles.largeButton}
          onPress={() => navigation.navigate('Payment')}
          underlayColor="#fff"
        >
          <Text style={styles.largeButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
