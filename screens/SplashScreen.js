import React from 'react';
import {
  View, StatusBar, Text, Alert, Image, TextInput
} from 'react-native';

import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import styles from '../constants/Style';

// Redux
import { setAuthentication, setProfile } from '../reducers/login';
import { setProducts } from '../reducers/api';

const iconLogo = require('../assets/images/icon-logo.png');

class LogInScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
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

  handleLogIn = async () => {
    // http://127.0.0.1:5000/users/name
    const user = this.state;
    const nav = this.props;

    fetch('https://pineapple-rest-api.herokuapp.com/users')
      .then((response) => response.json())
      .then((responseJson) => {
        const userInfo = responseJson.users;
        const users = [];

        userInfo.forEach((account) => {
          users.push(account.username);
        });

        if (user.email === '') {
          Alert.alert('Please enter your log in info');
        } else if (users.includes(user.email) === false) {
          Alert.alert('No account with this email exists. Please sign up or try again.');
        } else {
          nav.navigation.navigate('Activity');
        }
      });
  }

  render() {
    const that = this.state;
    const nav = this.props;
    return (
      <View style={styles.splashContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.splashHeader}>
          <Image
            style={styles.splashLogo}
            source={iconLogo}
          />
          <Text style={styles.splashHeaderText}>Welcome to Pineapple!</Text>
          <Text style={styles.splashText}>
            Please log in below.
            If you do not already have an account please sign up!
          </Text>
        </View>
        <View style={styles.splashInputs}>
          <TextInput
            placeholder="Email"
            style={styles.authInputs}
            autoCapitalize="none"
            value={that.email}
            onChangeText={(value) => { this.setState({ email: value }); }}
          />
          <TextInput
            placeholder="Password"
            style={styles.authInputs}
            autoCapitalize="none"
            value={that.password}
            onChangeText={(value) => { this.setState({ password: value }); }}
          />
        </View>
        <View style={styles.splashButtons}>
          <View style={styles.splashButtonsView}>
            <Button
              buttonStyle={styles.authButton}
              title="Log In"
              type="clear"
              onPress={() => this.handleLogIn()}
            />
            <Button
              buttonStyle={styles.authButton}
              title="Sign Up"
              type="clear"
              onPress={() => nav.navigation.navigate('SignUp')}
            />
          </View>
          <Button
            buttonStyle={styles.authGoogle}
            title="Log In with Google"
            type="clear"
            onPress={() => nav.navigation.navigate('Activity')}
          />
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

export default connect(null, mapDispatchToProps)(LogInScreen);
