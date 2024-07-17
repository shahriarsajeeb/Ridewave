import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Wallet({colors}: {colors?: string}) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M18.3338 10V14.1667C18.3338 16.6667 16.6672 18.3334 14.1672 18.3334H5.83383C3.33383 18.3334 1.66716 16.6667 1.66716 14.1667V10C1.66716 7.73337 3.03383 6.15004 5.15883 5.88337C5.37549 5.85004 5.60049 5.83337 5.83383 5.83337H14.1672C14.3838 5.83337 14.5922 5.8417 14.7922 5.87503C16.9422 6.12503 18.3338 7.71671 18.3338 10Z"
        stroke={colors || 'white'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.7933 5.87496C14.5933 5.84163 14.385 5.8333 14.1683 5.8333H5.83499C5.60166 5.8333 5.37666 5.84997 5.15999 5.8833C5.27666 5.64997 5.44332 5.4333 5.64332 5.2333L8.35166 2.51663C9.49332 1.38329 11.3433 1.38329 12.485 2.51663L13.9433 3.99164C14.4767 4.51664 14.76 5.18329 14.7933 5.87496Z"
        stroke={colors || 'white'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3338 10.4166H15.8338C14.9172 10.4166 14.1672 11.1666 14.1672 12.0833C14.1672 13 14.9172 13.75 15.8338 13.75H18.3338"
        stroke={colors || 'white'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
