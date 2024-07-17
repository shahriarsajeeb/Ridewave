import Svg, { Path } from 'react-native-svg';
import React from 'react';

export function Logout({ iconColor }: { iconColor?: string }) {

  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M13.08 10.965L15 9.045L13.08 7.125"
        stroke={"#fff"}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.32 9.04492H14.9475"
        stroke={"#fff"}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.82 15C5.505 15 2.82 12.75 2.82 9C2.82 5.25 5.505 3 8.82 3"
        stroke={"#fff"}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
