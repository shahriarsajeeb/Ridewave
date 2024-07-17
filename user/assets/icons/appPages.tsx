import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function AppPages() {

  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M6 9.675V12.825C6 15.45 7.05 16.5 9.675 16.5H12.825C15.45 16.5 16.5 15.45 16.5 12.825V9.675C16.5 7.05 15.45 6 12.825 6H9.675C7.05 6 6 7.05 6 9.675Z"
        stroke={'#fff'}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.5 5.175V8.325C1.5 10.95 2.55 12 5.175 12H6V9.675C6 7.05 7.05 6 9.675 6H12V5.175C12 2.55 10.95 1.5 8.325 1.5H5.175C2.55 1.5 1.5 2.55 1.5 5.175Z"
        stroke={'#fff'}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
