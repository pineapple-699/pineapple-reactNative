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

class PaymentMethodsScreen extends React.Component {
  constructor(props) {
    super(props);

    const { authInfo } = this.props;

    this.state = {
      cardNumber: authInfo.cardNumber,
    };
  }

  render() {
    // const {
    //   navigation,
    //   authInfo
    // } = this.props;
    const {
      cardNumber,
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
          <Text style={styles.headerText}>Payment Methods</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.optionsList}>
            <TouchableOpacity
              style={styles.addressBackground}
              onPress={() => Alert.alert(
                'This should let you edit your payment method, but it does not work yet.'
              )}
              underlayColor="#fff"
            >
              <View style={styles.addressAddress}>
                <Text style={styles.addressHeaderText}>{cardNumber}</Text>
                <Text style={styles.addressSubHeaderText}>Credit Card</Text>
              </View>
              <View style={styles.addressIcon}>
                <Icon
                  name="ios-create"
                  size={24}
                  style={{ color: '#FCB742', paddingRight: 30 }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addAddressBackground}
              onPress={() => Alert.alert(
                'This should let you add a new payment method, but it does not work yet.'
              )}
              underlayColor="#fff"
            >
              <Text style={styles.addAddressText}>Add New Payment Method</Text>
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

export default connect(mapStateToProps, null)(PaymentMethodsScreen);
