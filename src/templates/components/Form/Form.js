import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { FormItem } from '../FormItem/FormItem';

/**
 * Component for form item element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {string} label of the form item.
 * @param {string} placeholder of the input.
 * @param {enum} type of the input.
 * @param {string} value of the input.
 * @return {object} (
 *   <Form modifierClasses={modifierClasses}
 *      label={label} value={value}
 *      placeholder={placeholder} type={type}
 *   />
 * )
 */
export const Form = (
    { title },
) => {
    return (
        <div className="form">
            <h3 className="form__title">{title}</h3>
            <div className="form__form">
                <FormItem type="text" label="Course label" />
                <button class="form__btn">Add new course</button>
            </div>
        </div>
    );
};

Form.propTypes = {
    /**
   * Form's title
   */
    title: PropTypes.string,
};

Form.defaultProps = {
    title: 'Foorm title',
};