import React from 'react';
import {
  Text, View, TouchableOpacity, TextInput
} from 'react-native';
import styles from '../constants/Style';

class PaymentScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameOnCard: '',
      cardNumber: '',
      expDate: '',
      threeDigitCode: '',
      name: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
    };
  }

  render() {
    const {
      nameOnCard,
      cardNumber,
      expDate,
      threeDigitCode,
      name,
      address,
      city,
      state,
      zipCode,
    } = this.state;

    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.cartList}>
          <Text style={styles.appSectionHeader}>Payment Information</Text>
          <TextInput
            placeholder="Name on Card"
            style={styles.authInputs}
            returnKeyType="next"
            autoCapitalize="none"
            value={nameOnCard}
            onChangeText={(value) => { this.setState({ nameOnCard: value }); }}
          />
          <TextInput
            placeholder="Credit Card Number"
            style={styles.authInputs}
            returnKeyType="next"
            keyboardType="number-pad"
            autoCapitalize="none"
            value={cardNumber}
            onChangeText={(value) => { this.setState({ cardNumber: value }); }}
          />
          <TextInput
            placeholder="Expiration Date"
            style={styles.authInputs}
            returnKeyType="next"
            autoCapitalize="none"
            value={expDate}
            onChangeText={(value) => { this.setState({ expDate: value }); }}
          />
          <TextInput
            placeholder="3-Digit Code on Back"
            style={styles.authInputs}
            returnKeyType="done"
            keyboardType="number-pad"
            autoCapitalize="none"
            value={threeDigitCode}
            onChangeText={(value) => { this.setState({ threeDigitCode: value }); }}
          />
          <Text style={styles.appSectionHeader}>Shipping Information</Text>
          <TextInput
            placeholder="Name"
            style={styles.authInputs}
            returnKeyType="next"
            autoCapitalize="none"
            value={name}
            onChangeText={(value) => { this.setState({ name: value }); }}
          />
          <TextInput
            placeholder="Address"
            style={styles.authInputs}
            returnKeyType="next"
            autoCapitalize="none"
            value={address}
            onChangeText={(value) => { this.setState({ address: value }); }}
          />
          <TextInput
            placeholder="City"
            style={styles.authInputs}
            returnKeyType="next"
            autoCapitalize="none"
            value={city}
            onChangeText={(value) => { this.setState({ city: value }); }}
          />
          <TextInput
            placeholder="State"
            style={styles.authInputs}
            returnKeyType="next"
            autoCapitalize="none"
            value={state}
            onChangeText={(value) => { this.setState({ state: value }); }}
          />
          <TextInput
            placeholder="Zipcode"
            style={styles.authInputs}
            returnKeyType="done"
            keyboardType="number-pad"
            autoCapitalize="none"
            value={zipCode}
            onChangeText={(value) => { this.setState({ zipCode: value }); }}
          />
        </View>
        <View style={styles.cartButtons}>
          <TouchableOpacity
            style={styles.largeButton}
            onPress={() => navigation.navigate('Confirmation')}
            underlayColor="#fff"
          >
            <Text style={styles.largeButtonText}>Confirm Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PaymentScreen;

// import React from 'react';
// import {
//   Text, View, TouchableOpacity, Modal, Alert
// } from 'react-native';
// import styles from '../constants/Style';

// class PaymentScreen extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       modalVisible: false,
//     };
//   }

//   setModalVisible(visible) {
//     this.setState({ modalVisible: visible });
//   }

//   render() {
//     const { modalVisible } = this.state;
//     return (
//       <View style={styles.container}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//           }}
//         >
//           <View style={styles.paymentModal}>
//             <View style={styles.modalContent}>
//               <Text>Hello World!</Text>
//               <TouchableOpacity
//                 style={styles.addToCart}
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}
//                 underlayColor="#fff"
//               >
//                 <Text style={styles.addToCartText}>Return to Homepage</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//         <View style={styles.cartList}>
//           <Text>This is where you enter your payment and shipping info!</Text>
//         </View>
//         <View style={styles.cartButtons}>
//           <TouchableOpacity
//             style={styles.addToCart}
//             onPress={() => { this.setModalVisible(true); }}
//             underlayColor="#fff"
//           >
//             <Text style={styles.addToCartText}>Confirm Order</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// export default PaymentScreen;
