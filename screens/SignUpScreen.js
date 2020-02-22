import React from 'react';
import {
  View, StatusBar, Text, TextInput
} from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../constants/Style';

const SignUpScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.splashContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.signUpContainer}>
        <Text style={styles.authText}>This is a change!</Text>
      </View>
      <View style={styles.signUpContainer}>
        <TextInput
          placeholder="Placeholder"
          style={styles.signUpText}
        />
        <TextInput
          placeholder="Placeholder"
          style={styles.signUpText}
        />
        <TextInput
          placeholder="Placeholder"
          style={styles.signUpText}
        />
        <TextInput
          placeholder="Placeholder"
          style={styles.signUpText}
        />
        <TextInput
          placeholder="Placeholder"
          style={styles.signUpText}
        />
        <TextInput
          placeholder="Placeholder"
          style={styles.signUpText}
        />
      </View>
      <View style={styles.signUpContainer}>
        <Button
          buttonStyle={styles.authButton}
          title="Sign Up"
          type="clear"
          onPress={() => navigation.navigate('Activity')}
        />
        <Button
          buttonStyle={styles.authButton}
          title="Go back"
          type="clear"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
