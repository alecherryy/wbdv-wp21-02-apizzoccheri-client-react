import React from 'react';

import { Constrain } from '../Constrain/Constrain';

/**
 * Component for Footer element.
 *
 * @component
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