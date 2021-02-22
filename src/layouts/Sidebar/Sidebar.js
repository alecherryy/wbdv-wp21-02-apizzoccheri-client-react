import './styles.scss';

import React from 'react';

/**
 * Component for Sidebar element.
 *
 * @component
 */
export const Sidebar = ({ modifierClasses, children }) => {
    return (
        <div
            className={['sidebar', `${modifierClasses}`].join(' ').trim()}
        >
            {children}
        </div>
    );
};
