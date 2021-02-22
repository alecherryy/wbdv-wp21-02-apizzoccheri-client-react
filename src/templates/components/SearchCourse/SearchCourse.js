import './styles.scss';

import React from 'react';

/**
 * Component for SearchCourse
 *
 * @component
 */
export const SearchCourse = ({ title, findCourseById }) => {
    return (
        <div className="search-form">
            { title && <h3 className="search-form__title">{title}</h3>}
            <form className="search-form__form">
                <input id="courseId" className="search-form__input" placeholder="Enter the course ID" type="text" />
                <button
                    className="search-form__btn"
                    onClick={findCourseById}
                >Add new course</button>
            </form>
        </div>
    )
};