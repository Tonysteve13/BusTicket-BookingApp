import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

const JourneyListScreen = ({ navigation }) => {
  // Sample journey data
  const journeys = [
    { id: '1', company: 'VATICAN', time: 'Time: 08:00 AM', emptySeats: 20, price: '6000 XAF' },
    { id: '2', company: 'Amour Mezam', time: 'Time: 10:00 PM', emptySeats: 10, price: '7000 XAF' },
    // Other journeys
  ];

  // Function to render each journey item in the list
  const renderJourneyItem = ({ item }) => (
    <TouchableOpacity
      style={styles.journeyItem}
      onPress={() => navigation.navigate('JourneyDetail', { journey: item })}
    >
      <Text>{item.company}</Text>
      <Text>{item.time}</Text>
      <Text>Empty Seats: {item.emptySeats}</Text>
      <Text>Price: {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page Listing Journeys</Text>
      {/* FlatList to render the list of journeys */}
      <FlatList
        data={journeys}
        keyExtractor={item => item.id}
        renderItem={renderJourneyItem}
      />
    </View>
  );
};

export default JourneyListScreen;
