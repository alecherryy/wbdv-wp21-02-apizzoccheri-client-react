import "./styles.scss";
import React from "react";
import { Link } from 'react-router-dom';
import { createStore } from 'redux';

import LessonReducer from '../../reducers/LessonReducer';

import { Constrain } from "../../layouts/Constrain/Constrain";
import { Sidebar } from "../../layouts/Sidebar/Sidebar";
import LessonTabs from "../LessonTabs/LessonTabs";
import { Provider } from "react-redux";

/**
 * Component for CourseEditor
 *
 * @component
 */

const store = createStore(LessonReducer);

export const CourseEditor = () => {
  return(
    <Provider store={store} >
      <Constrain>
      <Link className="back" to="/courses">Back</Link>
      <h1>Course Editor</h1>
      <Sidebar>
        <LessonTabs />
      </Sidebar>
    </Constrain>
    </Provider>
  )
}