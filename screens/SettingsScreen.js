import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { styles } from '../constants/Style';

export class SettingsScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the homescreen!</Text>
      </View>
    );
  }
}
