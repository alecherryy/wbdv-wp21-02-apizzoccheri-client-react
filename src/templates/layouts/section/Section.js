import React from 'react';
import PropTypes from 'prop-types';
import { Constrain } from '../constrain copy/Constrain';

/**
 * Component for Section element.
 *
 * @component
 * @param {string} modifierClasses Class modifiers of the component.
 * @param {string} titleEl HTML element of the title.
 * @param {string} title of the section.
 * @param {boolean} hasConstrain whether the component has a Section.
 * @param {node} content of the section.
 * @return {object} (
 *   <Section modifierClasses={modifierClasses} />
 *      {content}
 *   </Section>
 * )
 */

export const Section = ( {
    modifierClasses, hasConstrain, constrainModifierClasses, titleEl, title, content
}) => {
    function innerLayout() {
        if (hasConstrain) {
            return <Constrain constrainModifierClasses={constrainModifierClasses}>
                <InnerHTML title={title} content={content} />
            </Constrain>;
        }

        return <InnerHTML title={title} content={content} />;
    }
    return (
        <div
            className={['section', `${modifierClasses}`].join(' ').trim()}
        >
            {innerLayout}
        </div>
    );
};

/**
 * Fragment for Section's inner HTML.
 *
 * @return {object} (
 *   <Fragment title={title} content={content} />
 * )
 */
const InnerHTML = ({ title, content }) => (
    <Fragment>
        { title ?
            <h3>{title}</h3>
            :
            ''
        }
        {content}
    </Fragment>
);


Section.propTypes = {
    /**
   * Section's modifier classes
   */
    modifierClasses: PropTypes.string,
    /**
     * Section's hasConstrain
     */
    hasConstrain: PropTypes.bool,
    /**
   * Constrain's modifier classes
   */
    constrainModifierClasses: PropTypes.string,
    /**
   * Section's title
   */
    title: PropTypes.string,
    /**
   * Section's children nodes
   */
    children: PropTypes.node,
};

Section.defaultProps = {
    modifierClasses: '',
    hasConstrain: true,
    constrainModifierClasses: '',
};

