import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Add({colors}: {colors: string}) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 12H18"
        stroke={colors || '#1F1F1F'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0001 18V6"
        stroke={colors || '#1F1F1F'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
