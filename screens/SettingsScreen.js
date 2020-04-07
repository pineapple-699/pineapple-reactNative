// General Imports
import React from 'react';
import {
  Text,
  View,
  // StatusBar,
  TouchableOpacity,
} from 'react-native';

// Icon/Style Imports
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../constants/Style';

const SettingsScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Icon
          name="ios-arrow-back"
          size={24}
          onPress={() => navigation.goBack()}
          style={{ color: '#fff', paddingRight: 30, marginTop: 20, marginRight: 122, }}
        /> */}
        <Text style={styles.headerText}>App Settings</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.settingSectionHeader}>APP BADGING</Text>
        <TouchableOpacity
          style={styles.settingBackground}
          onPress={() => navigation.navigate('PaymentMethods')}
          underlayColor="#fff"
        >
          <Text style={styles.settingText}>Enable App Badging</Text>
          <Icon
            name="ios-arrow-forward"
            size={24}
            style={{ color: '#333', paddingRight: 30 }}
          />
        </TouchableOpacity>
        <Text style={styles.settingSectionHeader}>CAMERA</Text>
        <TouchableOpacity
          style={styles.settingBackground}
          onPress={() => navigation.navigate('PaymentMethods')}
          underlayColor="#fff"
        >
          <Text style={styles.settingText}>Allow Camera Access</Text>
          <Icon
            name="ios-arrow-forward"
            size={24}
            style={{ color: '#333', paddingRight: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingBackground}
          onPress={() => navigation.navigate('PaymentMethods')}
          underlayColor="#fff"
        >
          <Text style={styles.settingText}>Allow Camera Roll Access</Text>
          <Icon
            name="ios-arrow-forward"
            size={24}
            style={{ color: '#333', paddingRight: 30 }}
          />
        </TouchableOpacity>
        <Text style={styles.cameraMessage}>
          Camera roll is diabled on this device.
          It can be enabled by sliding the toggle above to on.
        </Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
