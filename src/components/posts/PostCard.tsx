import React from 'react';
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

const PostHeader = () => (
  <HStack justifyContent="space-between" alignItems="center">
    <HStack gap={4} alignItems="center">
      <Image
        source={require('../../../assets/images/user.png')}
        h={25}
        w={25}
      />

      <Text>User 1</Text>
    </HStack>
    <Text>...</Text>
  </HStack>
);
const PostContent = () => (
  <View alignSelf="center" w="100%">
    <Center>
      <Image
        source={require('../../../assets/images/post.jpg')}
        h={220}
        w="95%"
        borderRadius={30}
      />
    </Center>
  </View>
);

const PostFooter = () => (
  <HStack justifyContent="space-between" alignItems="center">
    <HStack gap={10} alignItems="center">
      <Octicons name="heart-fill" size={20} color="red" />
      {/* <Octicons name="heart" size={20} /> */}
      <Fontisto name="commenting" size={20} />

      <Fontisto name="share-a" size={20} />
    </HStack>
    <MaterialCommunityIcons name="bookmark-multiple-outline" size={20} />
  </HStack>
);

export default function PostCard() {
  return (
    <VStack px={30} py={15} gap={15}>
      <PostHeader />
      <PostContent />
      <PostFooter />
    </VStack>
  );
}
