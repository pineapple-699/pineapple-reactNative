// General Imports
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

// Icon/Style Imports
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from '../constants/Style';

// Redux Imports
import { getAuthInfo } from '../reducers/login';

class PaymentScreen extends React.Component {
  constructor(props) {
    super(props);
    const { authInfo } = this.props;
    console.log(authInfo) //eslint-disable-line

    this.state = {
      addressOne: authInfo.addressOne,
      addressTwo: authInfo.addressTwo,
      cardNumber: authInfo.cardNumber,
    };
  }

  render() {
    const {
      navigation,
    } = this.props;
    const {
      addressOne,
      addressTwo,
      cardNumber
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {/* <Icon
          name="ios-arrow-back"
          size={24}
          onPress={() => navigation.goBack()}
          style={{ color: '#fff', paddingRight: 30, marginTop: 20, marginRight: 122, }}
        /> */}
          <Text style={styles.headerText}>Confirm Purchase</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.paymentOptionsList}>
            <Text style={styles.settingSectionHeader}>Shipping Information</Text>
            <TouchableOpacity
              style={styles.addressBackground}
              underlayColor="#fff"
            >
              <View style={styles.addressAddress}>
                <Text style={styles.addressHeaderText}>{addressOne}</Text>
                <Text style={styles.addressSubHeaderText}>{addressTwo}</Text>
              </View>
              <View style={styles.addressIcon}>
                <Icon
                  name="ios-create"
                  onPress={() => Alert.alert(
                    'This should let you edit your address, but it does not work yet.'
                  )}
                  size={24}
                  style={{ color: '#FCB742', paddingRight: 30 }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addAddressBackground}
              onPress={() => Alert.alert(
                'This should let you choose a different address, but it does not work yet.'
              )}
              underlayColor="#fff"
            >
              <Text style={styles.addAddressText}>Choose Different Shipping Address</Text>
            </TouchableOpacity>
            <Text style={styles.settingSectionHeader}>Payment Information</Text>
            <TouchableOpacity
              style={styles.addressBackground}
              underlayColor="#fff"
            >
              <View style={styles.addressAddress}>
                <Text style={styles.addressHeaderText}>{cardNumber}</Text>
                <Text style={styles.addressSubHeaderText}>Credit Card</Text>
              </View>
              <View style={styles.addressIcon}>
                <Icon
                  name="ios-create"
                  onPress={() => Alert.alert(
                    'This should let you edit your address, but it does not work yet.'
                  )}
                  size={24}
                  style={{ color: '#FCB742', paddingRight: 30 }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addAddressBackground}
              onPress={() => Alert.alert(
                'This should let you add a different payment method, but it does not work yet.'
              )}
              underlayColor="#fff"
            >
              <Text style={styles.addAddressText}>Choose Different Payment Method</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cartButtons}>
            <TouchableOpacity
              style={styles.largeButton}
              onPress={() => navigation.navigate('Confirmation')}
              underlayColor="#fff"
            >
              <Text style={styles.largeButtonText}>Confirm Purchase</Text>
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

export default connect(mapStateToProps, null)(PaymentScreen);
