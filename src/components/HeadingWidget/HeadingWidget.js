import './styles.scss';

import React, { useState } from 'react';

/**
 * Component for Widget
 *
 * @component
 */
const Widget = ({
  item,
  deleteItem,
  updateItem,
}) => {
  const [editing, setEditing] = useState(false);
  const [cachedItem, setCahedItem] = useState(item);

  return (
    <div className="widget" data-is-editing={editing}>
      <span className="widget-eyebrow">{item.name}</span>
      { editing &&
        <input className="widget__input"
          onChange={(e) => setCahedItem({
              ...cachedItem,
              title: e.target.value
          })} value={cachedItem.text} />
      }
      { !editing &&
        <h4 className="widget__title">{item.text}</h4>
      }
      <div className="widget__controls">
      { editing &&
        <div className="widget__edits">
          <button className="widget__btn widget__btn--delete"
            onClick={() => {
              setEditing(false)
              deleteItem(item)}
            }>Delete</button>
          <button className="widget__btn widget__btn--okay"
            onClick={() => {
              setEditing(false)
              updateItem(cachedItem)}}>Ok</button>
        </div>
      }
      { !editing &&
        <button className="widget__btn widget__btn--edit"
          onClick={() => setEditing(true)}>
          Edit
        </button>
      }
      </div>
    </div>
  )
};

export default Widget;