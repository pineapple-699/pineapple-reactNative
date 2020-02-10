import React from 'react';
import { View, StatusBar, Image } from 'react-native';
import { styles } from '../constants/Style';
// import firebase from 'firebase';
// import '@firebase/firestore';


export class loadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.checkLoggedIn();
  }

  checkLoggedIn = () => {
    this.props.navigation.navigate('LogIn');


    // firebase.auth().onAuthStateChanged(user => {
    //   this.props.navigation.navigate(user ? 'Activity' : 'LogIn')
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        {/* <Image
          style={{ height: 100, width: 100, resizeMode: 'contain' }}
          source={require('../assets/unicorn.png')}
        /> */}
      </View>
    )
  }
}