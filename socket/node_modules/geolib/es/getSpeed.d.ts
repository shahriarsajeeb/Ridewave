import { GeolibInputCoordinatesWithTime, GeolibDistanceFn } from './types';
declare const getSpeed: (start: GeolibInputCoordinatesWithTime, end: GeolibInputCoordinatesWithTime, distanceFn?: GeolibDistanceFn) => number;
export default getSpeed;
