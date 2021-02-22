import './styles.scss';

import React from 'react';
import { Grid } from '../../layouts/Grid/Grid';
import GridCard from '../GridCard/GridCard';
import TableRow from '../TableRow/TableRow';

/**
 * Component for course table element.
 */

export const CourseTable = ( {courses, deleteCourse} ) => {
    return (
        <table className="course-list__table">
            <thead className="course-list__head">
                <tr>
                    <th>Title</th>
                    <th>Owner</th>
                    <th>Last Modified</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="course-list__body">
            { courses.map(course =>
                <TableRow
                    key={course._id}
                    deleteCourse={deleteCourse}
                    course={course} />
                )
            }
            </tbody>
        </table>
    )
}