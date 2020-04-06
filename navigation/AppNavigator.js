// General Imports
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Tab Nav Import
import MainTabNavigator from './MainTabNavigator';

// Screen Imports
import loadingScreen from '../screens/AppLoading';
import SplashScreen from '../screens/SplashScreen';
import LogInScreen from '../screens/LogInScreen';
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
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
        // headerStyle: {
        //   backgroundColor: '#FCB742',
        //   borderBottomWidth: 0,
        // },
        headerBackTitle: 'Log In',
      }
    },LogIn: {
      screen: LogInScreen,
      navigationOptions: {
        header: null,
        // headerStyle: {
        //   backgroundColor: '#FCB742',
        //   borderBottomWidth: 0,
        // },
        headerBackTitle: 'Log In',
      }
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        header: null,
        // headerStyle: {
        //   backgroundColor: '#FCB742',
        //   borderBottomWidth: 0,
        // },
        headerBackTitle: 'Log In',
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
