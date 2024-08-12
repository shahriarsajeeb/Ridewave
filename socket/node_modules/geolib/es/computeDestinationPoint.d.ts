import { GeolibInputCoordinates } from './types';
declare const computeDestinationPoint: (start: GeolibInputCoordinates, distance: number, bearing: number, radius?: number) => {
    latitude: number;
    longitude: number;
};
export default computeDestinationPoint;
