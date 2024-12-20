import React from 'react';
import './PhotoGrid.css'

export const PhotoGrid: React.FC<{ images: any[], categories: string[] }> = ({ images, categories }) => (
    <div className="photo-grid">
        {images.map((photo) => (
            <div key={photo.id} className="photo-item">
                <img src={photo.urls.thumb} alt={photo.alt_description} />
                {categories.map((category) => (
                    <div>
                        <span key={category}>{category}</span>
                    </div>
                ))}
            </div>
        ))}
    </div>
);