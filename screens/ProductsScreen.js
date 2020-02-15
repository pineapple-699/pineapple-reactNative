import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import styles from '../constants/Style';

class ProductsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: []
    };
  }

  componentDidMount() {
    fetch('https://pineapple-rest-api.herokuapp.com/products')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson
        });
      });
  }

  render() {
    const { dataSource, loading } = this.state;
    if (loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text>Products Screen</Text>
        <br />
        {dataSource.products.map((dat) => (
          <div>
            <li>{dat.product}</li>
            <li>{dat.price}</li>
          </div>
        ))}

      </View>
    );
  }
}

export default ProductsScreen;
