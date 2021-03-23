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
  console.log(item.size.toString() === '1');
  const TitleTag = `${item.size.toString()}`;
  return (
    <div className="widget" data-is-editing={editing}>
      <span className="widget-eyebrow">{item.name}</span>
      <span className="widget__title">{item.text}</span>
      { editing &&
        <EditingItem cachedItem={cachedItem}
          onTextChange={(e) => setCahedItem({
            ...cachedItem,
            text: e.target.value
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

const EditingItem = ({ cachedItem, onTextChange, onSizeChange }) => {
  return (
    <div className="widget__edit">
      <select
        defaultValue={cachedItem.type}
        className={[
          'widget__input',
          'widget__input--select'].join(' ').trim()}
      >
        <option value="HEADING">Heading</option>
        <option value="PARAGRAPH">Paragraph</option>
      </select>
      <input className="widget__input"
        onChange={onTextChange} value={cachedItem.text} />
      <select
        onSelect={onSizeChange}
        defaultValue={cachedItem.size}
        className={[
          'widget__input',
          'widget__input--select'].join(' ').trim()}
      >
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Heading 3</option>
        <option value="4">Heading 4</option>
        <option value="5">Heading 5</option>
        <option value="6">Heading 6</option>
      </select>
    </div>
  )
}
export default Widget;