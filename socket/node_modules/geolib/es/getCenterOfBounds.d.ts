import { GeolibInputCoordinates } from './types';
declare const getCenterOfBounds: (coords: GeolibInputCoordinates[]) => {
    latitude: number;
    longitude: number;
};
export default getCenterOfBounds;
