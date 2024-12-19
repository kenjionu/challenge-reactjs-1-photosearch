// CategoryCollection.tsx
import { useFetchPhotos } from '../../../hooks/useApi';
import CategorySection from '../CategorySection/CategorySection';
import './CategoryCollection.css'; // Asegúrate de tener estilos según tus necesidades

const categories = ['dogs', 'cats', 'people', 'wedding'];

export const CategoryCollection = () => {
    const { photos, loading, error } = useFetchPhotos(categories);

    return (
        <div className="gallery-container">
            <p>My collections</p>
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            <div className='section-category'>
            {photos.map((categoryData) => (
                <CategorySection key={categoryData.category} categoryData={categoryData} />
            ))}
            </div>
        </div>
    );
};