import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Gps({
  width,
  height,
  colors,
}: {
  width?: number;
  height?: number;
  colors?: string;
}) {
  return (
    <Svg
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25Z"
        stroke={colors || '#199675'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke={colors || '#199675'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 3.33341V1.66675"
        stroke={colors || '#199675'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.33334 10H1.66667"
        stroke={colors || '#199675'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 16.6667V18.3334"
        stroke={colors || '#199675'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.6667 10H18.3333"
        stroke={colors || '#199675'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
