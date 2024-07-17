import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import React from 'react';

export function Street() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <G clip-path="url(#clip0_15_4350)">
        <Path
          d="M1.72537 3.8334C2.39204 0.950065 6.73371 0.950065 7.39204 3.8334C7.78371 5.52507 6.70871 6.9584 5.77537 7.85007C5.09204 8.50007 4.01704 8.49173 3.33371 7.85007C2.40871 6.9584 1.33371 5.52507 1.72537 3.8334Z"
          stroke="#8F8F8F"
          strokeWidth="1.2"
        />
        <Path
          d="M12.5583 13.8333C13.225 10.95 17.5917 10.95 18.2583 13.8333C18.65 15.525 17.575 16.9583 16.6333 17.85C15.95 18.5 14.8667 18.4917 14.1833 17.85C13.2417 16.9583 12.1667 15.525 12.5583 13.8333Z"
          stroke="#8F8F8F"
          strokeWidth="1.2"
        />
        <Path
          d="M10.0004 4.1665H12.2337C13.7754 4.1665 14.4921 6.07484 13.3337 7.0915L6.6754 12.9165C5.51707 13.9248 6.23373 15.8332 7.76707 15.8332H10.0004"
          stroke="#8F8F8F"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4.57209 4.58317H4.58172"
          stroke="#8F8F8F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.4052 14.5833H15.4148"
          stroke="#8F8F8F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_15_4350">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
