import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList
} from 'react-native';
import styles from '../constants/Style';

function Item({ title, price }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{price}</Text>
    </View>
  );
}

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
        {/* <br />
        {dataSource.products.map((dat) => (
          <div>
            <h2>{dat.product}</h2>
            <p>{dat.price}</p>
          </div>
        ))} */}
        <FlatList
          data={dataSource.products}
          renderItem={({ item }) => <Item title={item.product} price={item.price} />}
          keyExtractor={(item) => item.id}
        />

      </View>
    );
  }
}

export default ProductsScreen;
