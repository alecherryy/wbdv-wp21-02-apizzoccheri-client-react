import './styles.scss';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Component for EditableItem
 *
 * @component
 */
const EditableItem = ({
  item,
  path,
  deleteItem,
  updateItem,
}) => {
  const [editing, setEditing] = useState(false);
  const [cachedItem, setCahedItem] = useState(item);

  return (
    <div className="editable-item" data-is-editing={editing}>
      { editing &&
        <input className="editable-item__input"
          onChange={(e) => setCahedItem({
              ...cachedItem,
              title: e.target.value
          })} value={cachedItem.title} />
      }
      { !editing &&
        <h4 className="editable-item__title">{item.title}</h4>
      }
      <div className="editable-item__controls">
      { editing &&
        <div className="editable-item__edits">
          <button className="editable-item__btn editable-item__btn--delete"
            onClick={() => {
              setEditing(false)
              deleteItem(item)}
            }>Delete</button>
          <button className="editable-item__btn editable-item__btn--okay"
            onClick={() => {
              setEditing(false)
              updateItem(cachedItem)}}>Ok</button>
        </div>
      }
      { !editing &&
        <button className="editable-item__btn editable-item__btn--edit"
          onClick={() => setEditing(true)}>
          Edit
        </button>
      }
      </div>
    </div>
  )
};

export default EditableItem;