import * as React from "react"
import Svg, { Path } from "react-native-svg"
export function Coin() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none">
            <Path
                stroke="#8F8F8F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M6.504 10.747c0 .968.742 1.748 1.665 1.748h1.882c.803 0 1.455-.683 1.455-1.523 0-.915-.397-1.237-.99-1.447l-3.022-1.05c-.593-.21-.99-.533-.99-1.448 0-.84.652-1.522 1.455-1.522H9.84c.923 0 1.665.78 1.665 1.747M9 4.5v9"
            />
            <Path
                stroke="#8F8F8F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M9 16.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
            />
        </Svg>
    )
}