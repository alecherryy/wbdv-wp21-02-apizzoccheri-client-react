import React from 'react';

export const Sidebar = ({ modifierClasses, asideContent, mainContent}) => {
    return (
        <div
            className={['sidebar', `${modifierClasses}`].join(' ').trim()}
        >
            <div className='sidebar__aside'>{asideContent}</div>
            <div className='sidebar__main'>{mainContent}</div>
        </div>
    );
};
