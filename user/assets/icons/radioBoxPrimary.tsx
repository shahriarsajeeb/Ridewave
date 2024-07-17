import Svg, { Path, Rect } from 'react-native-svg';
import React from 'react';

export function RadioBoxPrimary({ color }:any) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Rect opacity="0.25" width="20" height="20" rx="10" fill={color} />
      <Rect x="5" y="5" width="10" height="10" rx="5" fill={color} />
    </Svg>
  );
}
