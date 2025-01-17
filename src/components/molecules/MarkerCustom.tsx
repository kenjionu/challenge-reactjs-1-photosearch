import { AdvancedMarker } from "@vis.gl/react-google-maps";
import React from "react";

// Define types explicitly for better clarity and type safety
interface Location {
  latitude: number;
  longitude: number;
}

interface Image {
  id: string; // Assuming each image has a unique id
  images: { user: { location: Location; profile_image_large: { large: string } } }[];
}

interface MarkerCustomProps {
  imagesx: Image[];
}

const MarkerCustom: React.FC<MarkerCustomProps> = ({ imagesx }) => (
  <div>
    {imagesx.map((photo, i) => (
      // Use a unique identifier for the outer key
      <React.Fragment key={photo.id || `photo-${i}`}>
        {/* Check if photo.images exists and is an array */}
        {Array.isArray(photo.images) && photo.images.map((_rphoto, d) => (
          <AdvancedMarker
            key={`${photo.id || `photo-${i}`}-${d}`} // Combine identifiers for a unique key
            position={{
              lat: _rphoto.user.location.latitude,
              lng: _rphoto.user.location.longitude,
            }}
          >
            <div className="pinBpox">
              <p>latitude: </p> {_rphoto.user.location.latitude}
              <p>longitude: </p> {_rphoto.user.location.longitude}

              <img
                src={_rphoto.user.profile_image_large.large} // Make sure the profile image is correct
                alt="User Profile"
                width={32}
                height={32}
              />
            </div>
          </AdvancedMarker>
        ))}
      </React.Fragment>
    ))}
  </div>
);

export default MarkerCustom;