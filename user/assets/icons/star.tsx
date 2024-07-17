import React from 'react';
import Svg, { Path } from "react-native-svg"

export function Star() {
    return (
        <Svg width={10} height={11} fill="none">
            <Path
                fill="#FFB400"
                d="M4.159 1.31a1 1 0 0 1 1.682 0l.994 1.547a1 1 0 0 0 .587.427L9.2 3.75a1 1 0 0 1 .52 1.6L8.556 6.775a1 1 0 0 0-.224.69L8.437 9.3a1 1 0 0 1-1.361.989L5.363 9.62a1 1 0 0 0-.726 0l-1.713.668a1 1 0 0 1-1.361-.99l.105-1.835a1 1 0 0 0-.224-.69L.28 5.35a1 1 0 0 1 .52-1.6l1.778-.467a1 1 0 0 0 .587-.427L4.16 1.31Z"
            />
        </Svg>
    )
}