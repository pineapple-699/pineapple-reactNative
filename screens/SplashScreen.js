import React from 'react';
import {
  View, StatusBar, Text, Alert, Image, TextInput
} from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../constants/Style';

const iconLogo = require('../assets/images/icon-logo.png');

const LogInScreen = (props) => {
  const { navigation } = props;

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

export default LogInScreen;

// export class LogInScreen extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//     }
//   }

//   handleGoogleLogIn() {
//     alert('This should log you in, but it is not working right now');
//   }

//   render() {
//     return (
//       <View style={styles.splashContainer}>
//         <StatusBar barStyle='light-content' />
//         <View style={styles.splashSection}>
//           <Text style={styles.authHeader}>Welcome to Pineapple!</Text>
//           <Text style={styles.authText}>Please log in or sign up!</Text>
//         </View>
//         <View style={styles.splashSection}>
//           <TextInput
//             placeholder="Email"
//             style={styles.logInText}
//             onChangeText={(value) => { this.setState({ email: value }) }}
//             value={this.state.email}
//           />
//           <TextInput
//             placeholder="Password"
//             style={styles.logInText}
//             onChangeText={(value) => { this.setState({ password: value }) }}
//             value={this.state.password}
//           />
//         </View>
//         <View style={styles.splashSection}>
//           <View>
//             <Button
//               buttonStyle={styles.authButton}
//               title="Log In"
//               type='clear'
//               onPress={() => this.handleGoogleLogIn()}
//             />
//             <Button
//               buttonStyle={styles.authButton}
//               title="SignUp"
//               type='clear'
//               onPress={() => this.props.navigation.navigate('SignUp')}
//             />
//           </View>
//           <Button
//             buttonStyle={styles.authGoogle}
//             title="Log In with Google"
//             type='clear'
//             onPress={() => this.handleGoogleLogIn()}
//           />
//         </View>
//       </View>
//     )
//   }
// }
