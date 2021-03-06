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
  item,
}) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);

  // update item course local function
  const updateTitle = () => {
    setEditing(false);

    const newItem = {
      ...item,
      title: newTitle,
    }

    // updateCourse(newCourse);
  }

  // delete course local function
  const deleteThisItem = () => {
    setEditing(false);

    // deleteCourse(item);
  }

  return (
    <div className="editable-item" data-is-editing={editing}>
      { editing &&
        <input className="editable-item__input"
        onChange={(e) => setNewTitle(e.target.value)} value={newTitle} />
      }
      { !editing &&
        <h4 className="editable-item__title">
          <Link to={`/courses/edit/item/${item._id}`}>{newTitle}</Link>
        </h4>
      }
      <div className="editable-item__controls">
      { editing &&
        <div className="editable-item__edits">
          <button className="editable-item__btn editable-item__btn--delete"
            onClick={() => deleteThisItem()}>Delete</button>
          <button className="editable-item__btn editable-item__btn--okay"
            onClick={() => updateTitle()}>Ok</button>
        </div>
      }
      { !editing &&
        <button className="editable-item__btn editable-item__btn--edit" onClick={() => setEditing(true)}>
          Edit
        </button>
      }
      </div>
    </div>
  )
};