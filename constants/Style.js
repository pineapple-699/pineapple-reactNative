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

  // Splash screen styles
  splashHeader: {
    flex: 0.575,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  splashInputs: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashButtons: {
    flex: 0.275,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  splashButtonsView: {
    flexDirection: 'row',
  },
  splashHeaderText: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  splashText: {
    fontSize: 24,
    color: '#333',
  },
  authButton: { // Used on Splash and Sign Up pages
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

  // Sign Up Styles
  signUpHeaderView: {
    flex: 0.375,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  signUpInputView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  signUpButtonView: {
    flex: 0.175,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  authInputs: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#9f9f9f',
    fontSize: 20,
    height: 40,
    width: 250,
    margin: 5,
    paddingHorizontal: 10,
  },
  signUpButton: {
    height: 40,
    width: 250,
    margin: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#9f9f9f',
  }
});

export default styles;
