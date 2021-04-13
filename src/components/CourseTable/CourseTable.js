import './styles.scss';

import React from 'react';

import { TableRow } from './TableRow/TableRow';

/**
 * Component for CourseTable
 *
 * @component
 */
export const CourseTable = ( {courses, deleteCourse, updateCourse } ) => {
  return (
    <table className="course-table__table">
      <thead className="course-table__head">
        <tr>
          <th>Title</th>
          <th>Owner</th>
          <th>Last Modified</th>
          <th></th>
          <th>Quizzes</th>
        </tr>
      </thead>
      <tbody className="course-table__body">
      { courses.map(course =>
        <TableRow
          key={course._id}
          deleteCourse={deleteCourse}
          updateCourse={updateCourse}
          course={course} />
        )
      }
      </tbody>
    </table>
  )
}