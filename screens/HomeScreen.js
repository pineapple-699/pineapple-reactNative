// General React Imports
import React from 'react';
import {
  Text, View, StatusBar, TouchableOpacity, FlatList
} from 'react-native';

// Componenet Imports
// import ButtonFramer from '../components/ButtonFramer';

// Icon/Style Imports
import { connect } from 'react-redux';
import styles from '../constants/Style';

// Redux Imports
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
        <View style={styles.activity}>
          <Text>
            Welcome
            {` ${authInfo.username} `}
            !
          </Text>
        </View>
        <FlatList
          data={scannedData}
          renderItem={({ item }) => <Item title={item.description} />}
          keyExtractor={(item) => parseInt(item.id)}
        />
        <View style={styles.activityButton}>
          <TouchableOpacity
            style={styles.largeButton}
            onPress={() => navigation.navigate('Scanner')}
            underlayColor="#fff"
          >
            <Text style={styles.largeButtonText}>Scan an Item</Text>
          </TouchableOpacity>
          {/* <ButtonFramer
          onPress={() => navigation.navigate('Scanner')}
          text="SCAN"
          primary
          /> */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  authInfo: getAuthInfo(state)
});

export default connect(mapStateToProps)(HomeScreen);
