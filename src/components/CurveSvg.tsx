import React from 'react';
import { Path, Svg } from 'react-native-svg';

export default function CurveSvg({ rotate, width, height, bgColor }: any) {
  return (
    <Svg height="50" width="100%" transform={[{ rotate }]}>
      <Path
        d={`M0,0 C0,0 100,${height} ${width},0 L${width},50 L0,50 Z`}
        fill={bgColor}
        stroke={bgColor}
      />
    </Svg>
  );
}
