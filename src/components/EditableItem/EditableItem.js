import './styles.scss';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Component for EditableItem
 *
 * @component
 */
export const EditableItem = ({
  deleteItem,
  updateItem,
  course,
}) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(course.title);

  // update course local function
  const updateTitle = () => {
    setEditing(false);

    const date = new Date();
    const newTitle = {
      ...item,
      title: newTitle,
      last_modified: date.toLocaleDateString(),
    }

    updateCourse(newCourse);
  }

  // delete course local function
  const deleteThisItem = () => {
    setEditing(false);

    deleteCourse(course);
  }

  return (
    <div className="editable-item" data-is-editing={editing}>
    </div>
  )
};