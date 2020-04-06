import React from 'react';
import {
  View, StatusBar, Text, Image, TouchableOpacity
} from 'react-native';

import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import styles from '../constants/Style';

// Redux
import { setAuthentication, setProfile } from '../reducers/login';
import { setProducts } from '../reducers/api';

const iconLogo = require('../assets/images/icon-logo.png');

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      setAuth, setProf, setProd
    } = this.props;

    const loggedInUser = {
      user_id: '0',
      username: 'Admin',
      email: 'admin@gmail.com',
      first_name: 'Admin',
      last_name: 'Administrator',
    };


    setProf(loggedInUser);
    setAuth(true);
    setProd();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.splashContainer}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.splashHeader}>
          <Image
            style={styles.splashLogo}
            source={iconLogo}
          />
        </View>
        <View style={styles.splashCTA}>
          <Text style={styles.splashHeaderText}>Welcome to Pineapple!</Text>
          <Text style={styles.splashText}>
            Enhance your in store shopping experience with Pineapple!
          </Text>
        </View>
        <View style={styles.splashButtons}>
          <Text
            style={styles.splashText}
            onPress={() => navigation.navigate('LogIn')}>
            Already have an account? Sign In!
          </Text>
          <TouchableOpacity
            style={styles.largeButton}
            onPress={() => navigation.navigate('SignUp')}
            underlayColor="#fff"
          >
            <Text style={styles.largeButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  setAuth: setAuthentication,
  setProf: setProfile,
  setProd: setProducts
};

export default connect(null, mapDispatchToProps)(SplashScreen);
