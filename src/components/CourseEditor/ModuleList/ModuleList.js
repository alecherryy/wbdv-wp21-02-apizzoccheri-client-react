import './styles.scss';

import React from 'react';
import { connect } from 'react-redux';

import { AddContent } from '../../AddContent/AddContent';
import { EditableItem } from '../../EditableItem/EditableItem';

/**
 * Component for ModuleList
 *
 * @component
 */
export const ModuleList = ({
  modules=[],
  deleteLesson,
  createLesson,
  moduleId,
  updateLesson,
  saveChanges
}) => {
  return (
    <div className="module-list">
      <ul className="module-list__list">
        { modules.map(module => <li className="module-list__item">
          <EditableItem item={module} /></li>
        )}
        <li className="module-list__item">
          <AddContent
            modifierClasses=""
            title=""
            content="module"
          />
        </li>
      </ul>
    </div>
  )
}

const stpm = (state) => ({
  modules: state.ModuleReducer.modules
});
const dtpm = (dispatch) => ({});

export default connect(stpm, dtpm)(ModuleList);