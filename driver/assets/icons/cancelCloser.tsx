import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function CancelCloser() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
            <Path
                fill="#199675"
                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
            />
            <Path
                fill="#fff"
                fillRule="evenodd"
                d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
            />
        </Svg>
    )
}