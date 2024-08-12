import { LongitudeKeys, LatitudeKeys, AltitudeKeys } from './types';
export declare const sexagesimalPattern: RegExp;
export declare const earthRadius = 6378137;
export declare const MINLAT = -90;
export declare const MAXLAT = 90;
export declare const MINLON = -180;
export declare const MAXLON = 180;
export declare const longitudeKeys: LongitudeKeys[];
export declare const latitudeKeys: LatitudeKeys[];
export declare const altitudeKeys: AltitudeKeys[];
declare type unitObject = {
    [key: string]: number;
};
export declare const distanceConversion: unitObject;
export declare const timeConversion: unitObject;
export declare const areaConversion: unitObject;
export {};
