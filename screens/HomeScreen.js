// General React Imports
import React from 'react';
import {
  Text, View, StatusBar, TouchableOpacity, FlatList
} from 'react-native';

// Componenet Imports
// import ButtonFramer from '../components/ButtonFramer';

// Icon/Style Imports
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../constants/Style';

// Redux Imports
import { connect } from 'react-redux';
import { getAuthInfo } from '../reducers/login';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scanHistory: false,
      scannedData: [],
      name: ''
    };
  }

  componentDidMount = async () => {
    const { authInfo } = this.props;
    // const name = authInfo.username.split('_');
    // const first = name[0].charAt(0).toUpperCase() + name[0].substring(1);

    this.setState({
      name: authInfo.username,
    });

    const rawResponse = await fetch(`https://pineapple-rest-api.herokuapp.com/history/scan/${authInfo.user_id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });

    await rawResponse.json().then((data) => {
      if (data.message != 'Users scanned products not found in database!') {
        this.setState({
          scanHistory: true
        });
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
      }
    });

    this.setState(this.state);
  }

  renderContent() {
    const { 
      scannedData
    } = this.state;
    if (this.state.scanHistory === false) {
      return (
        <View style={styles.noActivityContent}>
          <Icon
            name="ios-close-circle"
            size={75}
            style={styles.activityIcon}
          />
          <Text>You have not scanned any items yet! Click below to scan an item.</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.activityContent}>
          <FlatList
            data={scannedData}
            renderItem={({ item }) =>
              <View>
                <TouchableOpacity
                  style={styles.activityProductBackground}
                  // onPress={() => navigation.navigate('Profile')}
                  underlayColor="#fff"
                >
                  <View style={{ flex: .35, backgroundColor: 'red' }}>
                    <Text style={styles.activityProductHeader}>{item.color}</Text>
                  </View>
                  <View style={{ flex: .65 }}>
                    <Text style={styles.activityProductHeader}>{item.color}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              //   <Text style={styles.activityProductHeader}>{item.description}</Text>
              // </TouchableOpacity>
            }
            keyExtractor={item => item.id}
          />
        </View>
      );
    }
  }

  render() {
    const {
      navigation
    } = this.props;
    const { 
      name 
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <StatusBar barStyle="light-content" />
          <Text style={styles.headerText}>Activity</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.activityHeader}>
            <Text style={styles.activityHeaderText}>
              Hi, {name}!
            </Text>
          </View>
          {this.renderContent()}
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
