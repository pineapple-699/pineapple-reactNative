import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';

// Icon/Style Imports
import Icon from 'react-native-vector-icons/Ionicons';

// Redux Imports
import { connect } from 'react-redux';
import { getAuthInfo } from '../reducers/login';

// Style Imports
import styles from '../constants/Style';

class CartScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };
  }

  componentDidMount = async () => {
    const { authInfo } = this.props;
    const userID = authInfo.user_id;

    const rawResponse = await fetch(`https://pineapple-rest-api.herokuapp.com/cart/${userID}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    await rawResponse.json().then((data) => {
      const newData = data.cart.products;
      this.setState({
        cart: newData,
      });
    });
  }

  renderContent() {
    const {
      navigation
    } = this.props;
    const {
      cart
    } = this.state;
    if (cart.length === 0) {
      return (
        <View style={styles.body}>
          <View style={styles.noCartContent}>
            <Icon
              name="ios-close-circle"
              size={75}
              style={styles.cartIcon}
            />
            <Text>You have not added any items to your cart yet, scan an item to start!</Text>
          </View>
          <View style={styles.cartButtons}>
            <TouchableOpacity
              style={styles.largeButton}
              onPress={() => navigation.navigate('Scanner')}
              underlayColor="#fff"
            >
              <Text style={styles.largeButtonText}>Scan Item</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.cartBody}>
        <View style={styles.cartContent}>
          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <View style={styles.cartItemInfo}>
                  <View style={styles.itemImage}>
                    <Image
                      style={styles.productImage}
                      source={{ uri: item.product_info.picture }}
                    />
                  </View>
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemHeader}>{item.product_info.product}</Text>
                    <Text style={styles.itemPrice}>
                      Price: $
                      {item.product_info.price}
                    </Text>
                    <Text style={styles.itemAttribute}>
                      Color:
                      {item.product_info.color}
                    </Text>
                    <Text style={styles.itemAttribute}>
                      Size:
                      {item.product_info.size}
                    </Text>
                    <Text style={styles.itemAttribute}>
                      Quantity:
                      {item.quantity}
                    </Text>
                  </View>
                </View>
                <View style={styles.itemButtons}>
                  <Text
                    onPress={() => Alert.alert('Item Removed')}
                    style={styles.largeButtonOutlineText}
                  >
                    Remove
                  </Text>
                  <Text
                    onPress={() => Alert.alert('This will allow you to edit this item')}
                    style={styles.largeButtonOutlineText}
                  >
                    Edit
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
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
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Shopping Cart</Text>
        </View>
        {this.renderContent()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  authInfo: getAuthInfo(state)
});

export default connect(mapStateToProps, null)(CartScreen);



// const rawResponse = await fetch(`https://pineapple-rest-api.herokuapp.com/history/purchase/${userid}`, {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//     });

// const rawResponse = fetch(`https://pineapple-rest-api.herokuapp.com/history/purchase/${userid}`, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         product_id: "WHATEVERPRODUCTIDYOUHAVE"
//       })
//     });

//     rawResponse.json().then((data)=>{
//       console.log(data)
//     })