import { GeolibInputCoordinates } from './types';
declare const getDistance: (from: GeolibInputCoordinates, to: GeolibInputCoordinates, accuracy?: number) => number;
export default getDistance;
