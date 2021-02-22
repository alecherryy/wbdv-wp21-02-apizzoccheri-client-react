import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for search course
 *
 * @component
 */
export const AddCourse = ({ title, createCourse }) => {
    return (
        <div className="add-form">
            { title && <h3 className="add-form__title">{title}</h3>}
            <form className="add-form__form">
                <input id="courseId" className="add-form__input" placeholder="Add a new course" type="text" />
                <button
                    className="add-form__btn"
                    onClick={createCourse}
                >Add new course</button>
            </form>
        </div>
    )
};