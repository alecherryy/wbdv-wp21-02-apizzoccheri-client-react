import React from 'react';
import PropTypes from 'prop-types';
import { Constrain } from '../constrain/Constrain';

/**
 * Component for Header element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {string} titleEl HTML element of the title.
 * @param {string} title of the section.
 * @param {boolean} hasConstrain whether the component has a Header.
 * @param {node} content of the section.
 * @return {object} (
 *   <Header modifierClasses={modifierClasses} />
 *      {content}
 *   </Header>
 * )
 */

export const Header = ( {
    modifierClasses, hasConstrain, constrainModifierClasses, content
}) => {
    function innerLayout() {
        if (hasConstrain) {
            return <Constrain constrainModifierClasses={constrainModifierClasses}>
                {content}
            </Constrain>;
        }

        return {content};
    }
    return (
        <div
            className={['section', `${modifierClasses}`].join(' ').trim()}
        >
            {innerLayout}
        </div>
    );
};


Header.propTypes = {
    /**
   * Header's modifier classes
   */
    modifierClasses: PropTypes.string,
    /**
     * Header's hasConstrain
     */
    hasConstrain: PropTypes.bool,
    /**
   * Constrain's modifier classes
   */
    constrainModifierClasses: PropTypes.string,
    /**
   * Header's children nodes
   */
    children: PropTypes.node,
};

Header.defaultProps = {
    modifierClasses: '',
    hasConstrain: true,
    constrainModifierClasses: '',
};

