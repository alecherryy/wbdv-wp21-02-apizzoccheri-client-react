import './styles.scss';

import '../../services/LessonService';

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import EditableItem from '../EditableItem/EditableItem';
import lessonService from '../../services/LessonService';

/**
 * Component for LessonTabs
 *
 * @component
 */

const LessonTabs = ({
  lessons=[],
  findLessons,
  createLesson,
  updateLesson,
  deleteLesson,
}) => {
  const { courseId, moduleId, lessonId } = useParams();
  // establish conditions before finding lessons
  const hasCourse = courseId !== 'undefined' && typeof courseId !== 'undefined';
  const hasModule = moduleId !== 'undefined' && typeof moduleId !== 'undefined';
  // render condition
  const showLessons = hasCourse && hasModule;

  useEffect(() => {
    if (showLessons) {
      findLessons(moduleId)
    }
  }, [moduleId])

  return (
    <>
      {/* render component if path is correct */}
      { showLessons &&
        <div className="lesson-tabs">
          <ul className="lesson-tabs__list">
            { lessons.map((lesson, i) =>
              <li key={i} className={`lesson-tabs__item ${lesson._id === lessonId ? 'is-active' : ''}`}>
                <EditableItem item={lesson}
                  path={
                    `/courses/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`
                  }
                  updateItem={updateLesson}
                  deleteItem={deleteLesson} />
              </li>
            )}
            <li className="lesson-tabs__item">
              Add Lesson
              <button className="lesson-tabs__btn" role="button"
                onClick={() => createLesson(moduleId)}
              >Add</button>
            </li>
          </ul>
        </div>
      }
    </>
  );
};

const stpm = (state) => ({
  lessons: state.LessonReducer.lessons
});

const dtpm = (dispatch) => ({
  findLessons: (moduleId) => {
    lessonService.findModuleLessons(moduleId)
      .then(lessons => dispatch({
        type: 'FIND_LESSONS',
        lessons: lessons
      })
    )
  },
  createLesson: (moduleId) => {
    lessonService.createModuleLesson(moduleId, {
      title: 'New Lesson'
    }).then(lesson => dispatch({
      type: 'CREATE_LESSON',
      lesson
    }))
  },
  updateLesson: (lesson) => {
    lessonService.updadteModuleLesson(lesson._id, lesson)
      .then(status => dispatch({
        type: 'UPDATE_LESSON',
        lesson
    }))
  },
  deleteLesson: (lesson) => {
    lessonService.deleteModuleLesson(lesson._id)
    .then(status => dispatch({
      type: 'DELETE_LESSON',
      lessonToDelete: lesson
    }))
  }
})

export default connect(stpm, dtpm)(LessonTabs);