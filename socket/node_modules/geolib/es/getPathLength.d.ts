import { GeolibInputCoordinates } from './types';
declare type DistanceFn = (point: GeolibInputCoordinates, dest: GeolibInputCoordinates) => number;
declare const getPathLength: (points: GeolibInputCoordinates[], distanceFn?: DistanceFn) => number;
export default getPathLength;
