import React from 'react';
import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  StatusBar,
  // ActivityIndicator,
  // FlatList
} from 'react-native';
// import { Button } from 'react-native-elements';
import styles from '../constants/Style';

class ProductsScreen extends React.Component {
  constructor(props) {
    super(props);
    const nav = this.props;
    const scannedProduct = nav.navigation.getParam('productToView');

    this.state = {
      productToView: scannedProduct[0],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.productImage}>
          <Text>Product Image(s)</Text>
        </View>
        <View style={styles.productContent}>
          <View style={styles.productInfo}>
            <Text style={styles.appText}>{this.state.productToView.upc}</Text>
            <Text style={styles.appText}>{this.state.productToView.description}</Text>
            <Text style={styles.appText}>{this.state.productToView.size}</Text>
            <Text style={styles.appText}>{this.state.productToView.color}</Text>
            <Text style={styles.appText}>{this.state.productToView.price}</Text>
            <Text style={styles.appText}>{this.state.productToView.amt}</Text>
          </View>
          <View style={styles.productButtons}>
            <Text style={styles.linkText}>In Store Pickup</Text>
            <TouchableOpacity
              style={styles.addToCart}
              onPress={() => Alert.alert('This should add an item to your cart, but it is not working right now')}
              underlayColor="#fff"
            >
              <Text style={styles.addToCartText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ProductsScreen;
