import './styles.scss';

import React, { Fragment, useState } from 'react';

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
      <p>{item.text}</p>
      { editing &&
        <EditingItem cachedItem={cachedItem}
          onTextChange={(e) => setCahedItem({
            ...cachedItem,
            text: e.target.value
          })}
          onTypeChange={(e) => setCahedItem({
            ...cachedItem,
            type: e.target.value
          })}
        />
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

const EditingItem = ({ cachedItem, onTextChange, onTypeChange }) => {
  return (
    <Fragment>
      <select
        onSelect={onTypeChange}
        defaultValue={cachedItem.type}
        className={[
          'widget__input',
          'widget__input--select'].join(' ').trim()}
      >
        <option value="HEADING">Heading</option>
        <option value="PARAGRAPH">Paragraph</option>
      </select>
      <textarea className="widget__textarea"
        onChange={onTextChange}>{cachedItem.text}</textarea>
    </Fragment>
  )
}
export default Widget;