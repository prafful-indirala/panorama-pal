import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from '../../screens/AccountScreen';
import stackNavigatorOptions from '../stackNavigatorOptions';
import { AccountStackParams } from '../types';

const Stack = createNativeStackNavigator<AccountStackParams>();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      ...stackNavigatorOptions,
    }}
  >
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          title: 'Account',
        }}
      />
    </Stack.Group>
  </Stack.Navigator>
);

export default AccountNavigator;
