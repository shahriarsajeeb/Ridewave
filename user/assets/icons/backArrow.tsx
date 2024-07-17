import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function BackArrow({
  colors,
  width,
  height,
}: {
  colors?: string;
  width?: number;
  height?: number;
}) {
  return (
    <Svg
      width={width || '16'}
      height={height || '16'}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M5.94043 13.2807L10.2871 8.93404C10.8004 8.4207 10.8004 7.5807 10.2871 7.06737L5.94043 2.7207"
        stroke={colors || '#8F8F8F'}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
