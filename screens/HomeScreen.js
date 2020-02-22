import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../constants/Style';

class HomeScreen extends React.Component {
  componentDidMount = async() => {
    const rawResponse = await fetch('https://pineapple-rest-api.herokuapp.com/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: "TestDoser", password: 'password'})
    }).catch(err =>{
      console.log('caught it!',err);
    });

    const content = await rawResponse.json();

    console.log(content.message);

  }
  render(){
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>This is the homescreen!</Text>
        <Button
          title="SCAN"
          onPress={() => navigation.navigate('Scanner')}
        />
      </View>
    )};
};

export default HomeScreen;
