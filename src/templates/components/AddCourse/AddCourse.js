import './styles.scss';

import React from 'react';

/**
 * Component for AddCourse
 *
 * @component
 */
export const AddCourse = ({ modifierClasses, title, createCourse }) => {
    return (
        <div
            className={['add-form', `${modifierClasses}`].join(' ').trim()}
        >
            { title && <h3 className="add-form__title">{title}</h3>}
            <form className="add-form__form">
                <input className="add-form__input" placeholder="Add a new course" type="text" />
                <input type="submit"
                    className="add-form__btn"
                    onClick={createCourse}
                    value="Add new course"
                />
            </form>
        </div>
    )
};