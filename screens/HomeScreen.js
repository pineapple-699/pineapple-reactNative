// General React Imports
import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
  Image,
  // FlatList
} from 'react-native';

// Componenet Imports
// import ButtonFramer from '../components/ButtonFramer';

// Icon/Style Imports
// import Icon from 'react-native-vector-icons/Ionicons';

// Redux Imports
import { connect } from 'react-redux';
import styles from '../constants/Style';

// Redux Imports
import { getAuthInfo } from '../reducers/login';


const nikeLogo = require('../assets/images/nike-logo.png');
const luluLogo = require('../assets/images/lulu-logo.png');
const targetLogo = require('../assets/images/target-logo.png');

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
      if (data.message !== 'Users scanned products not found in database!') {
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

  // renderContent() {
  //   const {
  //     scannedData
  //   } = this.state;
  //   if (this.state.scanHistory === false) {
  //     return (
  //       <View style={styles.noActivityContent}>
  //         <Icon
  //           name="ios-close-circle"
  //           size={75}
  //           style={styles.activityIcon}
  //         />
  //         <Text>You have not scanned any items yet! Click below to scan an item.</Text>
  //       </View>
  //     );
  //   } else {
  //     return (
  //       <View style={styles.activityContent}>
  //         <FlatList
  //           data={scannedData}
  //           renderItem={({ item }) =>
  //             <View>
  //               <TouchableOpacity
  //                 style={styles.activityProductBackground}
  //                 // onPress={() => navigation.navigate('Profile')}
  //                 underlayColor="#fff"
  //               >
  //                 <View style={{ flex: .35, backgroundColor: 'red' }}>
  //                   <Text style={styles.activityProductHeader}>{item.color}</Text>
  //                 </View>
  //                 <View style={{ flex: .65 }}>
  //                   <Text style={styles.activityProductHeader}>{item.color}</Text>
  //                 </View>
  //               </TouchableOpacity>
  //             </View>
  //             //   <Text style={styles.activityProductHeader}>{item.description}</Text>
  //             // </TouchableOpacity>
  //           }
  //           keyExtractor={item => item.id}
  //         />
  //       </View>
  //     );
  //   }
  // }

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
            <View style={styles.activityHeaderContent}>
              <Text style={styles.activityHeaderText}>
                Hi,
                {' '}
                {name}
                !
              </Text>
              <Text style={styles.activityText}>
                Let’s start by uploading an image of a barcode to scan
                or by simply using our in app scanner!
              </Text>
            </View>
            <View style={styles.activityHeaderButtons}>
              <TouchableOpacity
                style={styles.largeButton}
                onPress={() => navigation.navigate('Scanner')}
                underlayColor="#fff"
              >
                <Text style={styles.largeButtonText}>Scan Barcode</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.largeButtonOutline}
                onPress={() => Alert.alert('This functionality does not work yet')}
                underlayColor="#fff"
              >
                <Text style={styles.largeButtonOutlineText}>Upload Image to Scan</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.activityContent}>
            <View style={styles.activityContentHeader}>
              <Text style={styles.activityContentHeaderText}>Special Offers</Text>
            </View>
            <View style={styles.activityContentCoupons}>
              <View style={styles.couponLogoArea}>
                <Image
                  style={styles.nikeLogo}
                  source={nikeLogo}
                />
              </View>
              <View style={styles.couponDescription}>
                <Text>Free shipping on orders of $99 or more</Text>
              </View>
              <View style={styles.couponButton}>
                <TouchableOpacity
                  style={styles.largeButton}
                  onPress={() => navigation.navigate('Scanner')}
                  underlayColor="#fff"
                >
                  <Text style={styles.smallButtonText}>Scan Items</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.activityContentCoupons}>
              <View style={styles.couponLogoArea}>
                <Image
                  style={styles.luluLogo}
                  source={luluLogo}
                />
              </View>
              <View style={styles.couponDescription}>
                <Text>
                  Buy one pair of Joggers or Leggings,
                  get the second pair half off!
                </Text>
              </View>
              <View style={styles.couponButton}>
                <TouchableOpacity
                  style={styles.largeButton}
                  onPress={() => navigation.navigate('Scanner')}
                  underlayColor="#fff"
                >
                  <Text style={styles.smallButtonText}>Scan Items</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.activityContentCoupons}>
              <View style={styles.couponLogoArea}>
                <Image
                  style={styles.targetLogo}
                  source={targetLogo}
                />
              </View>
              <View style={styles.couponDescription}>
                <Text>$50 store credit with purchase of Samsung SmartTV</Text>
              </View>
              <View style={styles.couponButton}>
                <TouchableOpacity
                  style={styles.largeButton}
                  onPress={() => navigation.navigate('Scanner')}
                  underlayColor="#fff"
                >
                  <Text style={styles.smallButtonText}>Scan Items</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.activityContentCoupons}>
              <View style={styles.couponLogoArea}>
                <Image
                  style={styles.nikeLogo}
                  source={nikeLogo}
                />
              </View>
              <View style={styles.couponDescription}>
                <Text>Up to 25% off Mens and Womens workout apparel.</Text>
              </View>
              <View style={styles.couponButton}>
                <TouchableOpacity
                  style={styles.largeButton}
                  onPress={() => navigation.navigate('Scanner')}
                  underlayColor="#fff"
                >
                  <Text style={styles.smallButtonText}>Scan Items</Text>
                </TouchableOpacity>
              </View>
            </View>
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
