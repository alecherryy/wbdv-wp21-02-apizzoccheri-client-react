import React from 'react';
import PropTypes from 'prop-types';
import { Constrain } from '../constrain/Constrain';

/**
 * Component for Header element.
 *
 * @component
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
