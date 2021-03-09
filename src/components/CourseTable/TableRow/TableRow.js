import './styles.scss';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Component for TableRow.
 *
 * @component
 */
export const TableRow = ({
  deleteCourse,
  updateCourse,
  course,
}) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(course.title);

  // update course local function
  const updateTitle = () => {
    setEditing(false);

    const date = new Date();
    const newCourse = {
      ...course,
      title: newTitle,
      last_modified: date.toLocaleDateString(),
    }

    updateCourse(newCourse);
  }

  // delete course local function
  const deleteThisCourse = () => {
    setEditing(false);

    deleteCourse(course);
  }

  return (
    <tr className="table-row" data-is-editing={editing}>
      <td>
      {
        editing &&
        <input
        className="table-row__input"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle} />
      }
      {
        !editing &&
        <h4 className="table-row__title">
          <Link to={`/courses/edit/${course._id}`}>
            {newTitle}
          </Link>
        </h4>
      }
      </td>
      <td>{course.owner}</td>
      <td>{course.last_modified}</td>
      <td>

      {
        editing &&
        <div className="table-row__edits">
          <button className="table-row__btn table-row__btn--delete" onClick={() => deleteThisCourse()}>Delete</button>
          <button className="table-row__btn table-row__btn--okay" onClick={() => updateTitle()}>Ok</button>
        </div>
      }
      {
        !editing &&
        <button className="table-row__btn table-row__btn--edit" onClick={() => setEditing(true)}>
          Edit
        </button>
      }
      </td>
    </tr>
  )
}