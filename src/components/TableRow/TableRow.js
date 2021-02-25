import './styles.scss';

import React, { useState } from 'react';
import courseService from '../../services/CourseService';
import { Link } from 'react-router-dom';

/**
 * Component for TableRow.
 *
 * @component
 */
export const TableRow = ({
    deleteCourse,
    updateCourse,
    updateTitle,
    course,
}) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(course.title);

    updateTitle = (event) => {
        const newTitle = event.target.value;
        const date = new Date();
        course.title = newTitle
        course.last_modified = date.toLocaleDateString()
    }

    updateCourse = () => {
        setEditing(false)

        courseService.updateCourse(course._id, course)
    }

    return (
        <tr className="table-row" data-is-editing={editing}>
            <td>
            {
                editing &&
                <input
                className="table-row__input"
                onChange={this.updateTitle}
                value={title}/>
            }
            {
                editing === false &&
                <h4 className="table-row__title">
                    <Link to='/courses/editor'>
                        {course.title}
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
                    <button className="table-row__btn table-row__btn--delete" onClick={() => setEditing(true), deleteCourse(course)}>Delete</button>
                    <button className="table-row__btn table-row__btn--okay" onClick={() => setEditing(true), this.updateCourse}>Ok</button>
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
};

export default TableRow;