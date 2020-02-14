import React from 'react';
import { Text, View } from 'react-native';
import styles from '../constants/Style';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the settings screen!</Text>
      </View>
    );
  }
}
