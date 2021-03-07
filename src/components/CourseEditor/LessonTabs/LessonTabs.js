import './styles.scss';

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { EditableItem } from '../../EditableItem/EditableItem';
import lessonService from '../../../services/LessonService';

/**
 * Component for LessonTabs
 *
 * @component
 */

const LessonTabs = ({
  lessons=[],
  findLessons,
  createLesson,
  deleteLesson,
}) => {
  const {courseId, moduleId, lessonId} = useParams();

  useEffect(() => {
    if (moduleId !== 'undefined' && typeof moduleId !== 'undefined') {
      findLessons(moduleId)
    }
  }, [moduleId])

  return (
    <div className="lesson-tabs">
      <ul className="lesson-tabs__list">
        { lessons.map((lesson, i) =>
          <li key={i} className={`lesson-tabs__item ${lesson._id === lessonId ? 'is-active' : ''}`}>
            <EditableItem item={lesson}
              path={
                `/courses/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`
              }
              deleteItem={() => deleteLesson(moduleId, lesson)} />
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
  );
};

const stpm = (state) => ({
  lessons: state.LessonReducer.lessons
});

const dtpm = (dispatch) => ({
  findLessons: (moduleId) => {
    lessonService.findLessons(moduleId)
      .then(lessons => dispatch({
        type: 'FIND_LESSONS',
        lessons: lessons
      })
    )
  },
  createLesson: (moduleId) => {
    lessonService.createLesson(moduleId, {
      title: 'New Lesson'
    }).then(lesson => dispatch({
      type: 'CREATE_LESSON',
      lesson
    }))
  },
  deleteLesson: (moduleId, lesson) => {
    lessonService.deleteLesson(moduleId, lesson._id)
    .then(status => dispatch({
        type: 'DELETE_LESSON',
        lessonToDelete: lesson
    }))
  }
})

export default connect(stpm, dtpm)(LessonTabs);