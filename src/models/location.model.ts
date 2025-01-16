export interface Location extends LocationDetail{
}

interface LocationDetail {
    name: string;
    city: string;
    country: string;
    position: Geo;
}
interface Geo {
    longitude: number;
    latitude: number;
}