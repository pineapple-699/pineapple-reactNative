import React, { Component } from 'react';
import Toast from 'react-native-easy-toast';

import {
  Text, View, StyleSheet, Alert, StatusBar, Vibration
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from '../constants/Style';
// import { SizeClassIOS } from 'expo/build/ScreenOrientation/ScreenOrientation';

class ScannerScreen extends Component {
  constructor(props) {
    super(props);

    // this.onBarCodeRead = this.onBarCodeRead.bind(this);
    this.scannedCode = null;

    this.state = {
      hasCameraPermission: true,
      upc: '',
      type: '',
    };
  }


  async componentDidMount() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    this.setState({ hasCameraPermission: status === 'granted' });
    this.resetScanner();
  }

  onBarCodeRead = async ({ typo, data }) => {
    const { type, upc } = this.state;
    const { navigation } = this.props;

    if ((typo === type && data === upc) || data === null) {
      return;
    }

    Vibration.vibrate();
    this.setState({
      upc: data,
      type,
    });

    fetch('https://pineapple-rest-api.herokuapp.com/products')
      .then((response) => response.json())
      .then(async (responseJson) => {
        const { products } = await responseJson;

        const scannedProduct = await products
          .filter((product) => product.upc.toString() === data.toString());

        this.resetScanner();
        const productSKU = scannedProduct[0].sku;

        const relatedProducts = await products
          .filter((product) => product.sku.toString() === productSKU.toString());

        const sizes = []
        // const colors = []
        relatedProducts.forEach(product => {
          if (!sizes.includes(product.size)) {
            sizes.push({"value": product.size});
          }
          // if (colors["value"] === product.color){
          //   colors.push({ "value": product.color});
          // }
        });

        if (scannedProduct && scannedProduct.length) {
          navigation.navigate('Product', { 
            productToView: scannedProduct,
            // productColors: colors,
            productSizes: sizes, 
          });
        } else {
          this.refs.toast.show('Product not available', 500);
        }
      });
  }

  resetScanner() {
    this.scannedCode = null;
    this.setState({
      scannedItem: {
        type: null,
        data: null
      }
    });
  }

  renderAlert(title, message) {
    Alert.alert(
      title,
      message,
      [
        { text: 'OK', onPress: () => this.resetScanner() },
      ],
      { cancelable: true }
    );
  }

  renderMessage = () => {
    const { scannedItem } = this.state;

    if (scannedItem && scannedItem.type) {
      const { type, data } = scannedItem;
      return (
        <Text style={styles.scanScreenMessage}>
          {`Scanned \n ${type} \n ${data}`}
        </Text>
      );
    }
    return <Text style={styles.scanScreenMessage}>Focus the barcode to scan.</Text>;
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <BarCodeScanner
          onBarCodeScanned={this.onBarCodeRead}
          style={StyleSheet.absoluteFill}
        />
        <Toast ref="toast" position="center" />
        {this.renderMessage()}
      </View>
    );
  }
}

export default ScannerScreen;
