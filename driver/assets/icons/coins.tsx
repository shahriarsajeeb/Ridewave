import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function Coins() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none">
            <Path
                stroke="#199675"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M13.875 9.487v2.775c0 2.34-2.182 4.238-4.875 4.238-2.692 0-4.875-1.898-4.875-4.238V9.487c0 2.34 2.183 4.013 4.875 4.013 2.693 0 4.875-1.673 4.875-4.013Z"
            />
            <Path
                stroke="#199675"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M13.875 5.737c0 .683-.188 1.313-.518 1.853C12.556 8.91 10.905 9.75 9 9.75c-1.905 0-3.555-.84-4.357-2.16a3.528 3.528 0 0 1-.518-1.853c0-1.17.548-2.227 1.425-2.992C6.435 1.972 7.65 1.5 9 1.5s2.565.472 3.45 1.237c.878.773 1.425 1.83 1.425 3Z"
            />
            <Path
                stroke="#199675"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M13.875 5.737v3.75c0 2.34-2.182 4.013-4.875 4.013-2.692 0-4.875-1.672-4.875-4.012v-3.75C4.125 3.397 6.308 1.5 9 1.5c1.35 0 2.565.472 3.45 1.237.878.773 1.425 1.83 1.425 3Z"
            />
        </Svg>
    )
}