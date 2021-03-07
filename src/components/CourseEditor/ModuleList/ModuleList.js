import './styles.scss';

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  createModule,
  deleteModule,
  updateModule,
}) => {
  const {courseId, moduleId} = useParams();
  return (
    <div className="module-list">
      <ul className="module-list__list">
        { modules.map((module, i) =>
          <li className={`module-list__item ${module._id === moduleId ? 'is-active' : ''}`}>
            <EditableItem key={i} item={module} path={`/courses/edit/${courseId}/modules/${module._id}`}
              deleteItem={deleteModule}/>
          </li>
        )}
        <li className="module-list__item">
          <AddContent
            modifierClasses=""
            title=""
            content="module"
            onClick={() => createModule(courseId)}
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