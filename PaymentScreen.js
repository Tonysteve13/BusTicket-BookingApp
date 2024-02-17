import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {
  // Correct usage of useNavigation hook
  const navigation = useNavigation();

  const handlePayment = () => {
    // Payment processes will be handled here.
    // For example, payment service calls or other controls.
    // If payment is successful, navigate to the Success Page.
    navigation.navigate('Success');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Page</Text>
      {/* Ticket information can be viewed here */}
      <View style={styles.paymentForm}>
        <TextInput
          style={styles.inputpay}
          placeholder="Card Number"
        />
        <TextInput
          style={styles.inputpay}
          placeholder="Name on the Card"
        />
        <View style={styles.inlineInputs}>
          <TextInput
            style={[styles.inputpay, styles.smallInput]}
            placeholder="CVC/CVV"
          />
          <TextInput
            style={[styles.inputpay, styles.smallInput]}
            placeholder="Expiration Date"
          />
        </View>
        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;
