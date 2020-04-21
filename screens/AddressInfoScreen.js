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

class AddressScreen extends React.Component {
  constructor(props) {
    super(props);
    const { authInfo } = this.props;
    console.log(authInfo) //eslint-disable-line

    this.state = {
      addressOne: authInfo.addressOne,
      addressTwo: authInfo.addressTwo,
    };
  }

  render() {
    // const {
    //   navigation,
    // } = this.props;
    const {
      addressOne,
      addressTwo,
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <View style={styles.body}>
          <View style={styles.optionsList}>
            <TouchableOpacity
              style={styles.addressBackground}
              onPress={() => Alert.alert(
                'This should let you edit your address, but it does not work yet.'
              )}
              underlayColor="#fff"
            >
              <View style={styles.addressAddress}>
                <Text style={styles.addressHeaderText}>{addressOne}</Text>
                <Text style={styles.addressSubHeaderText}>{addressTwo}</Text>
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
                'This should let you add a new address, but it does not work yet.'
              )}
              underlayColor="#fff"
            >
              <Text style={styles.addAddressText}>Add New Address</Text>
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

export default connect(mapStateToProps, null)(AddressScreen);
