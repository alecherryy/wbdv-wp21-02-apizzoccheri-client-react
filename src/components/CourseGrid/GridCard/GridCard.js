import './styles.scss';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Component for GridCard
 *
 * @component
 */
export const GridCard = ({
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
  <div className="grid-card" data-is-editing={editing}>
    <span className="grid-card__image"></span>
    {
    editing &&
    <input
    className="grid-card__input"
    onChange={(e) => setNewTitle(e.target.value)}
    value={newTitle} />
    }
    {
    !editing &&
    <h4 className="grid-card__title">
      <Link to={`/courses/edit/${course._id}`}>
      {newTitle}
      </Link>
    </h4>
    }
    <p><b>Owener: </b>{course.owner}</p>
    <p><b>Last modified: </b>{course.last_modified}</p>
    <div className="grid-card__controls">
    {
    editing &&
    <div className="grid-card__edits">
      <button className="grid-card__btn grid-card__btn--delete" onClick={() => deleteThisCourse()}>Delete</button>
      <button className="grid-card__btn grid-card__btn--okay" onClick={() => updateTitle()}>Ok</button>
    </div>
    }
    {
    !editing &&
    <button className="grid-card__btn grid-card__btn--edit" onClick={() => setEditing(true)}>
      Edit
    </button>
    }
    </div>
  </div>
  )
};