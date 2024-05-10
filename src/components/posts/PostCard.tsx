import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import {
  Center,
  HStack,
  Image,
  Text,
  View,
  VStack,
} from '@gluestack-ui/themed';

import CurveSvg from '../CurveSvg';

const PostHeader = () => (
  <HStack justifyContent="space-between" alignItems="center">
    <HStack gap={4} alignItems="center">
      <View borderWidth={1.8} borderColor="$secondary" borderRadius={9} p={1}>
        <Image
          source={require('../../../assets/images/users/user1.jpg')}
          h={25}
          w={25}
          borderRadius={6}
        />
      </View>
      <Text fontWeight="bold" fontSize="$xs">
        nicki
      </Text>
      <MaterialCommunityIcons
        name="check-decagram"
        size={13}
        color="$secondary"
      />
    </HStack>
    <Feather name="more-horizontal" size={22} color="grey" />
  </HStack>
);
const PostContent = () => (
  <View alignSelf="center" w="100%">
    <Center>
      <Image
        source={require('../../../assets/images/places/post.jpg')}
        h={220}
        w="95%"
        borderRadius={30}
      />
    </Center>
  </View>
);

const PostFooter = () => (
  <VStack gap={10}>
    <HStack justifyContent="space-between" alignItems="center">
      <HStack gap={10} alignItems="center">
        <Octicons name="heart-fill" size={20} color="red" />
        {/* <Octicons name="heart" size={20} /> */}
        <Fontisto name="commenting" size={20} />

        <Fontisto name="share-a" size={20} />
      </HStack>
      <MaterialCommunityIcons name="bookmark-multiple-outline" size={20} />
    </HStack>
    <HStack gap={4}>
      <Text fontSize="$sm">
        <Text fontWeight="bold" fontSize="$sm">
          Chris
        </Text>{' '}
        Lost in the ethereal beauty of nature's masterpiece 🌿✨ #NatureLover
        #ScenicViews
      </Text>
    </HStack>
  </VStack>
);

export default function PostCard() {
  return (
    <View backgroundColor="transparent" m={10}>
      <View
        backgroundColor="$white"
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
      >
        <VStack p={20} gap={15}>
          <PostHeader />
          <PostContent />
          <PostFooter />
        </VStack>
      </View>
      <CurveSvg rotate="180deg" width="390" height="60" bgColor="white" />
    </View>
  );
}
