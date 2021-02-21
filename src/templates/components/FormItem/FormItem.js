import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

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
 *   <FormItem modifierClasses={modifierClasses}
 *      label={label} value={value}
 *      placeholder={placeholder} type={type}
 *   />
 * )
 */
export const FormItem = (
    { modifierClasses, label, placeholder, type, value },
) => {
    return (
        <div className={['form-item', `${modifierClasses}`].join(' ').trim()}>
            <Input
                type={type}
                value={value}
                placeholder={placeholder}
                label={label} />
        </div>
    );
};

FormItem.propTypes = {
    /**
   * FormItem's modifier classes
   */
    modifierClasses: PropTypes.string,
    /**
   * FormItem's label
   */
    label: PropTypes.string,
    /**
   * FormItem's placeholder
   */
    placeholder: PropTypes.string,
    /**
   * FormItem's type
   */
    type: PropTypes.string.isRequired,
    /**
   * FormItem's value
   */
    value: PropTypes.string,
};

FormItem.defaultProps = {
    modifierClasses: '',
    label: 'Form Item Label',
    type: 'text',
    placeholder: 'Placeholder',
    value: '',
};

/**
 * Render <input /> HTML
 * @param {string} placeholder of the input.
 * @param {enum} type of the input.
 * @param {string} value of the input.
 * @param {string} label of the input.
 * @return {object} (
 *   <Input
 *      placeholder={placeholder} label={label}
        type={type} value={value} />
 * )
 */
const Input = ({type, placeholder, value, label}) => (
    <input
        className={[
            'form-item__input',
            `form-item__input--${type}`].join(' ').trim()}
        placeholder={placeholder}
        type={type}
        aria-label={label}
        {...value ? `value="${value}"` : ''}
    />
);

Input.propTypes = {
    /**
   * Input's label
   */
    label: PropTypes.string.isRequired,
    /**
   * Input's placeholder
   */
    placeholder: PropTypes.string,
    /**
   * Input's allowed types
   */
    type: PropTypes.oneOf([
        'text',
        'email',
        'password',
        'date',
    ]).isRequired,
    /**
   * Input's value
   */
    value: PropTypes.string,
};

Input.defaultProps = {
    label: 'Form Item Label',
    type: 'text',
    placeholder: 'Placeholder',
    value: '',
};
