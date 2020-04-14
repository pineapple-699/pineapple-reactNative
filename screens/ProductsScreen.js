import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  // ActivityIndicator,
  // FlatList
} from 'react-native';

// Icon/Style imports
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from '../constants/Style';

// Redux imports
import { getAuthInfo } from '../reducers/login';

class ProductsScreen extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const scannedProduct = navigation.getParam('productToView');
    const productSizes = navigation.getParam('productSizes');
    // const productColors = navigation.getParam('productColors');

    this.state = {
      productToView: scannedProduct[0],
      productSize: scannedProduct[0].size,
      sizeOptions: productSizes,
      productColor: scannedProduct[0].color,
      productImage: scannedProduct[0].picture,
      productQuantity: 1,
      // colorOptions: productColors,
    };
  }

  componentDidMount = async () => {
    const { authInfo } = this.props;
    const { productToView } = this.state;

    const rawResponse = await fetch('https://pineapple-rest-api.herokuapp.com/history/scan', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: authInfo.user_id,
        product_id: productToView.id
      })
    });

    await rawResponse.json().then((data) => {
      console.log(data); //eslint-disable-line
    });
  }

  handleAddToCart = async () => {
    const { navigation, authInfo } = this.props;
    const userID = authInfo.user_id;
    const {
      productToView,
      productQuantity
    } = this.state;
    // console.log(productToView.upc)

    const postItem = await fetch(`https://pineapple-rest-api.herokuapp.com/cart/${userID}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        product_upc: productToView.upc,
        quantity: productQuantity,
        type: 'add_product_for_user',
      })
    });

    await postItem.json().then((data) => {
      console.log(data); //eslint-disable-line
      navigation.navigate('Cart');
    });

    // const getCart = await fetch(`https://pineapple-rest-api.herokuapp.com/cart/${userID}`, {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // });
    // await getCart.json().then((data) => {
    //   const newData = data.cart.products;
    //   navigation.navigate('Cart', {
    //     cart: newData,
    //   });
    // });
  }

  minusQuantity() {
    const {
      productQuantity
    } = this.state;

    if (productQuantity > 1) {
      this.setState({ productQuantity: productQuantity - 1 });
    }
  }

  renderSize() {
    const {
      sizeOptions,
    } = this.state;

    return (
      sizeOptions.map((item, index) => (
        <TouchableOpacity
          style={styles.productSizes}
          key={index} //eslint-disable-line
          onPress={() => this.setState({ productSize: item.value })}
        >
          <Text>{item.value}</Text>
        </TouchableOpacity>
      ))
    );
  }

  render() {
    const { navigation } = this.props;
    const {
      productToView,
      productSize,
      // sizeOptions,
      productColor,
      productImage,
      productQuantity
      // colorOptions,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Product Name</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.productHeader}>
            <Image
              style={styles.productImage}
              source={{ uri: productImage }}
            />
          </View>
          <View style={styles.productContent}>
            <View style={styles.productInfo}>
              <Text style={styles.productHeaderText}>{productToView.product}</Text>
              <Text style={styles.productSubHeaderText}>
                $
                {productToView.price}
              </Text>
              <View style={styles.productAttribute}>
                <Text style={styles.productSubHeaderText}>
                  Color:
                  {productColor}
                </Text>
                <View style={styles.productAttributeOptions}>
                  <TouchableOpacity
                    style={{
                      height: 25,
                      width: 25,
                      borderRadius: 100,
                      backgroundColor: productColor.toLowerCase()
                    }}
                    onPress={() => this.setState({ productColor: productToView.color })}
                  >
                    <Text> </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.productAttribute}>
                <Text style={styles.productSubHeaderText}>
                  Size:
                  { productSize }
                </Text>
                <View style={styles.productAttributeOptions}>
                  {this.renderSize()}
                </View>
              </View>
              <View style={styles.productQuantity}>
                <Text style={styles.productSubHeaderText}>QTY: </Text>
                <View style={styles.productAttributeOptions}>
                  <Icon
                    name="ios-remove-circle-outline"
                    size={24}
                    style={{ color: '#333', marginRight: 15 }}
                    onPress={() => this.minusQuantity()}
                  />
                  <Text style={styles.productSubHeaderText}>{productQuantity}</Text>
                  <Icon
                    name="ios-add-circle-outline"
                    size={24}
                    style={{ color: '#333', marginLeft: 15 }}
                    onPress={() => this.setState({ productQuantity: productQuantity + 1 })}
                  />
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
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  authInfo: getAuthInfo(state)
});

export default connect(mapStateToProps, null)(ProductsScreen);
