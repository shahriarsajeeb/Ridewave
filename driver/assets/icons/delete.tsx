import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Delete({iconColor}: {iconColor?: string}) {

  return (
    <Svg width="21" height="21" viewBox="0 0 18 18" fill="none">
      <Path
        d="M15.75 4.48535C13.2525 4.23785 10.74 4.11035 8.235 4.11035C6.75 4.11035 5.265 4.18535 3.78 4.33535L2.25 4.48535"
        stroke={"#fff"}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
        stroke={"#fff"}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.1375 6.85449L13.65 14.407C13.5675 15.5845 13.5 16.4995 11.4075 16.4995H6.5925C4.5 16.4995 4.4325 15.5845 4.35 14.407L3.8625 6.85449"
        stroke={"#fff"}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.7475 12.375H10.245"
        stroke={"#fff"}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.125 9.375H10.875"
        stroke={"#fff"}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
