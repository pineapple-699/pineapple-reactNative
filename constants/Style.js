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
  appText: {
    fontSize: 17,
    color: '#333',
  },
  linkText: {
    fontSize: 14,
    color: '#333',
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
  },
  // Scanner Screen Styles
  scanScreenMessage: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  // Product Screen Styles
  productImage: {
    flex: 0.4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  productContent: {
    flex: 0.6,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    flex: 0.8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productButtons: {
    flex: 0.2,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  addToCart: {
    marginTop: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '95%',
    color: '#333',
    backgroundColor: '#333',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333',
  },
  addToCartText: {
    color: '#9cf99c',
    fontSize: 17,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  // Cart screen styles
  cartList: {
    flex: 0.9175,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartButtons: {
    flex: 0.0825,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  // Payment screen styles
  paymentModal: {
    flex: 0.5,
    width: '75%',
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default styles;
