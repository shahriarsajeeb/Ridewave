import { GeolibInputCoordinates } from './types';
declare const getDistance: (start: GeolibInputCoordinates, end: GeolibInputCoordinates, accuracy?: number) => number;
export default getDistance;
