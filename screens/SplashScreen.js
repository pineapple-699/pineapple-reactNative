import React from 'react';
import {
  View, StatusBar, Text, Alert, Image, TextInput
} from 'react-native';

import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import styles from '../constants/Style';

// Redux
import { setAuthentication, setProfile } from '../reducers/login';

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
      setAuth, setProf
    } = this.props;

    const loggedInUser = {
      username: 'Test',
      email: 'test@gmail.com',
      first_name: 'Test',
      last_name: 'Testerton',
    };

    setProf(loggedInUser);
    setAuth(true);
  }

  render() {
    const that = this.state;
    const nav = this.props;
    return (
      <View style={styles.splashContainer}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.splashHeader}>
          <Image
            style={styles.splashLogo}
            source={iconLogo}
          />
          <Text style={styles.splashHeaderText}>Welcome to Pineapple!</Text>
          <Text style={styles.splashText}>this is the splash screen</Text>
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
              onPress={() => Alert.alert('This should log you in, but it is not working right now')}
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
            onPress={() => Alert.alert('This should log you in, but it is not working right now')}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  setAuth: setAuthentication,
  setProf: setProfile
};

export default connect(null, mapDispatchToProps)(LogInScreen);
