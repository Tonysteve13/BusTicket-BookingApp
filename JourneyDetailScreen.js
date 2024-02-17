import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const JourneyDetailScreen = ({ route, navigation }) => {
  // Extracting the 'journey' object from the 'route' parameters
  const { journey } = route.params;
  const [selectedSeats, setSelectedSeats] = useState([]);  // State for selected seats
  const [passengerInfo, setPassengerInfo] = useState({});  // State for passenger information

  // Function to handle seat selection
  const handleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else if (selectedSeats.length < 5) {
      setSelectedSeats([...selectedSeats, seatNumber]);
    } else {
      // Displaying a toast message if more than 5 seats are selected
      ToastAndroid.show('You can select at most 5 seats.', ToastAndroid.SHORT);
    }
  };

  // Function to handle changes in passenger information
  const handlePassengerInfoChange = (seatNumber, key, value) => {
    setPassengerInfo(prevInfo => ({
      ...prevInfo,
      [seatNumber]: {
        ...prevInfo[seatNumber],
        [key]: value,
      },
    }));
  };

  // Function to render the seat layout
  const renderSeats = () => {
    const seatRows = [];
    const totalSeats = 21;  // Total number of seats
    const seatsPerRow = 3;  // Number of seats per row

    for (let i = 0; i < totalSeats; i += seatsPerRow) {
      const rowSeats = [];

      for (let j = i; j < i + seatsPerRow; j++) {
        const seatNumber = j + 1;

        rowSeats.push(
          <TouchableOpacity
            key={seatNumber}
            style={[
              styles.seat,
              selectedSeats.includes(seatNumber) && styles.selectedSeat,
            ]}
            onPress={() => handleSeatSelection(seatNumber)}
            disabled={selectedSeats.length >= 5}
          >
            {selectedSeats.includes(seatNumber) ? (
              <FontAwesome name="user" size={24} color="white" />
            ) : (
              <Text>{seatNumber}</Text>
            )}
          </TouchableOpacity>
        );
      }

      seatRows.push(
        <View key={i} style={styles.seatRow}>
          {rowSeats}
        </View>
      );
    }

    return seatRows;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journey Detail Page</Text>
      <Text>Company: {journey.company}</Text>
      <Text>Date/Time: {journey.time}</Text>
      <Text>Seat Price: {journey.price}</Text>
      <Text>Empty Seats: {journey.emptySeats}</Text>
      <View style={styles.seatsContainer}>{renderSeats()}</View>
      {selectedSeats.map(seatNumber => (
        <View key={seatNumber} style={styles.passengerInfoContainer}>
          <TextInput
            style={styles.passengerInput}
            placeholder="Passenger ID"
            onChangeText={(text) => handlePassengerInfoChange(seatNumber, 'id', text)}
            value={passengerInfo[seatNumber]?.id || ''}
          />
          <TextInput
            style={styles.passengerInput}
            placeholder="Passenger Gender"
            onChangeText={(text) => handlePassengerInfoChange(seatNumber, 'gender', text)}
            value={passengerInfo[seatNumber]?.gender || ''}
          />
        </View>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Payment')}
      >
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JourneyDetailScreen;
