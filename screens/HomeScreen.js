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

// function Item({ title }) {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
// }

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scannedData: [],
      fName: ''
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

    const name = authInfo.username.split('_');
    const first = name[0].charAt(0).toUpperCase() + name[0].substring(1);

    this.setState({
      fName: first,
    });

    this.setState(this.state);
  }

  render() {
    const {
      navigation,
      // authInfo
    } = this.props;
    const { fName, scannedData } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <StatusBar barStyle="light-content" />
          <Text style={styles.headerText}>Activity</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.activityHeader}>
            <Text style={styles.activityHeaderText}>
              {' '}
              Hi,
              {fName}
              !
            </Text>
          </View>
          <View style={styles.activityContent}>
            <FlatList
              data={scannedData}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.activityProductBackground}
                  onPress={() => navigation.navigate('Profile')}
                  underlayColor="#fff"
                >
                  <Text style={styles.largeButtonOutlineText}>{item.desciption}</Text>
                </TouchableOpacity>
              )}
              // keyExtractor={(item) => parseInt(item.id).toString()}
            />
          </View>
          <View style={styles.activityButton}>
            <TouchableOpacity
              style={styles.largeButton}
              onPress={() => navigation.navigate('Scanner')}
              underlayColor="#fff"
            >
              <Text style={styles.largeButtonText}>Scan Barcode</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.largeButtonOutline}
              onPress={() => navigation.navigate('Scanner')}
              underlayColor="#fff"
            >
              <Text style={styles.largeButtonOutlineText}>Upload Image to Scan</Text>
            </TouchableOpacity>
            {/* <ButtonFramer
          onPress={() => navigation.navigate('Scanner')}
          text="SCAN"
          primary
          /> */}
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  authInfo: getAuthInfo(state)
});

export default connect(mapStateToProps)(HomeScreen);
