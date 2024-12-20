import { APIProvider, Map as GoogleMap } from '@vis.gl/react-google-maps';

export const MapComponent = () => {
    const apiKey = process.env.VITE_GOOGLE_MAPS_API_KEY;

    return (
        <div>
            <h1>Map Works</h1>
            <APIProvider apiKey={apiKey}>
                <GoogleMap
                    style={{width: '100vw', height: '100vh'}}
                    defaultCenter={{lat: 22.54992, lng: 0}}
                    defaultZoom={3}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                />
            </APIProvider>
        </div>
    );
};