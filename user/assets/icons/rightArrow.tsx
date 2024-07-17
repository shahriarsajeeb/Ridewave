import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function RightArrow({iconColor}: {iconColor?: string}) {
  return (
    <Svg width="19" height="8" viewBox="0 0 19 8" fill="none">
      <Path
        d="M18.3536 4.35355C18.5488 4.15829 18.5488 3.84171 18.3536 3.64645L15.1716 0.464466C14.9763 0.269204 14.6597 0.269204 14.4645 0.464466C14.2692 0.659728 14.2692 0.976311 14.4645 1.17157L17.2929 4L14.4645 6.82843C14.2692 7.02369 14.2692 7.34027 14.4645 7.53553C14.6597 7.7308 14.9763 7.7308 15.1716 7.53553L18.3536 4.35355ZM0 4.5H18V3.5H0V4.5Z"
        fill={iconColor || '#065C46'}
      />
    </Svg>
  );
}
