// General Imports
import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

// Icon/Style Imports
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from '../constants/Style';

// Redux Imports
import { getAuthInfo } from '../reducers/login';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: '',
      lName: '',
    };
  }

  componentDidMount() {
    const { authInfo } = this.props;
    const name = authInfo.username.split('_');
    const first = name[0].charAt(0).toUpperCase() + name[0].substring(1);
    const last = name[1].charAt(0).toUpperCase() + name[1].substring(1);

    this.setState({
      fName: first,
      lName: last,
    });
  }

  render() {
    const { navigation, authInfo } = this.props;
    const {
      fName,
      lName,
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <StatusBar barStyle="light-content" />
        </View>
        <View style={styles.profileHeaderBackground}>
          <View style={styles.profileHeader}>
            <View style={styles.userInfo}>
              <Text style={styles.usernameText}>
                {fName}
                {' '}
                {lName}
              </Text>
            </View>
          </View>
          <View style={styles.profileOptions}>
            <View style={styles.userEmail}>
              <Text style={styles.userEmailText}>
                {authInfo.username}
                @gmail.com
              </Text>
            </View>
            <View style={styles.settingsBackground}>
              <TouchableOpacity
                style={styles.settingsOptionsBackground}
                onPress={() => navigation.navigate('User')}
                underlayColor="#fff"
              >
                <Text style={styles.settingsOptionsText}>My Information</Text>
                <Icon
                  name="ios-arrow-forward"
                  size={24}
                  style={{ color: '#333', paddingRight: 30 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.settingsOptionsBackground}
                onPress={() => navigation.navigate('Address')}
                underlayColor="#fff"
              >
                <Text style={styles.settingsOptionsText}>Address Information</Text>
                <Icon
                  name="ios-arrow-forward"
                  size={24}
                  style={{ color: '#333', paddingRight: 30 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.settingsOptionsBackground}
                onPress={() => navigation.navigate('PaymentMethods')}
                underlayColor="#fff"
              >
                <Text style={styles.settingsOptionsText}>Payment Information</Text>
                <Icon
                  name="ios-arrow-forward"
                  size={24}
                  style={{ color: '#333', paddingRight: 30 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.settingsOptionsBackground}
                onPress={() => navigation.navigate('Settings')}
                underlayColor="#fff"
              >
                <Text style={styles.settingsOptionsText}>App Settings</Text>
                <Icon
                  name="ios-arrow-forward"
                  size={24}
                  style={{ color: '#333', paddingRight: 30 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.lastSettingsOptionsBackground}
                onPress={() => navigation.navigate('Support')}
                underlayColor="#fff"
              >
                <Text style={styles.settingsOptionsText}>Support</Text>
                <Icon
                  name="ios-arrow-forward"
                  size={24}
                  style={{ color: '#333', paddingRight: 30 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.userPicBackground}>
            <View style={styles.userPic}>
              <Text>Profile IMG</Text>
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

export default connect(mapStateToProps, null)(ProfileScreen);
