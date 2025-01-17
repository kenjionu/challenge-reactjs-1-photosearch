import { AdvancedMarker, APIProvider, Map as GoogleMap, Marker, Pin, useMarkerRef } from '@vis.gl/react-google-maps';
import './Map.css'
import cameraDLSR from '../../assets/images/dslr-camera.svg';
import { useFetchPhotos } from '../../hooks/useApi';
import MarkerCustom from '../../components/molecules/MarkerCustom';

const categories = ['dogs', 'cats', 'people', 'wedding'];

export const MapComponent = () => {

    const { photos, loading, error } = useFetchPhotos(categories);
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    return (
        <div className='map'>
            <div className='content-map'>
                <img src={cameraDLSR}></img>
                <p>Is photographers in your area</p>
            </div>
            <div className='google-map'>
                <APIProvider apiKey={apiKey}>
                    <GoogleMap
                        style={{ width: '100%', height: '100vh' }}
                        defaultCenter={{ lat: 22.54992, lng: 0 }}
                        defaultZoom={3}
                        gestureHandling={'greedy'}
                        disableDefaultUI={true}
                        mapId='MapId'>
                                

                                {photos.map((categoryData, i) => (
                                        <MarkerCustom key={i} imagesx={categoryData.images}>
                            
                                        </MarkerCustom>
                                         
                                ))}

           

                    </GoogleMap>

                </APIProvider>
            </div>
        </div>
    );


};  