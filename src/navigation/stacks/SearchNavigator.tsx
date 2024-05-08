import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from '../../screens/SearchScreen';
import stackNavigatorOptions from '../stackNavigatorOptions';
import { SearchStackParams } from '../types';

const Stack = createNativeStackNavigator<SearchStackParams>();

const SearchNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      ...stackNavigatorOptions,
    }}
  >
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export default SearchNavigator;
