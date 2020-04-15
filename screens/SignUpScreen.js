import React from 'react';
import {
  View, StatusBar, Text, TextInput, Image, Alert, TouchableOpacity, KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import styles from '../constants/Style';

// Redux Imports
import { setAuthentication, setProfile } from '../reducers/login';

import iconLogo from '../assets/images/icon-logo.png';


class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      cPassword: '',
      gender: '',
      pantSize: '',
      shirtSize: '',
      shoeSize: '',
    };
  }

  handleSignUp = async () => {
    const {
      email,
      password,
      cPassword,
      gender,
      shoeSize,
      shirtSize,
      pantSize,
    } = this.state;
    const { navigation } = this.props;

    if (password !== cPassword) {
      Alert.alert('Your passwords do not match, please try again with matching passwords.');
    } else {
      const rawResponse = await fetch('https://pineapple-rest-api.herokuapp.com/user/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          address: '',
          password,
          sex: gender,
          shoe_size: shoeSize,
          shirt_size: shirtSize,
          pant_size_waist: pantSize,
          pant_size_length: '30',
          shipping_address: '',
          billing_address: ''

        })
      });
      const content = await rawResponse.json();
      console.log(content); //eslint-disable-line

      fetch('https://pineapple-rest-api.herokuapp.com/users')
        .then((response) => response.json())
        .then((responseJson) => {
          const userInfo = responseJson.users;

          // Needs to be re-written for validation
          userInfo.forEach(async (account) => {
            if (email === account.username) {
              const {
                setAuth, setProf,
              } = this.props;

              const loggedInUser = {
                user_id: account.id,
                username: email,
                email: `${email}@pineapple.com`,
                first_name: 'Real',
                last_name: 'Person',
                addressOne: '105 S State St',
                addressTwo: 'Ann Arbor, MI 48109',
                cardNumber: 'VISA ****9178'
              };
              await setProf(loggedInUser);
              setAuth(true);
              navigation.navigate('Activity');
            }
          });
        });
    }
  }

  render() {
    const {
      email,
      password,
      cPassword,
      gender,
      shoeSize,
      shirtSize,
      pantSize,
    } = this.state;
    // const { navigation } = this.props;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={[styles.splashContainer]}
        enabled
      >
        <StatusBar barStyle="dark-content" />
        <View style={styles.logInHeader}>
          <Image
            style={styles.signUpLogo}
            source={iconLogo}
          />
          <Text style={styles.splashHeaderText}>Sign Up!</Text>
        </View>
        <TextInput
          placeholder="Email"
          style={styles.authInputs}
          autoCapitalize="none"
          value={email}
          onChangeText={(value) => { this.setState({ email: value }); }}
        />
        <TextInput
          placeholder="Password"
          style={styles.authInputs}
          autoCapitalize="none"
          value={password}
          onChangeText={(value) => { this.setState({ password: value }); }}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.authInputs}
          autoCapitalize="none"
          value={cPassword}
          onChangeText={(value) => { this.setState({ cPassword: value }); }}
        />
        <TextInput
          placeholder="Gender"
          style={styles.authInputs}
          autoCapitalize="none"
          value={gender}
          onChangeText={(value) => { this.setState({ gender: value }); }}
        />
        <TextInput
          placeholder="Pant Size"
          style={styles.authInputs}
          autoCapitalize="none"
          value={pantSize}
          onChangeText={(value) => { this.setState({ pantSize: value }); }}
        />
        <TextInput
          placeholder="Shirt Size"
          style={styles.authInputs}
          autoCapitalize="none"
          value={shirtSize}
          onChangeText={(value) => { this.setState({ shirtSize: value }); }}
        />
        <TextInput
          placeholder="Shoe Size"
          style={styles.authInputs}
          autoCapitalize="none"
          value={shoeSize}
          onChangeText={(value) => { this.setState({ shoeSize: value }); }}
        />
        <View style={styles.signUpButtons} />
        <View style={styles.logInButtons}>
          <TouchableOpacity
            style={styles.largeButton}
            onPress={() => this.handleSignUp()}
            underlayColor="#fff"
          >
            <Text style={styles.largeButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = {
  setAuth: setAuthentication,
  setProf: setProfile,
};

export default connect(null, mapDispatchToProps)(SignUpScreen);
