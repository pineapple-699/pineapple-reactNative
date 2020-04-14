// General Imports
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

// Icon/Style Imports
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from '../constants/Style';

// Redux Imports
import { getAuthInfo } from '../reducers/login';

const ConfirmationScreen = (props) => {
  const { authInfo } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Icon
          name="ios-arrow-back"
          size={24}
          onPress={() => navigation.goBack()}
          style={{ color: '#fff', paddingRight: 30, marginTop: 20, marginRight: 122, }}
        /> */}
        <Text style={styles.headerText}>Order Confirmation</Text>
      </View>
      <View style={styles.body}>
        <Icon
          name="ios-checkmark-circle"
          size={75}
          style={styles.confirmationIcon}
        />
        <Text style={styles.orderNumText}>Order Number: 0000000001</Text>
        <Text style={styles.thankYouText}>Thank you for shopping with Pineapple!</Text>
        <Text style={styles.confirmationText}>
          A confirmation email has been sent to
          {' '}
          {authInfo.email}
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  authInfo: getAuthInfo(state)
});

export default connect(mapStateToProps, null)(ConfirmationScreen);
