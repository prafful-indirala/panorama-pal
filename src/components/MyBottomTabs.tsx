import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { HStack, Pressable, View } from '@gluestack-ui/themed';

import CurveSvg from './CurveSvg';

export default function MyBottomTabs({ state, descriptors, navigation }: any) {
  return (
    <View backgroundColor="transparent">
      <CurveSvg rotate="none" width="400" height="80" bgColor="#253238" />
      <HStack
        backgroundColor="$primary"
        h={50}
        justifyContent="space-between"
        alignItems="center"
        px={30}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <Pressable
              onPress={onPress}
              style={[
                label === 'CreatePostTab' && {
                  backgroundColor: '#125be4',
                  padding: 12,
                  borderRadius: 15,
                  bottom: 40,
                  borderWidth: 4,
                  borderColor: '#fff',
                },
              ]}
              pb={10}
              key={label}
            >
              <Icon
                name={
                  label === 'HomeTab'
                    ? 'home'
                    : label === 'SearchTab'
                      ? 'search'
                      : label === 'CreatePostTab'
                        ? 'video'
                        : label === 'NotificationTab'
                          ? 'bell'
                          : 'user'
                }
                color={
                  label === 'CreatePostTab'
                    ? '#fff'
                    : isFocused
                      ? '#125be4'
                      : 'grey'
                }
                size={20}
              />
            </Pressable>
          );
        })}
      </HStack>
    </View>
  );
}
