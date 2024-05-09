import React from 'react';

import { Image, ScrollView, Text, View, VStack } from '@gluestack-ui/themed';

const userData = [
  {
    id: 1,
    name: 'User 1',
    image: require('../../assets/images/user.png'),
  },
  {
    id: 2,
    name: 'User 2',
    image: require('../../assets/images/user.png'),
  },
  {
    id: 3,
    name: 'User 3',
    image: require('../../assets/images/user.png'),
  },
  {
    id: 4,
    name: 'User 4',
    image: require('../../assets/images/user.png'),
  },
  {
    id: 5,
    name: 'User 5',
    image: require('../../assets/images/user.png'),
  },
  {
    id: 6,
    name: 'User 6',
    image: require('../../assets/images/user.png'),
  },
  {
    id: 7,
    name: 'User 7',
    image: require('../../assets/images/user.png'),
  },
];

export default function Highlights() {
  return (
    <View pt={15} px={10} backgroundColor="$primary">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {userData.map(user => (
          <VStack m={5} key={user?.id} alignItems="center">
            <Image
              source={require('../../assets/images/highlight.jpg')}
              h={50}
              w={50}
              rounded={10}
              //   borderWidth={2}
              borderTopLeftWidth={5}
            />
            <Text fontSize={10} color="$white">
              {user?.name}
            </Text>
          </VStack>
        ))}
      </ScrollView>
    </View>
  );
}
