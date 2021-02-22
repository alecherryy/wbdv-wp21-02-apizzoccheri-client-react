import './styles.scss';

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * Component for table row element.
 *
 * @component
 * @param {string} title of the table row.
 * @param {string} lastModified date of the component.
 * @return {object} (
 *   <TableRow title={title}
 *      lastModified={lastModified}/>
 * )
 */
export const TableRow = ({ title, lastModified }) => {
    return (
        <Fragment>
            <td>{title}</td>
            <td>Me</td>
            <td>{lastModified}</td>
            <td>Edit Buttons</td>
        </Fragment>
    )
};

TableRow.propTypes = {
    /**
   * TableRow's title
   */
    title: PropTypes.string,
    /**
   * TableRow's title
   */
    lastModified: PropTypes.string,
};

TableRow.defaultProps = {
    title: 'Title',
    lastModified: '',
};
