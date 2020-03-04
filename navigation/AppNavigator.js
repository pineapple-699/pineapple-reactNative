// General Imports
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Tab Nav Import
import MainTabNavigator from './MainTabNavigator';

// Screen Imports
import loadingScreen from '../screens/AppLoading';
import LogInScreen from '../screens/SplashScreen';
import SignUpScreen from '../screens/SignUpScreen';

const LoadNavigator = createStackNavigator(
  {
    Home: {
      screen: loadingScreen,
      navigationOptions: {
        header: null,
      }
    }
  },
  {
    initialRouteName: 'Home',
  }
);

const StackNavigator = createStackNavigator(
  {
    LogIn: {
      screen: LogInScreen,
      navigationOptions: {
        header: null,
        // headerStyle: {
        //   backgroundColor: '#9cf99c',
        //   borderBottomWidth: 0,
        // },
        headerBackTitle: 'Log In',
      }
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#9cf99c',
          borderBottomWidth: 0,
        },
      }
    }
  }
);

const App = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Load: {
    screen: LoadNavigator,
  },
  Auth: {
    screen: StackNavigator,
  },
  Main: {
    screen: MainTabNavigator,
  }
});

export default createAppContainer(App);
