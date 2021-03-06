import './styles.scss';

import React from 'react';
import { connect } from 'react-redux';

/**
 * Component for LessonTabs
 *
 * @component
 */

const LessonTabs = ({lessons=[]}) =>
  <div className="tabs">
    <h3>Lessons</h3>
    <ul className="tabs__list">
      { lessons.map(lesson => <li>{lesson.title}</li>) }
    </ul>
  </div>
;

const stpm = (state) => ({
  lessons: state.lessons
});
const dtpm = (dispatch) => ({});

export default connect(stpm, dtpm)(LessonTabs);