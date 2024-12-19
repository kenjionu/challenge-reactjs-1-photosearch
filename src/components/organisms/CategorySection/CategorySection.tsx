
import React from 'react';
import { PhotoGrid } from '../PhotoGrid/PhotoGrid';

const CategorySection: React.FC<{ categoryData: { category: string; images: any[] } }> = ({ categoryData }) => (
    <div className="category-section">
        <PhotoGrid images={categoryData.images} />
        <h2>{categoryData.category.charAt(0).toUpperCase() + categoryData.category.slice(1)}</h2>
    </div>
);

export default CategorySection;