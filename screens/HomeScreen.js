import React from 'react';
import {
  Text, View, StatusBar, FlatList
} from 'react-native';
import { connect } from 'react-redux';
import ButtonFramer from '../components/ButtonFramer';

import styles from '../constants/Style';

import { getAuthInfo } from '../reducers/login';

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scannedData: []
    };
  }

  componentDidMount = async () => {
    const { authInfo } = this.props;

    const rawResponse = await fetch(`https://pineapple-rest-api.herokuapp.com/history/scan/${authInfo.user_id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });

    await rawResponse.json().then((data) => {
      data.scan_history.map(async (dat) => {
        const newRawResponse = await fetch(`https://pineapple-rest-api.herokuapp.com/product/${dat.id}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        });
        await newRawResponse.json().then((newDat) => {
          this.setState((previousState) => ({
            scannedData: [...previousState.scannedData, newDat.product[0]]
          }));
        });
      });
    });

    this.setState(this.state);
  }

  render() {
    const { navigation, authInfo } = this.props;
    const { scannedData } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text>
          Welcome
          {` ${authInfo.firstName} ${authInfo.lastName}`}
          !
        </Text>
        <FlatList
          data={scannedData}
          renderItem={({ item }) => <Item title={item.description} />}
          keyExtractor={(item) => Number(item.id)}
        />
        <ButtonFramer
          onPress={() => navigation.navigate('Scanner')}
          text="SCAN"
          primary
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  authInfo: getAuthInfo(state)
});

export default connect(mapStateToProps)(HomeScreen);
