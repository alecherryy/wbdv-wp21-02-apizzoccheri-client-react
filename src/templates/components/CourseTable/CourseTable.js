import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for CourseTable element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {node} content Children of the component.
 * @return {object} (
 *   <CourseTable modifierClasses={modifierClasses} />
 *      {content}
 *   </CourseTable>
 * )
 */

export const CourseTable = ( {content }) => {
    return (
        <table className="course-table">
            <thead className="course-table__head">
                <tr>
                    <th>Title</th>
                    <th>Owned By</th>
                    <th>Last modified</th>
                </tr>
            </thead>
            <tbody className="course-table__body">
                {content}
            </tbody>
        </table>
    );
};

CourseTable.propTypes = {
    /**
   * CourseTable's modifier classes
   */
    modifierClasses: PropTypes.string,
    /**
   * CourseTable's children nodes
   */
    content: PropTypes.node,
};

CourseTable.defaultProps = {
    modifierClasses: '',
};

