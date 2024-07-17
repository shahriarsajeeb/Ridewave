import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function ProfileSetting({strokeWidth}: {strokeWidth?: string}) {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M9.12 8.1525C9.045 8.145 8.955 8.145 8.8725 8.1525C7.0875 8.0925 5.67 6.63 5.67 4.83C5.67 2.9925 7.155 1.5 9 1.5C10.8375 1.5 12.33 2.9925 12.33 4.83C12.3225 6.63 10.905 8.0925 9.12 8.1525Z"
        stroke={"#000"}
        strokeWidth={strokeWidth || '1.2'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.37 10.92C3.555 12.135 3.555 14.115 5.37 15.3225C7.4325 16.7025 10.815 16.7025 12.8775 15.3225C14.6925 14.1075 14.6925 12.1275 12.8775 10.92C10.8225 9.5475 7.44 9.5475 5.37 10.92Z"
        stroke={"#000"}
        strokeWidth={strokeWidth || '1.2'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
