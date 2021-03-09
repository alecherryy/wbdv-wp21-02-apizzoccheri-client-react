import './styles.scss';

import React from 'react';

/**
 * Component for AddContent
 *
 * @component
 */
export const AddContent = ({ modifierClasses, title, content, onClick }) => {

  return (
    <div
      className={['add-form', `${modifierClasses}`].join(' ').trim()}
    >
      { title && <h3 className="add-form__title">{title}</h3>}
      <form className="add-form__form">
        <input className="add-form__input" placeholder={`Add new ${content}`} type="text" />
        <input type="submit"
          onClick={onClick}
          className="add-form__btn"
          value={`Add new ${content}`}
        />
      </form>
    </div>
  )
};