import React from 'react';
import { View, StatusBar, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from '../constants/Style';


export class LogInScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  handleGoogleSignIn() {
    alert('This should log you in, but it is not working right now');
  }

  render() {
    return (
      <View style={styles.splashContainer}>
        <StatusBar barStyle='light-content' />
        <Text style={ styles.authHeader }>Welcome to Pineapple!</Text>
        <Text style={styles.authText}>this is the splash screen</Text>
        <Button
          buttonStyle={styles.authButton}
          title="Go to Sign Up page"
          type='clear'
          onPress={() => this.props.navigation.navigate('SignUp')} 
        />
        <Button
          buttonStyle={styles.authButton}
          title="Log In with Google"
          type='clear'
          onPress={() => this.handleGoogleSignIn()}
        />
      </View>
    )
  }
}

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