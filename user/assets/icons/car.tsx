import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Car({colors, fill}: {colors: string; fill?: string}) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill={fill || 'none'}>
      <Path
        d="M15.51 2.83008H8.49C6 2.83008 5.45 4.07008 5.13 5.59008L4 11.0001H20L18.87 5.59008C18.55 4.07008 18 2.83008 15.51 2.83008Z"
        stroke={colors || '#8F8F8F'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.99 19.82C22.1 20.99 21.16 22 19.96 22H18.08C17 22 16.85 21.54 16.66 20.97L16.46 20.37C16.18 19.55 16 19 14.56 19H9.44C8 19 7.79 19.62 7.54 20.37L7.34 20.97C7.15 21.54 7 22 5.92 22H4.04C2.84 22 1.9 20.99 2.01 19.82L2.57 13.73C2.71 12.23 3 11 5.62 11H18.38C21 11 21.29 12.23 21.43 13.73L21.99 19.82Z"
        stroke={colors || '#8F8F8F'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 8H3"
        stroke={colors || '#8F8F8F'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 8H20"
        stroke={colors || '#8F8F8F'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 3V5"
        stroke={colors || '#8F8F8F'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 5H13.5"
        stroke={colors || '#8F8F8F'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 15H9"
        stroke={colors || '#8F8F8F'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 15H18"
        stroke={colors || '#8F8F8F'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
