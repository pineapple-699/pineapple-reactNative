import React from 'react';
import { View, StatusBar, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from '../constants/Style';


export class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.splashContainer}>
        <StatusBar barStyle='light-content' />
        <Text style={ styles.authText }>This is the sign up screen</Text>
        <Button
          buttonStyle={styles.authButton}
          title="Go to Home Page"
          type='clear'
          onPress={() => this.props.navigation.navigate('Activity')}
        />
        <Button
          buttonStyle={styles.authButton}
          title="Go back"
          type='clear'
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}