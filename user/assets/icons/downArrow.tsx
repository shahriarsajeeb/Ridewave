import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { G, Path, Svg } from "react-native-svg";

export default function DownArrow() {
  return (
    <Svg
      width="14"
      height="14"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <G
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <Path
          d="M355 4034 c-43 -22 -313 -292 -336 -336 -21 -42 -24 -83 -9 -125 12
   -32 2440 -2466 2482 -2489 35 -18 101 -18 136 0 42 23 2470 2457 2482 2489 15
   42 12 83 -9 125 -25 47 -307 327 -344 341 -36 14 -88 14 -124 1 -16 -6 -472
   -455 -1050 -1033 l-1023 -1022 -1022 1022 c-579 578 -1035 1027 -1051 1033
   -40 15 -97 12 -132 -6z"
        />
      </G>
    </Svg>
  );
}

const styles = StyleSheet.create({});
