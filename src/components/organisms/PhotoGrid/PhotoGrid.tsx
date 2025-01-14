import React from 'react';
import './PhotoGrid.css'

export const PhotoGrid: React.FC<{ images: any[], categories: string[] }> = ({ images, categories }) => (
    <div className="photo-grid">
        {images.map((photo, i) => (
            <div className="photo-item">
                <img key={i} src={photo.urls.thumb} alt={photo.alt_description} />
                {categories.map((category, i) => (
                    <div>
                        <span key={i}>{category}</span>
                    </div>
                ))}
            </div>
        ))}
    </div>
);