import Svg, {Circle, Path} from 'react-native-svg';
import React from 'react';

export function Notification({colors}: {colors?: string}) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.0181 1.66748C6.98398 1.66748 4.51815 4.13331 4.51815 7.16748V9.81665C4.51815 10.3758 4.27981 11.2283 3.99565 11.705L2.94148 13.4558C2.29065 14.5375 2.73981 15.7383 3.93148 16.1416C7.88231 17.4616 12.1448 17.4616 16.0956 16.1416C17.2048 15.775 17.6906 14.4641 17.0856 13.4558L16.0315 11.705C15.7565 11.2283 15.5181 10.3758 15.5181 9.81665V7.16748C15.5181 4.14248 13.0431 1.66748 10.0181 1.66748Z"
        stroke={colors || 'white'}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M11.7137 1.93283C11.4296 1.85033 11.1362 1.78617 10.8337 1.7495C9.95374 1.6395 9.1104 1.70367 8.32207 1.93283C8.5879 1.2545 9.2479 0.777832 10.0179 0.777832C10.7879 0.777832 11.4479 1.2545 11.7137 1.93283Z"
        stroke={colors || 'white'}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.7686 16.4722C12.7686 17.9847 11.5311 19.2222 10.0186 19.2222C9.26689 19.2222 8.57022 18.9105 8.07522 18.4155C7.58022 17.9205 7.26855 17.2238 7.26855 16.4722"
        stroke={colors || 'white'}
        strokeWidth="1.2"
        strokeMiterlimit="10"
      />
      <Circle cx="16.05" cy="3.94995" r="2.75" fill="#FF4B4B" />
    </Svg>
  );
}
