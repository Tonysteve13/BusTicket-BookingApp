import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, RadioButtons } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [paymentMethod, setPaymentMethod] = useState(null);

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

        {/* Section for selecting payment method */}
        <View style={styles.paymentMethodSection}>
          <Text>Select Payment Method:</Text>
          <TouchableOpacity
            style={[styles.paymentMethodButton, paymentMethod === 'MTN' && styles.selectedMethod]}
            onPress={() => setPaymentMethod('MTN')}
          >
            <Text>MTN Mobile Money</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.paymentMethodButton, paymentMethod === 'Orange' && styles.selectedMethod]}
            onPress={() => setPaymentMethod('Orange')}
          >
            <Text>Orange Money</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;
