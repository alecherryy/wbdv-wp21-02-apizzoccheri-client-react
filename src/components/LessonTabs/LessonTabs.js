import './styles.scss';

import React, { useState } from 'react';
import LessonReducer from '../../reducer/LessonReducer';
import { createStore } from 'redux';

/**
 * Component for LessonTabs
 *
 * @component
 */
const store = createStore(LessonReducer);

export const LessonTabs = ({lessons=[]}) =>
  <div className="tabs">
    <h3>Lessons</h3>
    <ul className="tabs__list">
      { lessons.map(lesson => <li>{lesson.title}</li>) }
    </ul>
  </div>
;