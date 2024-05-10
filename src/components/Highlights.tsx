import React from 'react';

import { Image, ScrollView, Text, View, VStack } from '@gluestack-ui/themed';

import CurveSvg from './CurveSvg';

const userData = [
  {
    id: 1,
    name: 'Nicki',
    image: require('../../assets/images/places/highlight1.jpg'),
  },
  {
    id: 2,
    name: 'Rogar',
    image: require('../../assets/images/places/highlight2.jpg'),
  },
  {
    id: 3,
    name: 'Sherry',
    image: require('../../assets/images/places/highlight3.jpg'),
  },
  {
    id: 4,
    name: 'Alion',
    image: require('../../assets/images/places/highlight4.jpg'),
  },
  {
    id: 5,
    name: 'Philip',
    image: require('../../assets/images/places/highlight5.jpg'),
  },
  {
    id: 6,
    name: 'John',
    image: require('../../assets/images/places/highlight6.jpg'),
  },
  {
    id: 7,
    name: 'Doe',
    image: require('../../assets/images/places/highlight7.jpg'),
  },
];

export default function Highlights() {
  return (
    <View backgroundColor="transparent">
      <View pt={15} px={10} backgroundColor="$primary">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {userData.map(user => (
            <VStack m={5} key={user?.id} alignItems="center">
              <View
                borderWidth={1.8}
                rounded={15}
                p={1}
                borderColor="$secondary"
              >
                <Image source={user?.image} h={50} w={50} rounded={15} />
              </View>

              <Text fontSize={10} color="$white">
                {user?.name}
              </Text>
            </VStack>
          ))}
        </ScrollView>
      </View>

      <CurveSvg rotate="180deg" width="400" height="80" bgColor="#253238" />
    </View>
  );
}
