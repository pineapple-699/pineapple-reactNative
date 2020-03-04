import React, { useEffect } from 'react';
import {
  View, StatusBar, Text, Alert, Image, TextInput
} from 'react-native';

import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import styles from '../constants/Style';

// Redux
import { getAuthInfo, setAuth, setProfile } from '../reducers/login';

const iconLogo = require('../assets/images/icon-logo.png');

const LogInScreen = (props) => {
  const {
    navigation, setAuth, setProfile, getAuthInfo
  } = props;

  const loggedInUser = {
    username: 'Test',
    email: 'test@gmail.com',
    first_name: 'Test',
    last_name: 'Testerton',
  };

  useEffect(() => {
    setProfile(loggedInUser);
    setAuth(true);
    console.log(getAuthInfo);
  });

  return (
    <View style={styles.splashContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.splashHeader}>
        <Image
          style={styles.logo}
          source={iconLogo}
        />
        <Text style={styles.authHeader}>Welcome to Pineapple!</Text>
        <Text style={styles.authText}>this is the splash screen</Text>
      </View>
      <View style={styles.splashInputs}>
        <TextInput
          placeholder="Email"
          style={styles.signUpText}
        />
        <TextInput
          placeholder="Password"
          style={styles.signUpText}
        />
      </View>
      <View style={styles.splashButtons}>
        <View style={styles.buttonsView}>
          <Button
            buttonStyle={styles.authButton}
            title="Log In"
            type="clear"
            onPress={() => Alert.alert('This should log you in, but it is not working right now')}
          />
          <Button
            buttonStyle={styles.authButton}
            title="Sign Up"
            type="clear"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
        <Button
          buttonStyle={styles.authGoogle}
          title="Log In with Google"
          type="clear"
          onPress={() => Alert.alert('This should log you in, but it is not working right now')}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  authInfo: getAuthInfo(state)
});

const mapDispatchToProps = {
  setAuth,
  setProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen);
