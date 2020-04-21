import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../constants/Style';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import ScannerScreen from '../screens/ScannerScreen';
import ProductsScreen from '../screens/ProductsScreen';
import CartScreen from '../screens/CartScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UserInfoScreen from '../screens/UserInfoScreen';
import AddressScreen from '../screens/AddressInfoScreen';
import PaymentMethodsScreen from '../screens/PaymentMethodScreen';
import SupportScreen from '../screens/SupportScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Activity: {
      screen: HomeScreen,
      navigationOptions: {
        headerTransparent: true,
        headerStyle: styles.header,
        headerTintColor: '#fff',
        title: 'Activity',
        headerTitleStyle: styles.headerText,
      },
    },
    Scanner: {
      screen: ScannerScreen,
      navigationOptions: {
        headerTransparent: true,
        headerStyle: {
          borderBottomWidth: 0,
        },
        title: 'Scan Barcode',
        headerTitleStyle: {
          color: '#fff',
        },
        headerTintColor: '#fff',
      },
    },
    Product: {
      screen: ProductsScreen,
      navigationOptions: {
        headerTransparent: true,
        headerStyle: styles.header,
        title: 'Product Name',
        headerTitleStyle: {
          color: '#fff',
        },
        headerTintColor: '#fff',
      },
    },
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Scan',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-barcode" size={28} color={tintColor} />
  ),
  tabBarOptions: {
    activeTintColor: '#FCB742',
  }
};

HomeStack.path = '';

const CartStack = createStackNavigator(
  {
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        headerTransparent: true,
        headerStyle: styles.header,
        headerTintColor: '#fff',
        title: 'Shopping Cart',
        headerTitleStyle: styles.headerText,
      },
    },
    Payment: {
      screen: PaymentScreen,
      navigationOptions: {
        headerTransparent: true,
        headerStyle: styles.header,
        headerTintColor: '#fff',
        title: 'Confirm Purchase',
        headerTitleStyle: styles.headerText,
      },
    },
    Confirmation: {
      screen: ConfirmationScreen,
      navigationOptions: {
        headerTransparent: true,
        headerStyle: styles.header,
        headerTintColor: '#fff',
        title: 'Order Confirmation',
        headerTitleStyle: styles.headerText,
      },
    },
  },
  config
);

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-cart" size={28} color={tintColor} />
  ),
  tabBarOptions: {
    activeTintColor: '#FCB742',
  }
};

CartStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        headerTransparent: true,
        headerStyle: styles.header,
        headerTintColor: '#fff',
        title: 'App Settings',
        headerTitleStyle: styles.headerText,
      },
    },
    User: {
      screen: UserInfoScreen,
      navigationOptions: {
        headerTransparent: true,
        headerStyle: styles.header,
        headerTintColor: '#fff',
        title: 'User Info Screen',
        headerTitleStyle: styles.headerText,
      },
    },
    Address: {
      screen: AddressScreen,
      navigationOptions: {
        headerTransparent: true,
        headerStyle: styles.header,
        headerTintColor: '#fff',
        title: 'Address Information',
        headerTitleStyle: styles.headerText,
      },
    },
    PaymentMethods: {
      screen: PaymentMethodsScreen,
      navigationOptions: {
        headerTransparent: true,
        headerStyle: styles.header,
        headerTintColor: '#fff',
        title: 'Payment Methods',
        headerTitleStyle: styles.headerText,
      },
    },
    Support: {
      screen: SupportScreen,
      navigationOptions: {
        headerTransparent: true,
        headerStyle: styles.header,
        headerTintColor: '#fff',
        title: 'Support',
        headerTitleStyle: styles.headerText,
      },
    }
  }
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-person" size={28} color={tintColor} />
  ),
  tabBarOptions: {
    activeTintColor: '#FCB742',
  }
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
