import React from 'react';
import { PhotoGrid } from '../PhotoGrid/PhotoGrid';
import './CategorySection.css';

const CategorySection: React.FC<{ categoryData: { category: string; images: any[] } }> = ({ categoryData }) => (
    <div className="category-section">
        <PhotoGrid 
            images={categoryData.images}  
            categories={[categoryData.category]}
        />
    </div>
);

export default CategorySection;