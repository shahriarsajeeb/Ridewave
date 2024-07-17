import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function LocationGreen() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
            <Path
                fill="#199675"
                fillRule="evenodd"
                d="M12 2c-4.418 0-8 4.003-8 8.5 0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.962 20 10.5 20 6.003 16.418 2 12 2Zm0 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                clipRule="evenodd"
            />
        </Svg>
    )
}