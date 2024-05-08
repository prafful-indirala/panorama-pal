import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePostScreen from '@src/screens/CreatePostScreen';

import stackNavigatorOptions from '../stackNavigatorOptions';
import { CreatePostStackParams } from '../types';

const Stack = createNativeStackNavigator<CreatePostStackParams>();

const CreateTabNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      ...stackNavigatorOptions,
    }}
  >
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export default CreateTabNavigator;
