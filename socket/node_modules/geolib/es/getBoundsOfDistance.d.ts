import { GeolibInputCoordinates } from './types';
declare const getBoundsOfDistance: (point: GeolibInputCoordinates, distance: number) => {
    latitude: number;
    longitude: number;
}[];
export default getBoundsOfDistance;
