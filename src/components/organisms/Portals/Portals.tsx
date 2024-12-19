import React from 'react';
import ReactDOM from 'react-dom';

function Portal({ children }: {children: React.ReactNode}) {
    return ReactDOM.createPortal(
        <div className='portal-content'>
            {children}
        </div>,
        document.getElementById('portal-root') as HTMLElement
    )
}

export default Portal;