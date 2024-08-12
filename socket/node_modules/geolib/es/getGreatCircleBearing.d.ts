import { GeolibInputCoordinates } from './types';
/**
 * Gets great circle bearing of two points. See description of getRhumbLineBearing for more information
 */
declare const getGreatCircleBearing: (origin: GeolibInputCoordinates, dest: GeolibInputCoordinates) => number;
export default getGreatCircleBearing;
