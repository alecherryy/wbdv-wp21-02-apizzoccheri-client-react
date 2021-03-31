import './styles.scss';

import React, { useState } from 'react';

/**
 * Component for Widget
 *
 * @component
 */
const ListWidget = ({
  item,
  deleteItem,
  updateItem,
}) => {
  const [editing, setEditing] = useState(false);
  const [cachedItem, setCahedItem] = useState(item);
  const ListTag = cachedItem.ordered ? 'ol' : 'ul';

  return (
    <div className="widget" data-is-editing={editing}>
      <span className="widget__eyebrow">{cachedItem.name} - {cachedItem.type}</span>
      <ListTag className="widget__list">{cachedItem.text.split('\n').map((item, i) => {
        return <li key={i}>{item}</li>
      })}</ListTag>
      { editing &&
        <EditingItem cachedItem={cachedItem}
          onCheckChange={(e) => setCahedItem({
            ...cachedItem,
            ordered: !cachedItem.ordered
          })}
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

const EditingItem = ({ cachedItem, onCheckChange, onTextChange, onTypeChange }) => {
  return (
    <div className="widget__edit">
      <select
        onChange={onTypeChange}
        defaultValue={cachedItem.type}
        className={[
          'widget__input',
          'widget__input--select'].join(' ').trim()}
      >
        <option value="HEADING">Heading</option>
        <option value="PARAGRAPH">Paragraph</option>
        <option value="IMAGE">Image</option>
        <option value="LIST">List</option>
      </select>
      <input className="widget__checkbox" type="checkbox"
        onChange={onCheckChange} checked={cachedItem.ordered} />
      <label>Ordered</label>

      <textarea className="widget__input widget__input--textarea"
        onChange={onTextChange}>{cachedItem.text}</textarea>
    </div>
  )
}
export default ListWidget;