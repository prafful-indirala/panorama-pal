import React, { useState } from 'react';
import {
  Viro360Image,
  ViroARScene,
  ViroARSceneNavigator,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from '@viro-community/react-viro';

import { View } from '@gluestack-ui/themed';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state: any, reason: ViroTrackingReason) {
    console.log('onInitialized', state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <Viro360Image
        source={require('../../assets/images/test.jpg')}
        rotation={[0, 45, 0]}
        format="RGBA8"
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
      />
    </ViroARScene>
  );
};

const handleLoadStart = () => {
  console.log('handleLoadStart');
};
const handleLoadEnd = () => {
  console.log('handleLoadEnd');
};
const handleError = (error: any) => {
  console.log('handleError', error);
};

const View360Image = () => {
  return (
    <View style={{ height: 220, width: '100%', borderRadius: 20 }}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
      />
    </View>
  );
};

export default View360Image;
