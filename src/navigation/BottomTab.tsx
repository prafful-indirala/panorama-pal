/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyBottomTabs from '@src/components/MyBottomTabs';
import CreatePostScreen from '@src/screens/CreatePostScreen';
import Icon from 'react-native-vector-icons/Feather';

import { Image, View } from '@gluestack-ui/themed';

import AccountNavigator from './stacks/AccountNavigator';
import HomeNavigator from './stacks/HomeNavigator';
import NotificationNavigator from './stacks/NotificationNavigator';
import SearchNavigator from './stacks/SearchNavigator';
import { RootTabParamList, RootTabScreenProps } from './types';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      tabBar={props => <MyBottomTabs {...props} />}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeNavigator}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        options={({ navigation }: RootTabScreenProps<'HomeTab'>) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),

          headerStyle: {
            backgroundColor: '#253238',
          },
          headerTintColor: '#fff',
          headerShadowVisible: false, // applied here
          headerBackTitleVisible: false,

          headerTitle: () => (
            <View>
              <Image
                w={150}
                h={50}
                source={require('../../assets/images/logo.png')}
                // backgroundColor="white"
                borderRadius={10}
                zIndex={1}
              />
              <View
                backgroundColor="white"
                w={150}
                h={12}
                position="absolute"
                bottom={0}
                borderRadius={5}
              />
            </View>
          ),
        })}
      />

      <BottomTab.Screen
        name="SearchTab"
        component={SearchNavigator}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        options={({ navigation }: RootTabScreenProps<'SearchTab'>) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        })}
      />

      <BottomTab.Screen
        name="CreatePostTab"
        component={CreatePostScreen}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        options={({ navigation }: RootTabScreenProps<'CreatePostTab'>) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus" color={color} size={size} />
          ),
        })}
      />

      <BottomTab.Screen
        name="NotificationTab"
        component={NotificationNavigator}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        options={({ navigation }: RootTabScreenProps<'NotificationTab'>) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} />
          ),
        })}
      />
      <BottomTab.Screen
        name="AccountTab"
        component={AccountNavigator}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        options={({ navigation }: RootTabScreenProps<'AccountTab'>) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
