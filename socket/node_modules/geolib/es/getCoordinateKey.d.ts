import { GeolibInputCoordinates } from './types';
declare const getCoordinateKey: <Keys>(point: GeolibInputCoordinates, keysToLookup: Keys[]) => Keys | undefined;
export default getCoordinateKey;
