import { useContext } from 'react';
import PageContext from '../context/pageContext';

export function usePage() {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error("usePage debe estar dentro de un PageProvider");
    }
    return context;
} 