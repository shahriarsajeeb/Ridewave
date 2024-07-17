import React from 'react';
import Svg, { Path } from "react-native-svg"
export function Info() {
    return (
        <Svg width={14} height={14} fill="none">
            <Path
                stroke="#8F8F8F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M7 12.833c3.208 0 5.833-2.625 5.833-5.833s-2.625-5.833-5.834-5.833C3.791 1.167 1.166 3.792 1.166 7s2.625 5.833 5.833 5.833ZM7 4.667v2.916M6.996 9.333h.005"
            />
        </Svg>
    )
}