import React from 'react';
import {
  View, StatusBar, Text, TextInput, Image, Alert, TouchableOpacity, KeyboardAvoidingView
} from 'react-native';
import styles from '../constants/Style';

const iconLogo = require('../assets/images/icon-logo.png');

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
    const item = this.state;
    // const { navigation } = this.props;

    if (item.password !== item.cPassword) {
      Alert.alert('Your passwords do not match, please try again with matching passwords.');
    } else {
      const rawResponse = await fetch('https://pineapple-rest-api.herokuapp.com/user/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: item.email,
          address: '',
          password: item.password,
          sex: item.gender,
          shoe_size: item.shoeSize,
          shirt_size: item.shirtSize,
          pant_size_waist: item.pantSize,
          pant_size_length: '30',
          shipping_address:"", 
	        billing_address:""

        })
      });

      const content = await rawResponse.json();
      console.log(content); //eslint-disable-line
    }
  }

  render() {
    const that = this.state;
    // const { navigation } = this.props;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.splashContainer}
      >
        <StatusBar barStyle="dark-content" />
        <View style={styles.signUpHeader}>
          <Image
            style={styles.signUpLogo}
            source={iconLogo}
          />
          <Text style={styles.splashHeaderText}>Sign Up!</Text>
        </View>
        <View style={styles.signUpInputs}>
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
          <TextInput
            placeholder="Confirm Password"
            style={styles.authInputs}
            autoCapitalize="none"
            value={that.cPassword}
            onChangeText={(value) => { this.setState({ cPassword: value }); }}
          />
          <TextInput
            placeholder="Gender"
            style={styles.authInputs}
            autoCapitalize="none"
            value={that.gender}
            onChangeText={(value) => { this.setState({ gender: value }); }}
          />
          <TextInput
            placeholder="Pant Size"
            style={styles.authInputs}
            autoCapitalize="none"
            value={that.pantSize}
            onChangeText={(value) => { this.setState({ pantSize: value }); }}
          />
          <TextInput
            placeholder="Shirt Size"
            style={styles.authInputs}
            autoCapitalize="none"
            value={that.shirtSize}
            onChangeText={(value) => { this.setState({ shirtSize: value }); }}
          />
          <TextInput
            placeholder="Shoe Size"
            style={styles.authInputs}
            autoCapitalize="none"
            value={that.shoeSize}
            onChangeText={(value) => { this.setState({ shoeSize: value }); }}
          />
        </View>
        <View style={styles.signUpButtons}>
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

export default SignUpScreen;
