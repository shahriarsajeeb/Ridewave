import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function Target() {
    return (
        <Svg width={20} height={20} fill="none">
            <Path
                fill="#1F1F1F"
                fillRule="evenodd"
                d="M0 10c0 .385.312.698.698.698H2.59a7.444 7.444 0 0 0 6.712 6.712v1.892a.698.698 0 0 0 1.396 0V17.41a7.444 7.444 0 0 0 6.712-6.712h1.892a.698.698 0 0 0 0-1.396H17.41a7.444 7.444 0 0 0-6.712-6.712V.698a.698.698 0 0 0-1.396 0V2.59A7.444 7.444 0 0 0 2.59 9.302H.698A.698.698 0 0 0 0 10Zm6.512 0a3.488 3.488 0 1 1 6.976 0 3.488 3.488 0 0 1-6.976 0Z"
                clipRule="evenodd"
            />
            <Path
                fill="#1F1F1F"
                d="M7.907 10a2.093 2.093 0 1 1 4.186 0 2.093 2.093 0 0 1-4.186 0Z"
            />
        </Svg>
    )
}