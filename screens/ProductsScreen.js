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

    this.productUpc = this.props.navigation.getParam('upc');

    this.state = {
      dataSource: [],
      productToView: [],
    };
  }

  componentDidMount() {
    this.setState({
      productToView: [],
    });
    fetch('https://pineapple-rest-api.herokuapp.com/products')
      .then((response) => response.json())
      .then((responseJson) => {
        let products = responseJson.products;

        for (var i = 0; i < products.length; i++) {
          var product = products[i];
          if ( product.upc = this.productUpc ) {
            this.setState({
              productToView: product,
            });
          }
        }

        // Try doing the above when the upc is scanned on the scanner screen. 
        console.log(this.state.productToView);
      });
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

// function Item({ title, price }) {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//       <Text style={styles.title}>{price}</Text>
//     </View>
//   );
// }

// class ProductsScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//       dataSource: []
//     };
//   }

//   componentDidMount() {
//     fetch('https://pineapple-rest-api.herokuapp.com/products')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         this.setState({
//           loading: false,
//           dataSource: responseJson,
//         });
//       });
//   }

//   render() {
//     const { dataSource, loading } = this.state;
//     if (loading) {
//       return (
//         <View style={styles.container}>
//           <ActivityIndicator size="large" color="#333" />
//         </View>
//       );
//     }

//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={dataSource.products}
//           renderItem={({ item }) => <Item title={item.product} price={item.price} />}
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//     );
//   }
// }
