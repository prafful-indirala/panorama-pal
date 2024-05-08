import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationScreen from '@src/screens/NotificationScreen';

import stackNavigatorOptions from '../stackNavigatorOptions';
import { NotificationStackParams } from '../types';

const Stack = createNativeStackNavigator<NotificationStackParams>();

const NotificationNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      ...stackNavigatorOptions,
    }}
  >
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export default NotificationNavigator;
