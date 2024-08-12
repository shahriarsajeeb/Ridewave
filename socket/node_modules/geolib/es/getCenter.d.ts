import { GeolibInputCoordinates } from './types';
declare const getCenter: (points: GeolibInputCoordinates[]) => false | {
    longitude: number;
    latitude: number;
};
export default getCenter;
