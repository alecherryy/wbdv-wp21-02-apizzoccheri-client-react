import './styles.scss';

import React, { useState } from 'react';

/**
 * Component for Widget
 *
 * @component
 */
const ImageWidget = ({
  item,
  deleteItem,
  updateItem,
}) => {
  const [editing, setEditing] = useState(false);
  const [cachedItem, setCahedItem] = useState(item);

  return (
    <div className="widget" data-is-editing={editing}>
      <span className="widget__eyebrow">{cachedItem.name} - {cachedItem.type}</span>
      <img className="widget__image" src={cachedItem.src} alt={cachedItem.name}
        width={cachedItem.width} height={cachedItem.height} />
      { editing &&
        <EditingItem cachedItem={cachedItem}
          onSourceChange={(e) => setCahedItem({
            ...cachedItem,
            src: e.target.value
          })}
          onWidthChange={(e) => setCahedItem({
            ...cachedItem,
            width: e.target.value
          })}
          onHeightChange={(e) => setCahedItem({
            ...cachedItem,
            height: e.target.value
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

const EditingItem = ({ cachedItem, onTypeChange, onSourceChange, onWidthChange, onHeightChange }) => {
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
      </select>
      <label>
        Source
        <input className="widget__input" type="text"
          onChange={onSourceChange} value={cachedItem.src} />
      </label>
      <label>
        Width
        <input className="widget__input" type="number"
          onChange={onWidthChange} value={cachedItem.width} />
      </label>
      <label>
        Height
        <input className="widget__input" type="number"
          onChange={onHeightChange} value={cachedItem.height} />
      </label>
    </div>
  )
}
export default ImageWidget;