import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Payment Successful</Text>
      <Text style={styles.messageText}>Have a Pleasant Journey</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Redirect to the home page
          navigation.navigate('TicketSearch');
        }}
      >
        <Text style={styles.buttonText}>Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessScreen;
