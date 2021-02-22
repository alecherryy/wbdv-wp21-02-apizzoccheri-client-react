import './styles.scss';

import React from 'react';

/**
 * Component for Grid element.
 *
 * @component
 */
export const Grid = ({ children, noOfCols }) => {
    const modifierClass = noOfCols ? `grid--${noOfCols}-col` : '';

    return (
        <div className={['grid', modifierClass].join(' ').trim()}>
            {children}
        </div>
    );
};