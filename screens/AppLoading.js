import React from 'react';
import { View, StatusBar } from 'react-native';
import { styles } from '../constants/Style';

export default class loadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.checkLoggedIn();
  }

  checkLoggedIn = () => {
    this.props.navigation.navigate('LogIn');
  }

  render() {
    return (
      <View style={styles.splashContainer}>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}
