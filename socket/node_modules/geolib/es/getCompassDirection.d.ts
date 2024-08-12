import { GeolibInputCoordinates } from './types';
declare type BearingFunction = (origin: GeolibInputCoordinates, dest: GeolibInputCoordinates) => number;
declare const getCompassDirection: (origin: GeolibInputCoordinates, dest: GeolibInputCoordinates, bearingFn?: BearingFunction) => "S" | "W" | "NNE" | "NE" | "ENE" | "E" | "ESE" | "SE" | "SSE" | "SSW" | "SW" | "WSW" | "WNW" | "NW" | "NNW" | "N";
export default getCompassDirection;
