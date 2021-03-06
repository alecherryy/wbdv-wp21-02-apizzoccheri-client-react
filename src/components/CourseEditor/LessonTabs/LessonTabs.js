import './styles.scss';

import React from 'react';
import { connect } from 'react-redux';
import { EditableItem } from '../../EditableItem/EditableItem';

/**
 * Component for LessonTabs
 *
 * @component
 */

const LessonTabs = ({lessons=[]}) =>
  <div className="lesson-tabs">
    <ul className="lesson-tabs__list">
      { lessons.map(lesson => <li className="lesson-tabs__item">
        <EditableItem item={lesson} /></li>
      )}
      <li className="lesson-tabs__item">
        New Lesson
        <button className="lesson-tabs__btn" role="button">Add</button>
      </li>
    </ul>
  </div>
;

const stpm = (state) => ({
  lessons: state.lessons
});
const dtpm = (dispatch) => ({});

export default connect(stpm, dtpm)(LessonTabs);