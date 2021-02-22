import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for grid layout element.
 *
 * @param {node} children of the component
 * @param {number} noOfCols number of columns in layout.
 * @return {object} (
 *   <Grid noOfCols={noOfCols}>
 *      {children}
 *    </Grid>
 * )
 */

export const Grid = ({ children, noOfCols }) => {
    const modifierClass = noOfCols ? `grid--${noOfCols}-col` : '';

    return (
        <div className={['grid', modifierClass].join(' ').trim()}>
            {children}
        </div>
    );
};

Grid.propTypes = {
    /**
   * Grid's children
   */
    children: PropTypes.node,
    /**
   * Grid's number of columns
   */
    noOfCols: PropTypes.number,
};

Grid.defaultProps = {
    children: '',
};
