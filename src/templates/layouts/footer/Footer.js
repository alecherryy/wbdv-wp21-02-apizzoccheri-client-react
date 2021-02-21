import React from 'react';
import PropTypes from 'prop-types';
import { Constrain } from '../constrain/Constrain';

/**
 * Component for Footer element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {string} titleEl HTML element of the title.
 * @param {string} title of the section.
 * @param {boolean} hasConstrain whether the component has a Footer.
 * @param {node} content of the section.
 * @return {object} (
 *   <Footer modifierClasses={modifierClasses} />
 *      {content}
 *   </Footer>
 * )
 */

export const Footer = ( {
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


Footer.propTypes = {
    /**
   * Footer's modifier classes
   */
    modifierClasses: PropTypes.string,
    /**
     * Footer's hasConstrain
     */
    hasConstrain: PropTypes.bool,
    /**
   * Constrain's modifier classes
   */
    constrainModifierClasses: PropTypes.string,
    /**
   * Footer's children nodes
   */
    children: PropTypes.node,
};

Footer.defaultProps = {
    modifierClasses: '',
    hasConstrain: true,
    constrainModifierClasses: '',
};

