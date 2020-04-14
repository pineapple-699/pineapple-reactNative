// General Imports
import React, { useState } from 'react';
import {
  Text,
  View,
  // StatusBar,
  Switch,
} from 'react-native';

// Icon/Style Imports
// import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../constants/Style';

const SettingsScreen = () => {
  // const { navigation } = props;
  const [
    badgingEnabled,
    setBadgingEnabled,
  ] = useState(false);
  const [
    cameraEnabled,
    setCameraEnabled,
  ] = useState(true);
  const [
    cameraRollEnabled,
    setCameraRollEnabled,
  ] = useState(true);
  const badgingSwitch = () => setBadgingEnabled((previousState) => !previousState);
  const cameraSwitch = () => setCameraEnabled((previousState) => !previousState);
  const cameraRollSwitch = () => setCameraRollEnabled((previousState) => !previousState);
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
        <View style={styles.settingsList}>
          <Text style={styles.settingSectionHeader}>APP BADGING</Text>
          <View
            style={styles.settingBackground}
          >
            <Text style={styles.settingText}>Enable App Badging</Text>
            <Switch
              trackColor={{ false: '#C4C4C4', true: '#4CB098' }}
              thumbColor={badgingEnabled ? '#fff' : '#fff'}
              ios_backgroundColor="#fff"
              onValueChange={badgingSwitch}
              style={{ marginRight: 15, }}
              value={badgingEnabled}
            />
          </View>
          <Text style={styles.settingSectionHeader}>CAMERA</Text>
          <View
            style={styles.settingBackground}
          >
            <Text style={styles.settingText}>Allow Camera Access</Text>
            <Switch
              trackColor={{ false: '#C4C4C4', true: '#4CB098' }}
              thumbColor={cameraEnabled ? '#fff' : '#fff'}
              ios_backgroundColor="#fff"
              onValueChange={cameraSwitch}
              style={{ marginRight: 15, }}
              value={cameraEnabled}
            />
          </View>
          <View
            style={styles.settingBackground}
          >
            <Text style={styles.settingText}>Allow Camera Roll Access</Text>
            <Switch
              trackColor={{ false: '#C4C4C4', true: '#4CB098' }}
              thumbColor={cameraRollEnabled ? '#fff' : '#fff'}
              ios_backgroundColor="#fff"
              onValueChange={cameraRollSwitch}
              style={{ marginRight: 15, }}
              value={cameraRollEnabled}
            />
          </View>
          <Text style={styles.cameraMessage}>
            Camera roll is diabled on this device.
            It can be enabled by sliding the toggle above to on.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
