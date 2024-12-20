import React from 'react';
import Header from '../components/organisms/Header/Header';
import { Footer } from '../components/organisms';

const PageContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Header /> {/* Componente de navegación común */}
                {children} {/* Contenido de las páginas */}
            <Footer />
        </div>
    );
};

export default PageContainer;