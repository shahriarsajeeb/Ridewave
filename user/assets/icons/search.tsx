import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Search() {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path
        d="M10.5417 19.25C15.3511 19.25 19.25 15.3512 19.25 10.5417C19.25 5.73223 15.3511 1.83337 10.5417 1.83337C5.73218 1.83337 1.83333 5.73223 1.83333 10.5417C1.83333 15.3512 5.73218 19.25 10.5417 19.25Z"
        stroke={"#000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.1667 20.1667L18.3333 18.3334"
        stroke={"#000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
