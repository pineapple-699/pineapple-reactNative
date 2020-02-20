import React from 'react';
import { Platform, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
// import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ScannerScreen from '../screens/ScannerScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Activity: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      }
    },
    Scanner: {
      screen: ScannerScreen,
      navigationOptions: {
        title: 'Scan Barcode',
      }
    }
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const CartStack = createStackNavigator(
  {
    Activity: {
      screen: CartScreen,
      navigationOptions: {
        title: 'Shopping Cart',
      }
    }
  },
  config
);

CartStack.navigationOptions = {
  tabBarLabel: 'Shopping Cart',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

CartStack.path = '';

// const LinksStack = createStackNavigator(
//   {
//     Links: {
//       screen: LinksScreen,
//       navigationOptions: {
//         title: 'Links',
//       }
//     }
//   },
//   config
// );

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
//   ),
// };

// LinksStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Settings: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
        headerRight:
  <Icon
    name="cog"
    size={24}
    style={{ paddingRight: 30 }}
    // onPress={() => Alert.alert('Log Out?', 'Are you sure you want to log out of Open Container?',
    //   [
    //     {
    //       text: 'No',
    //       style: 'default'
    //     },
    //     {
    //       text: 'Yes',
    //       onPress: () => this.props.navigation.navigate('Load'),
    //       style: 'cancel'
    //     }
    //   ])}
  />
      }
    }
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CartStack,
  // ProductStack,
  // LinksStack,
  ProfileStack,
  // SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
