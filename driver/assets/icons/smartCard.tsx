import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function SmallCard({ color }: { color: string }) {
  return (
    <Svg width={15} height={15} fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M9.694 1.769H5.306c-1.556 0-1.9.775-2.1 1.725L2.5 6.875h10l-.706-3.381c-.2-.95-.544-1.725-2.1-1.725ZM13.743 12.387c.069.732-.519 1.363-1.269 1.363H11.3c-.675 0-.768-.287-.887-.644l-.125-.375c-.175-.512-.288-.856-1.188-.856H5.9c-.9 0-1.031.387-1.187.856l-.125.375c-.119.357-.213.644-.888.644H2.524c-.75 0-1.337-.631-1.269-1.363l.35-3.806c.088-.937.27-1.706 1.907-1.706h7.975c1.637 0 1.819.769 1.906 1.706l.35 3.806ZM2.5 5h-.625M13.125 5H12.5M7.5 1.875v1.25M6.563 3.125h1.875M3.75 9.375h1.875M9.375 9.375h1.875"
      />
    </Svg>
  );
}
