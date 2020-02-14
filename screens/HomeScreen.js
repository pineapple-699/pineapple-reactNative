import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles  from '../constants/Style';

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the homescreen!</Text>
        <Button
          title="SCAN"
          onPress={() => this.props.navigation.navigate('Scanner')}
        />
      </View>
    );
  }
}
