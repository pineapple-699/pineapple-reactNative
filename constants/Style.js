import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // General Styles
  splashContainer: {
    flex: 1,
    backgroundColor: '#FEF0D7',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 0.094,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#FCB742',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 0.916,
    width: '100%',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBody: {
    flex: 0.916,
    width: '100%',
    backgroundColor: '#eee',
  },
  headerText: {
    fontSize: 21,
    fontWeight: '600',
    color: '#fff',
    marginTop: 20,
  },
  headerTextWithBackButton: {
    fontSize: 21,
    fontWeight: '600',
    color: '#fff',
    marginTop: 20,
    marginRight: 160,
  },
  appSectionHeader: {
    fontSize: 14,
    marginVertical: 2,
    fontWeight: 'bold',
    color: '#333',
  },
  appText: {
    fontSize: 17,
    color: '#333',
  },
  linkText: {
    fontSize: 12,
    marginHorizontal: 10,
    color: '#333',
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
  smallButton: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '25%',
    backgroundColor: '#FCB742',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FCB742',
    shadowColor: 'rgba(0,0,0, .5)', // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, // IOS
    elevation: 4, // Android
  },
  smallButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10
  },
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
    shadowRadius: 2, // IOS
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
    shadowRadius: 2, // IOS
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
  largeButtonOutlineText: {
    color: '#FCB742',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  // Splash Screen Styles
  splashHeader: {
    flex: 0.65,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  splashCTA: {
    flex: 0.25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  splashButtons: {
    flex: 0.1,
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
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  splashLink: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FCB742',
    marginBottom: 10,
  },

  // Log In Screen Styles
  logInHeader: {
    flex: 0.58,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logInInputs: {
    flex: 0.3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logInButtons: {
    flex: 0.12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  logInLogo: {
    height: '50%',
    width: '28%',
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
  signUpLogo: {
    margin: 10,
    height: 110,
    width: 62,
  },

  // Activity Page Styles

  activityHeader: {
    flex: 0.4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: 'rgba(0,0,0, .5)', // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, // IOS
    elevation: 4, // Android
  },
  activityHeaderContent: {
    flex: 0.7,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#FEF0D7',
  },
  activityHeaderButtons: {
    flex: 0.3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    backgroundColor: '#FEF0D7',
  },
  activityHeaderText: {
    fontSize: 32,
    fontWeight: '500',
    marginLeft: 15,
    marginTop: 30,
  },
  activityText: {
    fontSize: 18,
    marginHorizontal: 15,
    marginVertical: 30,
  },
  activityContent: {
    flex: 0.6,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 5,
    shadowColor: 'rgba(0,0,0, .5)', // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, // IOS
    elevation: 4, // Android
  },
  activityContentHeader: {
    flex: 0.08,
    width: '95%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 15,

  },
  activityContentHeaderText: {
    fontSize: 24,
    fontWeight: '500',
    paddingBottom: 15,
  },
  activityContentCoupons: {
    flex: 0.23,
    flexDirection: 'row',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
  },
  couponLogoArea: {
    flex: 0.175,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nikeLogo: {
    width: '90%',
    height: undefined,
    aspectRatio: 1024 / 534
  },
  luluLogo: {
    width: '90%',
    height: undefined,
    aspectRatio: 1024 / 1024
  },
  targetLogo: {
    width: '90%',
    height: undefined,
    aspectRatio: 771 / 1024
  },
  couponDescription: {
    flex: 0.5,
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  couponButton: {
    flex: 0.325,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // noActivityContent: {
  //   flex: 0.5,
  //   width: '100%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // activityIcon: {
  //   color: '#FCB742',
  // },
  // activityProductBackground: {
  //   width: '100%',
  //   flexDirection: 'row',
  //   backgroundColor: '#fff',
  //   borderBottomWidth: 1,
  //   borderColor: '#eee',
  // },
  // activityProductImage: {
  //   flex: .25,
  // },
  // activityProductInfo: {
  //   flex: .75,
  // },
  // activityProductHeader: {
  //   fontSize: 20,
  //   fontWeight: '700',
  //   marginHorizontal: 15,
  // },

  // Scanner Screen Styles
  scanScreenMessage: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },

  // Cart Screen Styles
  noCartContent: {
    flex: 0.9,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartContent: {
    flex: 0.9,
    width: '100%',
  },
  cartItem: {
    flex: 1,
    height: 215,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
    paddingHorizontal: 15,
  },
  cartItemInfo: {
    flex: 0.8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  itemButtons: {
    flex: 0.2,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  itemImage: {
    flex: 0.4,
  },
  itemInfo: {
    flex: 0.6,
  },
  itemHeader: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemPrice: {
    fontSize: 16,
    marginVertical: 10,
  },
  itemAttribute: {
    fontSize: 14,
    color: '#c4c4c4'
  },
  cartButtons: {
    flex: 0.1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    color: '#FCB742'
  },

  // Confirm Purchase Screen Styles
  paymentOptionsList: {
    flex: 0.9,
    height: '100%',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  // Confirmation Screen Styles
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
  },

  // Profile Screen Styles
  profileHeaderBackground: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FCB742',
    shadowColor: 'rgba(0,0,0, .5)', // IOS
  },
  profileHeader: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userPicBackground: {
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'absolute',
    marginTop: 15,
    marginLeft: 15,
  },
  userPic: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 100,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#333',
  },
  userInfo: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: 10,
    marginLeft: 130,
  },
  usernameText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
  },
  profileOptions: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  userEmail: {
    flex: 0.05,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 260,
  },
  userEmailText: {
    fontSize: 14,
    fontWeight: '500'
  },
  settingsBackground: {
    flex: 0.95,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
  },
  settingsOptionsBackground: {
    flexDirection: 'row',
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  lastSettingsOptionsBackground: {
    flexDirection: 'row',
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
    shadowColor: 'rgba(0,0,0, .5)', // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, // IOS
    elevation: 4, // Android
  },
  settingsOptionsText: {
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 15,
  },

  // Setting Screen Styles
  settingBackground: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  settingsList: {
    height: '100%',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  settingText: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  settingSectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 15,
  },
  cameraMessage: {
    fontSize: 12,
    color: '#B4B4B4',
    marginHorizontal: 15,
    marginTop: 10,
  },

  // Address/Billing screen styles
  optionsList: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  addressBackground: {
    flexDirection: 'row',
    width: '100%',
    height: '12.5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  addressHeaderText: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 15,
  },
  addressSubHeaderText: {
    fontSize: 14,
    color: '#c4c4c4',
    marginHorizontal: 15,
  },
  addAddressBackground: {
    flexDirection: 'row',
    width: '100%',
    height: '7.5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  addAddressText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FCB742',
    marginHorizontal: 15,
  },

  // ######
  // BELOW NEEDS TO BE EDITED
  // ######

  // Product Screen Styles
  productHeader: {
    flex: 0.35,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#222',
    borderBottomWidth: 1,
  },
  productImage: {
    height: '90%',
    width: '90%',
    resizeMode: 'contain'
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
});

export default styles;
