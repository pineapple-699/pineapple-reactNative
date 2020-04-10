import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  // ActivityIndicator,
  // FlatList
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { connect } from 'react-redux';
import { getAuthInfo } from '../reducers/login';
import styles from '../constants/Style';

class ProductsScreen extends React.Component {
  constructor(props) {
    super(props);
    const { navigation, authInfo } = this.props;
    const scannedProduct = navigation.getParam('productToView');
    const productSizes = navigation.getParam('productSizes');
    // const productColors = navigation.getParam('productColors');
    console.log(scannedProduct)

    const rawResponse = fetch(`https://pineapple-rest-api.herokuapp.com/history/scan`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: authInfo.user_id,
        product_id: scannedProduct[0]
      })
    });

    await rawResponse.json();

    this.state = {
      productToView: scannedProduct[0],
      productSize: scannedProduct[0].size,
      sizeOptions: productSizes,
      productColor: scannedProduct[0].color,
      productImage: scannedProduct[0].picture,
      // colorOptions: productColors,
    };
  }

  handleAddToCart = async () => {
    const { navigation, authInfo } = this.props;
    const userID = authInfo.user_id;
    const { productToView } = this.state;

    const rawResponse = await fetch(`https://pineapple-rest-api.herokuapp.com/cart/${userID}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        product_upc: productToView[0],
        quantity: 1,
        type: 'add_product_for_user',
      })
    });

    await rawResponse.json();
    navigation.navigate('Cart');
  }

  render() {
    const { navigation } = this.props;
    const {
      productToView,
      productSize,
      sizeOptions,
      productColor,
      productImage,
      // colorOptions,
    } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.productHeader}>
          <Image
            style={styles.productImage}
            source={{ uri: productImage }}
          />
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
                <View style={styles.productOptions}>
                  <Dropdown
                    label="Size: "
                    containerStyle={styles.productDropdown}
                    value={productSize}
                    data={sizeOptions}
                  />
                  <Dropdown
                    label="Color: "
                    containerStyle={styles.productDropdown}
                    value={productColor}
                  />
                </View>
                {/* <View style={styles.productAttribute}>
                  <Text style={styles.appSectionHeader}>Color: </Text>
                  <Text style={styles.appText}>{productColor}</Text>
                </View> */}
                <View style={styles.productAttribute}>
                  <Text style={styles.appSectionHeader}>Price: </Text>
                  <Text style={styles.appText}>
                    $
                    {productToView.price}
                  </Text>
                </View>
                <View style={styles.productAttribute}>
                  <Text style={styles.appSectionHeader}>Amount In Stock: </Text>
                  <Text style={styles.appText}>{productToView.amt}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.productButtons}>
            <TouchableOpacity
              style={styles.largeButtonOutline}
              onPress={() => navigation.navigate('Cart')}
              underlayColor="#fff"
            >
              <Text style={styles.largeButtonOutlineText}>Pick Up In Store</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.largeButton}
              onPress={() => this.handleAddToCart()}
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

const mapStateToProps = (state) => ({
  authInfo: getAuthInfo(state)
});

export default connect(mapStateToProps, null)(ProductsScreen);
