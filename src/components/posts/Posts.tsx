import React from 'react';

import { ScrollView, View } from '@gluestack-ui/themed';

import PostCard from './PostCard';

const userPosts = [
  {
    id: 1,
    name: 'User 1',
    image: require('../../../assets/images/user.png'),
  },
  // {
  //   id: 2,
  //   name: 'User 2',
  //   image: require('../../../assets/images/user.png'),
  // },
  // {
  //   id: 3,
  //   name: 'User 3',
  //   image: require('../../../assets/images/user.png'),
  // },
  // {
  //   id: 4,
  //   name: 'User 4',
  //   image: require('../../../assets/images/user.png'),
  // },
  // {
  //   id: 5,
  //   name: 'User 5',
  //   image: require('../../../assets/images/user.png'),
  // },
  // {
  //   id: 6,
  //   name: 'User 6',
  //   image: require('../../../assets/images/user.png'),
  // },
];

export default function Posts() {
  return (
    <View py={20}>
      <ScrollView marginBottom={100}>
        {userPosts.map(user => (
          <PostCard key={user?.id} />
        ))}
      </ScrollView>
    </View>
  );
}
