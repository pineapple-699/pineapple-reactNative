import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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
        header: null,
      }
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
      },
    },
    Product: {
      screen: ProductsScreen,
      navigationOptions: {
        header: null,
      }
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
        header: null,
      }
    },
    Payment: {
      screen: PaymentScreen,
      navigationOptions: {
        header: null,
      }
    },
    Confirmation: {
      screen: ConfirmationScreen,
      navigationOptions: {
        header: null,
      }
    },
  },
  config
);

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-cart" size={28} color={tintColor} />
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
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
        header: null,
      }
    },
    User: {
      screen: UserInfoScreen,
      navigationOptions: {
        header: null,
      }
    },
    Address: {
      screen: AddressScreen,
      navigationOptions: {
        header: null,
      }
    },
    PaymentMethods: {
      screen: PaymentMethodsScreen,
      navigationOptions: {
        header: null,
      }
    },
    Support: {
      screen: SupportScreen,
      navigationOptions: {
        header: null,
      }
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
