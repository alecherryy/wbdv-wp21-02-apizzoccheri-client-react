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
  allModules=[],
  createModule,
  deleteModule,
  updateModule,
}) => {
  const {courseId, moduleId} = useParams();
  return (
    <div className="module-list">
      <ul className="module-list__list">
        { allModules.map(module =>
          <li className={`module-list__item ${module._id === moduleId ? 'is-active' : ''}`}>
            <EditableItem item={module} path={`/edit/${courseId}/modules/${module._id}`}
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
const dtpm = (dispatch) => {
  // return {
  //   createModule: (id) => {
  //     moduleService.createCourseModule(id, {
  //       title: 'Test module'
  //     }).then(newModule => dispatch({
  //           type: 'CREATE_MODULE',
  //           module: newModule
  //       }))
  //   },
  // }
};

export default connect(stpm, dtpm)(ModuleList);