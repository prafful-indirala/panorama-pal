import React from 'react';
import Highlights from '@src/components/Highlights';
import Posts from '@src/components/posts/Posts';

import { VStack } from '@gluestack-ui/themed';

import Layout from '@components/Layout';

export default function HomeScreen() {
  return (
    <Layout hasSafeArea={true}>
      <VStack gap={16} height="100%" backgroundColor="$white">
        <Highlights />
        <Posts />
      </VStack>
    </Layout>
  );
}
