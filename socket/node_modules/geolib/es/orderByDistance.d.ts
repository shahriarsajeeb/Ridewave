import { GeolibInputCoordinates } from './types';
declare type DistanceFn = (point: GeolibInputCoordinates, dest: GeolibInputCoordinates) => number;
declare const orderByDistance: (point: GeolibInputCoordinates, coords: GeolibInputCoordinates[], distanceFn?: DistanceFn) => GeolibInputCoordinates[];
export default orderByDistance;
