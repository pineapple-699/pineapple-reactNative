import React from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import styles from '../constants/Style';

const PaymentScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.cartList}>
        <Text style={styles.appText}>This is where you enter your payment/shipping info!</Text>
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
};

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
