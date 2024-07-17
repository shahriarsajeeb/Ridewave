import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Correct() {
  return (
    <Svg width="22" height="15" viewBox="0 0 22 15" fill="none">
      <Path
        d="M1 7.5L7.65882 14L21 1"
        stroke="#199675"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
