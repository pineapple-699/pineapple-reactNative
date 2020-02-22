import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  splashContainer: {
    flex: 1,
    backgroundColor: '#9cf99c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  // Auth screens styles
  splashSection: {
    flex: 0.33,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    paddingBottom: 10,
  },
  authText: {
    fontSize: 24,
    color: '#333',
  },
  buttonsView: {
    flexDirection: 'row',
  },
  authButton: {
    height: 40,
    width: 120,
    margin: 5,
    backgroundColor: '#fff',
  },
  authGoogle: {
    height: 40,
    width: 250,
    margin: 5,
    backgroundColor: '#fff',
  },
  // Splash Screen Style
  splashHeader: {
    flex: 0.50,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  splashInputs: {
    flex: 0.20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashButtons: {
    flex: 0.30,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  // Sign Up Styles
  signUpContainer: {
    flex: 0.33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    paddingLeft: 10,
    margin: 10,
    width: 250,
    height: 50,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default styles;
