import * as React from "react"
import Svg, { Path } from "react-native-svg"
export function Mic() {
    return (
        <Svg width={24} height={24} fill="none">
            <Path
                stroke="#8F8F8F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 15.5c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4S8 3.79 8 6v5.5c0 2.21 1.79 4 4 4Z"
            />
            <Path
                stroke="#8F8F8F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.35 9.65v1.7C4.35 15.57 7.78 19 12 19c4.22 0 7.65-3.43 7.65-7.65v-1.7M10.61 6.43c.9-.33 1.88-.33 2.78 0M11.2 8.55c.53-.14 1.08-.14 1.61 0M12 19v3"
            />
        </Svg>
    )
}