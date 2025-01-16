import { AdvancedMarker } from "@vis.gl/react-google-maps";
import React from "react";

// Define types explicitly for better clarity and type safety
interface Location {
  latitude: number;
  longitude: number;
}

interface Image {
  images: { user: { location: Location; profile_image_large: string } }[];
}

interface MarkerCustomProps {
  imagesx: Image[];
}

const MarkerCustom: React.FC<MarkerCustomProps> = ({ imagesx }) => (
  <div>
    {imagesx.map((photo, i) => (
      // We need to use a key for the outer loop as well
      <React.Fragment key={i}>
        {/* Check if photo.images exists and is an array */}
        {Array.isArray(photo.images) && photo.images.map((_rphoto, d) => (
          <AdvancedMarker
            key={d} // Ensure we have a unique key for each marker
            position={{
              lat: _rphoto.user.location.latitude,
              lng: _rphoto.user.location.longitude,
            }}
          >
            <div className="pinBpox">
              <img
                src={_rphoto.user.profile_image_large} // Make sure the profile image is correct
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