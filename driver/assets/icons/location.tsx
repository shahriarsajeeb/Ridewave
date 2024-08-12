import Svg, { Path } from "react-native-svg";
import React from "react";

export function Location({ color }: any) {
  return (
    <Svg width="22" height="22" viewBox="0 0 18 18" fill="none">
      <Path
        d="M9 10.0726C10.2924 10.0726 11.34 9.02492 11.34 7.73258C11.34 6.44023 10.2924 5.39258 9 5.39258C7.70766 5.39258 6.66 6.44023 6.66 7.73258C6.66 9.02492 7.70766 10.0726 9 10.0726Z"
        stroke={color}
        strokeWidth="1.2"
      />
      <Path
        d="M2.715 6.3675C4.1925 -0.127498 13.815 -0.119998 15.285 6.375C16.1475 10.185 13.7775 13.41 11.7 15.405C10.1925 16.86 7.8075 16.86 6.2925 15.405C4.2225 13.41 1.8525 10.1775 2.715 6.3675Z"
        stroke={color}
        strokeWidth="1.2"
      />
    </Svg>
  );
}
