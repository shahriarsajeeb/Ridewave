import * as React from "react"
import Svg, { Path } from "react-native-svg"
export function FillClock() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none">
            <Path
                fill="#8F8F8F"
                d="M7 1.167A5.843 5.843 0 0 0 1.167 7 5.843 5.843 0 0 0 7 12.833 5.843 5.843 0 0 0 12.833 7 5.843 5.843 0 0 0 7 1.167Zm2.538 7.916a.435.435 0 0 1-.601.151L7.128 8.155c-.449-.268-.781-.857-.781-1.377V4.387a.44.44 0 0 1 .437-.438.44.44 0 0 1 .438.438v2.391c0 .21.175.52.356.625l1.808 1.079c.21.122.28.39.152.6Z"
            />
        </Svg>
    )
}