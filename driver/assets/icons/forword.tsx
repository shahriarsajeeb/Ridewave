import * as React from "react"
import Svg, { Path } from "react-native-svg"
export function Forword() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
            <Path
                stroke="#199675"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
                d="m7.425 16.6 5.433-5.433a1.655 1.655 0 0 0 0-2.334L7.425 3.4"
            />
        </Svg>
    )
}