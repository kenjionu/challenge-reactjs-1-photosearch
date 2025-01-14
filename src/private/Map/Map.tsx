import { APIProvider, Map as GoogleMap, Marker, useMarkerRef } from '@vis.gl/react-google-maps';
import './Map.css'
import { useEffect } from 'react';
export const MapComponent = () => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const [markerRef, marker] = useMarkerRef();

    useEffect(() => {
      if (!marker) {
        return;
      }
  
    }, [marker]);


    return (
        <div className='map'>
            <div className='content-map'>
                <p>Is photographers in your area</p>
            </div>
            <div className='google-map'>
                <APIProvider apiKey={apiKey}>
                    <GoogleMap
                        style={{width: '100%', height: '300px'}}
                        defaultCenter={{lat: 22.54992, lng: 0}}
                        defaultZoom={3}
                        gestureHandling={'greedy'}
                        disableDefaultUI={true}
                    />
                <Marker ref={markerRef} position={{lat: 53.54992, lng: 10.00678}} />
                <Marker ref={markerRef} position={{lat: 23.54992, lng: 4.00678}} />
                <Marker ref={markerRef} position={{lat: 11.54992, lng: 24.00678}} />

                </APIProvider> 
            </div>
        </div>
    );
};  