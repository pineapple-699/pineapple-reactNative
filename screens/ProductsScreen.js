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
    const { navigation } = this.props;
    const scannedProduct = navigation.getParam('productToView');

    this.state = {
      productToView: scannedProduct[0],
    };
  }

  // componentDidMount() {
  //   const { navigation } = this.props;
  //   const scannedProduct = navigation.getParam('productToView');
  //   console.log('Product Screen');
  //   console.log(scannedProduct);
  //   this.setState({
  //     productToView: scannedProduct[0],
  //   })

  // }

  render() {
    const { navigation } = this.props;
    const { productToView } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.productImage}>
          <Text>Product Image(s)</Text>
        </View>
        <View style={styles.productContent}>
          <View style={styles.productInfo}>
            <View style={styles.productName}>
              <Text style={styles.appSectionHeader}>{productToView.product}</Text>
            </View>
            <View style={styles.productAbout}>
              <View style={styles.productDescription}>
                <Text style={styles.appSectionHeader}>Product Description:</Text>
                <Text style={styles.appText}>{productToView.description}</Text>
              </View>
              <View style={styles.productAttributes}>
                <Text style={styles.appSectionHeader}>Size: </Text>
                <Text style={styles.appText}>{productToView.size}</Text>
                <Text style={styles.appSectionHeader}>Color: </Text>
                <Text style={styles.appText}>{productToView.color}</Text>
                <Text style={styles.appSectionHeader}>Price:</Text>
                <Text style={styles.appText}>{productToView.price}</Text>
                <Text style={styles.appSectionHeader}>Amount In Stock: </Text>
                <Text style={styles.appText}>{productToView.amt}</Text>
              </View>
            </View>
          </View>
          <View style={styles.productButtons}>
            <TouchableOpacity
              style={styles.largeButton}
              onPress={() => navigation.navigate('Cart')}
              underlayColor="#fff"
            >
              <Text style={styles.largeButtonText}>Pick Up In Store</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.largeButton}
              onPress={() => navigation.navigate('Cart')}
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
