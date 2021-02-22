import './styles.scss';

import React from 'react';

/**
 * Component for Constrain element.
 *
 * @component
 */
export const Constrain = ( { modifierClasses, children }) => {
    return (
        <div
            className={['constrain', `${modifierClasses}`].join(' ').trim()}
        >
            {children}
        </div>
    );
};