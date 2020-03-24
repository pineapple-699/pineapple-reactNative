import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  splashContainer: {
    flex: 1,
    backgroundColor: '#FCB742',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashLogo: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signUpLogo: {
    margin: 10,
    height: 110,
    width: 62,
    alignItems: 'center',
    justifyContent: 'center'
  },
  appSectionHeader: {
    fontSize: 17,
    marginVertical: 2,
    fontWeight: 'bold',
    color: '#222',
  },
  appText: {
    fontSize: 17,
    color: '#222',
  },
  linkText: {
    fontSize: 14,
    marginHorizontal: 10,
    color: '#222',
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
    color: '#fff',
  },
  splashText: {
    fontSize: 24,
    color: '#fff',
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
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  signUpInputView: {
    flex: 0.65,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  signUpButtonView: {
    flex: 0.15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'red',
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
    borderBottomColor: '#222',
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
  productName: {
    flex: 0.2,
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  productAbout: {
    flex: 0.8,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDescription: {
    flex: 0.35,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  productAttributes: {
    flex: 0.65,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  productButtons: {
    flex: 0.2,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  // Add to cart/Confirm purchase/Nav home buttons
  largeButton: {
    marginTop: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '95%',
    backgroundColor: '#FCB742',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FCB742',
  },
  largeButtonText: {
    color: '#fff',
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
  cartItem: {
    flex: 0.2,
    flexDirection: 'row',
    paddingTop: 10,
    width: '95%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cartEmpty: {
    flex: 0.8,
    backgroundColor: 'orange',
  },
  cartImage: {
    flex: 0.35,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
    borderColor: '#222',
    borderWidth: 1,
  },
  cartInfo: {
    flex: 0.65,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cartSectionHeader: {
    fontSize: 17,
    marginVertical: 2,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: '#222',
  },
  cartButtons: {
    flex: 0.0825,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  // Payment screen styles

  // paymentModal: {
  //   flex: 0.5,
  //   width: '75%',
  //   backgroundColor: '#222',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // modalContent: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }

  // Confirmation Screen Styles:
  confirmationIcon: {
    color: '#FCB742',
  },
  orderNumText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222',
    margin: 10,
  },
  thankYouText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#222',
    margin: 10,
  },
  confirmationText: {
    fontSize: 17,
    textAlign: 'center',
    color: '#222',
    margin: 10,
  }

});

export default styles;
