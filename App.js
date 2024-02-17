import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import TicketSearchScreen from './TicketSearchScreen';
import JourneyListScreen from './JourneyListScreen';
import JourneyDetailScreen from './JourneyDetailScreen';
import PaymentScreen from './PaymentScreen';
import SuccessScreen from './SuccessScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="TicketSearch" component={TicketSearchScreen} />
        <Stack.Screen name="JourneyList" component={JourneyListScreen} />
        <Stack.Screen name="JourneyDetail" component={JourneyDetailScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;