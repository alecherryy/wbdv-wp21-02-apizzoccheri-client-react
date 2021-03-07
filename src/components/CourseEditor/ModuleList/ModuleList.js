import './styles.scss';

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { AddContent } from '../../AddContent/AddContent';
import { EditableItem } from '../../EditableItem/EditableItem';
import moduleService from '../../../services/ModuleService';

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
  findModules,
}) => {
  const {courseId, moduleId} = useParams();

  useEffect(() => {
    findModules(courseId)
  }, [])

  return (
    <div className="module-list">
      <ul className="module-list__list">
        { modules.map((module, i) =>
          <li key={i} className={`module-list__item ${module._id === moduleId ? 'is-active' : ''}`}>
            <EditableItem item={module}
              path={`/courses/edit/${courseId}/modules/${module._id}`}
              updateItem={updateModule}
              deleteItem={deleteModule} />
          </li>
        )}
        <li className="module-list__item">
          <AddContent
            modifierClasses=""
            title=""
            content="module"
            onClick={(e) => createModule(e, courseId)}
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
  return {
    findModules: (courseId) => {
      moduleService.findModules(courseId)
        .then(modules => dispatch({
          type: 'FIND_MODULES',
          modules: modules
        })
      )
    },
    createModule: (e, courseId) => {
      e.preventDefault();

      const title = e.target.previousSibling.value ? e.target.previousSibling.value : 'New Module';
      // reset form
      if (title) {
        e.target.parentNode.reset();
      }

      moduleService.createModule(courseId, {
        title: title
      }).then(theActualModule => dispatch({
        type: 'CREATE_MODULE',
        module: theActualModule
    }))},
    updateModule: (module) =>
      moduleService.updateModule(module._id, module).then(status => dispatch({
        type: 'UPDATE_MODULE',
        module
      })),
    deleteModule: (module) =>
      moduleService.deleteModule(module._id)
      .then(status => dispatch({
          type: 'DELETE_MODULE',
          moduleToDelete: module
      })),
  }
};

export default connect(stpm, dtpm)(ModuleList);