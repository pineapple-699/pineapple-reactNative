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
        headerStyle: {
          backgroundColor: '#FCB742',
          borderBottomWidth: 0,
        },
        title: 'Activity',
        headerTitleStyle: {
          color: '#fff',
        },
        headerRight:
  <Icon
    name="ios-barcode"
    size={24}
    onPress={(navigation) => navigation.navigate('Scanner')}
    style={{ color: '#fff', paddingRight: 30 }}
  />
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
        headerStyle: {
          backgroundColor: '#FCB742',
          borderBottomWidth: 0,
        },
        title: 'Product Name',
        headerTitleStyle: {
          color: '#fff',
        },
        headerLeft: null,
      }
    }
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-home" size={28} color={tintColor} />
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
        headerStyle: {
          backgroundColor: '#FCB742',
          borderBottomWidth: 0,
        },
        title: 'Shopping Cart',
        headerTitleStyle: {
          color: '#fff',
        },
      }
    },
    Payment: {
      screen: PaymentScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#FCB742',
          borderBottomWidth: 0,
        },
        title: 'Enter Payment Information',
        headerTitleStyle: {
          color: '#fff',
        },
      }
    },
    Confirmation: {
      screen: ConfirmationScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#FCB742',
          borderBottomWidth: 0,
        },
        title: 'Order Confirmed',
        headerTitleStyle: {
          color: '#fff',
        },
        headerLeft: null,
      }
    }
  },
  config
);

CartStack.navigationOptions = {
  tabBarLabel: 'Shopping Cart',
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
