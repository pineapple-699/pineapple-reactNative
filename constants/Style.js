import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // General Styles
  splashContainer: {
    flex: 1,
    backgroundColor: '#FEF0D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpLogo: {
    margin: 10,
    height: 110,
    width: 62,
  },
  appSectionHeader: {
    fontSize: 14,
    marginVertical: 2,
    fontWeight: 'bold',
    color: '#222',
  },
  appText: {
    fontSize: 17,
    color: '#222',
  },
  linkText: {
    fontSize: 12,
    marginHorizontal: 10,
    color: '#222',
  },
  authInputs: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#9f9f9f',
    fontSize: 20,
    height: 40,
    width: '60%',
    marginVertical: 5,
    paddingHorizontal: 10,
  },

  // Button Style
  largeButton: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '95%',
    backgroundColor: '#FCB742',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FCB742',
    shadowColor: 'rgba(0,0,0, .5)', // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
    elevation: 4, // Android
  },
  largeButtonOutline: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FCB742',
    shadowColor: 'rgba(0,0,0, .5)', // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
    elevation: 4, // Android
  },
  largeButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  largeButtonTextOutline: {
    color: '#FCB742',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  // Splash Screen Styles
  splashHeader: {
    flex: .55,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  splashCTA: {
    flex: .35,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  splashButtons: {
    flex: .1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  splashLogo: {
    marginVertical: 10,
  },
  splashHeaderText: {
    fontSize: 42,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 10,
  },
  splashText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },

  // Log In Screen Styles
  logInHeader: {
    flex: .58,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logInInputs: {
    flex: .3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logInButtons: {
    flex: .12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  LogInLogo: {
    marginVertical: 10,
  },

  // Sign Up Styles
  signUpHeader: {
    flex: 0.385,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  signUpInputs: {
    flex: 0.55,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  signUpButtons: {
    flex: 0.065,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },

  // ######
  // BELOW NEEDS TO BE EDITED
  // ######

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
    flex: 0.35,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
    borderBottomColor: '#222',
    borderBottomWidth: 1,
  },
  productContent: {
    flex: 0.65,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    flex: 0.75,
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
    flex: 0.6,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  productAttributes: {
    flex: 0.4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  productOptions: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productDropdown: {
    width: '47.5%'
  },
  productAttribute: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  productButtons: {
    flex: 0.25,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 10,
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
    marginTop: 10,
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
    marginVertical: 10,
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
