import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../constants/Style';

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>This is the homescreen!</Text>
      <Button
        title="SCAN"
        onPress={() => navigation.navigate('Scanner')}
      />
    </View>
  );
};

export default HomeScreen;
