import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import {
  Platform, StatusBar, StyleSheet, View
} from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import StorybookUIRoot from './storybook';
import { Provider } from 'react-redux';
import configureStore from './configure-store';

import AppNavigator from './navigation/AppNavigator';

const robotDevImage = require('./assets/images/robot-dev.png');
const robotProdImage = require('./assets/images/robot-prod.png');
const monoFont = require('./assets/fonts/SpaceMono-Regular.ttf');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const SHOW_STORYBOOK = true;

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([robotDevImage, robotProdImage]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': monoFont,
    }),
  ]);
}

function handleLoadingError(error) {
  // console.warn(error);
  return error;
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default function App({ skipLoadingScreen }) {
  App.propTypes = {
    skipLoadingScreen: PropTypes.bool.isRequired,
  };

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const store = configureStore();

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }

  if (SHOW_STORYBOOK) {
    return (
      <StorybookUIRoot
      />
    );
  }
  return (
    <View style={styles.container}>
      <Provider store={store}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </Provider>
    </View>
  );
}
