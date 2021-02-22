import React from 'react';
import { Constrain } from '../constrain copy/Constrain';

/**
 * Component for Section element.
 *
 * @component
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