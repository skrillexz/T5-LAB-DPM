import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import RoomScheduleScreen from './screens/RoomScheduleScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Beranda Penjadwalan' }}
        />
        {/* Details Screen */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Detail Jadwal' }}
        />
        {/* Room Schedule Screen */}
        <Stack.Screen
          name="RoomSchedule"
          component={RoomScheduleScreen}
          options={{ title: 'Jadwal Ruangan' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
