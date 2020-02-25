import React from 'react';
import { Text, View, TouchableOpacity, } from 'react-native';
import styles from '../constants/Style';

class CartScreen extends React.Component {
  render() {
    const nav = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.cartList}>
          <Text>This is your shopping cart!</Text>
        </View>
        <View style={styles.cartButtons}>
          <TouchableOpacity
            style={styles.addToCart}
            onPress={() => nav.navigation.navigate('Payment')}
            underlayColor="#fff"
          >
            <Text style={styles.addToCartText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CartScreen;
