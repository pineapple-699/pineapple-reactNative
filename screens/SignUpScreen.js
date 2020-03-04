import React from 'react';
import {
  View, StatusBar, Text, TextInput, Image
} from 'react-native';
import { Button } from 'react-native-elements';
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

  render() {
    const that = this.state;
    const nav = this.props;
    return (
      <View style={styles.splashContainer}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.signUpHeaderView}>
          <Image
            style={styles.signUpLogo}
            source={iconLogo}
          />
          <Text style={styles.splashHeaderText}>Sign Up!</Text>
        </View>
        <View style={styles.signUpInputView}>
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
        <View style={styles.signUpButtonView}>
          <Button
            buttonStyle={styles.signUpButton}
            title="Sign Up"
            type="clear"
            onPress={() => nav.navigation.navigate('Activity', {
              email: that.email,
              password: that.password,
              gender: that.gender,
              pantSize: that.pantSize,
              shirtSize: that.shirtSize,
              shoeSize: that.shoeSize,
            })}
          />
        </View>
      </View>
    );
  }
}

export default SignUpScreen;
