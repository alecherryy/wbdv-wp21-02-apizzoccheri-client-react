import React from 'react';
import { Constrain } from '../Constrain/Constrain';

/**
 * Component for Section element.
 *
 * @component
 */

export const Section = ( { modifierClasses, children }) => {
  return (
    <div
      className={['section', `${modifierClasses}`].join(' ').trim()}
    >
      {children}
    </div>
  );
};