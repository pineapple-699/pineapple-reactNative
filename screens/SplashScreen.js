import React from 'react';
import { View, StatusBar, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from '../constants/Style';


export class LogInScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
        <StatusBar barStyle='light-content' />
        <Text style={ styles.authHeader }>Welcome to Pineapple!</Text>
        <Text style={styles.authText}>this is the splash screen</Text>
        <Button
          buttonStyle={styles.authButton}
          title="Go to Sign Up page"
          type='clear'
          onPress={() => this.props.navigation.navigate('SignUp')} 
        />
      </View>
    )
  }
}