import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function HomeLocation() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10 15V12.5"
        stroke={'#fff'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.39166 2.35053L2.61666 6.97553C1.96666 7.49219 1.55 8.58386 1.69166 9.40053L2.8 16.0339C3 17.2172 4.13333 18.1755 5.33333 18.1755H14.6667C15.8583 18.1755 17 17.2089 17.2 16.0339L18.3083 9.40053C18.4417 8.58386 18.025 7.49219 17.3833 6.97553L11.6083 2.35886C10.7167 1.64219 9.275 1.64219 8.39166 2.35053Z"
        stroke={'#fff'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
