import { GeolibInputCoordinates } from './types';
declare const isPointNearLine: (point: GeolibInputCoordinates, start: GeolibInputCoordinates, end: GeolibInputCoordinates, distance: number) => boolean;
export default isPointNearLine;
