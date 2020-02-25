import React from 'react';
import {
  Text,
  View,
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
    const nav = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.productImage}>
          <Text>Product Image(s)</Text>
        </View>
        <View style={styles.productContent}>
          <View style={styles.productInfo}>
            <View style={styles.productName}>
              <Text style={styles.appSectionHeader}>Product UPC Code: </Text>
              <Text style={styles.appText}>{this.state.productToView.upc}</Text>
            </View>
            <View style={styles.productAbout}>
              <View style={styles.productDescription}>
                <Text style={styles.appSectionHeader}>Product Description:</Text>
                <Text style={styles.appText}>{this.state.productToView.description}</Text>
              </View>
              <View style={styles.productAttributes}>
                <Text style={styles.appSectionHeader}>Size: </Text>
                <Text style={styles.appText}>{this.state.productToView.size}</Text>
                <Text style={styles.appSectionHeader}>Color: </Text>
                <Text style={styles.appText}>{this.state.productToView.color}</Text>
                <Text style={styles.appSectionHeader}>Price:</Text>
                <Text style={styles.appText}>{this.state.productToView.price}</Text>
                <Text style={styles.appSectionHeader}>Amount In Stock: </Text>
                <Text style={styles.appText}>{this.state.productToView.amt}</Text>
              </View>
            </View>
          </View>
          <View style={styles.productButtons}>
            <Text style={styles.linkText}>In Store Pickup</Text>
            <TouchableOpacity
              style={styles.largeButton}
              onPress={() => nav.navigation.navigate('Cart')}
              underlayColor="#fff"
            >
              <Text style={styles.largeButtonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ProductsScreen;
