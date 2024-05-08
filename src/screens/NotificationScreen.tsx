import React from 'react';
import Layout from '@src/components/Layout';

import { Text, VStack } from '@gluestack-ui/themed';

export default function NotificationScreen() {
  return (
    <Layout hasSafeArea={false}>
      <VStack
        gap={8}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        height="100%"
      >
        <Text>Notification Screen</Text>
      </VStack>
    </Layout>
  );
}
