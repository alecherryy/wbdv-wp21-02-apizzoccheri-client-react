import './styles.scss';

import React from 'react';

export const Sidebar = ({ modifierClasses, children }) => {
    return (
        <div
            className={['sidebar', `${modifierClasses}`].join(' ').trim()}
        >
            {children}
        </div>
    );
};
