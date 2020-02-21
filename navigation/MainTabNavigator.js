import React from 'react';
import { Platform, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabBarIcon from '../components/TabBarIcon';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import ScannerScreen from '../screens/ScannerScreen';
import ProductsScreen from '../screens/ProductsScreen';
import CartScreen from '../screens/CartScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
// Import LinksScreen from '../screens/LinksScreen';

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
        header: (navigation) => ({
          headerRight: 
          <Icon
            name="barcode"
            size={24}
            onPress={() => Alert.alert('This is a button')}
            style={{ paddingRight: 30 }}
          />
        })
      }
    },
    Scanner: {
      screen: ScannerScreen,
      navigationOptions: {
        title: 'Scan Barcode',
      }
    },
    Product: {
      screen: ProductsScreen,
      navigationOptions: {
        title: 'Product Name'
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
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        title: 'Shopping Cart',
      }
    },
    Payment: {
      screen: PaymentScreen,
      navigationOptions: {
        title: 'Enter Payment Information'
      }
    },
    Confirmation: {
      screen: ConfirmationScreen,
      navigationOptions: {
        title: 'Confirm Order',
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
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
        headerRight:
  <Icon
    name="cog"
    size={24}
    style={{ paddingRight: 30 }}
  />
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings'
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
