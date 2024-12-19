import React from 'react';
import './PhotoGrid.css'
export const PhotoGrid: React.FC<{ images: any[] }> = ({ images }) => (
    <div className="photo-grid">
        {images.map((photo) => (
            <div key={photo.id} className="photo-item">
                <img src={photo.urls.thumb} alt={photo.alt_description} />
            </div>
        ))}
    </div>
);