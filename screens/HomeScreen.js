import React from 'react';
import {
  Text, View, Button, StatusBar
} from 'react-native';
import { connect } from 'react-redux';

import styles from '../constants/Style';

import { getAuthInfo } from '../reducers/login';

class HomeScreen extends React.Component {
  componentDidMount = async () => {
    const nav = this.props;
    const email = nav.navigation.getParam('email');
    const password = nav.navigation.getParam('password');
    const gender = nav.navigation.getParam('gender');
    const pantSize = nav.navigation.getParam('pantSize');
    const shirtSize = nav.navigation.getParam('shirtSize');
    const shoeSize = nav.navigation.getParam('shoeSize');

    // console.log(email);
    // console.log(password);
    // console.log(gender);
    // console.log(pantSize);
    // console.log(shirtSize);
    // console.log(shoeSize);

    // const rawResponse = await fetch('https://pineapple-rest-api.herokuapp.com/register', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     username: email,
    //     address: 'Ann Arbor',
    //     password,
    //     sex: gender,
    //     shoe_size: shoeSize,
    //     shirt_size: shirtSize,
    //     pant_size_waist: pantSize,
    //     pant_size_length: 'N/A'
    //   })
    // });

    // const content = await rawResponse.json();

    // console.log(content.message); //eslint-disable-line
  }

  render() {
    const { navigation, authInfo } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text>
          Welcome
          {` ${authInfo.firstName} ${authInfo.lastName}`}
          !
        </Text>
        <Button
          title="SCAN"
          onPress={() => navigation.navigate('Scanner')}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  authInfo: getAuthInfo(state)
});

export default connect(mapStateToProps, null)(HomeScreen);
