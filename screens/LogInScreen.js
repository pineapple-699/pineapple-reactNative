import React from 'react';
import {
  View, StatusBar, Text, Alert, Image, TextInput, KeyboardAvoidingView, TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../constants/Style';

// // Redux
// import { connect } from 'react-redux';
// import { setAuthentication, setProfile } from '../reducers/login';
// import { setProducts } from '../reducers/api';

const iconLogo = require('../assets/images/icon-logo.png');

class LogInScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  // componentDidMount() {
  //   const {
  //     setAuth, setProf, setProd
  //   } = this.props;

  //   const loggedInUser = {
  //     user_id: '0',
  //     username: 'Admin',
  //     email: 'admin@gmail.com',
  //     first_name: 'Admin',
  //     last_name: 'Administrator',
  //   };


  //   setProf(loggedInUser);
  //   setAuth(true);
  //   setProd();
  // }

  handleLogIn = async () => {
    // http://127.0.0.1:5000/users/name
    const user = this.state;
    const { navigation } = this.props;

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
          navigation.navigate('Activity');
        }
      });
  }

  render() {
    const that = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.splashContainer}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.logInHeader}>
          <Image
            style={styles.logInLogo}
            source={iconLogo}
          />
          <Text style={styles.splashHeaderText}>Log In</Text>
        </View>
        <View style={styles.logInInputs}>
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
        <View style={styles.logInButtons}>
          <TouchableOpacity
            style={styles.largeButton}
            onPress={() => this.handleLogIn()}
            underlayColor="#fff"
          >
            <Text style={styles.largeButtonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.largeButtonOutline}
            onPress={() => navigation.navigate('Activity')}
            underlayColor="#fff"
          >
            <Text style={styles.largeButtonTextOutline}>Log In With Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// const mapDispatchToProps = {
//   setAuth: setAuthentication,
//   setProf: setProfile,
//   setProd: setProducts
// };

// export default connect(null, mapDispatchToProps)(LogInScreen);

export default LogInScreen;
