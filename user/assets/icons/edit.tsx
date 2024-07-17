import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Edit({width, height}: {width?: number; height?: number}) {
  return (
    <Svg
      width={width || '22'}
      height={height || '22'}
      viewBox="0 0 22 22"
      fill="none">
      <Path
        d="M12.1553 3.29963L4.62944 11.2655C4.34527 11.568 4.07027 12.1638 4.01527 12.5763L3.6761 15.5463C3.55694 16.6188 4.32694 17.3521 5.39027 17.1688L8.34194 16.6646C8.75444 16.5913 9.33194 16.2888 9.6161 15.9771L17.1419 8.0113C18.4436 6.6363 19.0303 5.0688 17.0044 3.15296C14.9878 1.25546 13.4569 1.92463 12.1553 3.29963Z"
        stroke={'#fff'}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.8988 4.62988C11.293 7.15988 13.3463 9.09405 15.8946 9.35072"
        stroke={'#fff'}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.75 20.167H19.25"
        stroke={'#fff'}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
