import React from 'react';
import {
  Text,
  View,
  Button,
  ActivityIndicator,
  FlatList
} from 'react-native';
import styles from '../constants/Style';

class ProductsScreen extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        loading: true,
        dataSource:[]
    };
  }

  componentDidMount(){
    fetch("https://pineapple-rest-api.herokuapp.com/products")
      .then(response => response.json())
        .then((responseJson) => {
          this.setState({
            loading: false,
            dataSource: responseJson
        })
      })
    .catch(error=>console.log(error)) //to catch the errors if any
  }

  render() {
    if(this.state.loading){
      return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )}

    return (
      <View style={styles.container}>
        <Text>I'm a ProductsScreen</Text>
        <br />
        {this.state.dataSource.products.map((dat) =>
        <div>
          <li>{dat.product}</li>
          <li>{dat.price}</li>
        </div>
        )}
        
     </View>
    );
  }
}

export default ProductsScreen;
