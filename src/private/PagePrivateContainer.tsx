import React from 'react';
import Header from '../components/organisms/Header/Header';
import { Footer } from '../components/organisms';
import './PagePrivateContainer.css'
const PageContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Header /> {/* Componente de navegación común */}
                <div className='contenxt'>
                    {children} {/* Contenido de las páginas */}
                </div>
            <Footer />
        </div>
    );
};

export default PageContainer;